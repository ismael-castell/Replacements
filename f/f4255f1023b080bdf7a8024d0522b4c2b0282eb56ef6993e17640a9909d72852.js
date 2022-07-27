// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.14/esri/copyright.txt for details.
//>>built
require({cache:{"esri/views/2d/LabelManager":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Error ../../core/HandleOwner ../../core/Logger ../../core/throttle ../../core/accessorSupport/decorators ./engine".split(" "),function(w,a,u,f,r,q,h,t,m,e,v){Object.defineProperty(a,"__esModule",{value:!0});var p=t.getLogger("esri.views.2d.layers.labels.LabelManager");w=function(a){function b(b){b=a.call(this,b)||
this;b._applyVisibilityPassThrottled=m.throttle(b._applyVisibilityPass,64,b);b.lastUpdateId=-1;b.updateRequested=!1;b.view=null;return b}u(b,a);b.prototype.initialize=function(){var b=this;this.collisionEngine=new v.CollisionEngine(this.view.featuresTilingScheme);this._layerViewSorter=new v.LayerViewSorter(function(a,c){b.collisionEngine.registerLayerView(a,c);(c=a.tileRenderer)&&c.forEachTile(function(c){c.isDirty=!0;b.addTile(a,c)});b.requestUpdate()},function(a){b.collisionEngine.unregisterLayerView(a);
b.requestUpdate()});this.handles.add(this.view.allLayerViews.on("change",function(a){b._layerViewSorter.update(a)}))};b.prototype.destroy=function(){this._layerViewSorter.destroy();this.collisionEngine=this._layerViewSorter=null;this._applyVisibilityPassThrottled.remove()};Object.defineProperty(b.prototype,"updating",{get:function(){return this.updateRequested},enumerable:!0,configurable:!0});b.prototype.update=function(b){this._applyVisibilityPassThrottled(b)};b.prototype.viewChange=function(){this.requestUpdate()};
b.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate(this))};b.prototype.processUpdate=function(b){this._set("updateParameters",b);this.updateRequested&&(this.update(b),this.updateRequested=!1)};b.prototype.addTile=function(b,a){this.collisionEngine.addTile(b,a)};b.prototype.removeTile=function(b,a){this.collisionEngine.removeTile(b,a)};b.prototype._applyVisibilityPass=function(b){try{var a=this.view.featuresTilingScheme.getClosestInfoForScale(b.state.scale).level;
this.collisionEngine.run(b,a)}catch(c){p.error(new q("mapview-labeling","Encountered an error during label decluttering",c))}};f([e.property()],b.prototype,"updateRequested",void 0);f([e.property({readOnly:!0})],b.prototype,"updateParameters",void 0);f([e.property({dependsOn:["updateRequested"]})],b.prototype,"updating",null);f([e.property()],b.prototype,"view",void 0);return b=f([e.subclass("esri.views.2d.layers.labels.LabelManager")],b)}(e.declared(h.HandleOwnerMixin(r)));a.default=w})},"esri/core/throttle":function(){define(["require",
"exports"],function(w,a){function u(a,r,q,h){var f=null,m=1E3;"number"===typeof r?(m=r,h=q):(f=r,m=q);var e=0,v,p=function(){e=0;a.apply(h,v)};r=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];f&&f.apply(h,a);v=a;m?e||(e=setTimeout(p,m)):p()};r.remove=function(){e&&(clearTimeout(e),e=0)};r.forceUpdate=function(){e&&(clearTimeout(e),p())};r.hasPendingUpdates=function(){return!!e};return r}Object.defineProperty(a,"__esModule",{value:!0});a.throttle=u;a.default=u})},"esri/views/2d/layers/graphics/GraphicsView2D":function(){define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/Accessor ../../../../core/HandleOwner ../../../../core/Identifiable ../../../../core/iteratorUtils ../../../../core/MapPool ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/promiseUtils ../../../../core/screenUtils ../../../../core/accessorSupport/decorators ../../../../geometry/Polygon ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/coordsUtils ../../../../geometry/support/jsonUtils ../../../../geometry/support/spatialReferenceUtils ../../../../layers/graphics/data/projectionSupport ../../../../symbols/support/cimSymbolUtils ../../../../symbols/support/defaults ../../engine ../../engine/webgl/definitions ../features/support/AttributeStore ../features/support/TileStore ./GraphicContainer ./GraphicProcessingQueue ./GraphicStore ./graphicsUtils ../../../layers/GraphicsView".split(" "),
function(w,a,u,f,r,q,h,t,m,e,v,p,z,b,g,n,c,d,l,k,x,y,J,F,H,C,E,G,I,D,A,K,P,L){function B(b,c,a){if(a.has(b))return a.get(b);c={tile:c,addedOrModified:[],removed:[]};a.set(b,c);return c}Object.defineProperty(a,"__esModule",{value:!0});w=function(a){function e(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];c=a.apply(this,c)||this;c._tiles=new Map;c._graphicStoreUpdate=!1;c._graphicsSet=new Set;c._matcher=b.resolve(null);c._tileUpdateSet=new Set;c._tilesToUpdate=new Map;c._graphicIdToAbortController=
new Map;c._attached=!1;c._highlightIds=new Map;c._updatingGraphicsTimer=null;c.lastUpdateId=-1;c.updateRequested=!1;c.graphicUpdateHandler=c.graphicUpdateHandler.bind(c);c.addOrUpdateGraphic=c.addOrUpdateGraphic.bind(c);c._processAnalyzedGraphics=c._processAnalyzedGraphics.bind(c);c._graphicsChangeHandler=c._graphicsChangeHandler.bind(c);return c}u(e,a);e.prototype.initialize=function(){var c=this;this._tileStore=new I.default(this.view.featuresTilingScheme);this.container=new D.default(this.view.featuresTilingScheme,
null);this._attributeStore=new G.default({type:"local",initialize:function(a){return b.resolve(c.container.attributeView.initialize(a))},update:function(b){return c.container.attributeView.requestUpdate(b)},render:function(){return c.container.requestRender()}});this._graphicStore=new K.default(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,function(b){c._attributeStore.createLocalId(b.uid);c._setFilterState(b.uid,b.visible)},function(b){c._attributeStore.freeLocalId(b.uid)});
this._graphicProcessingQueue=new A.default({process:this.addOrUpdateGraphic});var a=new C.WGLTemplateStore(this.container.getMaterialItems.bind(this.container),!0),d=this._tileStore.tileScheme.tileInfo;this.renderer&&(this._matcher=C.createMatcher(this.renderer,a,null));this._meshFactory=new C.WGLMeshFactory(null,this.uid,null,a,null,d);this.watch("renderer",function(b){b&&(c._matcher=C.createMatcher(c.renderer,a,null))});this._tileStore.on("update",this._onTileUpdate.bind(this));this.container.on("attach",
function(){0<c.graphics.items.length&&c._graphicsChangeHandler({target:c.graphics,added:c.graphics.items,removed:[],moved:[]});c.handles.add(c.graphics.on("change",c._graphicsChangeHandler),"graphics");c._attached=!0;c.notifyChange("updating")});this.container.on("detach",function(){c._graphicProcessingQueue&&c._graphicProcessingQueue.clear()})};e.prototype.destroy=function(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating"));
this.container.dispose();this._set("graphics",null);this._graphicProcessingQueue&&(this._graphicProcessingQueue.destroy(),this._graphicProcessingQueue=null);this._graphicStore.clear();this._tileStore.destroy();this._attributeStore=null};Object.defineProperty(e.prototype,"updating",{get:function(){return!this._attached||null!==this._updatingGraphicsTimer||this._graphicProcessingQueue.updating||0<this._tileUpdateSet.size||0<this._tilesToUpdate.size},enumerable:!0,configurable:!0});e.prototype.install=
function(b){b.addChild(this.container)};e.prototype.uninstall=function(b){b.removeChild(this.container)};e.prototype.hitTest=function(c,a){if(!this.view||!this.view.position)return b.resolve();c=this.view.toMap(n.createScreenPoint(c,a));return this.searchFeatures(c).then(function(b){return b&&b.length?b[0]:null})};e.prototype.searchFeatures=function(c,a){var d=this;void 0===a&&(a=2);return b.create(function(b){b(d._graphicStore.hitTest(c.x,c.y,a,d.view.state.resolution,d.view.state.rotation))})};
e.prototype.update=function(b){b=b.state;var c=this.view.featuresTilingScheme.getClosestInfoForScale(b.scale).level;this._graphicStore.updateLevel(c);this._tileStore.setViewState(b);this._graphicStoreUpdate=!0;this.updateRequested=!1};e.prototype.viewChange=function(){this.requestUpdate()};e.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate(this))};e.prototype.processUpdate=function(b){this.updateRequested&&(this.updateRequested=!1,this.update(b))};
e.prototype.graphicUpdateHandler=function(b){var c=b.newValue,a=b.graphic;switch(b.property){case "geometry":case "symbol":this._graphicProcessingQueue.push(a,"update");break;case "visible":this._setFilterState(a.uid,c),this._attributeStore.sendUpdates()}};e.prototype.addHighlight=function(b){for(var c=0;c<b.length;c++){var a=b[c];if(this._highlightIds.has(a)){var d=this._highlightIds.get(a);this._highlightIds.set(a,d+1)}else this._highlightIds.set(a,1)}this._updateHighlight()};e.prototype.removeHighlight=
function(b){for(var c=0;c<b.length;c++){var a=b[c];if(this._highlightIds.has(a)){var d=this._highlightIds.get(a)-1;0===d?this._highlightIds.delete(a):this._highlightIds.set(a,d)}}this._updateHighlight()};e.prototype._updateHighlight=function(){this._attributeStore.setHighlight(v.keysOfMap(this._highlightIds))};e.prototype._getIntersectingTiles=function(b){return(b=this._graphicStore.getBounds(b))&&0!==l.width(b)&&0!==l.height(b)?this._tileStore.boundsIntersections(b):[]};e.prototype._updateTile=function(b){var c=
this,a=b.tile,d=this._getGraphicsData(a,b.addedOrModified);return this._processGraphics(a.key,d).then(function(d){c._patchTile(a.key,{addOrUpdate:d,remove:b.removed});return d})};e.prototype._patchTile=function(b,c){this._tiles.has(b)&&(b=this._tiles.get(b),this.container.onTileData(b,c),this.container.requestRender())};e.prototype._graphicsChangeHandler=function(c){var a=this;if(!this._graphicStoreUpdate){var d=this.view.state,l=this.view.featuresTilingScheme.getClosestInfoForScale(d.scale).level;
this._graphicStore.updateLevel(l);this._tileStore.setViewState(d)}var k=c.added,l=c.removed;c=c.moved;for(var x=this._tilesToUpdate,y,d=[],e=Array(k.length),g=0;g<k.length;g++){var n=k[g];e[g]=n;this._graphicsSet.add(n);d.push(this.addGraphic(n))}for(g=0;g<l.length;g++){n=l[g];this._abortProcessingGraphic(n.uid);for(var k=this._getIntersectingTiles(n),A=0,f=k;A<f.length;A++)k=f[A],y=k.key.id,k=B(y,k,x),k.removed.push(this._attributeStore.getLocalId(n.uid));this._graphicsSet.delete(n);this._graphicStore.remove(n)}for(l=
0;l<c.length;l++)for(g=c[l],k=this._getIntersectingTiles(g),n=0,A=k;n<A.length;n++)k=A[n],y=k.key.id,k=B(y,k,x),k.addedOrModified.push(g);this._flipUpdatingGraphics();b.all(d).then(function(){for(var c,d=0;d<e.length;d++){c=e[d];for(var l=0,k=a._getIntersectingTiles(c);l<k.length;l++){var g=k[l];y=g.key.id;B(y,g,x).addedOrModified.push(c)}}a._graphicStore.updateZ();var n=[];x.forEach(function(b){return n.push(a._updateTile(b))});return b.all(n).then(function(){x.clear();a.notifyChange("updating")})}).catch(function(){x.clear();
a.notifyChange("updating")})};e.prototype._getSymbolResources=function(c,a){return h(this,void 0,void 0,function(){var d,l,k,x,y,g,e,n;return q(this,function(A){switch(A.label){case 0:return this.container.attached?(d=z.isSome(c.symbol)?c.symbol:null)?[3,3]:this.renderer?[4,this.renderer.getSymbolAsync(c,{scale:this.view.scale})]:[3,2]:[2,b.resolve(null)];case 1:return d=A.sent(),[3,3];case 2:d=this._getNullSymbol(c),A.label=3;case 3:return[4,F.expandSymbol(d,a)];case 4:d=A.sent();l=[];if("text"===
d.type){k=new Set;x=d;y=C.bidiText(x.text)[0];for(g=0;g<y.length;g++)k.add(y.charCodeAt(g));e=[];k.forEach(function(b){return e.push(b)});l.push({symbol:x.toJSON(),id:0,glyphIds:e})}else l.push({symbol:d.toJSON(),id:c.uid,glyphIds:null});return[4,this.container.getMaterialItems(l,a).then(function(b){return b&&0<b.length?b[0].mosaicItem:null})];case 5:return n=A.sent(),[2,{symbol:d,mosaicItem:n}]}})})};e.prototype._projectAndNormalizeGeometry=function(c){return h(this,void 0,void 0,function(){var a,
l,y,g=this;return q(this,function(e){if(z.isNone(c.geometry))return[2,b.resolve(null)];a=c.geometry;x.isPolygon(a)?(l=a.rings,a.rings=l):x.isPolyline(a)?(y=a.paths,a.paths=y):x.isExtent(a)&&(a=d.fromExtent(a));return[2,J.checkProjectionSupport(a.spatialReference,this.view.spatialReference).then(function(){var b=P.normalizeCentralMeridian(a),b=J.project(b,a.spatialReference,g.view.spatialReference);k.closeRingsAndFixWinding(b);return b})]})})};e.prototype._onTileUpdate=function(b){var c=y.getInfo(this.view.spatialReference);
if(b.added&&0<b.added.length)for(var a=0,d=b.added;a<d.length;a++)this._addNewTile(d[a],c);if(b.removed&&0<b.removed.length)for(c=0,b=b.removed;c<b.length;c++)this._removeTile(b[c].key)};e.prototype.addOrUpdateGraphic=function(b,c,a){return this._addOrUpdateGraphic(b,c,a)};e.prototype.addGraphic=function(c){var a=this;this._abortProcessingGraphic(c.uid);var d=g.createAbortController();this._graphicIdToAbortController.set(c.uid,d);return this._addOrUpdateGraphic(c,"add",{signal:d.signal}).then(function(){a._graphicIdToAbortController.delete(c.uid)}).catch(function(d){a._graphicIdToAbortController.delete(c.uid);
if(!b.isAbortError(d))throw d;})};e.prototype._addOrUpdateGraphic=function(c,a,d){var l=this,k=this._projectAndNormalizeGeometry(c),x=this._getSymbolResources(c,d);return b.all([k,x]).then(function(b){var k=b[0];b=b[1];return"add"===a?l._addProjectedGraphic(c,b,k):l._updateGraphic(c,b,k,d)})};e.prototype._addProjectedGraphic=function(b,c,a){this._graphicsSet.has(b)&&this._graphicStore.add(b,c,a)};e.prototype._updateGraphic=function(c,a,d,k){var x=this;if(!this._graphicStore.has(c)||b.isAborted(k))return b.resolve();
d=this._graphicStore.update(c,a,d);a=d.oldBounds;d=d.newBounds;var y=0===l.width(a)&&0===l.height(a),g=0===l.width(d)&&0===l.height(d),y=y?[]:this._tileStore.boundsIntersections(a);a=g?[]:this._tileStore.boundsIntersections(d);d=p.acquire();for(var e=0;e<y.length;e++)g=y[e],d.set(g.key,{addOrUpdate:null,remove:[this._attributeStore.getLocalId(c.uid)]});for(y=0;y<a.length;y++)g=a[y],e=this._getGraphicData(g,c),d.has(g.key)?(g=d.get(g.key),g.remove.length=0,g.addOrUpdate=e):d.set(g.key,{addOrUpdate:e,
remove:null});var n=[];d.forEach(function(b,c){var a=x._processGraphics(c,b.addOrUpdate,k).then(function(a){x._patchTile(c,{addOrUpdate:a,remove:b.remove})});n.push(a)});p.release(d);return b.all(n).then(function(){})};e.prototype._addTile=function(b,c){var a=l.create();this.view.featuresTilingScheme.getTileBounds(a,b);a=new C.WGLTile(b,a,!0);c={clear:!0,addOrUpdate:c,remove:[]};this._tiles.set(b,a);this.container.addChild(a);a.setData(c,!1,!1)};e.prototype._addNewTile=function(c,a){var d=this,l=
this._graphicStore.queryTileData(c);if(a){a=Math.round((a.valid[1]-a.valid[0])/c.resolution);for(var k=0;k<l.length;k++){var y=l[k];y.geometry&&x.isPoint(y.geometry)&&this._wrapPoints(y,a)}}var g=c.key;this._tileUpdateSet.add(c.key);this.notifyChange("updating");this._processGraphics(g,l).then(function(b){d._addTile(g,b);d._tileUpdateSet.delete(g);d.notifyChange("updating")}).catch(function(c){d._tileUpdateSet.delete(g);d.notifyChange("updating");if(!b.isAbortError(c))throw c;})};e.prototype._removeTile=
function(b){if(this._tiles.has(b)){var c=this._tiles.get(b);this.container.removeChild(c);c.destroy();this._tiles.delete(b)}};e.prototype._setFilterState=function(b,c){var a=this._attributeStore.getLocalId(b);b=this._attributeStore.getHighlightFlag(b);this._attributeStore.setData(a,0,0,b|(c?E.FILTER_FLAG_0:0))};e.prototype._getGraphicsData=function(b,c){var a=y.getInfo(this.view.spatialReference);c=this._graphicStore.getGraphicsData(b,c);if(a)for(b=Math.round((a.valid[1]-a.valid[0])/b.resolution),
a=0;a<c.length;a++){var d=c[a];d.geometry&&x.isPoint(d.geometry)&&this._wrapPoints(d,b)}c.sort(function(b,c){return b.insertAfter-c.insertAfter});return c};e.prototype._getGraphicData=function(b,c){c=this._graphicStore.getGraphicData(b,c);var a=[c],d=y.getInfo(this.view.spatialReference);d&&(b=Math.round((d.valid[1]-d.valid[0])/b.resolution),c.geometry&&x.isPoint(c.geometry)&&this._wrapPoints(c,b));return a};e.prototype._wrapPoints=function(b,c){var a=b.geometry;512===c?20>a.x?b.geometry={points:[[a.x,
a.y],[c,0]]}:492<a.x&&(b.geometry={points:[[a.x,a.y],[-c,0]]}):-20>a.x?b.geometry={points:[[a.x,a.y],[c,0]]}:532<a.x&&(b.geometry={points:[[a.x,a.y],[-c,0]]})};e.prototype._processGraphics=function(b,c,a){return h(this,void 0,void 0,function(){var d,l,k;return q(this,function(y){switch(y.label){case 0:d=c&&c.length;if(!d||!this._meshFactory)return[2,null];l=this._meshFactory;return[4,this._matcher.then(function(b){return l.analyze(c,!0,b,null,null,a)})];case 1:return k=y.sent(),this._attributeStore.sendUpdates(),
[2,this._processAnalyzedGraphics(b,k)]}})})};e.prototype._processAnalyzedGraphics=function(b,c){for(var a=this._meshFactory,d=a.createMeshData(c.length),l=this._attributeStore,k=0;k<c.length;k++){var y=c[k];y.insertAfter=-1===y.insertAfter?-1:l.getLocalId(y.insertAfter);y.localId=l.getLocalId(y.attributes[this.uid]);a.write(d,y,null,null,b.level)}return C.TileData.fromMeshData(d)};e.prototype._abortProcessingGraphic=function(b){this._graphicIdToAbortController.has(b)&&this._graphicIdToAbortController.get(b).abort()};
e.prototype._getNullSymbol=function(b){b=b.geometry;return x.isPolyline(b)?H.errorPolylineSymbol2D:x.isPolygon(b)||x.isExtent(b)?H.errorPolygonSymbol2D:H.errorPointSymbol2D};e.prototype._flipUpdatingGraphics=function(){var b=this;this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer);this._updatingGraphicsTimer=setTimeout(function(){b._updatingGraphicsTimer=null;b.notifyChange("updating")},160);this.notifyChange("updating")};f([c.property()],e.prototype,"_graphicProcessingQueue",void 0);
f([c.property({constructOnly:!0})],e.prototype,"graphics",void 0);f([c.property({dependsOn:["_graphicProcessingQueue.updating"]})],e.prototype,"updating",null);f([c.property()],e.prototype,"view",void 0);f([c.property()],e.prototype,"updateRequested",void 0);return e=f([c.subclass("esri.views.2d.layers.support.GraphicsView2D")],e)}(c.declared(L.GraphicsView(m.HandleOwnerMixin(e.IdentifiableMixin(t)))));a.default=w})},"esri/core/MapPool":function(){define(["require","exports","./ObjectPool"],function(w,
a,u){w=function(){function a(a,f){void 0===a&&(a=50);void 0===f&&(f=50);this._pool=new u(Map,!1,function(a){return a.clear()},f,a)}a.prototype.acquire=function(){return this._pool.acquire()};a.prototype.release=function(a){this._pool.release(a)};a.acquire=function(){return f.acquire()};a.release=function(a){return f.release(a)};return a}();var f=new w(100);return w})},"esri/layers/graphics/data/projectionSupport":function(){define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Error ../../../core/promiseUtils ../../../geometry/projection ../../../geometry/support/spatialReferenceUtils ../../../geometry/support/webMercatorUtils".split(" "),
function(w,a,u,f,r,q,h,t,m){function e(c,a){var d;if(!a)return null;if("x"in a){var l={x:0,y:0};c=c(a.x,a.y,b);l.x=c[0];l.y=c[1];null!=a.z&&(l.z=a.z);null!=a.m&&(l.m=a.m);return l}if("xmin"in a)return l={xmin:0,ymin:0,xmax:0,ymax:0},d=c(a.xmin,a.ymin,b),l.xmin=d[0],l.ymin=d[1],c=c(a.xmax,a.ymax,b),l.xmax=c[0],l.ymax=c[1],a.hasZ&&(l.zmin=a.zmin,l.zmax=a.zmax,l.hasZ=!0),a.hasM&&(l.mmin=a.mmin,l.mmax=a.mmax,l.hasM=!0),l;if("rings"in a)return{rings:v(a.rings,c),hasM:a.hasM,hasZ:a.hasZ};if("paths"in a)return{paths:v(a.paths,
c),hasM:a.hasM,hasZ:a.hasZ};if("points"in a)return{points:p(a.points,c),hasM:a.hasM,hasZ:a.hasZ}}function v(b,c){for(var a=[],d=0;d<b.length;d++)a.push(p(b[d],c));return a}function p(b,c){for(var a=[],d=0;d<b.length;d++){var l=b[d],g=c(l[0],l[1],[0,0]);a.push(g);2<l.length&&g.push(l[2]);3<l.length&&g.push(l[3])}return a}function z(b,c){return!t.isValid(b)||!t.isValid(c)||t.equals(b,c)||m.canProject(b,c)?!1:!0}Object.defineProperty(a,"__esModule",{value:!0});var b=[0,0];a.doesBrowserSupportProjection=
function(b,c){return z(b,c)?h.isSupported():!0};a.checkProjectionSupport=function(b,c){return f(this,void 0,void 0,function(){var a,d,l;return u(this,function(k){if(!c)return[2];if(Array.isArray(b)){a=0;for(d=b;a<d.length;a++)if(l=d[a],z(l.geometry&&l.geometry.spatialReference,c)){if(h.isSupported())return[2,h.load()];throw new r("feature-store:unsupported-query","projection not supported",{inSpatialReference:b,outSpatialReference:c});}return[2]}if(!z(b,c))return[2];if(h.isSupported())return[2,h.load()];
throw new r("feature-store:unsupported-query","projection not supported",{inSpatialReference:b,outSpatialReference:c});})})};var g=e.bind(null,m.lngLatToXY),n=e.bind(null,m.xyToLngLat);a.project=function(b,c,a){if(!b)return b;a||(a=c,c=b.spatialReference);return t.isValid(c)&&t.isValid(a)&&!t.equals(c,a)?m.canProject(c,a)?t.isWebMercator(a)?g(b):n(b):h.projectMany([b],c,a,null,!0)[0]:b};var c=new (function(){function b(){this._jobs=[];this._timer=null;this._process=this._process.bind(this)}b.prototype.push=
function(b,c,a){return f(this,void 0,void 0,function(){var d,l=this;return u(this,function(k){b&&b.length&&c&&a&&!t.equals(c,a)||q.resolve(b);d={geometries:b,inSpatialReference:c,outSpatialReference:a,resolve:null};this._jobs.push(d);return[2,q.create(function(b){d.resolve=b;null===l._timer&&(l._timer=setTimeout(l._process,10))},function(){var b=l._jobs.indexOf(d);-1<b&&l._jobs.splice(b,1)})]})})};b.prototype._process=function(){this._timer=null;var b=this._jobs.shift();if(b){var c=b.geometries,a=
b.inSpatialReference,d=b.outSpatialReference,b=b.resolve;m.canProject(a,d)?t.isWebMercator(d)?b(c.map(g)):b(c.map(n)):b(h.projectMany(c,a,d,null,!0));0<this._jobs.length&&(this._timer=setTimeout(this._process,10))}};return b}());a.projectMany=function(){}})},"esri/geometry/projection":function(){define("require exports ../core/promiseUtils ./pe ./SpatialReference ./support/GeographicTransformation".split(" "),
function(w,a,u,f,r,q){function h(a,e,b,g,n){void 0===g&&(g=null);void 0===n&&(n=!1);if(null===g){var c=q.cacheKey(e,b);void 0!==v[c]?g=v[c]:(g=t(e,b,null),null===g&&(g=new q),v[c]=g)}return m._project(a,e,b instanceof r||!1===n?b:new r(b),g,n)}function t(a,e,b){void 0===b&&(b=null);a=m._getTransformation(a,e,b);return null!==a?q.fromGE(a):null}Object.defineProperty(a,"__esModule",{value:!0});var m=null;a.isLoaded=function(){return!!m&&f.isLoaded()};a.isSupported=function(){return f.isSupported()};
var e=null;a.load=function(){return e?e:e=u.create(function(a,e){var b=f.load();w(["./geometryEngine"],function(g){m=g;b.then(function(){m._enableProjection(f);a()},function(b){e(b)})})})};a.project=function(a,e,b){void 0===b&&(b=null);return a instanceof Array?0===a.length?[]:h(a,a[0].spatialReference,e,b):h([a],a.spatialReference,e,b)[0]};var v={};a.projectMany=h;a.getTransformation=t;a.getTransformations=function(a,e,b){void 0===b&&(b=null);a=m._getTransformationBySuitability(a,e,b);if(null!==
a){e=[];for(b=0;b<a.length;b++)e.push(q.fromGE(a[b]));return e}return[]}})},"esri/geometry/pe":function(){define(["require","exports","../core/tsSupport/extendsHelper","../core/has","../core/promiseUtils"],function(w,a,u,f,r){function q(c){function(){}