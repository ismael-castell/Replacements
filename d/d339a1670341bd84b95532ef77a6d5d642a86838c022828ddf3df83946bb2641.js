YUI.add("autotag-models",(function(e){function t(e){t.superclass.constructor.call(this,e)}e.Models[this.name]=t,e.extend(t,e.FlickrModelRegistry,{name:this.name,remote:{delete:function(t){return e.ModelDeletors["flickr-photos-deleteAutotags"].run(t,this.appContext)}},attributes:{autotagValue:{validator:function(t){return e.AttributeHelpers.validateString(t)},setter:function(t){return e.AttributeHelpers.coerceString(t)}},score:{validator:function(t){return e.AttributeHelpers.validateInteger(t)},setter:function(t){return e.AttributeHelpers.coerceInteger(t)}},isPrivate:{validator:function(t){return e.AttributeHelpers.validateBoolean(t)},setter:function(t){return e.AttributeHelpers.coerceBoolean(t)},defaultValue:!1},searchUrl:{derivedBy:["autotagValue"],readOnly:!0,defaultFn:function(){}