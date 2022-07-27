
define([
  'underscore',
  'modules/backbone-mozu',
  'hyprlive',
  'modules/jquery-mozu',
  "modules/api",
  'utilities',
  "modules/models-product",
  "hyprlivecontext",
  'modules/models-location',
  'modules/assembly-delivery'
], function (
  _,
  Backbone,
  Hypr,
  $,
  api,
  util,
  ProductModels,
  HyprLiveContext,
  LocationModels,
  AssemblyDelivery

) {


  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var serviceSkus = [].concat(HyprLiveContext.locals.themeSettings.deliverySkus || []);
  serviceSkus = serviceSkus.concat(HyprLiveContext.locals.themeSettings.assemblySkus || []);
 // serviceSkus = serviceSkus.concat(HyprLiveContext.locals.themeSettings.giftCardSkus || []);
  serviceSkus = serviceSkus.concat(HyprLiveContext.locals.themeSettings.warrantySkusList || []);
  
  Date.prototype.getMonthName = function () {
    return months[this.getMonth()];
  };
  Date.prototype.getDayName = function () {
    return days[this.getDay()];
  };

  var CartItemProduct = ProductModels.Product.extend({
    helpers: ['mainImage', 'directShipSupported', 'inStorePickupSupported', 'itemAssemblySupported', 'hasAssemblySelected', 'hasAssemblySelectedAndNotFree', 'hasWarrantySelected', 'showDeliveryNotOfferedMessage'],
    mainImage: function () {
      var imgs = this.get("productImages"),
        img = imgs && imgs[0],
        imgurl = 'http://placehold.it/160&text=' + Hypr.getLabel('noImages');
      return img || { ImageUrl: imgurl, imageUrl: imgurl }; // to support case insensitivity
    },
    initialize: function () {
      var url = (HyprLiveContext.locals.siteContext.siteSubdirectory || '') + "/product/" + this.get("productCode");
      this.set('assemblyAttribute', HyprLiveContext.locals.themeSettings.assemblyExtra);
      this.set({ Url: url, url: url });
    },
    directShipSupported: function () {
      return (_.indexOf(this.get('fulfillmentTypesSupported'), "DirectShip") !== -1) ? true : false;
    },
    inStorePickupSupported: function () {
      return (_.indexOf(this.get('fulfillmentTypesSupported'), "InStorePickup") !== -1) ? true : false;
    },
    isAssemblyType: function () {
      var product = this;
      return (product.get('productType') || "").indexOf(AssemblyDelivery.settings.serviceProductType) > -1 && HyprLiveContext.locals.themeSettings.assemblySkus.indexOf(product.get('productCode'))>-1 ;
    },
    isWarrantyType: function () {
      var product = this;
      return (product.get('productType') || "").indexOf(AssemblyDelivery.settings.serviceProductType) > -1 && HyprLiveContext.locals.themeSettings.warrantySkusList.indexOf(product.get('productCode'))>-1 ;
    },
    preLoadInventory: function (storeCode) {
      var self = this;

      return this.getDetailedProductInventory(storeCode).then(function (inventoryResult) {

        var fullInventoryItem = {};
        var productCode = (inventoryResult.storeInventory && inventoryResult.storeInventory.productCode ) || (inventoryResult.rscInventory && inventoryResult.rscInventory.productCode);
        var rawSTSData = _.dive(inventoryResult, 'stsInventory.rawCandidateData');

        var updatedStS = _.flatten(_.map(rawSTSData, function (candidates, v) {
          return _.map(candidates.inventory, function (inv) {
            return {
              locationCode: storeCode,
              productCode: inv.partNumber || inv.sku || inv.upc || productCode,
              softStockAvailable: inv.available,
              stockAvailable: inv.available,
              transfer: true,
              site: candidates.locationCode
            };
          });
        }));

        fullInventoryItem = {
          locationCode: storeCode,
          productCode: productCode,
          storeInventory: inventoryResult.storeInventory,
          shipToStoreInventory: updatedStS,
          rscInventory: inventoryResult.rscInventory
        };

        fullInventoryItem.maxInStoreStock = _.dive(inventoryResult, 'storeInventory.softStockAvailable');
        fullInventoryItem.maxShipToStore = _.reduce(_.pluck(updatedStS, 'softStockAvailable'), function (counter, num) { return counter + num; }, 0);

        fullInventoryItem.maxPickupInStoreStock = 0;

        if (fullInventoryItem.maxShipToStore > 0 || fullInventoryItem.maxInStoreStock > 0)
          fullInventoryItem.maxPickupInStoreStock = (fullInventoryItem.maxInStoreStock + fullInventoryItem.maxShipToStore);

        fullInventoryItem.maxShipToHome = _.dive(inventoryResult, 'rscInventory.softStockAvailable');

        self.set('itemInventory', fullInventoryItem);

        return self;
      }).catch(function (error) {
        console.log('error getting boga inventory', error);
      });
    },
    hasAssemblySelected: function () {
      var assemblyOption = this.get('options')._byId[HyprLiveContext.locals.themeSettings.assemblyExtra];
      return (assemblyOption && assemblyOption.has('value'));
    },
    hasWarrantySelected: function () {
      var warrantyOption = this.get('options')._byId[HyprLiveContext.locals.themeSettings.warrantySkuAttr];
      return warrantyOption && warrantyOption.has('value');
    },
    hasAssemblySelectedAndNotFree: function () {
      var hasAssemblySelected = this.hasAssemblySelected();
      if (hasAssemblySelected) {
        var attributeFlagValue = this.getProductAttributeFirstValue(HyprLiveContext.locals.themeSettings.assemblyFlagAttr);
        if (attributeFlagValue && attributeFlagValue.toLowerCase() != "s" && attributeFlagValue.toLowerCase() != "f") {
          return hasAssemblySelected;
        }
      }
    },
    itemAssemblySupported: function () {
      var assemblyAttrVal = this.getProductAttributeFirstValue(HyprLiveContext.locals.themeSettings.assemblyFlagAttr);
      return (assemblyAttrVal && (assemblyAttrVal !== "" || assemblyAttrVal !== "N"));
    },
    toggleAssembly: function (selected) {
      var lineProduct = this, self = this;
      var assemblySkuAttrFQN = HyprLiveContext.locals.themeSettings.assemblyExtra;
      var assemblySkuConfig = HyprLiveContext.locals.themeSettings.assemblySkuConfig;
      var assemblyCode=_.chain(lineProduct.get("options").toJSON())
      .findWhere({ attributeFQN: assemblySkuAttrFQN })
      .dive("value")
      .value();
      var assemblySku=assemblySkuConfig[assemblyCode];
      lineProduct.syncApiModel();
      if (!selected) {
        var otherOptions = this.get('options').filter(function (opt) {
          return (opt.get("attributeFQN") !== assemblySkuAttrFQN);
        });
        return lineProduct.apiConfigure({ options: otherOptions }, { useExistingInstances: true }).then(function (res) {
          var isExtrasExist =res && res.data && res.data.options && _(res.data.options).any(function(option){ return _.dive(option,'values.0.isSelected');});
          if(!isExtrasExist)
            lineProduct.unset("bundledProducts");
          
          var childItemIds = lineProduct.parent.get("childItemIds")|| [];         
          var cartItems=window.cartView.model.get("items").toJSON();
          var assemblyItem = _(cartItems).find(function(item){return item.parentItemId===lineProduct.parent.get("id") && item.product.productCode===assemblySku;});
          if(assemblyItem){
            lineProduct.parent.set("childItemIds",_(lineProduct.parent.get("childItemIds")).filter(function(id){return id !== assemblyItem.id;}));
            lineProduct.parent.set("isAssemblyRequired",false);
            window.parentItemIdBeforeUpdate = lineProduct.parent.id;
            return lineProduct.parent.apiUpdate()
            .then(function(){
              window.parentItemIdAfterUpdate = lineProduct.parent.id;
              return api.request("DELETE", "/api/commerce/carts/current/items/" + assemblyItem.id );
            })
            .then(function(){
              if(window.parentItemIdBeforeUpdate !== window.parentItemIdAfterUpdate){
                var oldParentId = window.parentItemIdBeforeUpdate, newParentId = window.parentItemIdAfterUpdate;
                window.parentItemIdBeforeUpdate=null, window.parentItemIdAfterUpdate=null;
                return lineProduct.parent.syncChildAndParentItems(oldParentId, newParentId);
              }else
                return;
            });
          }        

        });

      }
      else {
        var configureOptions = function(){
          return new Promise(function(resolve,reject){
            lineProduct.apiConfigure({options: lineProduct.get('options')})
            .then(function () {
              var newOpts = lineProduct.get('options');
              var assemblyOpt = newOpts._byId[HyprLiveContext.locals.themeSettings.assemblyExtra];
              if (assemblyOpt && assemblyOpt.get('values'))
                assemblyOpt.set('value', _.dive(assemblyOpt, 'legalValues.0'), { silent: true });
                return resolve(self.apiConfigure({ options: self.getConfiguredOptions() }, { useExistingInstances: true }));                 
            });
          });
        };

        return configureOptions()
          .then(function (config) {
            return lineProduct.addAssemblyToCart(undefined, lineProduct.parent.get("id"), lineProduct.parent.get("assemblyOverrideSurchargeAmount")||0);
          })
          .then(function(){
            return lineProduct.parent.fetch();
          })
          .then(function(){
            //have to configure options again 
            return configureOptions();
          })            
          .catch(function (err) {
            console.error(err);
          });
      }
    },
    toggleWarranty: function (selected) {
      var lineProduct = this, self = this;
      lineProduct.syncApiModel();
      var warrantySkuAttrFQN = HyprLiveContext.locals.themeSettings.warrantySkuAttr;
      var warrantySku=_.chain(lineProduct.get("options").toJSON())
      .findWhere({ attributeFQN: warrantySkuAttrFQN })
      .dive("value")
      .value();
      if (!selected) {
        var otherOptions = this.get('options').filter(function (opt) {
          return (opt.get("attributeFQN") !== warrantySkuAttrFQN);
        });
        return lineProduct.apiConfigure({ options: otherOptions }, { useExistingInstances: true }).then(function (res) {
          var isExtrasExist =res && res.data && res.data.options && _(res.data.options).any(function(option){ return _.dive(option,'values.0.isSelected');});
          if(!isExtrasExist)
            lineProduct.unset("bundledProducts");

          var childItemIds = lineProduct.parent.get("childItemIds")|| [];         
          var cartItems=window.cartView.model.get("items").models || window.cartView.model.get("items");
          var linkedWarranty = _(cartItems).find(function(item){
            return item.get("parentItemId")===lineProduct.parent.get("id") && item.get("product").isWarrantyType();
          });
          if(linkedWarranty){
            lineProduct.parent.set("childItemIds",_(lineProduct.parent.get("childItemIds")).filter(function(id){return id !== linkedWarranty.id;}));
            window.parentItemIdBeforeUpdate = lineProduct.parent.id;
            return lineProduct.parent.apiUpdate()
            .then(function(){
              window.parentItemIdAfterUpdate = lineProduct.parent.id;
              return api.request("DELETE", "/api/commerce/carts/current/items/" + linkedWarranty.id );
            })
            .then(function(){
              if(window.parentItemIdBeforeUpdate !== window.parentItemIdAfterUpdate){
                var oldParentId = window.parentItemIdBeforeUpdate, newParentId = window.parentItemIdAfterUpdate;
                window.parentItemIdBeforeUpdate=null, window.parentItemIdAfterUpdate=null;
                return lineProduct.parent.syncChildAndParentItems(oldParentId, newParentId);
              }else
                return;
            });
          }
          //}
        });

      }
      else {
        var configureOptions = function(){
          return lineProduct.apiConfigure({options: lineProduct.get('options')})
            .then(function (config) {
              var newOpts = lineProduct.get('options');
              var warrantyOpt = newOpts._byId[warrantySkuAttrFQN];
              if (warrantyOpt && warrantyOpt.get('values'))
                warrantyOpt.set('value', _.dive(warrantyOpt, 'legalValues.0'), { silent: true });
              return self.apiConfigure({ options: self.getConfiguredOptions() }, { useExistingInstances: true });
            });
        };

        return configureOptions()
          .then(function () {
            return lineProduct.addWarrantyToCart(undefined,lineProduct.parent.get("id"),warrantySku);
          })
          .then(function () {
            return lineProduct.parent.fetch();
          })
          .then(function () {
            return configureOptions();
          })
          .catch(function (err) {
            console.error(err);
          });
      }
    },
    showDeliveryNotOfferedMessage: function () {
      var self = this, lineProduct = this;
      if(!lineProduct.parent)
        return;
      var lineItem = lineProduct.parent;
      if(this.isDropshipSPRestricted() && !this.isDropshipExceptionItem()){
        return false; //show unavailable in this case
      }
      if(this.get("restrictedAtStore") || (this.isDropshipExceptionItem() && this.get("storeLocationInventory") <=0) ){
        return false; //show unavailable in this case
      }
      return !lineItem.isStoreDeliveryEnabled();
    }
  }),

    CartItem = Backbone.MozuModel.extend({
      relations: {
        product: CartItemProduct
      },
      validation: {
        quantity: {
          min: 1
        }
      },
      dataTypes: {
        quantity: Backbone.MozuModel.DataTypes.Int
      },
      mozuType: 'cartitem',
      handlesMessages: true,
      helpers: ['ispuServiceMessage', 'priceIsModified', 'storeLocation', 'inStorePickupMessage', 'supportsAssembly', 'supportsDelivery','isStoreDeliveryEnabled', 'isProductSupportsDelivery', 'getADStoreSummary', 'deliveryServiceMessage', 'inventorySummary', 'getAssemblyPrice','paintMetaData', 'isPaintItem', 'getAvailableStoreCount', 'supportsInStorePickup', 'discountExceptionMessage', 'bogaExceptionMessage', 'getWarrantyPrice', 'storeMaxDeliveryQty', 'isTargetedARDiscount', 'addressesDeliveryInfoCheck', 'notInDeliveryRadius'],
      priceIsModified: function () {
          var price = this.get('unitPrice');
          return price.baseAmount != price.discountedAmount;
        },
      initialize: function () {
        // if(this.get('data') == null)
        //     this.setFulfillmentDataBag();
        var me=this;
        this.on('fulfillmentMethodUpdated', function (me) {
          this.setMaxQuantityForFulfillment();
        }.bind(this));
        this.on('sync:shipToStore', this.syncSTSData.bind(this));
        this.on('sync:delivery', this.syncEDD.bind(this));
        
        this.on('change:assemblySelected', function (item, selected) {
          if(item.get("fulfillmentMethod")==="Ship"){
            return;
          }
          console.log('assembly selected', item, selected);
          var data = this.get('data'), self = this;
          if (!data) data = {};
          //data.assemblySelected = selected;
          //this.set('data', data)
          self.isLoading(true);
          window.cartView.model.set('forceLoading', true);
          //var clone = this.clone();
          this.syncApiModel();
          // this.apiUpdateSyncPrice().then(function(){         
    
          if (!selected) {
            var lineItem;
            this.get('product')
              .toggleAssembly(selected)
              .then(function (lineToDelete) {
                // lineItem = lineToDelete;
                return self.apiUpdateSyncPrice();
              }).then(function (r) {
              // assembly item deletion is done in toggelAssembly
              // (test to see which will delete it
              //   if (window && lineItem) {
              //     return window.cartView.model.removeAssemblyItem(lineItem);
              //   } else
              //     return Promise.resolve();
              // })
              // .then(function () {
                window.cartView.model.set('forceLoading', false);
                Backbone.trigger('ad:cart:assemblytoggled');
              }).catch(function (e) {
                window.cartView.model.set('forceLoading', false);
                console.error(e);
              });
          } else
            this.get('product')
              .toggleAssembly(selected)
              .then(function (resp) {
                var lineData = self.get('data');
                // if (!lineData.relatedItemLinkId && _.dive(resp, 'data.relatedItemLinkId'))
                //   lineData.relatedItemLinkId = _.dive(resp, 'data.relatedItemLinkId');
                if (lineData.fulfillmentMethod == "Ship") {
                  lineData.fulfillmentMethod = null;
                  self.set('data', _.omit(lineData, ['fulfillmentMethod']));
                }
                window.parentItemIdBeforeUpdate = self.id;
                return self.apiUpdateSyncPrice();
              }).then(function () {
                window.parentItemIdAfterUpdate = self.id;
                if(window.parentItemIdBeforeUpdate !== window.parentItemIdAfterUpdate){
                  var oldParentId = window.parentItemIdBeforeUpdate, newParentId = window.parentItemIdAfterUpdate;
                  window.parentItemIdBeforeUpdate=null, window.parentItemIdAfterUpdate=null;
                  return self.syncChildAndParentItems(oldParentId, newParentId);
                }else
                  return;
              }).then(function () {
                self.isLoading(false);
                window.cartView.model.set('forceLoading', false);
                //item.collection.parent.fetch({merge:true});
                Backbone.trigger('ad:cart:assemblytoggled');
                //return self.apiModel.get()//.then(function(){});
                self.trigger('render');
                //self.collection.fetch({merge:true});
              }).catch(function (e) {
                console.error(e);
                window.cartView.model.set('forceLoading', false);
                self.isLoading(false);
              });
          //
          //this.apiUpdateSyncPrice();  //this.clone().apiUpdate();
        });  
        
        this.on('change:warrantySelected', function (item, selected) {
          console.log('warranty selected', item, selected);
          var data = this.get('data'), self = this;
          if (!data) data = {};
          //data.assemblySelected = selected;
          //this.set('data', data)
          self.isLoading(true);
          window.cartView.model.set('forceLoading', true);
          //var clone = this.clone();
          this.syncApiModel();
          // this.apiUpdateSyncPrice().then(function(){         
    
          if (!selected) {
            // var lineItem;
            this.get('product')
              .toggleWarranty(selected)
              .then(function (lineToDelete) {
                // lineItem = lineToDelete;
                return self.apiUpdateSyncPrice();
              }).then(function (r) {
              // warranty item already removed in toggleWarranty function
              // (test to see which will delete it
              //   if (window && lineItem) {
              //     return window.cartView.model.removeWarrantyItem(lineItem);
              //   } else
              //     return Promise.resolve();
              // }).then(function () {
                window.cartView.model.set('forceLoading', false);
                self.trigger('render');
                Backbone.trigger('ad:cart:warrantytoggled');
              })
              .catch(function (e) {
                window.cartView.model.set('forceLoading', false);
                console.error(e);
              });
          } else
            this.get('product')
              .toggleWarranty(selected)
              .then(function (resp) {
                var lineData = self.get('data');
                // if (!lineData.relatedItemLinkIdWarranty && _.dive(resp, 'data.relatedItemLinkIdWarranty'))
                //   lineData.relatedItemLinkIdWarranty = _.dive(resp, 'data.relatedItemLinkIdWarranty');
                // if (lineData.fulfillmentMethod == "Ship") lineData.fulfillmentMethod = null;

                // self.set('data', _.omit(lineData, ['fulfillmentMethod']));
                window.parentItemIdBeforeUpdate = self.id;
                return self.apiUpdateSyncPrice();
              }).then(function () {
                window.parentItemIdAfterUpdate = self.id;
                if(window.parentItemIdBeforeUpdate !== window.parentItemIdAfterUpdate){
                  var oldParentId = window.parentItemIdBeforeUpdate, newParentId = window.parentItemIdAfterUpdate;
                  window.parentItemIdBeforeUpdate=null, window.parentItemIdAfterUpdate=null;
                  return self.syncChildAndParentItems(oldParentId, newParentId);
                }else
                  return;
              }).then(function () {
                self.isLoading(false);
                window.cartView.model.set('forceLoading', false);
                //item.collection.parent.fetch({merge:true});
                Backbone.trigger('ad:cart:warrantytoggled');
                //return self.apiModel.get()//.then(function(){});
                 self.trigger('render');
                //self.collection.fetch({merge:true});
              }).catch(function (e) {
                console.error(e);
                window.cartView.model.set('forceLoading', false);
                self.isLoading(false);
              });
          //
          //this.apiUpdateSyncPrice();  //this.clone().apiUpdate();
        });  
        
        var data = this.get('data');
        var zipCode;
        if(data)
        {
          zipCode = $.cookie("estimate-zip") ||_.dive(data,'fulfillmentAddress.postalOrZipCode');
          if(zipCode)
          {
            this.set("shipZipCode",zipCode.toString().substr(0,5));
          }
        }
        if(!data || !zipCode){
          util.location.getMyStore().then(function(store){
             zipCode= store && store.address && store.address.postalOrZipCode || "60523"; //Hoping all stores has zip code
             me.set("shipZipCode",zipCode.toString().substr(0,5));
          });
        }
        
        var storeCode = me.get("data") && me.get("data").fulfillmentLocationCode;
        this.get("product").isItemRestrictedAtStore(storeCode);
        this.setDisplaySitewideMsg();
        // var data = this.get('data');
        // var storeCode= data.fulfillmentLocationCode;
        // var _self=this;
        // util.location.getStore(storeCode).then(function(stores){
        //   var storeAttr = _.dive(stores,'items.0.attributes');
        //   var curbsideFl = storeAttr && _.chain(storeAttr).find(function(x){return x.fullyQualifiedName==="tenant~curbside-pickup-code";}).dive('values.0').value();
        //   var limitedFl = storeAttr && _.chain(storeAttr).find(function(x){return x.fullyQualifiedName==="tenant~limited-store-access-code";}).dive('values.0').value();
        //   _self.set("hasCurbsidePickup", curbsideFl||"N");
        //   _self.set("hasLimitedPickup", limitedFl||"N");
        //   _self.syncApiModel();
        // });
      },
      setDisplaySitewideMsg: function() {
        //sitewide messaging
        var sitewideMessaging = HyprLiveContext.locals.themeSettings.displaySiteWideDiscount;
        var sitewideExclusionCategory = HyprLiveContext.locals.themeSettings.siteWideExclusionCategoryId;
        if(sitewideMessaging === true){
          var categories = this.get("product").get('categories');
          var isExclusionCategory = false;
          _(categories).each(function(category){
            if(category.id == sitewideExclusionCategory || category.categoryId == sitewideExclusionCategory || category.parentCategoryId == sitewideExclusionCategory)
            {
              isExclusionCategory = true;
            }
            else if (category.parent && category.parent.id == sitewideExclusionCategory){
              isExclusionCategory = true;
            }
            else if (category.parentCategory && category.parentCategory.categoryId == sitewideExclusionCategory){
              isExclusionCategory = true;
            }
          });

          if(isExclusionCategory === false){
            this.set("displaySitewideMsg", true);
          }
        } 
      },
      syncSTSData: function () {

        this.syncDataBagProp('isShipToStore');
      },
      syncEDD: function () {
        this.syncDataBagProp('nextDelivery');
      },
      syncStoreDelivery: function (cartItemIdBeforeUpdate, silent) {
        var self = this, linkedItem;

        try {
          if (!self.get('product').isAssemblyType() && self.get('product').hasAssemblySelected()) {
            linkedItem = window.cartView.model.get('items').find(function (cartItem) {
              return cartItem.get("parentItemId")===self.get("id") && cartItem.get("product").isAssemblyType();
            });
            if (linkedItem) {
              var task, parentfulfillmentMethod = self.get('fulfillmentMethod'), parentQuantity = self.get('quantity');

              linkedItem.set("fulfillmentMethod", parentfulfillmentMethod);
              linkedItem.set("quantity", parentQuantity);
              if (parentfulfillmentMethod == "Delivery") {
                linkedItem.get("data").storeDelivery = true;
              } else {
                if (linkedItem.get("data").storeDelivery)
                  delete linkedItem.get("data").storeDelivery;
              }
              linkedItem.get("data") ? linkedItem.get("data").fulfillmentMethod = parentfulfillmentMethod : undefined;
              if (!silent)
                task = linkedItem.apiUpdateSyncPrice();
              else {
                linkedItem.syncApiModel();
                task = linkedItem.apiModel.api.action(linkedItem.apiModel, 'update', linkedItem.toJSON(), { silent: true });
              }
              return task.then(function(){
                return window.cartView.model.fetch()
                .then(function(){
                  if(cartItemIdBeforeUpdate && cartItemIdBeforeUpdate !== self.get("id")){
                    //items got merged
                    var oldLinkedItem = window.cartView.model.get('items').find(function (cartItem) {
                      return cartItem.get("parentItemId")===cartItemIdBeforeUpdate && cartItem.get("product").isAssemblyType();
                    });
                    if(oldLinkedItem)
                      return oldLinkedItem.apiDel().then(function(){
                        return window.cartView.model.fetch();
                      });
                  }
                });
              });

            }
            else
              return Promise.resolve();
          }
          else
          return Promise.resolve();
        } catch (error) {
          console.log(error);
        }
      },
      //not using anymore
      syncWarrantyItemsDepricated: function(oldFulfillmentMethod, newFulfillmentMethod, deliverFromStore){
        var self = this;
        var warrantySkuAttrFQN = HyprLiveContext.locals.themeSettings.warrantySkuAttr;
        var parentItemQuantity = self.get('quantity') || 1;
        var lineItemLink = _.dive(self.get('data'), 'relatedItemLinkIdWarranty');
        var linkedItemWithOldFulfillmentMethod = window.cartView.model.get('items').find(function (cartItem) {
          var cartItemLinkId = _.dive(cartItem.get('data'), 'relatedItemLinkIdWarranty');
          return (self != cartItem && cartItem.get('product').isWarrantyType() && cartItem.get('fulfillmentMethod')===oldFulfillmentMethod && lineItemLink && cartItemLinkId && lineItemLink == cartItemLinkId && _.dive(cartItem.get('data'), 'fulfillmentLocationCode')===_.dive(self.get('data'), 'fulfillmentLocationCode'));
        });

        if(oldFulfillmentMethod == "Pickup" && newFulfillmentMethod === "Pickup"){
          //no need of remove and adding of new warranty service item
          var dataBag = linkedItemWithOldFulfillmentMethod.get('data');
          dataBag.storeDelivery = deliverFromStore || false;
          if(parentItemQuantity >= linkedItemWithOldFulfillmentMethod.get('quantity') ){
            if(!dataBag.storeDeliveryData) 
              dataBag.storeDeliveryData = {};
            dataBag.storeDeliveryData[self.get('product').get('productCode')] = deliverFromStore || false;
          }else if(dataBag.storeDeliveryData){
            dataBag.storeDeliveryData[self.get('product').get('productCode')] = deliverFromStore || false;
            //selected pickup now but any other item has delivery from store
            for(var key in dataBag.storeDeliveryData){
              if (dataBag.storeDeliveryData[key]){
                dataBag.storeDelivery = true;
                break;
              }
            }
          }else{
            dataBag.storeDeliveryData = {};
            dataBag.storeDeliveryData[self.get('product').get('productCode')] = deliverFromStore || false;
          }
          linkedItemWithOldFulfillmentMethod.set('data', dataBag);
          return linkedItemWithOldFulfillmentMethod.apiUpdateSyncPrice()
            .then(function () {            
              return window.cartView.model.apiModel.get();
            })
            .catch(function (error) {
              return console.log(error);
            });

        }else{
          // var linkedItemWithNewFulfillmentMethod = window.cartView.model.get('items').find(function (cartItem) {
          //   var cartItemLinkId = _.dive(cartItem.get('data'), 'relatedItemLinkIdWarranty');
          //   return (self != cartItem && cartItem.get('product').isWarrantyType() && cartItem.get('fulfillmentMethod')===newFulfillmentMethod && lineItemLink && cartItemLinkId && lineItemLink == cartItemLinkId && _.dive(cartItem.get('data'), 'fulfillmentLocationCode')===_.dive(self.get('data'), 'fulfillmentLocationCode'));
          // });
          // var storeDeliveryBag; 
          // if(linkedItemWithNewFulfillmentMethod){
          //   storeDeliveryBag = { 
          //     storeDelivery : _.dive(linkedItemWithNewFulfillmentMethod.get('data'), 'storeDelivery'),
          //     storeDeliveryData : _.dive(linkedItemWithNewFulfillmentMethod.get('data'), 'storeDeliveryData')
          //   };
          // }
          var options = self.get("product").get('options');
          var warrantySku;
          if(options.models.length){
            var warrantyOption = options.models.find(function (option) {
              return option.get("attributeFQN") === warrantySkuAttrFQN;
            });
            if(warrantyOption)
              warrantySku = warrantyOption.get("value");
          }

          if(parentItemQuantity >= linkedItemWithOldFulfillmentMethod.get('quantity')){          
            return linkedItemWithOldFulfillmentMethod.apiDel()
              .then(function (resp) {
                return window.cartView.model.get('items').remove(linkedItemWithOldFulfillmentMethod.get("id"));
              })
              .then(function (resp) {
                return self.get("product").addWarrantyToCart(undefined, self.get("id"), warrantySku);
              }).then(function () {            
                return window.cartView.model.apiModel.get();
              }).catch(function (error) {
                console.log(error);
              });
          }else{
            var linkItemDataBag = linkedItemWithOldFulfillmentMethod.get("data");
            if(newFulfillmentMethod=="Ship" && linkItemDataBag.storeDeliveryData){
                // linkItemDataBag.storeDeliveryData[self.get("product").get("productCode")] = false;
                delete linkItemDataBag.storeDeliveryData[self.get("product").get("productCode")];
            }
            linkedItemWithOldFulfillmentMethod.set("quantity", linkedItemWithOldFulfillmentMethod.get("quantity")-parentItemQuantity);
            return linkedItemWithOldFulfillmentMethod.apiUpdateSyncPrice()
              .then(function () {            
                return window.cartView.model.apiModel.get();
              })
              .then(function () {            
                return self.get("product").addWarrantyToCart(undefined, self.get("id"), warrantySku);
              })
              .then(function () {            
                return window.cartView.model.apiModel.get();
              })
              .catch(function (error) {
                return console.log(error);
              });
          }
        }
      },
      syncWarrantyItems: function(cartItemIdBeforeUpdate, silent){
        var self = this;
        try {
          if (!self.get('product').isWarrantyType() && self.get('product').hasWarrantySelected()) {
            var linkedItem = window.cartView.model.get('items').find(function (cartItem) {
              return cartItem.get("parentItemId")===self.get("id") && cartItem.get('product').isWarrantyType();
            });
            if (linkedItem) {
              var task, parentfulfillmentMethod = self.get('fulfillmentMethod'), parentQuantity = self.get('quantity');
              linkedItem.set("fulfillmentMethod", parentfulfillmentMethod);
              linkedItem.set("quantity", parentQuantity);
              linkedItem.set("fulfillmentLocationCode", self.get('fulfillmentLocationCode'));
              linkedItem.set("fulfillmentLocationName", self.get('fulfillmentLocationName'));
                
              linkedItem.get("data") ? linkedItem.get("data").fulfillmentMethod = parentfulfillmentMethod : undefined;
              if (!silent)
                task = linkedItem.apiUpdateSyncPrice();
              else {
                linkedItem.syncApiModel();
                task = linkedItem.apiModel.api.action(linkedItem.apiModel, 'update', linkedItem.toJSON(), { silent: true });
              }
              return task.then(function(){
                return window.cartView.model.fetch()
                .then(function(){
                  if(cartItemIdBeforeUpdate && cartItemIdBeforeUpdate !== self.get("id")){
                    //items got merged
                    var oldLinkedItem = window.cartView.model.get('items').find(function (cartItem) {
                      return cartItem.get("parentItemId")===cartItemIdBeforeUpdate && cartItem.get("product").isWarrantyType();
                    });
                    if(oldLinkedItem)
                      return oldLinkedItem.apiDel().then(function(){
                        return window.cartView.model.fetch();
                      });
                  }
                });
              });

            }
          }
        } catch (error) {
          console.log(error);
        }
      },
      supportsAssembly: function () {
        var code = this.getLocationCodeFromData();
        var summary = window.cartView.model.getStoreSummaryByCode(code);
        if (summary)
          return summary.supportsAssemblyService &&
            AssemblyDelivery.Store.productSupportsService('assembly', this.get('product.properties').toJSON());
      },
      supportsWarranty: function () {
        var code = this.getLocationCodeFromData();
        var summary = window.cartView.model.getStoreSummaryByCode(code);
        if (summary)
          return summary.supportsWarrantyService &&
            AssemblyDelivery.Store.productSupportsService('assembly', this.get('product.properties').toJSON());
      },
      supportsDelivery: function () {
        var code = this.getLocationCodeFromData();
        var summary = window.cartView.model.getStoreSummaryByCode(code);
        if (summary){
          var isProductSupportsDelivery = AssemblyDelivery.Store.prototype.productOffersDelivery(this.get('product').toJSON());
          return isProductSupportsDelivery &&
            ( (isProductSupportsDelivery.isPropaneProduct && summary.supportsPropaneDeliveryService) ||  (!isProductSupportsDelivery.isPropaneProduct && summary.supportsDeliveryService) ) ;
        }
      },
      isProductSupportsDelivery:function(){
        var skuStoreOverRide = this.get("skuStoreOverRide");
        var isStoreOverrideEnabled = skuStoreOverRide && skuStoreOverRide.DeliveryOverrideCode==="Y" && skuStoreOverRide.DeliveryRestrictedFlag==="N";
        return AssemblyDelivery.Store.prototype.productOffersDelivery(this.get('product').toJSON())||isStoreOverrideEnabled ;
      },
      isStoreDeliveryEnabled:function(){
        var code = this.getLocationCodeFromData();
        var summary = window.cartView.model.getStoreSummaryByCode(code);
        var skuStoreOverRide = this.get("skuStoreOverRide");
        var isStoreOverrideEnabled = skuStoreOverRide && skuStoreOverRide.DeliveryOverrideCode==="Y" && skuStoreOverRide.DeliveryRestrictedFlag==="N";
        var isStoreOverrideDisabled = skuStoreOverRide && skuStoreOverRide.DeliveryOverrideCode==="Y" && skuStoreOverRide.DeliveryRestrictedFlag==="Y";
        if(isStoreOverrideDisabled)
        return false;

        if(summary){
          var isProductSupportsDelivery = AssemblyDelivery.Store.prototype.productOffersDelivery(this.get('product').toJSON());
          return isProductSupportsDelivery && ((isProductSupportsDelivery.isPropaneProduct && summary.supportsPropaneDeliveryService) ||  (!isProductSupportsDelivery.isPropaneProduct && summary.supportsDeliveryService));
        }

        return false;
      },
      syncDataBagProp: function (propertyName, overrideValue) {
        var matchingLineItems = this.getMatchingLineItems();
        if (!matchingLineItems) return;
        var cartItemData = this.get('data') || {};
        matchingLineItems.splitLineItems.forEach(function (cartItem) {
          var lineItemData = cartItem.get('data') || {};
          lineItemData[propertyName] = overrideValue || cartItemData[propertyName];
        });
      },
      onQuantityUpdate: function (ecommerceEvent, eventType, itemPrevQuantity) {
        // global dataLayer use existing or create a new one
        window.dataLayer = window.dataLayer || [];
        var self = this, linkedItem, linkedItemWarranty, cartModel = window.cartView.model, l1categoryId, l2categoryId, l3categoryId, categoryData;
        var collection = self.collection ? self.collection : self.get('product').collection;

        l1categoryId = _.dive(self.get('product.categories'), '0.parent.parent.id') || _.dive(self.get('product.categories'), '0.parentCategory.parentCategory.categoryId') || '';
        l2categoryId = _.dive(self.get('product.categories'), '0.parent.id') || _.dive(self.get('product.categories'), '0.parentCategory.categoryId') || '';
        l3categoryId = _.dive(self.get('product.categories'), '0.id') || _.dive(self.get('product.categories'), '0.categoryId') || '';

        categoryData = util.getCategoryData(l1categoryId, l2categoryId, l3categoryId);
        
        var updateGoogleAndCheckBoga = function (cart) {
          // return cartModel.fetch().then(function (cart) {
            var price = +(Math.round((self.get('discountedTotal') / self.get('quantity')) + 'e+' + 2) + 'e-' + 2), // To avoid send as a string with .toFixed function
              quantityUpdateDL = {
                'event': eventType,
                'ecommerce': {
                  'currencyCode': cart.get("currencyCode")
                }
              };

            quantityUpdateDL.ecommerce[ecommerceEvent] = {                                // 'add' actionFieldObject measures.
              'products': [{                        //  adding a product to a shopping cart.
                'name': self.get("product.name") || self.get("product.content").productName,
                'id': self.get("product.productCode"),
                'price': price,
                'category': categoryData.l2category ? categoryData.l2category.content.slug : "",
                'dimension60': categoryData.l1category ? categoryData.l1category.content.slug : "",
                'dimension61': categoryData.l2category ? categoryData.l2category.content.slug : "",
                'dimension62': categoryData.l3category ? categoryData.l3category.content.slug : "",
                'brand': self.get("product.properties").findWhere({ "attributeFQN": "tenant~brand-name-attribute" }) ? _.dive(self.get("product.properties").findWhere({ "attributeFQN": "tenant~brand-name-attribute" }).get('values'), "0.stringValue") || "none" : "none",
                'quantity': self.get("quantity")
              }]
            };
            window.dataLayer.push(quantityUpdateDL);
            return cart.checkBOGA();
          // });
        };

        var getLinkeditems = function(collection){
          // var lineItemLink = _.dive(self.get('data'), 'relatedItemLinkId');
          return collection.models.filter(function (cartItem) {
            // var relatedItemLinkId = _.dive(cartItem.get('data'), 'relatedItemLinkId');
            // return (cartItem.get('product').isAssemblyType() && _.dive(self.get('data'), 'fulfillmentLocationCode')===_.dive(cartItem.get('data'), 'fulfillmentLocationCode') && lineItemLink && relatedItemLinkId && lineItemLink == relatedItemLinkId);
            return cartItem.get("parentItemId")===self.get("id") && cartItem.get("product").isAssemblyType();
            // if(linkedItem && linkedItem.indexOf(lineItemStore + '-' + lineProduct.get('productCode')) > -1 )cartItem.removeFromCart();
          });
        };

        var getLinkeditemsWarranty = function(collection){
          // var lineItemLinkWarranty = _.dive(self.get('data'), 'relatedItemLinkIdWarranty');
          return collection.models.filter(function (cartItem) {
            // var cartItemLinkIdWarranty = _.dive(cartItem.get('data'), 'relatedItemLinkIdWarranty');
            // return (cartItem.get('product').isWarrantyType() && self.get('fulfillmentMethod')===cartItem.get('fulfillmentMethod') && _.dive(self.get('data'), 'fulfillmentLocationCode')===_.dive(cartItem.get('data'), 'fulfillmentLocationCode') && lineItemLinkWarranty && cartItemLinkIdWarranty && lineItemLinkWarranty == cartItemLinkIdWarranty);
            return cartItem.get("parentItemId")===self.get("id") && cartItem.get('product').isWarrantyType();
          });
        };


        if (!self.get('product').isAssemblyType() && self.get('product').hasAssemblySelected()) {
          // var lineItemLink = _.dive(self.get('data'), 'relatedItemLinkId');
          linkedItem = getLinkeditems(collection);
          //initially none or one item exists 
          linkedItem = linkedItem.length>0 ? linkedItem[0] : undefined;
        }

        if (self.get('product').hasWarrantySelected()) {
          // var lineItemLinkWarranty = _.dive(self.get('data'), 'relatedItemLinkIdWarranty');
          linkedItemWarranty = getLinkeditemsWarranty(collection);
          //initially none or one item exists 
          linkedItemWarranty = linkedItemWarranty.length>0 ? linkedItemWarranty[0] : undefined;
        }
        
        cartModel.set("forceLoading",true);
        cartModel.isLoading(true);
        return cartModel.fetch().then(function (cart) {
          var newCollection = cart.get("items");
          
          var priceLoc = _.dive(self.get('data'),'fulfillmentLocationCode');
          var revertPL = api.context["purchase-location"] || self.get('purchaseLocation');
          var togglePurchaseLocation = function (purchaseLocationCode) {
            var currentPL = self.apiModel.api.context["purchase-location"];
            self.apiModel.api.context["purchase-location"] = purchaseLocationCode;
            if (currentPL === purchaseLocationCode) return Promise.resolve();
            return api.request("POST", "/location/set?code=" + purchaseLocationCode);
          };

          
          if (linkedItem || linkedItemWarranty) {
            //other cart items linked to this assembly item
            if(linkedItem){
              // var linkedItemProductCode = linkedItem.get('product').get('productCode');
              // var OtherCartItems = _.filter(newCollection.models, function (cartItem) {
              //   var bundledProducts = cartItem.get('product').get('bundledProducts');
              //   return cartItem.id != self.id && _.dive(self.get('data'), 'fulfillmentLocationCode')===_.dive(cartItem.get('data'), 'fulfillmentLocationCode') && bundledProducts.length && bundledProducts.find(function(option){ return option.optionValue===linkedItemProductCode; });
              // });
              // var OtherCartItemsTotalQuantity = _.reduce(OtherCartItems, function(acc, item){
              //   return acc+item.get("quantity");
              // }, 0);
              if(self.get("assemblyOverrideSurchargeAmount") && self.get("assemblyOverrideSurchargeAmount")>0){
                var eachItemHandlingAmount = linkedItem.get("data").eachItemHandlingAmount || {};
                eachItemHandlingAmount[self.get('data').fulfillmentLocationCode+"-"+self.get('product').get('productCode')]=self.get("assemblyOverrideSurchargeAmount")||0;
                linkedItem.get("data").eachItemHandlingAmount = eachItemHandlingAmount;
                // var handlingAmount = linkedItem.get("handlingAmount") + ( (self.get('quantity')-itemPrevQuantity)*self.get("assemblyOverrideSurchargeAmount") );
                // linkedItem.set("handlingAmount", handlingAmount);
              }
              linkedItem.syncAssemblyHandlingAmount(true);
              // linkedItem.set('quantity', OtherCartItemsTotalQuantity+self.get('quantity'));
              linkedItem.set('quantity', self.get('quantity'));
              // linkedItem.apiModel.updateQuantity(linkedItem.get("quantity")).then(function(){ return window.cartView.model.apiModel.get(); });
            }

            if(linkedItemWarranty){
              //other cart items linked to this warranty item
              // var linkedItemWarrantyProductCode = linkedItemWarranty.get('product').get('productCode');
              // var OtherCartItemsWarranty = _.filter(newCollection.models, function (cartItem) {
              //   var bundledProducts = cartItem.get('product').get('bundledProducts');
              //   return cartItem.id != self.id && cartItem.get('fulfillmentMethod')===self.get('fulfillmentMethod') && _.dive(self.get('data'), 'fulfillmentLocationCode')===_.dive(cartItem.get('data'), 'fulfillmentLocationCode') && bundledProducts.length && bundledProducts.find(function(option){ return option.optionValue===linkedItemWarrantyProductCode; });
              // });
              // var OtherCartItemsWarrantyTotalQuantity = _.reduce(OtherCartItemsWarranty, function(acc, item){
              //   return acc+item.get("quantity");
              // }, 0);
              // linkedItemWarranty.set('quantity', OtherCartItemsWarrantyTotalQuantity+self.get('quantity'));
              linkedItemWarranty.set('quantity', self.get('quantity'));
            
              // linkedItemWarranty.apiModel.updateQuantity(linkedItemWarranty.get("quantity")).then(function(){ return window.cartView.model.apiModel.get(); });
            }
            
            return togglePurchaseLocation(priceLoc)
              .then(function(){
                return ( linkedItem ? linkedItem.apiModel.update(linkedItem.toJSON()).then(function(){ return window.cartView.model.apiGet(); }) : Promise.resolve() );
              })
              .then(function(){
                return ( linkedItemWarranty ? linkedItemWarranty.apiModel.updateQuantity(linkedItemWarranty.get("quantity")).then(function(){ return window.cartView.model.apiGet(); }) : Promise.resolve() );
              })
              .then(function(){
                //if new assembly line items added
                var linkedItems = getLinkeditems(newCollection);
                if(linkedItems.length>1){
                  var itemToDelete = linkedItems.find(function(item){ return item.id!==linkedItem.id; });
                  return itemToDelete.apiDel().then(function(){ window.cartView.model.get('items').remove(itemToDelete.id); });
                }
              })
              .then(function(){
                //if new warranty line items added
                var linkedItemsWarranty = getLinkeditemsWarranty(newCollection);
                if(linkedItemsWarranty.length>1){
                  var itemToDeleteWarranty = linkedItemsWarranty.find(function(item){ return item.id!==linkedItem.id; });
                  return itemToDeleteWarranty.apiDel().then(function(){ window.cartView.model.get('items').remove(itemToDeleteWarranty.id); });
                }
              })
              .then(function(){
                return togglePurchaseLocation(revertPL);
              })
              .then(function(){
                cartModel.set("forceLoading",false);
                cartModel.trigger("render");
                cartModel.isLoading(false);
                return updateGoogleAndCheckBoga(window.cartView.model);
              });
          } else{
            cartModel.set("forceLoading",false);
            cartModel.trigger("render");
            cartModel.isLoading(false);
            return updateGoogleAndCheckBoga(cart);
          }
        });
      },
      saveQuantity: function () {
        var self = this;
        var oldQuantity = this.previous("quantity");
        if (this.hasChanged("quantity")) {
          this.apiModel.updateQuantity(this.get("quantity"))
            .then(function () {
              window.cartView.model.fetch().then(function (cart) {
                cart.checkBOGA();
              });
            }, function () {
              // Quantity update failed, e.g. due to limited quantity or min. quantity not met. Roll back.
              self.set("quantity", oldQuantity);
              self.trigger("quantityupdatefailed", self, oldQuantity);
            });
        }
      },
      storeLocation: function () {
        var self = this;
        if (self.get('fulfillmentLocationCode')) {
          return window.cartView.model.get('storeLocationsCache').getLocationByCode(self.get('fulfillmentLocationCode'));
        }
        return;
      },
      bogaExceptionMessage:function(){
        var me = this;
        var item = me.toJSON();
        var carData = window.cartView.model.toJSON();
        var bogaCount = 0,bogaTotalCount=0,triggerItemTotalCount = 0;
        _(carData.items).each(function (_item) {
           if (_item.data && _item.data.isBogaEligibleItem==item.data.isBogaEligibleItem){
            ++bogaCount; 
            bogaTotalCount+=_item.quantity;
           }
           if(_item.data && _.dive(_item,"product.productCode")==item.data.isBogaEligibleItem){
            triggerItemTotalCount+=_item.quantity;
           }
          
        });
        if (bogaCount > 1 && triggerItemTotalCount < bogaTotalCount && item.data && (item.data.isBogaEligibleItem || item.data.isBogaTriggerItem))
          return "Discount applied to lowest price promo item";
        else
          return false;
      },
      storeSupportsPickup: function () {
        var data = this.get('data');
        var cartStore = window.cartView.model.get('store');
        if (data && data.fulfillmentLocationCode)
          if (data.fulfillmentLocationCode != cartStore.code) return data.fulfillmentSupportsPickup;

        return _.findWhere(_.prop(window.cartView.model.get('store'), 'fulfillmentTypes'), { code: 'SP' }) ? true : false;
      },
      inStorePickupMessageOrderMultiples: function (orderMultipleQuantity, inventory, quantity, cartItemData) {

        var productCode = this.get('product').get('productCode');
        if(serviceSkus.indexOf(productCode)>-1){ return; }
        
        if (!inventory) inventory = this.getInventoryFromParent();
        if (!quantity) quantity = this.get('quantity');
        if (!cartItemData) cartItemData = this.get('data');

        orderMultipleQuantity = parseInt(orderMultipleQuantity, 10);

        var estimatedDate;

        if (!cartItemData.nextDelivery && this.hasDeliveryList()) cartItemData.nextDelivery = this.nextDeliveryBasedOnInventory();

        if (cartItemData && cartItemData.nextDelivery)
          estimatedDate = new Date(cartItemData.nextDelivery.ExpectedDeliveryDate);

        var pickupDateMessage;
        if (estimatedDate)
          pickupDateMessage = "Estimated pick up date- " + estimatedDate.getDayName() + ", " + estimatedDate.getMonthName() + " " + estimatedDate.getDate() + " from " + cartItemData.fulfillmentLocationName;
        else
          pickupDateMessage = "Available for pickup at a later date.";

        var reservedStoreQuantity = this.getRelatedItemQuantity("Pickup") || 0;

        //var orderMultiplePickupTodayStock = ( ((inventory.maxInStoreStock - reservedStoreQuantity) % orderMultipleQuantity);
        var orderMultiplePickupTodayInv = (inventory.maxInStoreStock - reservedStoreQuantity) - ((inventory.maxInStoreStock - reservedStoreQuantity) % orderMultipleQuantity);

        if ((inventory.maxInStoreStock === 0 || orderMultiplePickupTodayInv === 0) && quantity <= (inventory.maxPickupInStoreStock - reservedStoreQuantity) && quantity) {
          return pickupDateMessage;
        }
        else if (inventory.maxInStoreStock !== 0 && orderMultiplePickupTodayInv !== 0 && quantity >= orderMultiplePickupTodayInv && (quantity <= (inventory.maxPickupInStoreStock - reservedStoreQuantity))) {
          return orderMultiplePickupTodayInv + " available for estimated pick up date- today.<br>" + quantity + " " + pickupDateMessage;
        }
        else if (quantity <= inventory.maxInStoreStock) {
          return "Estimated pick up today.";
        }
        else if (inventory.maxInStoreStock === 0 && inventory.maxShipToStore && inventory.maxShipToStore > 0) {
          return pickupDateMessage;
        }
        else
          return "Available for pickup in the future.";
      },
      deliverySelected: function () {
        return this.get("fulfillmentMethod")==="Delivery";
      },
      getAssemblyPrice: function () {
        var self = this;
        var code = this.getLocationCodeFromData();
        // var assemblyAttr = this.get('product.properties').find({attributeFQN: HyprLiveContext.locals.themeSettings.assemblyFlagAttr});
        var instance = window.cartView.model.getAssemblyDeliveryByCode(code);
        var fee;
        // var relationId = _(this).dive('.data.relatedItemLinkId');
        // var totalProductWithAssembly = _.reduce(this.collection.models, function (memo, item) {
        //   return !HyprLiveContext.locals.themeSettings.assemblyDeliverySkus.includes(item.get('product').id) &&
        //     _(item).dive('.data.relatedItemLinkId') === relationId && item.get('product').hasAssemblySelected() ?
        //     memo + 1 : memo;
        // }, 0);
        // if (!totalProductQuantityAssembly) totalProductQuantityAssembly = 1;
        if (self.get('product').hasAssemblySelected() && window.cart) {
          var relatedAssemblyItem = this.collection.find(function (item) { //assembly item related to this lineItem
            // var data = item.get('data');
            // return (item.get('id') !== self.id) && HyprLiveContext.locals.themeSettings.assemblyDeliverySkus.includes(item.get('product').id) && data.relatedItemLinkId === relationId && data.fulfillmentLocationCode===self.get('data').fulfillmentLocationCode;
            return item.get('parentItemId') === self.get("id") && item.get('product').isAssemblyType() ;
          });
          // fee = this.collection.reduce(function (a, item) {
          //   var data = item.get('data');
          //   return 'number' === typeof a ?
          //     a
          //     : (item.get('id') !== self.id) && data.relatedItemLinkId === relationId && HyprLiveContext.locals.themeSettings.assemblyDeliverySkus.includes(item.get('product').id) ?
          //       item.get('total') / totalProductWithAssembly
          //       : undefined;
          // }, undefined);
          // line item total does not include handling charge
          if(relatedAssemblyItem) fee = relatedAssemblyItem.get('total')/relatedAssemblyItem.get('quantity');
        }
        
        var aceRewardsId = this.aceRewardsId = this.aceRewardsId || this.get("isARMember") || util.sessionStorage.get('aceRewardsId');

        
        // var freeAssemblyAttribute = _(this).dive('.data.freeAssembly');
        var freeAssemblyDynamicCategory = _.chain(window.cart.items).find(function (item) {
          return item.product.productCode === self.get('product.productCode');
        }).dive('product.categories').find(function (category) {
          return category.content && (category.content.name.toLowerCase() === 'free assembly');
        }).value();
        if (
          aceRewardsId &&
          freeAssemblyDynamicCategory &&
          (
            window.cartView.model.get('total') -
            window.cartView.model.get('items').models.filter(function (item) {
              return !_.find(item.get('product.categories'), function (cat) {
                return (cat.categoryId === freeAssemblyDynamicCategory.categoryId) || (cat.id === freeAssemblyDynamicCategory.categoryId);
              }) ||
                item.get('product.properties').filter(function (property) {
                  return property.get('attributeFQN') === "tenant~product-type-attribute" &&
                    property.get('values')[0].value === 'Assembly Charge';
                }).length;
            }).reduce(function (acc, item) {
              return acc + item.get('total');
            }, 0) >= parseFloat(freeAssemblyDynamicCategory.content.description)
          )
        ) {
          if(self.get("assemblyOverrideSurchargeAmount") > 0)
          {
            return self.get("assemblyOverrideSurchargeAmount");
          }
          else
          return -1;
        }
        if ((fee === undefined || fee === null) && instance && instance.store) fee = instance.store.getAssemblyPrice(this.get('product.properties').toJSON());
        if(fee || fee===0){ fee+=(self.get("assemblyOverrideSurchargeAmount")||0); }
        fee = fee === 0 ? -1 : fee;
        return ( fee || _.dive(instance, 'store.assemblyFees.level2Fee')+(self.get("assemblyOverrideSurchargeAmount")||0) );
      },
      getWarrantyPrice: function () {
        var self = this;
        var code = this.getLocationCodeFromData();
        // var assemblyAttr = this.get('product.properties').find({attributeFQN: HyprLiveContext.locals.themeSettings.assemblyFlagAttr});
        // var instance = window.cartView.model.getAssemblyDeliveryByCode(code);
        var fee;
        // var relationId = _(this).dive('.data.relatedItemLinkIdWarranty');
        // var totalProductWithAssembly = _.reduce(this.collection.models, function (memo, item) {
        //   return !HyprLiveContext.locals.themeSettings.assemblyDeliverySkus.includes(item.get('product').id) &&
        //     _(item).dive('.data.relatedItemLinkId') === relationId && item.get('product').hasAssemblySelected() ?
        //     memo + 1 : memo;
        // }, 0);
        // if (!totalProductQuantityAssembly) totalProductQuantityAssembly = 1;
        if (self.get('product').hasWarrantySelected() && window.cart) {
          var relatedWarrantyItem = this.collection.find(function (item) { //assembly item related to this lineItem
            // var data = item.get('data');
            // return (item.get('id') !== self.id) && item.get('product').isWarrantyType() && data.relatedItemLinkIdWarranty === relationId && data.fulfillmentLocationCode===self.get('data').fulfillmentLocationCode;
            return item.get('parentItemId') === self.get("id") && item.get('product').isWarrantyType() ;
          });
          // fee = this.collection.reduce(function (a, item) {
          //   var data = item.get('data');
          //   return 'number' === typeof a ?
          //     a
          //     : (item.get('id') !== self.id) && data.relatedItemLinkId === relationId && HyprLiveContext.locals.themeSettings.assemblyDeliverySkus.includes(item.get('product').id) ?
          //       item.get('total') / totalProductWithAssembly
          //       : undefined;
          // }, undefined);
          if(relatedWarrantyItem) 
            fee = relatedWarrantyItem.get('unitPrice') ? relatedWarrantyItem.get('unitPrice').extendedAmount || relatedWarrantyItem.get('unitPrice').listAmount : relatedWarrantyItem.get('total')/relatedWarrantyItem.get('quantity');
          else 
            fee = 0;
        }
        /*
        var aceRewardsId = this.aceRewardsId = this.aceRewardsId || util.sessionStorage.get('aceRewardsId');
        // var freeAssemblyAttribute = _(this).dive('.data.freeAssembly');
        var freeAssemblyDynamicCategory = _.chain(window.cart.items).find(function (item) {
          return item.product.productCode === self.get('product.productCode');
        }).dive('product.categories').find(function (category) {
          return category.content && (category.content.name.toLowerCase() === 'free assembly');
        }).value();
        if (
          aceRewardsId &&
          freeAssemblyDynamicCategory &&
          (
            window.cartView.model.get('total') -
            window.cartView.model.get('items').models.filter(function (item) {
              return !_.find(item.get('product.categories'), function (cat) {
                return (cat.categoryId === freeAssemblyDynamicCategory.categoryId) || (cat.id === freeAssemblyDynamicCategory.categoryId);
              }) ||
                item.get('product.properties').filter(function (property) {
                  return property.get('attributeFQN') === "tenant~product-type-attribute" &&
                    property.get('values')[0].value === 'Assembly Charge';
                }).length;
            }).reduce(function (acc, item) {
              return acc + item.get('total');
            }, 0) >= parseFloat(freeAssemblyDynamicCategory.content.description)
          )
        ) return -1;
        if ((fee === undefined || fee === null) && instance && instance.store) fee = instance.store.getAssemblyPrice(this.get('product.properties').toJSON());
        fee = fee === 0 ? -1 : fee;
        return (fee || _.dive(instance, 'store.assemblyFees.level2Fee'));
        */
        return fee;
      },
      formatText: function () {
        var args = Array.prototype.slice.call(arguments),
          str = args.shift();
        return str.replace(/\{(\d+)\}/g, function (match, number) {
          return typeof args[number] !== 'undefined' ? args[number] : match;
        });
      }, 
      storeMaxDeliveryQty:function(){
         var _item = this.toJSON();
         var deliveryMaxAllocation=_.dive(_item,'skuStoreOverRide.DeliveryL5UpperLimitQty') || _.dive(_item,'skuStoreOverRide.DeliveryL4UpperLimitQty') || _.dive(_item,'skuStoreOverRide.DeliveryL3UpperLimitQty') || _.dive(_item,'skuStoreOverRide.DeliveryL2UpperLimitQty') || _.dive(_item,'skuStoreOverRide.DeliveryL1UpperLimitQty');
         return deliveryMaxAllocation && parseInt(deliveryMaxAllocation);
      },
      ispuServiceMessage: function () {
        var ispuInfo = this.get('ispuInfo');
        var assemblySelected = this.get('product').hasAssemblySelectedAndNotFree();
        var storeCode = this.getLocationCodeFromData();
        var itemId = this.get('id');
        var productCode = this.get('product.productCode');
        if(serviceSkus.indexOf(productCode)>-1){ return; }
        var adInstance = window.cartView.model.getAssemblyDeliveryByCode(storeCode);
        var requestedQuantity = this.get('data') ? this.get('data').previousQty ? this.get('data').previousQty : 1 : 1;
        var itemInventory = this.inventorySummary();
        var inStock = itemInventory.inStoreNowStock ? itemInventory.inStoreNowStock : 0;
        var stsStock = itemInventory.shipToStoreStock ? itemInventory.shipToStoreStock : 0;

        if (!adInstance) return '';
        var savedEstimates = adInstance.availabilityEstimatesByProductCode;
        if (!ispuInfo) {
          if (!savedEstimates) return '';
          ispuInfo = _(savedEstimates[productCode]).prop('ispuInfo');
          if (!ispuInfo || !ispuInfo.infoWithAssembly) 
          // return '<span class="message-unavailable">Unavailable</span> for pickup from '+ _.dive(this.get('data'), 'fulfillmentLocationName');
          return '<span class="message-unavailable">Unavailable</span> for pickup';
        }
        //reserved store quantity is just in case there is another line item same sku
        //same store but different options or discount etc
        var reservedStoreQuantity = (this.getRelatedItemQuantity("Pickup") || 0);
        if (
          //{"shipToHomeStock":176,"inStoreNowStock":3,"pickupInStoreStock":117,"shipToStoreStock":114}
          inStock !== 0 && stsStock !== 0 &&
          this.get('quantity') > (inStock - reservedStoreQuantity) &&
          (requestedQuantity >= (itemInventory.pickupInStoreStock - reservedStoreQuantity))
        ) {
          var estimatedDate = (_.dive(ispuInfo[assemblySelected ? 'infoWithAssembly' : 'info'], 'date'));
          return inStock + " available in store today, " +
            stsStock +
            " available " + estimatedDate.getDayName() + ", " +
            estimatedDate.getMonthName() + " " +
            estimatedDate.getDate();
            // +" from " + (_.dive(this.get('data'), 'fulfillmentLocationName') || "");
        }
        if(inStock <= 0 && stsStock <=0){
          return '<span class="message-unavailable">Unavailable</span> for pickup';
        }else {
          return assemblySelected ? (ispuInfo.infoWithAssembly.messageTucp||ispuInfo.infoWithAssembly.messageHtml) : (ispuInfo.info.messageTucp||ispuInfo.info.messageHtml);
        }
      },
      nearbyStoreAvailableMessage: function () {
        var ispuInfo = this.get('ispuInfo');
        var assemblySelected = this.get('product').hasAssemblySelectedAndNotFree();
        var storeCode = this.getLocationCodeFromData();
        var itemId = this.get('id');
        var productCode = this.get('product.productCode');
        var adInstance = window.cartView.model.getAssemblyDeliveryByCode(storeCode);
        var requestedQuantity = this.get('data') ? this.get('data').previousQty ? this.get('data').previousQty : 1 : 1;
        var itemInventory = this.inventorySummary();
        var inStock = itemInventory.inStoreNowStock ? itemInventory.inStoreNowStock : 0;
        var stsStock = itemInventory.shipToStoreStock ? itemInventory.shipToStoreStock : 0;

        if (!adInstance) return '';
        var savedEstimates = adInstance.availabilityEstimatesByProductCode;
        if (!ispuInfo) {
          if (!savedEstimates) return '';
          ispuInfo = _(savedEstimates[productCode]).prop('ispuInfo');
          if (!ispuInfo || !ispuInfo.infoWithAssembly) 
          return {message:"unavailable for pickup"};
        }
         return ispuInfo.info;
      },
      deliveryServiceMessage: function () {
        var productCode = this.get('product').get('productCode');
        if(serviceSkus.indexOf(productCode)>-1){ return; }
        
        var deliveryInfo = this.get('deliveryInfo'),
          assemblySelected = (this.get('product').hasAssemblySelectedAndNotFree()),
          storeCode = this.getLocationCodeFromData(),
          itemId = this.get('id'),
          requestedQuantity = this.get('data') ? this.get('data').previousQty ? this.get('data').previousQty : 1 : 1,
          itemInventory = this.inventorySummary(),
          inStock = itemInventory.inStoreNowStock ? itemInventory.inStoreNowStock : 0,
          stsStock = itemInventory.shipToStoreStock ? itemInventory.shipToStoreStock : 0;

        var adInstance = window.cartView.model.getAssemblyDeliveryByCode(storeCode);
        if (!deliveryInfo && adInstance && adInstance.datesCache) {
          var cachedDates = adInstance.datesCache
            .filter(function (info) { return info.item.id == itemId; })
            .map(function (cache) { return cache.delivery; });
          if (cachedDates && cachedDates.length > 0) deliveryInfo = cachedDates.shift();
        }
        var groupState = adInstance ? adInstance.groupDelivery : null;
        var infoToUse;
        if (groupState && (groupState.assembly || groupState.transfer)) {
          console.log(groupState);
          if (this.deliverySelected()) {
            console.log('delivery selected');
            if (groupState.assembly) assemblySelected = true;
            if (groupState.transfer) infoToUse = groupState.transfer;
          }
        }
        if (!infoToUse && deliveryInfo && deliveryInfo.info) infoToUse = deliveryInfo;   
        
        if (infoToUse) {
          var info;
          var reservedStoreQuantity = (this.getRelatedItemQuantity("Pickup") || 0);

          // if (
          //   inStock !== 0 &&
          //   this.get('quantity') > (inStock - reservedStoreQuantity) &&
          //   (this.get('quantity') >= (stsStock - reservedStoreQuantity) &&
          //     (infoToUse.quantityUnavailable || infoToUse.quantityUnavailableWithAssembly))
          // ) {

          //   infoToUse.quantityUnavailableWithAssembly.message = this.formatText(
          //     infoToUse.quantityUnavailableWithAssembly.message, inStock + stsStock);

          //   infoToUse.quantityUnavailable.message = this.formatText(
          //     infoToUse.quantityUnavailable.message, inStock + stsStock);

          //   info = assemblySelected ? infoToUse.quantityUnavailableWithAssembly : infoToUse.quantityUnavailable;

          // }
          if(inStock <= 0 && stsStock <=0){
            // return '<span class="message-unavailable">Unavailable</span> for delivery from '+ _.dive(this.get('data'), 'fulfillmentLocationName');
            return '<span class="message-unavailable">Unavailable</span> for delivery';
          }          
          else {
            info = assemblySelected ? infoToUse.infoWithAssembly : infoToUse.info;
          }
          return info && (info.messageTucp || info.messageHtml);
        }


        console.log(infoToUse);

        if (adInstance && adInstance.store && adInstance.store.storeState) {
          console.log(adInstance.store.storeState);
          return adInstance.store.storeState.message;
        }

        // if(this.get('deliveryInfo')) return this.get('deliveryInfo').message;
        // return "broken";
        // var adStore = this.collection.parent.get('ADStores');
        // var storeCode = _.dive(this.get('data'), 'fulfillmentLocationCode');
        // if(!inventory)inventory = this.getInventoryFromParent();
        // if(!quantity) quantity = this.get('quantity');
        // var cartItemData = this.get('data');
        // var estimatedDate;
        // if(!cartItemData.nextDelivery && this.hasDeliveryList()) cartItemData.nextDelivery = this.nextDeliveryBasedOnInventory();

        // if(cartItemData && cartItemData.nextDelivery){
        //     estimatedDate = new Date(cartItemData.nextDelivery.ExpectedDeliveryDate); 
        //     return adDeliveryDateUtil.stsDeliveryDateMessage(this.parent.getAssemblyDeliveryByCode(storeCode), estimatedDate)
        // }
        // if(adStore[storeCode] && adStore[storeCode].storeState){
        //     return adStore[storeCode].storeState.message;
        // }
      },
      deliveryStoreMessage: function () {
        var deliveryInfo = this.get('deliveryInfo'),
          assemblySelected = (this.get('product').hasAssemblySelectedAndNotFree()),
          storeCode = this.getLocationCodeFromData(),
          itemId = this.get('id'),
          requestedQuantity = this.get('data') ? this.get('data').previousQty ? this.get('data').previousQty : 1 : 1,
          itemInventory = this.inventorySummary(),
          inStock = itemInventory.inStoreNowStock ? itemInventory.inStoreNowStock : 0,
          stsStock = itemInventory.shipToStoreStock ? itemInventory.shipToStoreStock : 0;

        var adInstance = window.cartView.model.getAssemblyDeliveryByCode(storeCode);
        if (!deliveryInfo && adInstance && adInstance.datesCache) {
          var cachedDates = adInstance.datesCache
            .filter(function (info) { return info.item.id == itemId; })
            .map(function (cache) { return cache.delivery; });
          if (cachedDates && cachedDates.length > 0) deliveryInfo = cachedDates.shift();
        }
        var groupState = adInstance ? adInstance.groupDelivery : null;
        var infoToUse;
        if (groupState && (groupState.assembly || groupState.transfer)) {
          console.log(groupState);
          if (this.deliverySelected()) {
            console.log('delivery selected');
            if (groupState.assembly) assemblySelected = true;
            if (groupState.transfer) infoToUse = groupState.transfer;
          }
        }
        if (!infoToUse && deliveryInfo && deliveryInfo.info) infoToUse = deliveryInfo;   
        
        if (infoToUse) {
          var info;
          var reservedStoreQuantity = (this.getRelatedItemQuantity("Pickup") || 0);

          // if (
          //   inStock !== 0 &&
          //   this.get('quantity') > (inStock - reservedStoreQuantity) &&
          //   (this.get('quantity') >= (stsStock - reservedStoreQuantity) &&
          //     (infoToUse.quantityUnavailable || infoToUse.quantityUnavailableWithAssembly))
          // ) {

          //   infoToUse.quantityUnavailableWithAssembly.message = this.formatText(
          //     infoToUse.quantityUnavailableWithAssembly.message, inStock + stsStock);

          //   infoToUse.quantityUnavailable.message = this.formatText(
          //     infoToUse.quantityUnavailable.message, inStock + stsStock);

          //   info = assemblySelected ? infoToUse.quantityUnavailableWithAssembly : infoToUse.quantityUnavailable;

          // }
          if(inStock <= 0 && stsStock <=0){
            return '<span class="message-unavailable">Unavailable</span> for delivery from '+ _.dive(this.get('data'), 'fulfillmentLocationName');
          }          
          else {
            info = assemblySelected ? infoToUse.infoWithAssembly : infoToUse.info;
          }
          info.time = info.date.toISOString();
          return info;
        }


        console.log(infoToUse);

        if (adInstance && adInstance.store && adInstance.store.storeState) {
          console.log(adInstance.store.storeState);
          adInstance.store.storeState.time = adInstance.store.storeState.date.toISOString();
          return adInstance.store.storeState;
        }

        // if(this.get('deliveryInfo')) return this.get('deliveryInfo').message;
        // return "broken";
        // var adStore = this.collection.parent.get('ADStores');
        // var storeCode = _.dive(this.get('data'), 'fulfillmentLocationCode');
        // if(!inventory)inventory = this.getInventoryFromParent();
        // if(!quantity) quantity = this.get('quantity');
        // var cartItemData = this.get('data');
        // var estimatedDate;
        // if(!cartItemData.nextDelivery && this.hasDeliveryList()) cartItemData.nextDelivery = this.nextDeliveryBasedOnInventory();

        // if(cartItemData && cartItemData.nextDelivery){
        //     estimatedDate = new Date(cartItemData.nextDelivery.ExpectedDeliveryDate); 
        //     return adDeliveryDateUtil.stsDeliveryDateMessage(this.parent.getAssemblyDeliveryByCode(storeCode), estimatedDate)
        // }
        // if(adStore[storeCode] && adStore[storeCode].storeState){
        //     return adStore[storeCode].storeState.message;
        // }
      },
      inStorePickupMessage: function () {
        var productCode = this.get('product').get('productCode');
        if(serviceSkus.indexOf(productCode)>-1){ return; }

        var inventory = this.getInventoryFromParent();
        var quantity = this.get('quantity');
        var data = this.get('data');
        var orderMultipleQuantity = this.get('product').getProductAttributeFirstValue('tenant~web-order-multiple');

        //moving this into its own function for now as the logic for this may change further
        if (orderMultipleQuantity && orderMultipleQuantity !== "1") {
          return this.inStorePickupMessageOrderMultiples(orderMultipleQuantity, inventory, quantity, data);
        } else {
          var estimatedDate, ispuAssemblyLeadTime;
          if (data && !data.nextDelivery && this.hasDeliveryList()) data.nextDelivery = this.nextDeliveryBasedOnInventory(quantity, false, { forceRefresh: true, silent: true });
          var hasAssemblySelected, stsDateKey, ispuDateKey;
          hasAssemblySelected = this.get('product').hasAssemblySelectedAndNotFree();
          if (hasAssemblySelected) {
            stsDateKey = _.dive(AssemblyDelivery.settings, 'timeLookupKeys.stsAssembly');
            ispuDateKey = _.dive(AssemblyDelivery.settings, 'timeLookupKeys.inStockAssembly');
          }
          if (data && data.nextDelivery) {
            estimatedDate = hasAssemblySelected && stsDateKey ?
              new Date(data.nextDelivery[stsDateKey]) : new Date(data.nextDelivery.ExpectedDeliveryDate);
            ispuAssemblyLeadTime = (hasAssemblySelected && ispuDateKey) ? new Date(data.nextDelivery[ispuDateKey]) : null;
          }
          var pickupDateMessage;
          if (estimatedDate)
            pickupDateMessage = "Estimated pick up date - " + estimatedDate.getDayName() + ", " + estimatedDate.getMonthName() + " " + estimatedDate.getDate() + " from " + data.fulfillmentLocationName;
          else
            pickupDateMessage = "Please contact store to determine availability.";

          var reservedStoreQuantity = this.getRelatedItemQuantity("Pickup");

          if (inventory.maxInStoreStock === 0 && quantity <= (inventory.maxPickupInStoreStock - reservedStoreQuantity)) {
            return pickupDateMessage;
          }
          else if (inventory.maxInStoreStock !== 0 && quantity > (inventory.maxInStoreStock - reservedStoreQuantity) && (quantity <= (inventory.maxPickupInStoreStock - reservedStoreQuantity))) {
            return inventory.maxInStoreStock + " available for estimated pick up date- today.<br>" + quantity + " " + pickupDateMessage;
          }
          else if (quantity <= inventory.maxInStoreStock) {
            if (data) {
              return (hasAssemblySelected && ispuAssemblyLeadTime) ? "Estimated pick up date - " + ispuAssemblyLeadTime.getDayName() + ", " + ispuAssemblyLeadTime.getMonthName() + " " + ispuAssemblyLeadTime.getDate() + ' from ' + data.fulfillmentLocationName : 'Available for pickup as early as today from ' + data.fulfillmentLocationName;
            } else {
              util.location.getMyStore().then(function (store) {
                return (hasAssemblySelected && ispuAssemblyLeadTime) ? "Estimated pick up date - " + ispuAssemblyLeadTime.getDayName() + ", " + ispuAssemblyLeadTime.getMonthName() + " " + ispuAssemblyLeadTime.getDate() + ' from ' + store.name : 'Available for pickup as early as today from ' + store.name;
              });
            }
          }
          else if (inventory.maxInStoreStock === 0 && inventory.maxShipToStore && inventory.maxShipToStore > 0) {
            return pickupDateMessage;
          }
          else
            return "Available for pickup in the future.";
        }

      }, 
      discountExceptionMessage: function(){	
        try {
          var cartData = window.cartView.model.toJSON();
          var hasOrderDiscount = cartData.orderDiscounts && cartData.orderDiscounts.length;
          
          var weightedOrderDiscount = this.get("weightedOrderDiscount");
          var appliedCoupons = window.cartView.model.availableCoupons();
          var productDiscount = this.get("productDiscount");
          var allProductDiscount = this.get("productDiscounts");
          if(!appliedCoupons.length)
          return false;

          var appliedCoupon = appliedCoupons && appliedCoupons.length && appliedCoupons[0];
          if(appliedCoupon && appliedCoupon.CouponCd && appliedCoupon.CouponCd .toLowerCase().startsWith("ar-trgt-rpm"))
          {
            return false;
          }
          else if (!weightedOrderDiscount && !productDiscount && appliedCoupon && appliedCoupon.appliedToOrder) {
            var DisplayOfferName = appliedCoupon.DisplayOffer || appliedCoupon.CouponCd;
            return DisplayOfferName;
          }   
          else if (appliedCoupon && appliedCoupon.appliedToOrder && cartData.orderDiscounts && cartData.orderDiscounts.length ) {              
            if (weightedOrderDiscount > 0)
              return false;
            else {
              var _DisplayOrderOfferCode = appliedCoupon.DisplayOffer || appliedCoupon.CouponCd;
              return _DisplayOrderOfferCode;
            }
          }
          else if (appliedCoupon && appliedCoupon.appliedToOrder && appliedCoupon.productLevelDiscount) {
            var isCouponCodeApplied = _(allProductDiscount).any(function (d) { return d.couponCode && appliedCoupon.CouponCd && d.couponCode.toLowerCase() === appliedCoupon.CouponCd.toLowerCase(); });
            if (isCouponCodeApplied)
              return false;
            else {
              var _DisplayOfferName = appliedCoupon.DisplayOffer || appliedCoupon.CouponCd;
              return _DisplayOfferName;
            }
          }
          else if (appliedCoupon && !appliedCoupon.appliedToOrder) {
            var pendingDiscounts = cartData.data && cartData.data.pendingDiscounts;
            if (pendingDiscounts && pendingDiscounts.length) {
              var currentDiscount = _(pendingDiscounts).find(function (d) { return d.couponCode && appliedCoupon.CouponCd && d.couponCode.toLowerCase() === appliedCoupon.CouponCd.toLowerCase(); });
              currentDiscount = currentDiscount && currentDiscount.detail;
              if (currentDiscount) {
                var discountCondition = currentDiscount.conditions;
                var targetCriteria = currentDiscount.target;
                var includedProducts = discountCondition.includedProducts && _(discountCondition.includedProducts).map(function(d){return d.productCode;})||[];
                var includedCategories = discountCondition.includedCategories && _(discountCondition.includedCategories).map(function(d){return d.categoryId;})||[];
                var categoriesToExcludeFromMinOrderTotal = discountCondition.categoriesToExcludeFromMinOrderTotal && _(discountCondition.categoriesToExcludeFromMinOrderTotal).map(function(d){return d.categoryId;});
                var includedTargetCategories = targetCriteria.categories && _(targetCriteria.categories).map(function(d){return d.id;});
                var excludedTargetCategories = targetCriteria.excludedCategories && _(targetCriteria.excludedCategories).map(function(d){return d.id;});
                var productsToExcludeFromMinOrderTotal = discountCondition.productsToExcludeFromMinOrderTotal && _(discountCondition.productsToExcludeFromMinOrderTotal).map(function(d){return d.productCode;});
                var includedTargetProducts = targetCriteria.products && _(targetCriteria.products).map(function(d){return d.productCode;});
                var excludedTargetProducts = targetCriteria.excludedProducts && _(targetCriteria.excludedProducts).map(function(d){return d.productCode;});
                var excludeSaleItems = currentDiscount.doesNotApplyToProductsWithSalePrice||currentDiscount.doesNotApplyToSalePrice ;
                includedProducts=_.union(includedProducts,includedTargetProducts);
                includedCategories=_.union(includedCategories,includedTargetCategories);
                excludedTargetCategories=_.union(excludedTargetCategories,categoriesToExcludeFromMinOrderTotal);
                excludedTargetProducts=_.union(excludedTargetProducts,productsToExcludeFromMinOrderTotal); 
                var productCategories = [];
                var _product = this.get("product") && this.get("product").toJSON();
                var allCategories = _product && _product.categories;
                var productCode = _product && _product.productCode;
                var productPrice = _product && _product.price;
                _(allCategories).each(function (c) {
                   if(c.categoryId)
                      productCategories.push(c.categoryId);
                  else if(c.id)
                       productCategories.push(c.id);
                  var L2ID = _(c).dive('parentCategory.categoryId')||_(c).dive('parent.id')||_(c).dive('parentCategory.id');
                  var L1ID = _(c).dive('parentCategory.parentCategory.categoryId')||_(c).dive('parent.parent.id')||_(c).dive('parentCategory.parentCategory.id');
                  if (L2ID)
                    productCategories.push(L2ID);
                  if (L1ID)
                    productCategories.push(L1ID);
                });

                if(includedProducts.length && includedProducts.indexOf(productCode) == -1)
                {
                   return appliedCoupon.DisplayOffer || appliedCoupon.CouponCd;
                }
                else if(includedCategories.length && !_.intersection(productCategories,includedCategories).length)
                {
                    return appliedCoupon.DisplayOffer || appliedCoupon.CouponCd;
                }
                else if(excludedTargetProducts.length && excludedTargetProducts.indexOf(productCode) > -1)
                {
                  return appliedCoupon.DisplayOffer || appliedCoupon.CouponCd;
                }
                else if(excludedTargetCategories.length && _.intersection(productCategories,excludedTargetCategories).length)
                {
                  return appliedCoupon.DisplayOffer || appliedCoupon.CouponCd;
                }
                else if(productPrice.salePrice && excludeSaleItems)
                {
                  return appliedCoupon.DisplayOffer || appliedCoupon.CouponCd;
                }
              }

            }
            return false;

          }
          else
            return false;
        }
        catch (e) {
          console.log(e);
          return false;
        }
      },          
      getItemFullInventory: function (storeCode) {

        var productCode = this.get('product').get('productCode');
        if(serviceSkus.indexOf(productCode)>-1){ return Promise.resolve(); }

        if (!storeCode) {
          var lineItemData = this.get('data') || {};
          if (this.get('fulfillmentMethod') == "Pickup")
            storeCode = this.get('fulfillmentLocationCode');
          else if (lineItemData.fulfillmentLocationCode)
            storeCode = lineItemData.fulfillmentLocationCode;
          else
            storeCode = window.cartView.model.get('store');
        }
        if(typeof storeCode === "number")
          storeCode = storeCode.toString();
          
        var self = this;
        var lineItemId = this.get('id');
        var fullInventory = window.cartView.model.get('fullInventory');

        var lineItemFullInventory = window.cartView.model.get('fullInventory')[lineItemId];

        return this.get('product').getDetailedProductInventory(storeCode).then(function (inventoryResult) {
          var existingInventory = lineItemFullInventory;//window.cartView.model.get('fullInventory')[self.get('id')];
          // if(inventoryResult.storeInventory.softStockAvailable+inventoryResult.stsInventory.softStockAvailable>0){
          //   self.set("availableStoreCount", false);
          // }else {
          //   self.set("nearbyStoresCallDone", false);
          // }
          if(inventoryResult.storeInventory.softStockAvailable+inventoryResult.stsInventory.softStockAvailable>0){
            self.set("pickupStockExists", true);
          }
          var fullInventoryItem = {};
          var productCode = (inventoryResult.storeInventory && inventoryResult.storeInventory.productCode ) || (inventoryResult.rscInventory && inventoryResult.rscInventory.productCode);
          if (existingInventory) fullInventoryItem = existingInventory;
          var rawSTSData = inventoryResult.stsInventory.rawCandidateData;

          var updatedStS = _.flatten(_.map(rawSTSData, function (candidates, v) {
            return _.map(candidates.inventory, function (inv) {
              return {
                locationCode: storeCode,
                productCode: inv.partNumber || inv.sku || inv.upc || productCode,
                softStockAvailable: inv.available,
                stockAvailable: inv.available,
                transfer: true,
                site: candidates.locationCode
              };
            });
          }));

          fullInventoryItem.locationCode = storeCode;
          fullInventoryItem.productCode = productCode;
          fullInventoryItem.storeInventory = inventoryResult.storeInventory;
          fullInventoryItem.shipToStoreInventory = updatedStS;
          fullInventoryItem.rscInventory = inventoryResult.rscInventory;

          fullInventoryItem.maxInStoreStock = _.dive(inventoryResult, 'storeInventory.softStockAvailable');
          fullInventoryItem.maxShipToStore = _.reduce(_.pluck(updatedStS, 'softStockAvailable'), function (counter, num) { return counter + num; }, 0);

          fullInventoryItem.maxPickupInStoreStock = 0;
          if (fullInventoryItem.maxShipToStore > 0 || fullInventoryItem.maxInStoreStock > 0)
            fullInventoryItem.maxPickupInStoreStock = (fullInventoryItem.maxInStoreStock + fullInventoryItem.maxShipToStore);
          fullInventoryItem.maxShipToHome = _.dive(inventoryResult, 'rscInventory.softStockAvailable');


          if (!existingInventory)
            fullInventory[lineItemId] = fullInventoryItem;

          self.trigger('itemInventoryUpdated');
        });
      },
      inventorySummary: function (fulfillment) {
        var productCode = this.get('product').get('productCode');
        if(serviceSkus.indexOf(productCode)>-1){ return; }

        var fullInventory = this.getInventoryFromParent();
        var relatedQuantity = this.getRelatedItemQuantity();
        var fulfillmentMethod = this.get('fulfillmentMethod');

        var summary = {
          shipToHomeStock: fullInventory.maxShipToHome,
          inStoreNowStock: fullInventory.maxInStoreStock,
          pickupInStoreStock: fullInventory.maxPickupInStoreStock,
          shipToStoreStock: fullInventory.maxShipToStore,
          inventoryLocatorName:_.dive(fullInventory,'storeInventory.inventoryLocatorName')
        };
        if (relatedQuantity && relatedQuantity > 0) {
          if (fulfillmentMethod == "Ship")
            if (summary.shipToHomeStock > 0) summary.shipToHomeStock -= relatedQuantity;
            else if (fulfillmentMethod == "Pickup")
              summary = {
                shipToHomeStock: fullInventory.maxShipToHome,
                inStoreNowStock: fullInventory.maxInStoreStock - relatedQuantity,
                pickupInStoreStock: fullInventory.maxPickupInStoreStock - relatedQuantity,
                shipToStoreStock: fullInventory.maxShipToStore - relatedQuantity,
                inventoryLocatorName:_.dive(fullInventory,'storeInventory.inventoryLocatorName')
              };
        }
        return summary;
      },
      setItemForPickup: function (store, locationChange) {

        var cartData = this.get("data") ? this.get("data") : {};
        var cartStore = window.cartView.model.get("store");
        //should change storeDelivery to false when fulfillment changed from delivery to pickup
        cartData.storeDelivery = false;

        var oldFulfillmentMethod = this.get('fulfillmentMethod');
        var oldPickupData = cartData;
        var oldLocationCode = this.get('fulfillmentLocationCode');

        if (!cartData || (!cartData.fulfillmentLocationCode || cartData.fulfillmentLocationCode == cartStore.code))
          store = cartStore;
        //in case there is an error with the api call, we want to get all of the
        //current data for the cartItem before we change it so that we can
        //change it back if we need to.
        if (locationChange || !cartData) {
          cartData.fulfillmentLocationName = store.name ? store.name : cartData.fulfillmentLocationName;
          cartData.fulfillmentLocationCode = store.code ? store.code : cartData.fulfillmentLocationCode;
          cartData.fulfillmentAddress = store.address ? store.address : cartData.fulfillmentAddress;

          if (!cartData.nextDelivery) {
            var nextDelivery = this.nextDeliveryBasedOnInventory();
            cartData.nextDelivery = nextDelivery;
          }


          if (store.fulfillmentSupportsPickup !== undefined) {
            store.fulfillmentTypes.forEach(function (fulfillmentType) {
              if (fulfillmentType.code == "SP")
                store.fulfillmentSupportsPickup = true;
            });
            cartData.fulfillmentSupportsPickup = store.fulfillmentSupportsPickup;
          }
        }
        //cartData.isShipToStore = false;
        cartData.fulfillmentMethod = "Pickup";

        this.set('fulfillmentMethod', 'Pickup');
        this.set('fulfillmentLocationCode', cartData.fulfillmentLocationCode ? cartData.fulfillmentLocationCode : store.code);

        //this.setIfIsShipToStore(true);
        this.nextDeliveryBasedOnInventory(null, true, { forceRefresh: true });

        // cartItem.setIfIsShipToStore(true);
        // nextDeliveryBasedOnInventory(null, true, {forceRefresh:true});
        // cartItem.setMaxQuantityForFulfillment();
        // cartItem.syncStoreDelivery();
        this.set('data', _.omit(cartData, 'delivery'));

        var cartItem = this;
        var cartItemIdBeforeUpdate = cartItem.get('id');
        if ((!cartData.isGoogleProduct) && (!cartData.isB2BPrice) && (cartData.fulfillmentLocationCode == window.cartView.model.get("store").code)) {
        return new Promise(function(resolve,reject){
          cartItem.apiUpdateSyncPrice().then(function (success) {
            cartItem.trigger('fulfillmentMethodUpdated');
            cartItem.isLoading(false);
            cartItem.setMaxQuantityForFulfillment();
            window.cartView.model.setFulfillmentSummary();   
            cartItem.syncStoreDelivery(cartItemIdBeforeUpdate).then(function(){
              if(cartItem.get('product').hasWarrantySelected()){
                cartItem.syncWarrantyItems(cartItemIdBeforeUpdate).then(function() {
                  resolve();
                });
              }
              else{
                resolve();
              }
            });
            
          }).catch(function (error) {
            cartItem.set('fulfillmentMethod', oldFulfillmentMethod);
            cartItem.set('data', oldPickupData);
            cartItem.set('fulfillmentLocationCode', oldLocationCode);
            cartItem.isLoading(false);
            return;
          });
        });
        } else {
          return new Promise(function (resolve, reject) {
            cartItem.apiUpdateSyncPrice().then(function () {
              cartItem.syncStoreDelivery(cartItemIdBeforeUpdate).then(function(){
                if (cartItem.get('product').hasWarrantySelected())
                  return cartItem.syncWarrantyItems(cartItemIdBeforeUpdate);
                else
                  return;
              }).then(function(){
                window.cartView.model.setFulfillmentSummary();
                cartItem.isLoading(false);
                _.delay(function () {
                  resolve();
                }, 200);
              });
            });
          });
        }
      },
      setItemForDelivery: function (store, locationChange) {

        var cartData = this.get("data") ? this.get("data") : {};
        var cartStore = window.cartView.model.get("store");
        cartData.storeDelivery = true;

        var oldFulfillmentMethod = this.get('fulfillmentMethod');
        var oldPickupData = cartData;
        var oldLocationCode = this.get('fulfillmentLocationCode');

        if (!cartData || (!cartData.fulfillmentLocationCode || cartData.fulfillmentLocationCode == cartStore.code))
          store = cartStore;
        //in case there is an error with the api call, we want to get all of the
        //current data for the cartItem before we change it so that we can
        //change it back if we need to.
        if (locationChange || !cartData) {
          cartData.fulfillmentLocationName = store.name ? store.name : cartData.fulfillmentLocationName;
          cartData.fulfillmentLocationCode = store.code ? store.code : cartData.fulfillmentLocationCode;
          cartData.fulfillmentAddress = store.address ? store.address : cartData.fulfillmentAddress;

          if (!cartData.nextDelivery) {
            var nextDelivery = this.nextDeliveryBasedOnInventory();
            cartData.nextDelivery = nextDelivery;
          }


          if (store.fulfillmentSupportsPickup !== undefined) {
            store.fulfillmentTypes.forEach(function (fulfillmentType) {
              if (fulfillmentType.code == "SP")
                store.fulfillmentSupportsPickup = true;
            });
            cartData.fulfillmentSupportsPickup = store.fulfillmentSupportsPickup;
          }
        }
        //cartData.isShipToStore = false;
        cartData.fulfillmentMethod = "Delivery";

        this.set('fulfillmentMethod', 'Delivery');
        this.set('fulfillmentLocationCode', cartData.fulfillmentLocationCode ? cartData.fulfillmentLocationCode : store.code);

        //this.setIfIsShipToStore(true);
        this.nextDeliveryBasedOnInventory(null, true, { forceRefresh: true });

        // cartItem.setIfIsShipToStore(true);
        // nextDeliveryBasedOnInventory(null, true, {forceRefresh:true});
        // cartItem.setMaxQuantityForFulfillment();
        // cartItem.syncStoreDelivery();
        this.set('data', _.omit(cartData, 'delivery'));

        var cartItem = this;
        var cartItemIdBeforeUpdate = cartItem.get('id');
        
        if ((!cartData.isGoogleProduct) && (!cartData.isB2BPrice) && (cartData.fulfillmentLocationCode == window.cartView.model.get("store").code)) {
          return new Promise(function(resolve,reject){
            cartItem.apiUpdateSyncPrice().then(function (success) {
              cartItem.trigger('fulfillmentMethodUpdated');
              cartItem.isLoading(false);
              cartItem.setMaxQuantityForFulfillment();
              window.cartView.model.setFulfillmentSummary();   
              cartItem.syncStoreDelivery(cartItemIdBeforeUpdate).then(function(){
                if(cartItem.get('product').hasWarrantySelected()){
                  cartItem.syncWarrantyItems(cartItemIdBeforeUpdate)
                  .then(function() {
                    resolve();
                  });
                }
                else{
                  resolve();
                }
              });
              
            }).catch(function (error) {
              cartItem.set('fulfillmentMethod', oldFulfillmentMethod);
              cartItem.set('data', oldPickupData);
              cartItem.set('fulfillmentLocationCode', oldLocationCode);
              cartItem.isLoading(false);
              return;
            });
          });
        } else {
          return new Promise(function (resolve, reject) {
            cartItem.apiUpdateSyncPrice().then(function () {
              cartItem.syncStoreDelivery(cartItemIdBeforeUpdate).then(function(){
                if (cartItem.get('product').hasWarrantySelected())
                  return cartItem.syncWarrantyItems(cartItemIdBeforeUpdate);
                else 
                  return;
              })
              .then(function(){
                window.cartView.model.setFulfillmentSummary();
                cartItem.isLoading(false);
                _.delay(function () {
                  resolve();
                }, 200);
              });
            });
          });
        }
      
      },
      isPickupLocationCurrentStore: function () {
        var cartData = (this.get('data') || {});
        return (!cartData || window.cartView.model.get('store').code == cartData.fulfillmentLocationCode);
      },
      getInventoryFromParent: function () {

        var self = this,
          currentItem = self.toJSON(),
          productCode = self.get('product').get('productCode');
        var itemId =this.get('id');

        if (serviceSkus.indexOf(productCode) > -1) {
          return null;
        }

        //for boga splitted item inventory
        if(window.cartView.model.get('fullInventory') && !window.cartView.model.get('fullInventory')[this.get('id')]){
          var cart = window.cartView.model.toJSON();
          var similarBOGAItem = cart.items.find(function(_item){
            return _item.id!==itemId && _item.product.productCode===productCode && _item.data.fulfillmentLocationCode === self.get('data').fulfillmentLocationCode;
          });
          if(similarBOGAItem && window.cartView.model.get('fullInventory')[similarBOGAItem.id]){
            var fullInventory = window.cartView.model.get('fullInventory');
            fullInventory[itemId] = fullInventory[similarBOGAItem.id];
            window.cartView.model.set('fullInventory', fullInventory);
            return window.cartView.model.get('fullInventory')[similarBOGAItem.id];
          }
        }

        var lineItemInventory = (window.cartView.model.get('fullInventory') && window.cartView.model.get('fullInventory')[this.get('id')])||{
          itemId: {
              "productCode": self.get('product').get('productCode'),
              "maxShipToStore": 0,
              "maxInStoreStock": 0,
              "maxShipToHome": 0,
              "maxPickupInStoreStock": 0,
              "locationCode":_.dive(self.get('data'), 'fulfillmentLocationCode')
          }
      };
        if (lineItemInventory) return lineItemInventory;

        var fulfillmentLocationCode = _.dive(self.get('data'), 'fulfillmentLocationCode');

        lineItemInventory = _.find(window.cartView.model.get('fullInventory'), function (lineItemInventory) {
          return lineItemInventory.locationCode == fulfillmentLocationCode && lineItemInventory.productCode === productCode;
        });

        if (!lineItemInventory) {
          //NOT SURE WHY THIS WAS CODED . BUT IT BREAKS ASSEMBLY WHEN ADDED FROM CART.
          lineItemInventory = _.find(window.cartView.model.get('fullInventory'), function (lineItemInventory) {
            return lineItemInventory.locationCode == fulfillmentLocationCode && lineItemInventory.productCode;
          });
        }

        return lineItemInventory || {};
      },
      getLocationCodeFromData: function () {
        return _.dive(this.get('data'), 'fulfillmentLocationCode');
      },
      checkForGroupDeliveryMessage: function () {
        // var thisCode = this.getLocationCodeFromData();
        // var group = this.collection.groupBy(function(item){ return item.getLocationCodeFromData(); });

      },
      isDeliveryLocationValidated:function(){
        var me=this;
        var cartData = this.get("data") ;
        var extendedProperties = window.cartView.model.getExtendedProperties();
        if(extendedProperties && extendedProperties.validatedDeliveryStores){
             return extendedProperties.validatedDeliveryStores.indexOf(cartData.fulfillmentLocationCode) > -1;
        }
        return false;
      },     
      //if exact map only return items that have the some currently selected fulfillment method
      getMatchingLineItems: function (fulfillmentMethod, exactMatch) {
        var self = this;

        var cart = window.cartView.model;
        var storeLocationCode = _.dive(self.get('data'), 'fulfillmentLocationCode');

        if (!fulfillmentMethod) fulfillmentMethod = this.get('fulfillmentMethod');

        var matchingLineItems = cart.get('items').filter(function (cartItem) {
          return cartItem.get('id') != self.get('id') &
            cartItem.get('fulfillmentMethod') == fulfillmentMethod &
            (fulfillmentMethod == "Ship" || _.dive(cartItem.get('data'), 'fulfillmentLocationCode') == storeLocationCode) &
            cartItem.get('product.productCode') == self.get('product.productCode');
        });
        if (!matchingLineItems || matchingLineItems && matchingLineItems.length === 0) return;

        var totalQuantity =
          _.reduce(matchingLineItems, function (sum, cartItem) {
            return sum += cartItem.get('quantity');
          }, self.get('quantity'));

        return {
          splitLineItems: matchingLineItems,
          totalQuantity: totalQuantity
        };
      },
      //i'm running out of names (this is for bogo items. i think)
      getRelatedItemQuantity: function (newFulfillmentMethod) {

        var self = this;

        var cart = window.cartView.model;
        var itemLocationCode = _.dive(self.get('data'), 'fulfillmentLocationCode');

        if (!newFulfillmentMethod) newFulfillmentMethod = this.get('fulfillmentMethod');

        //find other cart items with different id, 
        //same shipping method + fulfillment location
        var matchingLineItems = cart.get('items').filter(function (cartItem) {
          return cartItem.get('id') != self.get('id') &&
            cartItem.get('fulfillmentMethod') == newFulfillmentMethod &&
            _.dive(cartItem.get('data'), 'fulfillmentLocationCode') == itemLocationCode &&
            cartItem.get('product.productCode') == self.get('product.productCode');
        });

        if (!matchingLineItems || matchingLineItems && matchingLineItems.length === 0) return;

        var reservedQuantity =
          _.reduce(matchingLineItems, function (sum, cartItem) {
            return sum += cartItem.get('quantity');
          }, 0);

        console.log(reservedQuantity);

        return reservedQuantity ? reservedQuantity : 0;
      },
      getDeliveryListFromParent: function () {
        return (window.cartView.model.get('deliveryList') ? window.cartView.model.get('deliveryList')[this.get('id')] : {});
      },
      hasDeliveryList: function () {
        return this.collection && window.cartView.model.get('deliveryList');
      },
      setIfIsShipToStore: function (syncSplitLines) {
        var productCode = this.get('product').get('productCode');
        if(serviceSkus.indexOf(productCode)>-1){ return; }

        //var lineItemInventory = this.getInventoryFromParent();
        //item inventory
        var lineItemInventory = this.getInventoryFromParent();

        //check for matching line items
        var lineItemMatches = this.getMatchingLineItems("Pickup");

        var quantity = lineItemMatches ?
          lineItemMatches.totalQuantity : this.get('quantity');

        var data = this.get('data') || {};
        data.isShipToStore = (quantity > lineItemInventory.maxInStoreStock);

        this.set('data', data);
        if (syncSplitLines) this.trigger('sync:shipToStore');
      },
      setFulfillmentDataBag: function (store, overWrite, apiUpdate) {
        if (!store) store = window.cartView.model.get('store');
        var cartData = (this.get('data') || {});
        if (!cartData.fulfillmentLocationCode && !cartData.fulfillmentLocationName) {
          cartData = {
            fulfillmentLocationName: store.name,
            fulfillmentLocationCode: store.code,
            fulfillmentAddress: store.address,
            fulfillmentSupportsPickup: store.fulfillmentTypes.find(function (fulfillment) { return fulfillment.code == "SP"; }) ? true : false
          };

          this.set('data', cartData);
        }
        if (apiUpdate)
          this.apiUpdateSyncPrice();
      },
      nextDeliveryBasedOnInventory: function (quantity, syncDeliveryLineItems, opts) {
        var productCode = this.get('product').get('productCode');
        if(serviceSkus.indexOf(productCode)>-1){ return; }

        if (!opts) opts = {};
        var self = this;
        if (!quantity) {
          var lineItems = this.getMatchingLineItems();
          quantity = lineItems ? lineItems.totalQuantity : this.get('quantity');
        }

        var itemInventory = this.getInventoryFromParent();
        var deliveryInfo = this.getDeliveryListFromParent();
        if (!deliveryInfo || (_.isEmpty(deliveryInfo)) || !deliveryInfo.delivery) return;
        if (quantity > itemInventory.maxInStoreStock && quantity <= itemInventory.maxPickupInStoreStock || opts.forceRefresh) {
          var setNextDelivery = function (deliveryList) {
            deliveryInfo.nextDelivery = util.location.getTruckDeliveryBasedOnRSC(deliveryList, candidateShippers, undefined, self.get('product')&&self.get('product').toJSON()?self.get('product').toJSON():undefined );
            if (deliveryInfo.nextDelivery) {
              self.get('data').nextDelivery = deliveryInfo.nextDelivery;
              if (!opts.silent)
                self.trigger('nextDeliveryUpdated');
            }
          };
          var getEarliestPickupDate =function(deliveryList){
            var today = util.getCurrentTime();
            var nextDelivery,lowestTime;
            if(!deliveryList || !(deliveryList instanceof Array))
            return;
            
            deliveryList.forEach(function (delivery, index) {             
              var cutOffTime = util.getCSTCutoff(delivery.CutoffDate, delivery.CutoffTime); //new Date(delivery.CutoffDate + " " + delivery.CutoffTime);
              if (today.getTime() < cutOffTime.getTime()) {
                if (!lowestTime || cutOffTime.getTime() < lowestTime) {
                  nextDelivery = delivery;
                  lowestTime = cutOffTime.getTime();
                }
              }
            });
            return nextDelivery;
          };
          var quantityToFulfill = quantity - itemInventory.maxInStoreStock;
          console.log(quantityToFulfill);

          var fulfillersWithTotalQuantity = _.filter(itemInventory.shipToStoreInventory, function (transferInventory) {
            return (transferInventory.softStockAvailable > quantityToFulfill);
          });
          var candidateShippers = _.pluck(fulfillersWithTotalQuantity.length ? fulfillersWithTotalQuantity : itemInventory.shipToStoreInventory, 'site');

          if (candidateShippers) {
            deliveryInfo.nextDelivery = util.location.getTruckDeliveryBasedOnRSC(deliveryInfo.delivery, candidateShippers, undefined, self.get('product')&&self.get('product').toJSON()?self.get('product').toJSON():undefined );
            if (!deliveryInfo.nextDelivery && deliveryInfo.delivery && deliveryInfo.delivery.length > 0)
            deliveryInfo.nextDelivery =getEarliestPickupDate(deliveryInfo.delivery); //Does not depends on RSC.
            if (deliveryInfo.nextDelivery) {
              this.get('data').nextDelivery = deliveryInfo.nextDelivery;
              if (!opts.silent)
                this.trigger('nextDeliveryUpdated');
            }
          }
          else {
            deliveryInfo.nextDelivery = util.location.getTruckDeliveryBasedOnRSC(deliveryInfo.delivery, undefined, undefined, self.get('product')&&self.get('product').toJSON()?self.get('product').toJSON():undefined );
            if (!deliveryInfo.nextDelivery && deliveryInfo.delivery && deliveryInfo.delivery.length > 0 )
            deliveryInfo.nextDelivery =getEarliestPickupDate(deliveryInfo.delivery); //Does not depends on RSC.
            this.get('data').nextDelivery = deliveryInfo.nextDelivery;
          }
          if (syncDeliveryLineItems)
            this.trigger('sync:delivery');

          return deliveryInfo.nextDelivery;
        }
      },
      apiUpdateSyncPrice: function () {
        var cartData = this.get('data'), self = this;
        var locSyncNotNeeded = ((!cartData.isGoogleProduct) && (!cartData.isB2BPrice) && this.isPickupLocationCurrentStore());
        if(!cartData.fulfillmentLocationCode && this.get('product').get('productType') === "Gift Card") cartData.fulfillmentLocationCode = this.get('fulfillmentLocationCode');


        // function removeRelatedItemLinkIds(){
        //   if(!self.get('product').isAssemblyType()){
        //     var options = self.get('product').get('options');
        //     if(options && options.models && options.models.length>0){
        //       options.models.forEach(function(option){
        //         if(option.get('attributeFQN')===HyprLiveContext.locals.themeSettings.assemblyExtra ){
        //           if(!option.get('value') && (!option.get('values') || !option.get('values')[0] || !option.get('values')[0].isSelected)){
        //             delete self.get('data').relatedItemLinkId;
        //           }
        //         }
        //         if(option.get('attributeFQN')===HyprLiveContext.locals.themeSettings.warrantySkuAttr){
        //           if(!option.get('value') && (!option.get('values') || !option.get('values')[0] || !option.get('values')[0].isSelected)){
        //             delete self.get('data').relatedItemLinkIdWarranty;
        //           }
        //         }
        //       });
        //     }
        //   }
        // }
        
        var updateShippingEstimate = _.debounce(function(){
          var cartModel = window.cartView.model;
          if(cartModel.get("cartShipZipCode"))
          {
            cartModel.getCartShippingEstimate(cartModel.get("cartShipZipCode"),true);
          }
          else
          window.cartView.model.trigger("ship-estimate-loaded");
        },400);

        var hasSTHItems =function(){
          try{
            var _cartItems= window.cartView.model.get("items") && window.cartView.model.get("items").toJSON();
            return _cartItems && _(_cartItems).any(function (item) { return item.fulfillmentMethod === "Ship" && _.dive(item, 'product.productType') !== 'Gift Card'; });
          }
          catch(e)
          {
            return false;
          }
        };

        this.syncApiModel();
        var purchaseLocation = cartData.isB2BPrice ? cartData.b2bPurchaseLocation : cartData.isGoogleProduct ? "corp" : cartData.fulfillmentLocationCode;
        var revertCode = window.cartView.model.get('store').code;

        //if for some reason revert code is gone, check header purchase location
        self.isLoading(true);
        var revertOp = function () {
          self.isLoading(false);
          if (locSyncNotNeeded) return Promise.resolve();
          self.apiModel.api.context["purchase-location"] = revertCode;
          //just in case this is causing issues
          return api.request("POST", "/location/set?code=" + revertCode);

        };
        var toggleLocCodePromise = locSyncNotNeeded ? Promise.resolve() : api.request("POST", "/location/set?code=" + purchaseLocation);
        if (!locSyncNotNeeded) {
          this.apiModel.api.context["purchase-location"] = purchaseLocation;
        }
        return new Promise(function (res, rej) {
          var updateResp;
          toggleLocCodePromise.then(function () {
            // removeRelatedItemLinkIds();
            return self.apiUpdate().then(function(){ return window.cartView.model.apiModel.get(); });
          }).then(function (r) {
            updateResp = r;
            return revertOp();
          }).then(function () {
            //Shipping Estimate
            if (HyprLiveContext.locals.themeSettings.enableProshipAutoSync && HyprLiveContext.locals.themeSettings.enableCartEstimateShipping) {
              if (self.get("fulfillmentMethod") === 'Ship' || hasSTHItems()) {
                window.cartView.model.trigger("ship-estimate-loading");
                updateShippingEstimate();
              }
            }
            else if (HyprLiveContext.locals.themeSettings.enableCartEstimateShipping) {
              window.cartView.model.trigger("ship-estimate-reset");
            }

            res(updateResp);
          }).catch(function (e) {
            console.error(e);
            return revertOp();
          });
        });
      },      

      // //this shouldn't be used anymore
      // updateItemAndPriceLocation:function(){
      //     var cartData = this.get('data');
      //     var self = this;
      //     if((!cartData.isGoogleProduct) && (this.isPickupLocationCurrentStore())){
      //         return this.apiUpdate();
      //     } else {
      //         var purchaseLocation = cartData.isGoogleProduct ? "corp" : cartData.fulfillmentLocationCode;
      //         var revertCode = window.cartView.model.get('store').code;
      //         var revertLocationCode = function(){
      //             return api.request("POST", "/location/set?code="+ revertCode);
      //         };              
      //         return api.request("POST", "/location/set?code="+ purchaseLocation)
      //                 .then(function(){
      //                     return self.apiUpdate();
      //                 })
      //                 .catch(function(error){console.log(error);})
      //                 .then(function(){
      //                     self.isLoading(false);
      //                     self.isLoading(false);
      //                     self.setMaxQuantityForFulfillment();    
      //                 }); 
      //     }
      // },
      getADStoreSummary: function () {
        var storeCode = this.getLocationCodeFromData();
        if (this.get('storeSummary')) return this.get('storeSummary');

        var adInstance = window.cartView.model.getAssemblyDeliveryByCode(storeCode);
        if (adInstance && adInstance.summary) return adInstance.summary;
      },
      setMaxQuantityForFulfillment: function (fulfillmentMethod) {
        var productCode = this.get('product').get('productCode');
        if(serviceSkus.indexOf(productCode)>-1){ return; }

        if (!fulfillmentMethod) fulfillmentMethod = this.get('fulfillmentMethod');
        var inventory = this.getInventoryFromParent();
        var maxQuantity;
        if (fulfillmentMethod == "Ship") maxQuantity = inventory.maxShipToHome;
        if (fulfillmentMethod == "Pickup") maxQuantity = inventory.maxPickupInStoreStock;
        this.set('maxQty', maxQuantity);
      },
      isTargetedARDiscount:function(){
        var promoAttr = this.get('product.properties').find(function (property) {
          return property.get('attributeFQN') === "tenant~promotional-code";
        });
        if(promoAttr)
        {
         return _(promoAttr.get("values")).any(function(attrVal){
            return attrVal.value==="IS_IC";
         });

        }
        return false;
      },
      isPaintItem:function()
      {
           var additionalData = this.get("data");
           if(additionalData && additionalData.selectedColorOption)
           {
              return true;     
           }
         return false;

      },
      paintMetaData : function()
      {
        var data = this.get("data");

        if(data && data.selectedColorOption){          
        var _paintMetaData = _.extend({},
          { description : data.selectedColorOption.colorCode + " " + data.selectedColorOption.colorName},
          data.selectedColorOption,
          data.preSelectedPaintOptions
          );
        var paintOptions=HyprLiveContext.locals.themeSettings.paintOptionsInfo.paintOptions;  
        var paintThemeSetting = _.flatten(_(paintOptions).map(function(x) { return x.options;}));
        var selectedPaintSetting=_(paintThemeSetting).find(function(opt){return opt.subBrandLabel=== _paintMetaData.subBrand; });
        if(selectedPaintSetting)
        _.extend(_paintMetaData,{subBrandImage:selectedPaintSetting.subBrandImage});
        return _paintMetaData;      
        }
        else
        return false;

      },
      getItemShippingEstimate: function(zipCode){
        if(!zipCode || zipCode.length<5)
          return ;
        var self = this,  shippingEstimatesForZip = self.get("shippingEstimatesForZip") || {};
        if(shippingEstimatesForZip[zipCode]){
          self.set("shippingEstimate", shippingEstimatesForZip[zipCode]);
          self.set("shipZipCode", zipCode.toString().substr(0,5));
          return Promise.resolve();
        }
        return self.get("product").getShippingEstimate(zipCode)
            .then(function(shippingEstimate){
              shippingEstimatesForZip[zipCode] = shippingEstimate;
              self.set("shippingEstimatesForZip", shippingEstimatesForZip);
              self.set("shippingEstimate", shippingEstimate);
              self.set("shipZipCode", zipCode.toString().substr(0,5));
            })
            .catch(function(){
              self.unset("shippingEstimate");
              self.unset("shipZipCode");
            });
      },
      getAvailableStoreCount: function(isItemQuantityUpdated){
        var self = this,
            cartModel = this.collection ? this.collection.parent : window.cartView.model,
            fullInventory = cartModel.get("fullInventory"),
            itemsNearbyStoreCount = {},
            storeCode = self.get("data").fulfillmentLocationCode || self.get("purchaseLocation") ,
            assemblyItems = HyprLiveContext.locals.themeSettings.assemblyDeliverySkus.split(",") || [],
            pickupStockAvailable = false,
            showNeedItFasterMessage=false,
            productCode = self.get("product").get("productCode"),
            quantity=self.get("quantity"),
            itemInventory,
            supportsPickup = self.supportsInStorePickup();

        if(!fullInventory)
          return false;
        
        if(!fullInventory[self.id]){
          if(fullInventory){
            Object.keys(fullInventory).forEach(function(key){
              var inv = fullInventory[key];
              if(inv && inv.storeInventory && inv.storeInventory.productCode===productCode )
                itemInventory = inv;
            });
            if(!itemInventory)
              return false;
          }
        }else
          itemInventory = fullInventory[self.id];

        if(itemInventory && itemInventory.locationCode && storeCode && storeCode.toString()===itemInventory.locationCode.toString() && itemInventory.maxShipToStore+itemInventory.maxInStoreStock>0){
          pickupStockAvailable = true;       
          var enableStsNeedItFaster = HyprLiveContext.locals.themeSettings.enableStsNeedItFaster || false;
          var needItfasterLeadTime = (HyprLiveContext.locals.themeSettings.needItfasterLeadTime && parseInt(HyprLiveContext.locals.themeSettings.needItfasterLeadTime)) || 3; //days
          var todaySystemDate = require.mozuData("pagecontext").now && new Date(require.mozuData("pagecontext").now) && new Date(require.mozuData("pagecontext").now).getTime();
          var expectedDate = self.get("data") && self.get("data").nextDelivery && self.get("data").nextDelivery.ExpectedDeliveryDate &&
                        (itemInventory.maxInStoreStock >= quantity ? new Date(self.get("data").nextDelivery.ISPUSameDayDate).getTime() :new Date(self.get("data").nextDelivery.ExpectedDeliveryDate).getTime());
          needItfasterLeadTime = needItfasterLeadTime * 24 * 60 * 60 * 1000;
          if(expectedDate - todaySystemDate < 0){
            showNeedItFasterMessage=false;
            self.unset("showNeedItFasterMessage");
          }else if (expectedDate && todaySystemDate && needItfasterLeadTime && needItfasterLeadTime <= expectedDate - todaySystemDate) {
            showNeedItFasterMessage = true;
            self.set("showNeedItFasterMessage", true);
          }
          else{
            showNeedItFasterMessage=false;
            self.unset("showNeedItFasterMessage");
          }
        }
    
        self.set("pickupStockAvailable", pickupStockAvailable);

        if(cartModel.get("itemsNearbyStoreCount") )
          itemsNearbyStoreCount = cartModel.get("itemsNearbyStoreCount");
          
        if(!fullInventory || !fullInventory[self.id])
          return;

        var getNearbyStoresInventoryPromise = function(){
          return new Promise(function(resolve, reject){
            var cartModel = window.cartView.model;
            var nearbyStoreInventoryCache = cartModel.get("nearbyStoreInventoryCache") || {};
            if (nearbyStoreInventoryCache[self.id])
              resolve(nearbyStoreInventoryCache[self.id]);
            else
              return util.location.getNearbyStores(storeCode)
                .then(function(neighbourStores){
                  var _storeList=_(neighbourStores).map(function(_store){ return _store.code;});
                  if(_storeList){
                    return api.request("POST", "/getLocationInventory", {
                      "productCodes": [productCode],
                      "locationCodes": _storeList
                    }).then(function (resp) {
                      var cartModel = window.cartView.model;
                      var nearbyStoreInventoryCache = cartModel.get("nearbyStoreInventoryCache") || {};
                      var source1 = {};
                      source1[self.id] = resp;
                      _.extend(nearbyStoreInventoryCache, source1);
                      cartModel.set("nearbyStoreInventoryCache", nearbyStoreInventoryCache);
                      resolve(resp);
                    }).catch(function(){
                      reject();
                    });
                  }else{
                    reject();
                  }
                });
          });
        };

        var setitemsNearbyStoreCountAndNearbyMessage = function(resp){
          var cartModel = window.cartView.model;
          var itemsNearbyStoreCount = {};
          if(cartModel.get("itemsNearbyStoreCount") )
              itemsNearbyStoreCount = cartModel.get("itemsNearbyStoreCount");

          var availableStores =  _.chain(resp).dive("items")
                                  .filter(function(item){ return (showNeedItFasterMessage? item.softStockAvailable >= quantity : item.softStockAvailable > 0);})
                                  .map(function(item){ return item.locationCode;}).value();
          var totalStores = availableStores && availableStores.length || 0;
          if(totalStores > 10)
            totalStores=10;
          if(totalStores===0){
            self.unset("showNeedItFasterMessage");
          }
          var source = {};
          source[self.id] = totalStores;
          _.extend(itemsNearbyStoreCount, source);
          cartModel.set("itemsNearbyStoreCount", itemsNearbyStoreCount);
          self.set("availableStoreCount", totalStores);          
          return totalStores;
        };

        if(supportsPickup && (!pickupStockAvailable||showNeedItFasterMessage) && itemsNearbyStoreCount[self.id] === undefined && !self.get("nearbyStoresCallDone") && assemblyItems.indexOf(self.get("product").get("productCode"))<0 ){
          self.set("nearbyStoresCallDone", true);
          return getNearbyStoresInventoryPromise()
            .then(function(resp){
               setitemsNearbyStoreCountAndNearbyMessage(resp);
               window.cartView.render();
            })
            .catch(function(e){
                console.log(e);
                return false;
            });
        }else if(isItemQuantityUpdated && showNeedItFasterMessage){
          self.set("nearbyStoresCallDone", true);
          return getNearbyStoresInventoryPromise()
            .then(function (resp) {
              setitemsNearbyStoreCountAndNearbyMessage(resp);
              //window.cartView.render();
              
            })
            .catch(function(e){
              console.log(e);
              return false;
            });
        }
        if(itemsNearbyStoreCount && itemsNearbyStoreCount[self.id] && (!pickupStockAvailable||showNeedItFasterMessage)){
          self.set("availableStoreCount", itemsNearbyStoreCount[self.id]);
        }
        if(pickupStockAvailable && !showNeedItFasterMessage){
          self.unset("availableStoreCount");
        }
        
      },
      freeAssemblyEligible: function(){
        var item=this;
        var freeAssemblyDynamicCategory = _.chain(window.cartView.model.toJSON().items).find(function (_item) {
          return _item.product.productCode === item.get('product.productCode');
        }).dive('product.categories').find(function (category) {
          return category.content && (category.content.name.toLowerCase() === 'free assembly');
        }).value();
        var description = freeAssemblyDynamicCategory && freeAssemblyDynamicCategory.content.description;
        var minimumCategoryPurchase = description && parseFloat(description.split('|')[0]);
        var cartJSON = window.cartView.model.toJSON();
        var aceRewardsId = cartJSON.isARMember || util.sessionStorage.get('aceRewardsId');
        if (
          aceRewardsId &&
          freeAssemblyDynamicCategory &&
          (
            window.cartView.model.get('total') -
            window.cartView.model.get('items').models.filter(function (_item) {
              return !_.find(_item.get('product.categories'), function (cat) {
                return (cat.categoryId === freeAssemblyDynamicCategory.categoryId) || (cat.id === freeAssemblyDynamicCategory.categoryId);
              }) ||
              _item.get('product.properties').filter(function (property) {
                  return property.get('attributeFQN') === "tenant~product-type-attribute" &&
                    property.get('values')[0].value === 'Assembly Charge';
                }).length;
            }).reduce(function (acc, _item) {
              return acc + _item.get('total');
            }, 0) >= minimumCategoryPurchase
          )
        ) {
          return true;
        }else{
          return false;
        }
      },
      setSkuStoreOverride: function(){
        var item=this;
        var allSkuStoreOverRides =  window.cartView &&  window.cartView.model && window.cartView.model.get("allSkuStoreOverRides") || {};
        var itemStore = item.get("data") && item.get("data").fulfillmentLocationCode ? item.get("data").fulfillmentLocationCode : item.get("fulfillmentMethod")==="Pickup" ? item.get("fulfillmentLocationCode") : item.get("purchaseLocation") ;
        var productCode = item.get("product").get("productCode");
        
        if(!allSkuStoreOverRides) return;

        if(allSkuStoreOverRides[itemStore+"-"+productCode] && (!item.get("skuStoreOverRide") || !_.isEqual(item.get("skuStoreOverRide"), allSkuStoreOverRides[itemStore+"-"+productCode]) ) ){
      
          var skuStoreOverridesRes = allSkuStoreOverRides[itemStore+"-"+productCode];
          item.set("skuStoreOverRide", allSkuStoreOverRides[itemStore+"-"+productCode]);
          if(item.supportsDelivery() || (skuStoreOverridesRes.DeliveryRestrictedFlag==="N" && skuStoreOverridesRes.DeliveryOverrideCode==="Y")){
            if(!item.supportsDelivery())
            {
              var _product=item.get("product");
              item.set("isDeliveryOverrideEnabled",true);
              if(_product)
              _product.set("isDeliveryOverrideEnabled",true);
            }          
            var deliveryOverrideSurcharge = [];
            if(skuStoreOverridesRes.DeliveryL1UpperLimitQty && skuStoreOverridesRes.DeliveryL1SurchargeAmount ){
              deliveryOverrideSurcharge.push({
                quantityLowerLimit : skuStoreOverridesRes.DeliveryL1LowerLimitQty ? parseFloat(skuStoreOverridesRes.DeliveryL1LowerLimitQty) : 1,
                quantityUpperLimit : parseFloat(skuStoreOverridesRes.DeliveryL1UpperLimitQty),
                surchargeAmount: parseFloat(skuStoreOverridesRes.DeliveryL1SurchargeAmount)
              });
            }
            if(skuStoreOverridesRes.DeliveryL2UpperLimitQty && skuStoreOverridesRes.DeliveryL2SurchargeAmount ){
              deliveryOverrideSurcharge.push({
                quantityLowerLimit : skuStoreOverridesRes.DeliveryL2LowerLimitQty && parseFloat(skuStoreOverridesRes.DeliveryL2LowerLimitQty) || 1,
                quantityUpperLimit : parseFloat(skuStoreOverridesRes.DeliveryL2UpperLimitQty),
                surchargeAmount: parseFloat(skuStoreOverridesRes.DeliveryL2SurchargeAmount)
              });
            }
            if(skuStoreOverridesRes.DeliveryL3UpperLimitQty && skuStoreOverridesRes.DeliveryL3SurchargeAmount ){
              deliveryOverrideSurcharge.push({
                quantityLowerLimit : skuStoreOverridesRes.DeliveryL3LowerLimitQty ? parseFloat(skuStoreOverridesRes.DeliveryL3LowerLimitQty) : 1,
                quantityUpperLimit : parseFloat(skuStoreOverridesRes.DeliveryL3UpperLimitQty),
                surchargeAmount: parseFloat(skuStoreOverridesRes.DeliveryL3SurchargeAmount)
              });
            }
            if(skuStoreOverridesRes.DeliveryL4UpperLimitQty && skuStoreOverridesRes.DeliveryL4SurchargeAmount ){
              deliveryOverrideSurcharge.push({
                quantityLowerLimit : skuStoreOverridesRes.DeliveryL4LowerLimitQty ? parseFloat(skuStoreOverridesRes.DeliveryL4LowerLimitQty) : 1,
                quantityUpperLimit : parseFloat(skuStoreOverridesRes.DeliveryL4UpperLimitQty),
                surchargeAmount: parseFloat(skuStoreOverridesRes.DeliveryL4SurchargeAmount)
              });
            }
            if(skuStoreOverridesRes.DeliveryL5UpperLimitQty && skuStoreOverridesRes.DeliveryL5SurchargeAmount ){
              deliveryOverrideSurcharge.push({
                quantityLowerLimit : skuStoreOverridesRes.DeliveryL5LowerLimitQty ? parseFloat(skuStoreOverridesRes.DeliveryL5LowerLimitQty) : 1,
                quantityUpperLimit : parseFloat(skuStoreOverridesRes.DeliveryL5UpperLimitQty),
                surchargeAmount: parseFloat(skuStoreOverridesRes.DeliveryL5SurchargeAmount)
              });
            }
            var quantity = item.get("quantity");
            var deliveryOverrideSurchargeAmount = deliveryOverrideSurcharge.find(function(c){
              return quantity>=c.quantityLowerLimit && quantity<=c.quantityUpperLimit;
            });
            item.set("deliveryOverrideSurcharge", deliveryOverrideSurcharge);
            item.set("deliveryOverrideSurchargeAmount", deliveryOverrideSurchargeAmount?deliveryOverrideSurchargeAmount.surchargeAmount:0);
          }else{
            item.set("deliveryOverrideSurcharge", false);
          }

          var isAssemblyRestricted =false;
          if(skuStoreOverridesRes && skuStoreOverridesRes.AssemblyOverideCode==="Y")
          {
            isAssemblyRestricted = skuStoreOverridesRes.AssemblyRestrictedFlag==="Y" ? true:false;
          }

          if (item.freeAssemblyEligible()) {
            item.set("assemblyOverrideSurchargeAmount", false);
            window.cartView.render();
            return;
          }

          if(!isAssemblyRestricted && skuStoreOverridesRes){
            var assemblyOverrideSurcharge = skuStoreOverridesRes.AssemblySurchargeAmount ? parseFloat(skuStoreOverridesRes.AssemblySurchargeAmount) : 0;
            item.set("assemblyOverrideSurchargeAmount", assemblyOverrideSurcharge);
          }else{
            item.set("assemblyOverrideSurchargeAmount", false);
          }
          //window.cartView.render();
        }
      },
      getAssemblyOverrideSurchargeAmount: function(){
        var item=this;
        if(item.get("assemblyOverrideSurchargeAmount")===undefined){
          if(item.freeAssemblyEligible()) {
            item.set("assemblyOverrideSurchargeAmount", false);
            return false;
          }else{
            var itemStore = item.get("data") && item.get("data").fulfillmentLocationCode ? item.get("data").fulfillmentLocationCode : item.get("fulfillmentMethod")==="Pickup" ? item.get("fulfillmentLocationCode") : item.get("purchaseLocation") ;
            var prodCode = item.get("product").get("productCode");
            var key = itemStore+"-"+prodCode;
            var allSkuStoreOverRides =  window.cartView &&  window.cartView.model && window.cartView.model.get("allSkuStoreOverRides") || {};
            var AssemblySurchargeAmount = allSkuStoreOverRides[key] && allSkuStoreOverRides[key].AssemblySurchargeAmount ? parseFloat(allSkuStoreOverRides[key].AssemblySurchargeAmount) : 0;
            item.set("assemblyOverrideSurchargeAmount", AssemblySurchargeAmount);
            return AssemblySurchargeAmount;
          }
        }else{
          return item.get("assemblyOverrideSurchargeAmount");
        }
      },
      syncAssemblyHandlingAmount: function(forceSync, handlingAmountToReduce){
        var serviceItem=this;
        var productCode = serviceItem.get("product").get("productCode");
        var lineData = serviceItem.get("data");
        var handlingAmountInSync = true;
        var cartItems = window.cartView.model.get("items").toJSON();
        if(HyprLiveContext.locals.themeSettings.assemblySkus.indexOf(productCode)>-1 && lineData.eachItemHandlingAmount){
          var allSkuStoreOverRides =  window.cartView &&  window.cartView.model && window.cartView.model.get("allSkuStoreOverRides") || {};
          // Object.keys(lineData.eachItemHandlingAmount).forEach(function(key){
          //   var AssemblySurchargeAmount = allSkuStoreOverRides[key] && allSkuStoreOverRides[key].AssemblySurchargeAmount ? parseFloat(allSkuStoreOverRides[key].AssemblySurchargeAmount) : 0;
          //   if(lineData.eachItemHandlingAmount[key]!==AssemblySurchargeAmount){
          //     handlingAmountInSync=false;
          //     lineData.eachItemHandlingAmount[key]=AssemblySurchargeAmount;
          //   }
          // });
          // if(!handlingAmountInSync || forceSync){
            var totalHandlingAmount = 0;
            Object.keys(lineData.eachItemHandlingAmount).forEach(function(key){
              var parentItem = cartItems.filter(function(item){
                return serviceItem.get("parentItemId") === item.id; 
                // var itemStore = item.data && item.data.fulfillmentLocationCode ? item.data.fulfillmentLocationCode : (item.fulfillmentMethod==="Pickup" || item.fulfillmentMethod==="Delivery") ? item.fulfillmentLocationCode : item.purchaseLocation ;
                // var assemblyOptionExists = item.product.options && item.product.options.find(function(opt){ return opt.attributeFQN==="tenant~assembly" && _.dive(opt,'values.0.isSelected');});
                // return assemblyOptionExists && serviceItem.parentItemId && serviceItem.parentItemId===parentItem.id  && key===itemStore+"-"+item.product.productCode;
              });
              var AssemblySurchargeAmount;
              //only one parent item now, still code should work
              if(parentItem && parentItem.length && parentItem[0].assemblyOverrideSurcharge===undefined){
                var charge = window.cartView.model.attributes.items._byId[parentItem[0].id].getAssemblyOverrideSurchargeAmount();
                AssemblySurchargeAmount = charge || 0;
              }else{
                AssemblySurchargeAmount =parentItem && parentItem.length && parentItem[0].assemblyOverrideSurcharge || 0;
              }
              if(lineData.eachItemHandlingAmount[key]!==AssemblySurchargeAmount){
                handlingAmountInSync=false;
                lineData.eachItemHandlingAmount[key]=AssemblySurchargeAmount;
              }
              var parentItemQuantity = parentItem.reduce(function(total, pItem){
                total+=pItem.quantity;
                return total;
              },0);
              totalHandlingAmount += lineData.eachItemHandlingAmount[key]*parentItemQuantity;
            });
            if(handlingAmountToReduce){
              totalHandlingAmount=totalHandlingAmount-handlingAmountToReduce;
            }
            serviceItem.set("handlingAmount", totalHandlingAmount);
          // }
        }
        return handlingAmountInSync;
      }, 
      supportsInStorePickup: function(){
        return this.get("product").supportsInStorePickup();
      },
      checkSkuStoreOverride: function(){
        var item = this;
        this.isLoading(true);
        var itemStore = item.get("data") && item.get("data").fulfillmentLocationCode ? item.get("data").fulfillmentLocationCode : item.get("fulfillmentMethod")==="Pickup" ? item.get("fulfillmentLocationCode") : item.get("purchaseLocation") ;
        var sku = item.get("product").get("productCode");
        var allSkuStoreOverRides = window.cartView.model.get("allSkuStoreOverRides") || {};
        var getStoreOverrideTask;
        if(allSkuStoreOverRides[itemStore+"-"+sku])
          getStoreOverrideTask = Promise.resolve(allSkuStoreOverRides[itemStore+"-"+sku]);
        else
          getStoreOverrideTask = util.location.getStoreOverrideConfig(sku, itemStore);
        
        return getStoreOverrideTask
          .then(function(skuStoreOverRidesRes){
            if(skuStoreOverRidesRes && skuStoreOverRidesRes.Id){
              allSkuStoreOverRides[skuStoreOverRidesRes.StoreNum+"-"+skuStoreOverRidesRes.StockNum]=skuStoreOverRidesRes;
              item.set("skuStoreOverRide", skuStoreOverRidesRes);
              window.cartView.model.set("allSkuStoreOverRides", allSkuStoreOverRides);
              
              //After store change
              // if previously selected fulfillmentMethod is restricted in new store, itemUpdate required
              // if adGrillService has to be changed, itemUpdate required
              var adGrillServiceChanged=false, prevFulfillmentMethodRestricted=false, lineData = item.get('data');
              
              
              if(lineData.fulfillmentMethod==="Pickup" && ( skuStoreOverRidesRes.BOPISNotAllowed==="Y"||(skuStoreOverRidesRes.DeliveryOverrideCode==="Y" && skuStoreOverRidesRes.DeliveryRestrictedFlag==="Y") ) ){
                prevFulfillmentMethodRestricted=true;
                item.set('data', _.omit(lineData, ['fulfillmentMethod']));
              }
              if(skuStoreOverRidesRes.DeliveryOverrideCode==="Y" || skuStoreOverRidesRes.DeliveryRestrictedFlag==="N")
              {
                item.set("isDeliveryOverrideEnabled",true);
              }

              if(prevFulfillmentMethodRestricted){
                return item.apiUpdate().then(function(){ return window.cartView.model.apiGet(); });
              }
              else{
                  return ;
              }
            }
          })
          .then(function(){
              window.cartView.render();
              item.isLoading(false);
          })
          .catch(function(){
              item.isLoading(false);
          });
      },
      syncChildAndParentItems: function(oldParentId, newParentId){
        var me=this, currentId = this.id, currentItemQuantity = this.get("quantity");
        
        return window.cartView.model.apiGet()
          .then(function(){
            var taskList =[];
            var allCartItems = window.cartView.model.get("items") || me.collection;
            if(newParentId){
              currentId = newParentId;
              currentItemQuantity = allCartItems.find(function(item){
                return item.id === currentId;
              }).get("quantity");
            }

            var doTheTask = function(taskItem){
              if(taskItem.task==="updateQuantity"){
                return taskItem.item.apiModel.updateQuantity(taskItem.quantity).then(function(){ 
                  return window.cartView.model.apiGet(); 
                });
              }
              else if(taskItem.task==="delete"){
                return taskItem.item.apiDel().then(function () { 
                  allCartItems.remove(taskItem.item.id);
                  return window.cartView.model.apiGet();
                });
              }
              else
                return Promise.resolve();
            };

            allCartItems.forEach(function(item){
              //remove orphan childs
              if(oldParentId && item.get("parentItemId") === oldParentId){
                taskList.push({
                  item : item,
                  task: "delete" 
                });
              }

              // update existing child
              if(item.get("parentItemId") === currentId && item.get("quantity")!==currentItemQuantity){
                taskList.push({
                  item : item,
                  quantity: currentItemQuantity,
                  task: "updateQuantity" 
                });
              }
            });

            if (taskList && taskList.length > 0) {     
              //runing tasks in synchronous because of KIBO cart limitation
              return _(taskList).reduce(function(previousTask, taskItem){
                  return previousTask.then(function(){
                    return doTheTask(taskItem);
                  });
              },Promise.resolve());     
            }else{
              return;
            }
          });
        
      },
      addressesDeliveryInfoCheck: function(){
        if(!window.cartView || !window.cartView.model.get("userProvidedContact") || !window.cartView.model.get("userProvidedContact").address ){
          return;
        }else {
          var currentAddressDeliveryInfo, address = window.cartView.model.get("userProvidedContact").address;
          if(this.get("data").addressesDeliveryInfo){
            var me = this, 
                timeCheck = 2*60*60*1000, //mini seconds
                currentTimeStamp = new Date().getTime();
            if(!address.geo){
              return;
            }
            var coords = {
              lat1 : address.geo.lat || 0,
              lng1 : address.geo.lng || 0
            };

            var addressesDeliveryInfo = this.get("data").addressesDeliveryInfo || [];
            currentAddressDeliveryInfo = addressesDeliveryInfo.find(function(a){
              if(!a.address || !a.address.geo){
                return false;
              }
              coords.lat2 = a.address.geo.lat;
              coords.lng2 = a.address.geo.lng;
              return util.getDistance(coords)<=0.1;
            });
          }
            
          if(currentAddressDeliveryInfo){
            currentAddressDeliveryInfo.address = address;
            Object.keys(currentAddressDeliveryInfo.skuInfo).forEach(function(key){ 
              if(currentTimeStamp > parseInt(currentAddressDeliveryInfo.skuInfo[key].timeStamp)+timeCheck )
                delete currentAddressDeliveryInfo.skuInfo[key];
            });
            this.get("product").set("currentAddressDeliveryInfo", currentAddressDeliveryInfo);
          }else {
            this.get("product").set("currentAddressDeliveryInfo", {
              address: window.cartView.model.get("userProvidedContact").address,
              skuInfo: {}
            });
          }

          // var noNearbyStoresInfoInCart = me.get("data").noNearbyStoresInfo;
          // var id = me.get("fulfillmentLocationCode")+"-"+me.get("product").get("productCode");
          // var itemNoNearbyStoresInfoInCart = noNearbyStoresInfoInCart.find(function(n){
          //   return n.id === id && (currentTimeStamp < parseInt(n.timeStamp)+timeCheck);
          // });
          // var validatedAddressList = itemNoNearbyStoresInfoInCart && itemNoNearbyStoresInfoInCart.validatedAddressList || []; //no nearby stores address list
          // //if any one address in the list is nearer from the delivery address
          // if(validatedAddressList.some(function(a){
          //   coords.lat2 = a.geo.lat;
          //   coords.lng2 = a.geo.lng;
          //   return util.getDistance(coords)<=0.1;
          // })){
          //   me.set("noNearbyStoresInfo", me.get("data").noNearbyStoresInfo);
          // }
        }
      },
      notInDeliveryRadius: function(){
        var me=this,
            storeCode = this.get("data").fulfillmentLocationCode,
            contact = window.cartView.model.get("userProvidedContact"),
            instance = window.cartView.model.getAssemblyDeliveryByCode(storeCode),
            allItems = window.cartView.model.toJSON()  && window.cartView.model.toJSON().items,
            extendedDeliveryItem = me.get("product").getProductAttributeFirstValue("tenant~extended-radius-item")==="Y",
            enableDeliveryOption = me.get("product").enableDeliveryOption();
        
        var cartExtendedRadiusEnabled=false;
        if(allItems && allItems.length){
          _(allItems).each(function(itm){
            if(itm.fulfillmentMethod==="Delivery"){
            var props = _(itm).dive('product.properties');
            cartExtendedRadiusEnabled = cartExtendedRadiusEnabled || (props && props.length && _(props).any(function(prop){ return prop.attributeFQN==="tenant~extended-radius-item" && _(prop).dive("values.0.value")==="Y";}));            
            }
          });
        }


        if (enableDeliveryOption && instance && storeCode && contact && contact.address && contact.address.geo) {
          return !instance.store.inDeliveryRadius(contact.address,(extendedDeliveryItem || cartExtendedRadiusEnabled)?true:false);
        }
      }
      // maxInStoreStock
      // maxShipToHome
      // maxShipToStore
      // maxPickupInStoreStock

    }),
    StoreLocationsCache = Backbone.Collection.extend({
      addLocation: function (location) {
        this.add(new LocationModels.Location(location), { merge: true });
      },
      getLocations: function () {
        return this.toJSON();
      },
      getLocationByCode: function (code) {
        if (this.get(code)) {
          return this.get(code).toJSON();
        }
      }
    }),
    Cart = Backbone.MozuModel.extend({
      mozuType: 'cart',
      handlesMessages: true,
      requiredBehaviors: [1008],
      helpers: ['isEmpty', 'count', 'pickupItemsExcludingServices', 'deliveryItemsSelected', "availableCoupons","appliedOrderCoupon","rpmOfferCoupon", "deliveryOverrideSurchargeTotal","deliveryAddress", "isApplePayAvailable","isConsumerMobile"],
      relations: {
        items: Backbone.Collection.extend({
          model: CartItem
        }),
        storeLocationsCache: StoreLocationsCache
      },

      initialize: function () {
        var self = this;

        this.get("items").on('sync remove', function () {
          return self.fetch()
            .then(function (cart) {
              if (
                !cart
                  .get('items')
                  .filter(function (item) {
                    return !item.get('product').isAssemblyType();
                  })
                  .length
              ) return api.del('cart');
            });
        }, this)
          .on('loadingchange', this.isLoading, this);
        this.listenTo(Backbone, "ad:cart:assemblytoggled", function () {
          self.fetch({ merge: true });
        });
        this.listenTo(Backbone, "ad:cart:warrantytoggled", function () {
          self.fetch({ merge: true });
        });
        this.get("items").each(function (item, el) {
          if (item.get('fulfillmentLocationCode') && item.get('fulfillmentLocationName')) {
            self.get('storeLocationsCache').addLocation({
              code: item.get('fulfillmentLocationCode'),
              name: item.get('fulfillmentLocationName')
            });
          }
        });
        //this.listenTo(this.get)
          
        var zipCode = $.cookie("estimate-zip") ;
        if(zipCode)
        {
            self.set("cartShipZipCode",zipCode.toString().substr(0,5));
        }        
        if(!zipCode){
          util.location.getMyStore().then(function(store){
             zipCode= store && store.address && store.address.postalOrZipCode || "60523"; //Hoping all stores has zip code
             self.set("cartShipZipCode",zipCode.toString().substr(0,5));
          });
        }

        this.on("sync",function(data){
          var _handlingSubTotal=self.get("handlingSubTotal");
          if((data && !data.handlingSubTotal) && _handlingSubTotal)
          {
            self.unset("handlingSubTotal");
          }
        });
        this.getExtendedProperties();
      },
      isEmpty: function () {
        return this.get("items").length < 1;
      },
      isApplePayAvailable:function(){
        var ApplePaySession = window.ApplePaySession;
        var isAcerewardsIOS = !ApplePaySession && window.ReactNativeWebView && (window.navigator.userAgent.indexOf("iPhone") > -1 || window.navigator.userAgent.indexOf("iPad") > -1 || window.navigator.userAgent.indexOf("Mac OS") > -1);
        return (ApplePaySession && ApplePaySession.canMakePayments())|| isAcerewardsIOS;
      },
      isConsumerMobile:function(){
        return window.ReactNativeWebView || $.cookie('isConsumerMobile');
      },
      getFreeDeliveryDetails:function(){
        var self = this;
        self.isLoading(true);
        window.cartView.model.set('forceLoading', true);
        util.getFreeDeliveryDetails().then(function(response){
            self.isLoading(false);
          window.cartView.model.set('forceLoading', false);
          window.cartView.model.set("freeDeliveryDetails", response);
          sessionStorage.setItem("freeDeliveryDetails",JSON.stringify(response));
          self.trigger("freeDeliveryDetailsUpdated");
        }).catch(function(){
          self.trigger("freeDeliveryDetailsUpdated");
          self.isLoading(false);
          window.cartView.model.set('forceLoading', false);
          Promise.reject();
        });
      },
      getAssemblyDeliveryByCode: function (code) {
        if (this.getADByCode) return this.getADByCode(code);
      },
      getStoreSummaryByCode: function (code) {
        if (this.getADByCode) {
          var summary = this.getStoreInfo(code);
          if (summary) return summary;
        }
      },
      getMaxReqiredItems:function(){
        var self = this;
        var items = self.get("items").models || [];
        var requiredItems = items.filter(function(item){
            var reqAttr = item.get('product').get('properties').findWhere({ attributeFQN: "tenant~auto-add-card" });
            if(reqAttr) {
              var addToCard = reqAttr.get("values")[0].stringValue.split(":");
              item.set("autoAddCardList", addToCard[1].trim().split(","));
              item.set("autoAddCardMessage", addToCard[0]);
            }

            return reqAttr;
        });

        if(requiredItems.length > 0){
            requiredItems.forEach(function(item){
                var self = this;
                var quantity = parseInt(item.get("quantity"));
                var autoAddItemList = item.get("autoAddCardList");

                for(var i = 0; i < autoAddItemList.length; i++ ){
                    for(var j =0; j< items.length; j++){
                      if(autoAddItemList[i] === items[j].get("product").id ){
                            var maxRequiredItems = parseInt(items[j].set("maxRequiredItem")) ? parseInt(items[j].set("maxRequiredItem")) + quantity : quantity ;
                            items[j].set("maxRequiredItem", maxRequiredItems);
                      }
                    }
                }
            }, self);
        }
      },
      count: function () {
        return this.apiModel.count();
        //return this.get("Items").reduce(function(total, item) { return item.get('Quantity') + total; },0);
      },
      toOrder: function () {
        var me = this;
        me.apiCheckout().then(function (order) {
          me.trigger('ordercreated', order);
        });
      },
      estimateDeliveryCost: function () {

      },
      deliveryAddress:function() {
         var me=this;
         var contact = me.get("userProvidedContact");
         var formattedAddress = contact && contact.address ? contact.address.address1 + ", " + contact.address.cityOrTown + ", " + contact.address.stateOrProvince + " " + contact.address.postalOrZipCode:false;
         return formattedAddress;

      },
      setDeliveryMessages: function () {
        // var adStoreList = this.get('ADStores'), self = this;
        // var groupedItems = self.attributes.items.groupBy(function(item){ return item.get('data').fulfillmentLocationCode; });

        // Object.keys(adStoreList).forEach(function(storeCode){
        //    stsItems = groupedItems[storeCode].filter(function(item){
        //         return (item.get('supportsInStorePickup') && this.get('quantity') >  this.getInventoryFromParent().maxInStoreStock)
        //     });
        //     deliveryTransferItems = stsItems.filter(function(stsItem){return _.dive(stsItem.get('data'), 'storeDelivery')});
        //     var groupDate
        //     stsItems.forEach(function(item){
        //         var data = item.get('data');
        //         var estimatedDate;
        //         if(data && !data.nextDelivery && item.hasDeliveryList()) data.nextDelivery = item.nextDeliveryBasedOnInventory();

        //         if(data && data.nextDelivery) 
        //             estimatedDate = new Date(data.nextDelivery.ExpectedDeliveryDate);
        //         if(estimatedDate) groupDate = estimatedDate; 
        //     });
        //     if(deliveryTransferItems.length) //everything delivery will move to this date
        // })
      },
      getExtendedProperties:function() {
        var serializedObj= {};
        var extendedProperties = this.get("extendedProperties");
        if(!extendedProperties || extendedProperties.length === 0){
          return api.request("GET", "/api/commerce/carts/current/extendedproperties").then(function(res){
            if(res && res.data.length){
              _(res.data).each(function(){}