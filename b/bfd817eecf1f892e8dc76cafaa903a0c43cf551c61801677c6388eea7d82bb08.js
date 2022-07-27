/*! jQuery UI - v1.11.3 - 2015-03-02
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, sortable.js, autocomplete.js, menu.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */


(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Core 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */


// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "1.11.3",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	scrollParent: function( includeHidden ) {
		var position = this.css( "position" ),
			excludeStaticParent = position === "absolute",
			overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
			scrollParent = this.parents().filter( function() {
				var parent = $( this );
				if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
					return false;
				}
				return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
			}).eq( 0 );

		return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
	},

	uniqueId: (function() {
		var uuid = 0;

		return function() {
			return this.each(function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			});
		};
	})(),

	removeUniqueId: function() {
		return this.each(function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap='#" + mapName + "']" )[ 0 ];
		return !!img && visible( img );
	}
	return ( /^(input|select|textarea|button|object)$/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}

// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	disableSelection: (function() {
		var eventType = "onselectstart" in document.createElement( "div" ) ?
			"selectstart" :
			"mousedown";

		return function() {
			return this.bind( eventType + ".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
		};
	})(),

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	}
});

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
$.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};


/*!
 * jQuery UI Widget 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat(args) );
			}

			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;


/*!
 * jQuery UI Mouse 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */


var mouseHandled = false;
$( document ).mouseup( function() {
	mouseHandled = false;
});

var mouse = $.widget("ui.mouse", {
	version: "1.11.3",
	options: {
		cancel: "input,textarea,button,select,option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.bind("mousedown." + this.widgetName, function(event) {
				return that._mouseDown(event);
			})
			.bind("click." + this.widgetName, function(event) {
				if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
					$.removeData(event.target, that.widgetName + ".preventClickEvent");
					event.stopImmediatePropagation();
					return false;
				}
			});

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.unbind("." + this.widgetName);
		if ( this._mouseMoveDelegate ) {
			this.document
				.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
				.unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
		}
	},

	_mouseDown: function(event) {
		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// we may have missed mouseup (out of window)
		(this._mouseStarted && this._mouseUp(event));

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = (event.which === 1),
			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
		if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if (!this.mouseDelayMet) {
			this._mouseDelayTimer = setTimeout(function() {
				that.mouseDelayMet = true;
			}, this.options.delay);
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted = (this._mouseStart(event) !== false);
			if (!this._mouseStarted) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
			$.removeData(event.target, this.widgetName + ".preventClickEvent");
		}

		// these delegates are required to keep context
		this._mouseMoveDelegate = function(event) {
			return that._mouseMove(event);
		};
		this._mouseUpDelegate = function(event) {
			return that._mouseUp(event);
		};

		this.document
			.bind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.bind( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function(event) {
		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {
			// IE mouseup check - mouseup happened when mouse was out of window
			if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
				return this._mouseUp(event);

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {
				return this._mouseUp( event );
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if (this._mouseStarted) {
			this._mouseDrag(event);
			return event.preventDefault();
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted =
				(this._mouseStart(this._mouseDownEvent, event) !== false);
			(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
		}

		return !this._mouseStarted;
	},

	_mouseUp: function(event) {
		this.document
			.unbind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.unbind( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if (this._mouseStarted) {
			this._mouseStarted = false;

			if (event.target === this._mouseDownEvent.target) {
				$.data(event.target, this.widgetName + ".preventClickEvent", true);
			}

			this._mouseStop(event);
		}

		mouseHandled = false;
		return false;
	},

	_mouseDistanceMet: function(event) {
		return (Math.max(
				Math.abs(this._mouseDownEvent.pageX - event.pageX),
				Math.abs(this._mouseDownEvent.pageY - event.pageY)
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function(/* event */) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function(/* event */) {},
	_mouseDrag: function(/* event */) {},
	_mouseStop: function(/* event */) {},
	_mouseCapture: function(/* event */) { return true; }
});


/*!
 * jQuery UI Position 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

(function() {

$.ui = $.ui || {};

var cachedScrollbarWidth, supportsOffsetFractions,
	max = Math.max,
	abs = Math.abs,
	round = Math.round,
	rhorizontal = /left|center|right/,
	rvertical = /top|center|bottom/,
	roffset = /[\+\-]\d+(\.[\d]+)?%?/,
	rposition = /^\w+/,
	rpercent = /%$/,
	_position = $.fn.position;

function getOffsets( offsets, width, height ) {
	return [
		parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
		parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
	];
}

function parseCss( element, property ) {
	return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
	var raw = elem[0];
	if ( raw.nodeType === 9 ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: 0, left: 0 }
		};
	}
	if ( $.isWindow( raw ) ) {
		return {
			width: elem.width(),
			height: elem.height(),
			offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
		};
	}
	if ( raw.preventDefault ) {
		return {
			width: 0,
			height: 0,
			offset: { top: raw.pageY, left: raw.pageX }
		};
	}
	return {
		width: elem.outerWidth(),
		height: elem.outerHeight(),
		offset: elem.offset()
	};
}

$.position = {
	scrollbarWidth: function() {
		if ( cachedScrollbarWidth !== undefined ) {
			return cachedScrollbarWidth;
		}
		var w1, w2,
			div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
			innerDiv = div.children()[0];

		$( "body" ).append( div );
		w1 = innerDiv.offsetWidth;
		div.css( "overflow", "scroll" );

		w2 = innerDiv.offsetWidth;

		if ( w1 === w2 ) {
			w2 = div[0].clientWidth;
		}

		div.remove();

		return (cachedScrollbarWidth = w1 - w2);
	},
	getScrollInfo: function( within ) {
		var overflowX = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-x" ),
			overflowY = within.isWindow || within.isDocument ? "" :
				within.element.css( "overflow-y" ),
			hasOverflowX = overflowX === "scroll" ||
				( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
			hasOverflowY = overflowY === "scroll" ||
				( overflowY === "auto" && within.height < within.element[0].scrollHeight );
		return {
			width: hasOverflowY ? $.position.scrollbarWidth() : 0,
			height: hasOverflowX ? $.position.scrollbarWidth() : 0
		};
	},
	getWithinInfo: function( element ) {
		var withinElement = $( element || window ),
			isWindow = $.isWindow( withinElement[0] ),
			isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
		return {
			element: withinElement,
			isWindow: isWindow,
			isDocument: isDocument,
			offset: withinElement.offset() || { left: 0, top: 0 },
			scrollLeft: withinElement.scrollLeft(),
			scrollTop: withinElement.scrollTop(),

			// support: jQuery 1.6.x
			// jQuery 1.6 doesn't support .outerWidth/Height() on documents or windows
			width: isWindow || isDocument ? withinElement.width() : withinElement.outerWidth(),
			height: isWindow || isDocument ? withinElement.height() : withinElement.outerHeight()
		};
	}
};

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
		target = $( options.of ),
		within = $.position.getWithinInfo( options.within ),
		scrollInfo = $.position.getScrollInfo( within ),
		collision = ( options.collision || "flip" ).split( " " ),
		offsets = {};

	dimensions = getDimensions( target );
	if ( target[0].preventDefault ) {
		// force left top to allow flipping
		options.at = "left top";
	}
	targetWidth = dimensions.width;
	targetHeight = dimensions.height;
	targetOffset = dimensions.offset;
	// clone to reuse original targetOffset later
	basePosition = $.extend( {}, targetOffset );

	// force my and at to have valid horizontal and vertical positions
	// if a value is missing or invalid, it will be converted to center
	$.each( [ "my", "at" ], function() {
		var pos = ( options[ this ] || "" ).split( " " ),
			horizontalOffset,
			verticalOffset;

		if ( pos.length === 1) {
			pos = rhorizontal.test( pos[ 0 ] ) ?
				pos.concat( [ "center" ] ) :
				rvertical.test( pos[ 0 ] ) ?
					[ "center" ].concat( pos ) :
					[ "center", "center" ];
		}
		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

		// calculate offsets
		horizontalOffset = roffset.exec( pos[ 0 ] );
		verticalOffset = roffset.exec( pos[ 1 ] );
		offsets[ this ] = [
			horizontalOffset ? horizontalOffset[ 0 ] : 0,
			verticalOffset ? verticalOffset[ 0 ] : 0
		];

		// reduce to just the positions without the offsets
		options[ this ] = [
			rposition.exec( pos[ 0 ] )[ 0 ],
			rposition.exec( pos[ 1 ] )[ 0 ]
		];
	});

	// normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	if ( options.at[ 0 ] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[ 0 ] === "center" ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[ 1 ] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[ 1 ] === "center" ) {
		basePosition.top += targetHeight / 2;
	}

	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
	basePosition.left += atOffset[ 0 ];
	basePosition.top += atOffset[ 1 ];

	return this.each(function() {
		var collisionPosition, using,
			elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseCss( this, "marginLeft" ),
			marginTop = parseCss( this, "marginTop" ),
			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
			position = $.extend( {}, basePosition ),
			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

		if ( options.my[ 0 ] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[ 0 ] === "center" ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[ 1 ] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[ 1 ] === "center" ) {
			position.top -= elemHeight / 2;
		}

		position.left += myOffset[ 0 ];
		position.top += myOffset[ 1 ];

		// if the browser doesn't support fractions, then round for consistent results
		if ( !supportsOffsetFractions ) {
			position.left = round( position.left );
			position.top = round( position.top );
		}

		collisionPosition = {
			marginLeft: marginLeft,
			marginTop: marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[ i ] ] ) {
				$.ui.position[ collision[ i ] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
					my: options.my,
					at: options.at,
					within: within,
					elem: elem
				});
			}
		});

		if ( options.using ) {
			// adds feedback as second argument to using callback, if present
			using = function( props ) {
				var left = targetOffset.left - position.left,
					right = left + targetWidth - elemWidth,
					top = targetOffset.top - position.top,
					bottom = top + targetHeight - elemHeight,
					feedback = {
						target: {
							element: target,
							left: targetOffset.left,
							top: targetOffset.top,
							width: targetWidth,
							height: targetHeight
						},
						element: {
							element: elem,
							left: position.left,
							top: position.top,
							width: elemWidth,
							height: elemHeight
						},
						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
					};
				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
					feedback.horizontal = "center";
				}
				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
					feedback.vertical = "middle";
				}
				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
					feedback.important = "horizontal";
				} else {
					feedback.important = "vertical";
				}
				options.using.call( this, props, feedback );
			};
		}

		elem.offset( $.extend( position, { using: using } ) );
	});
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
				outerWidth = within.width,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = withinOffset - collisionPosLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
				newOverRight;

			// element is wider than within
			if ( data.collisionWidth > outerWidth ) {
				// element is initially over the left side of within
				if ( overLeft > 0 && overRight <= 0 ) {
					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
					position.left += overLeft - newOverRight;
				// element is initially over right side of within
				} else if ( overRight > 0 && overLeft <= 0 ) {
					position.left = withinOffset;
				// element is initially over both left and right sides of within
				} else {
					if ( overLeft > overRight ) {
						position.left = withinOffset + outerWidth - data.collisionWidth;
					} else {
						position.left = withinOffset;
					}
				}
			// too far left -> align with left edge
			} else if ( overLeft > 0 ) {
				position.left += overLeft;
			// too far right -> align with right edge
			} else if ( overRight > 0 ) {
				position.left -= overRight;
			// adjust based on position and margin
			} else {
				position.left = max( position.left - collisionPosLeft, position.left );
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
				outerHeight = data.within.height,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = withinOffset - collisionPosTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
				newOverBottom;

			// element is taller than within
			if ( data.collisionHeight > outerHeight ) {
				// element is initially over the top of within
				if ( overTop > 0 && overBottom <= 0 ) {
					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
					position.top += overTop - newOverBottom;
				// element is initially over bottom of within
				} else if ( overBottom > 0 && overTop <= 0 ) {
					position.top = withinOffset;
				// element is initially over both top and bottom of within
				} else {
					if ( overTop > overBottom ) {
						position.top = withinOffset + outerHeight - data.collisionHeight;
					} else {
						position.top = withinOffset;
					}
				}
			// too far up -> align with top
			} else if ( overTop > 0 ) {
				position.top += overTop;
			// too far down -> align with bottom edge
			} else if ( overBottom > 0 ) {
				position.top -= overBottom;
			// adjust based on position and margin
			} else {
				position.top = max( position.top - collisionPosTop, position.top );
			}
		}
	},
	flip: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.left + within.scrollLeft,
				outerWidth = within.width,
				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = collisionPosLeft - offsetLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					data.at[ 0 ] === "right" ?
						-data.targetWidth :
						0,
				offset = -2 * data.offset[ 0 ],
				newOverRight,
				newOverLeft;

			if ( overLeft < 0 ) {
				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
					position.left += myOffset + atOffset + offset;
				}
			} else if ( overRight > 0 ) {
				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
					position.left += myOffset + atOffset + offset;
				}
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.top + within.scrollTop,
				outerHeight = within.height,
				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = collisionPosTop - offsetTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
				top = data.my[ 1 ] === "top",
				myOffset = top ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					data.at[ 1 ] === "bottom" ?
						-data.targetHeight :
						0,
				offset = -2 * data.offset[ 1 ],
				newOverTop,
				newOverBottom;
			if ( overTop < 0 ) {
				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
				if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
					position.top += myOffset + atOffset + offset;
				}
			} else if ( overBottom > 0 ) {
				newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
				if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
					position.top += myOffset + atOffset + offset;
				}
			}
		}
	},
	flipfit: {
		left: function() {
			$.ui.position.flip.left.apply( this, arguments );
			$.ui.position.fit.left.apply( this, arguments );
		},
		top: function() {
			$.ui.position.flip.top.apply( this, arguments );
			$.ui.position.fit.top.apply( this, arguments );
		}
	}
};

// fraction support test
(function() {
	var testElement, testElementParent, testElementStyle, offsetLeft, i,
		body = document.getElementsByTagName( "body" )[ 0 ],
		div = document.createElement( "div" );

	//Create a "fake body" for testing based on method used in jQuery.support
	testElement = document.createElement( body ? "div" : "body" );
	testElementStyle = {
		visibility: "hidden",
		width: 0,
		height: 0,
		border: 0,
		margin: 0,
		background: "none"
	};
	if ( body ) {
		$.extend( testElementStyle, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
	}
	for ( i in testElementStyle ) {
		testElement.style[ i ] = testElementStyle[ i ];
	}
	testElement.appendChild( div );
	testElementParent = body || document.documentElement;
	testElementParent.insertBefore( testElement, testElementParent.firstChild );

	div.style.cssText = "position: absolute; left: 10.7432222px;";

	offsetLeft = $( div ).offset().left;
	supportsOffsetFractions = offsetLeft > 10 && offsetLeft < 11;

	testElement.innerHTML = "";
	testElementParent.removeChild( testElement );
})();

})();

var position = $.ui.position;


/*!
 * jQuery UI Sortable 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */


var sortable = $.widget("ui.sortable", $.ui.mouse, {
	version: "1.11.3",
	widgetEventPrefix: "sort",
	ready: false,
	options: {
		appendTo: "parent",
		axis: false,
		connectWith: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		dropOnEmpty: true,
		forcePlaceholderSize: false,
		forceHelperSize: false,
		grid: false,
		handle: false,
		helper: "original",
		items: "> *",
		opacity: false,
		placeholder: false,
		revert: false,
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		scope: "default",
		tolerance: "intersect",
		zIndex: 1000,

		// callbacks
		activate: null,
		beforeStop: null,
		change: null,
		deactivate: null,
		out: null,
		over: null,
		receive: null,
		remove: null,
		sort: null,
		start: null,
		stop: null,
		update: null
	},

	_isOverAxis: function( x, reference, size ) {
		return ( x >= reference ) && ( x < ( reference + size ) );
	},

	_isFloating: function( item ) {
		return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
	},

	_create: function() {

		var o = this.options;
		this.containerCache = {};
		this.element.addClass("ui-sortable");

		//Get the items
		this.refresh();

		//Let's determine if the items are being displayed horizontally
		this.floating = this.items.length ? o.axis === "x" || this._isFloating(this.items[0].item) : false;

		//Let's determine the parent's offset
		this.offset = this.element.offset();

		//Initialize mouse events for interaction
		this._mouseInit();

		this._setHandleClassName();

		//We're ready to go
		this.ready = true;

	},

	_setOption: function( key, value ) {
		this._super( key, value );

		if ( key === "handle" ) {
			this._setHandleClassName();
		}
	},

	_setHandleClassName: function() {
		this.element.find( ".ui-sortable-handle" ).removeClass( "ui-sortable-handle" );
		$.each( this.items, function() {
			( this.instance.options.handle ?
				this.item.find( this.instance.options.handle ) : this.item )
				.addClass( "ui-sortable-handle" );
		});
	},

	_destroy: function() {
		this.element
			.removeClass( "ui-sortable ui-sortable-disabled" )
			.find( ".ui-sortable-handle" )
				.removeClass( "ui-sortable-handle" );
		this._mouseDestroy();

		for ( var i = this.items.length - 1; i >= 0; i-- ) {
			this.items[i].item.removeData(this.widgetName + "-item");
		}

		return this;
	},

	_mouseCapture: function(event, overrideHandle) {
		var currentItem = null,
			validHandle = false,
			that = this;

		if (this.reverting) {
			return false;
		}

		if(this.options.disabled || this.options.type === "static") {
			return false;
		}

		//We have to refresh the items data once first
		this._refreshItems(event);

		//Find out if the clicked node (or one of its parents) is a actual item in this.items
		$(event.target).parents().each(function() {
			if($.data(this, that.widgetName + "-item") === that) {
				currentItem = $(this);
				return false;
			}
		});
		if($.data(event.target, that.widgetName + "-item") === that) {
			currentItem = $(event.target);
		}

		if(!currentItem) {
			return false;
		}
		if(this.options.handle && !overrideHandle) {
			$(this.options.handle, currentItem).find("*").addBack().each(function() {
				if(this === event.target) {
					validHandle = true;
				}
			});
			if(!validHandle) {
				return false;
			}
		}

		this.currentItem = currentItem;
		this._removeCurrentsFromItems();
		return true;

	},

	_mouseStart: function(event, overrideHandle, noActivation) {

		var i, body,
			o = this.options;

		this.currentContainer = this;

		//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
		this.refreshPositions();

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		//Cache the helper size
		this._cacheHelperProportions();

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Get the next scrolling parent
		this.scrollParent = this.helper.scrollParent();

		//The element's absolute position on the page minus margins
		this.offset = this.currentItem.offset();
		this.offset = {
			top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		$.extend(this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
		});

		// Only after we got the offset, we can change the helper's position to absolute
		// TODO: Still need to figure out a way to make relative sorting possible
		this.helper.css("position", "absolute");
		this.cssPosition = this.helper.css("position");

		//Generate the original position
		this.originalPosition = this._generatePosition(event);
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Cache the former DOM position
		this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

		//If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
		if(this.helper[0] !== this.currentItem[0]) {
			this.currentItem.hide();
		}

		//Create the placeholder
		this._createPlaceholder();

		//Set a containment if given in the options
		if(o.containment) {
			this._setContainment();
		}

		if( o.cursor && o.cursor !== "auto" ) { // cursor option
			body = this.document.find( "body" );

			// support: IE
			this.storedCursor = body.css( "cursor" );
			body.css( "cursor", o.cursor );

			this.storedStylesheet = $( "<style>*{ cursor: "+o.cursor+" !important; }</style>" ).appendTo( body );
		}

		if(o.opacity) { // opacity option
			if (this.helper.css("opacity")) {
				this._storedOpacity = this.helper.css("opacity");
			}
			this.helper.css("opacity", o.opacity);
		}

		if(o.zIndex) { // zIndex option
			if (this.helper.css("zIndex")) {
				this._storedZIndex = this.helper.css("zIndex");
			}
			this.helper.css("zIndex", o.zIndex);
		}

		//Prepare scrolling
		if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
			this.overflowOffset = this.scrollParent.offset();
		}

		//Call callbacks
		this._trigger("start", event, this._uiHash());

		//Recache the helper size
		if(!this._preserveHelperProportions) {
			this._cacheHelperProportions();
		}


		//Post "activate" events to possible containers
		if( !noActivation ) {
			for ( i = this.containers.length - 1; i >= 0; i-- ) {
				this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
			}
		}

		//Prepare possible droppables
		if($.ui.ddmanager) {
			$.ui.ddmanager.current = this;
		}

		if ($.ui.ddmanager && !o.dropBehaviour) {
			$.ui.ddmanager.prepareOffsets(this, event);
		}

		this.dragging = true;

		this.helper.addClass("ui-sortable-helper");
		this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
		return true;

	},

	_mouseDrag: function(event) {
		var i, item, itemElement, intersection,
			o = this.options,
			scrolled = false;

		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");

		if (!this.lastPositionAbs) {
			this.lastPositionAbs = this.positionAbs;
		}

		//Do scrolling
		if(this.options.scroll) {
			if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {

				if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
				} else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
				}

				if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
				} else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
				}

			} else {

				if(event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
					scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
				} else if(this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
					scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
				}

				if(event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
					scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
				} else if(this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
					scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
				}

			}

			if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(this, event);
			}
		}

		//Regenerate the absolute position used for position checks
		this.positionAbs = this._convertPositionTo("absolute");

		//Set the helper position
		if(!this.options.axis || this.options.axis !== "y") {
			this.helper[0].style.left = this.position.left+"px";
		}
		if(!this.options.axis || this.options.axis !== "x") {
			this.helper[0].style.top = this.position.top+"px";
		}

		//Rearrange
		for (i = this.items.length - 1; i >= 0; i--) {

			//Cache variables and intersection, continue if no intersection
			item = this.items[i];
			itemElement = item.item[0];
			intersection = this._intersectsWithPointer(item);
			if (!intersection) {
				continue;
			}

			// Only put the placeholder inside the current Container, skip all
			// items from other containers. This works because when moving
			// an item from one container to another the
			// currentContainer is switched before the placeholder is moved.
			//
			// Without this, moving items in "sub-sortables" can cause
			// the placeholder to jitter between the outer and inner container.
			if (item.instance !== this.currentContainer) {
				continue;
			}

			// cannot intersect with itself
			// no useless actions that have been done before
			// no action if the item moved is the parent of the item checked
			if (itemElement !== this.currentItem[0] &&
				this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement &&
				!$.contains(this.placeholder[0], itemElement) &&
				(this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)
			) {

				this.direction = intersection === 1 ? "down" : "up";

				if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
					this._rearrange(event, item);
				} else {
					break;
				}

				this._trigger("change", event, this._uiHash());
				break;
			}
		}

		//Post events to containers
		this._contactContainers(event);

		//Interconnect with droppables
		if($.ui.ddmanager) {
			$.ui.ddmanager.drag(this, event);
		}

		//Call callbacks
		this._trigger("sort", event, this._uiHash());

		this.lastPositionAbs = this.positionAbs;
		return false;

	},

	_mouseStop: function(event, noPropagation) {

		if(!event) {
			return;
		}

		//If we are using droppables, inform the manager about the drop
		if ($.ui.ddmanager && !this.options.dropBehaviour) {
			$.ui.ddmanager.drop(this, event);
		}

		if(this.options.revert) {
			var that = this,
				cur = this.placeholder.offset(),
				axis = this.options.axis,
				animation = {};

			if ( !axis || axis === "x" ) {
				animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
			}
			if ( !axis || axis === "y" ) {
				animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
			}
			this.reverting = true;
			$(this.helper).animate( animation, parseInt(this.options.revert, 10) || 500, function() {
				that._clear(event);
			});
		} else {
			this._clear(event, noPropagation);
		}

		return false;

	},

	cancel: function() {

		if(this.dragging) {

			this._mouseUp({ target: null });

			if(this.options.helper === "original") {
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
			} else {
				this.currentItem.show();
			}

			//Post deactivating events to containers
			for (var i = this.containers.length - 1; i >= 0; i--){
				this.containers[i]._trigger("deactivate", null, this._uiHash(this));
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", null, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		if (this.placeholder) {
			//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
			if(this.placeholder[0].parentNode) {
				this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			}
			if(this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
				this.helper.remove();
			}

			$.extend(this, {
				helper: null,
				dragging: false,
				reverting: false,
				_noFinalSort: null
			});

			if(this.domPosition.prev) {
				$(this.domPosition.prev).after(this.currentItem);
			} else {
				$(this.domPosition.parent).prepend(this.currentItem);
			}
		}

		return this;

	},

	serialize: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected),
			str = [];
		o = o || {};

		$(items).each(function() {
			var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
			if (res) {
				str.push((o.key || res[1]+"[]")+"="+(o.key && o.expression ? res[1] : res[2]));
			}
		});

		if(!str.length && o.key) {
			str.push(o.key + "=");
		}

		return str.join("&");

	},

	toArray: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected),
			ret = [];

		o = o || {};

		items.each(function() { ret.push($(o.item || this).attr(o.attribute || "id") || ""); });
		return ret;

	},

	/* Be careful with the following core functions */
	_intersectsWith: function(item) {

		var x1 = this.positionAbs.left,
			x2 = x1 + this.helperProportions.width,
			y1 = this.positionAbs.top,
			y2 = y1 + this.helperProportions.height,
			l = item.left,
			r = l + item.width,
			t = item.top,
			b = t + item.height,
			dyClick = this.offset.click.top,
			dxClick = this.offset.click.left,
			isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t && ( y1 + dyClick ) < b ),
			isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l && ( x1 + dxClick ) < r ),
			isOverElement = isOverElementHeight && isOverElementWidth;

		if ( this.options.tolerance === "pointer" ||
			this.options.forcePointerForContainers ||
			(this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])
		) {
			return isOverElement;
		} else {

			return (l < x1 + (this.helperProportions.width / 2) && // Right Half
				x2 - (this.helperProportions.width / 2) < r && // Left Half
				t < y1 + (this.helperProportions.height / 2) && // Bottom Half
				y2 - (this.helperProportions.height / 2) < b ); // Top Half

		}
	},

	_intersectsWithPointer: function(item) {

		var isOverElementHeight = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
			isOverElementWidth = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
			isOverElement = isOverElementHeight && isOverElementWidth,
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (!isOverElement) {
			return false;
		}

		return this.floating ?
			( ((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1 )
			: ( verticalDirection && (verticalDirection === "down" ? 2 : 1) );

	},

	_intersectsWithSides: function(item) {

		var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
			isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (this.floating && horizontalDirection) {
			return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
		} else {
			return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
		}

	},

	_getDragVerticalDirection: function() {
		var delta = this.positionAbs.top - this.lastPositionAbs.top;
		return delta !== 0 && (delta > 0 ? "down" : "up");
	},

	_getDragHorizontalDirection: function() {
		var delta = this.positionAbs.left - this.lastPositionAbs.left;
		return delta !== 0 && (delta > 0 ? "right" : "left");
	},

	refresh: function(event) {
		this._refreshItems(event);
		this._setHandleClassName();
		this.refreshPositions();
		return this;
	},

	_connectWith: function() {
		var options = this.options;
		return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
	},

	_getItemsAsjQuery: function(connected) {

		var i, j, cur, inst,
			items = [],
			queries = [],
			connectWith = this._connectWith();

		if(connectWith && connected) {
			for (i = connectWith.length - 1; i >= 0; i--){
				cur = $(connectWith[i], this.document[0]);
				for ( j = cur.length - 1; j >= 0; j--){
					inst = $.data(cur[j], this.widgetFullName);
					if(inst && inst !== this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
					}
				}
			}
		}

		queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

		function addItems() {
			items.push( this );
		}
		for (i = queries.length - 1; i >= 0; i--){
			queries[i][0].each( addItems );
		}

		return $(items);

	},

	_removeCurrentsFromItems: function() {

		var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

		this.items = $.grep(this.items, function (item) {
			for (var j=0; j < list.length; j++) {
				if(list[j] === item.item[0]) {
					return false;
				}
			}
			return true;
		});

	},

	_refreshItems: function(event) {

		this.items = [];
		this.containers = [this];

		var i, j, cur, inst, targetData, _queries, item, queriesLength,
			items = this.items,
			queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]],
			connectWith = this._connectWith();

		if(connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
			for (i = connectWith.length - 1; i >= 0; i--){
				cur = $(connectWith[i], this.document[0]);
				for (j = cur.length - 1; j >= 0; j--){
					inst = $.data(cur[j], this.widgetFullName);
					if(inst && inst !== this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
						this.containers.push(inst);
					}
				}
			}
		}

		for (i = queries.length - 1; i >= 0; i--) {
			targetData = queries[i][1];
			_queries = queries[i][0];

			for (j=0, queriesLength = _queries.length; j < queriesLength; j++) {
				item = $(_queries[j]);

				item.data(this.widgetName + "-item", targetData); // Data for target checking (mouse manager)

				items.push({
					item: item,
					instance: targetData,
					width: 0, height: 0,
					left: 0, top: 0
				});
			}
		}

	},

	refreshPositions: function(fast) {

		//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
		if(this.offsetParent && this.helper) {
			this.offset.parent = this._getParentOffset();
		}

		var i, item, t, p;

		for (i = this.items.length - 1; i >= 0; i--){
			item = this.items[i];

			//We ignore calculating positions of all connected containers when we're not over them
			if(item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
				continue;
			}

			t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

			if (!fast) {
				item.width = t.outerWidth();
				item.height = t.outerHeight();
			}

			p = t.offset();
			item.left = p.left;
			item.top = p.top;
		}

		if(this.options.custom && this.options.custom.refreshContainers) {
			this.options.custom.refreshContainers.call(this);
		} else {
			for (i = this.containers.length - 1; i >= 0; i--){
				p = this.containers[i].element.offset();
				this.containers[i].containerCache.left = p.left;
				this.containers[i].containerCache.top = p.top;
				this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
				this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			}
		}

		return this;
	},

	_createPlaceholder: function(that) {
		that = that || this;
		var className,
			o = that.options;

		if(!o.placeholder || o.placeholder.constructor === String) {
			className = o.placeholder;
			o.placeholder = {
				element: function() {

					var nodeName = that.currentItem[0].nodeName.toLowerCase(),
						element = $( "<" + nodeName + ">", that.document[0] )
							.addClass(className || that.currentItem[0].className+" ui-sortable-placeholder")
							.removeClass("ui-sortable-helper");

					if ( nodeName === "tr" ) {
						that.currentItem.children().each(function() {
							$( "<td>&#160;</td>", that.document[0] )
								.attr( "colspan", $( this ).attr( "colspan" ) || 1 )
								.appendTo( element );
						});
					} else if ( nodeName === "img" ) {
						element.attr( "src", that.currentItem.attr( "src" ) );
					}

					if ( !className ) {
						element.css( "visibility", "hidden" );
					}

					return element;
				},
				update: function(container, p) {

					// 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
					// 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
					if(className && !o.forcePlaceholderSize) {
						return;
					}

					//If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
					if(!p.height()) { p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop")||0, 10) - parseInt(that.currentItem.css("paddingBottom")||0, 10)); }
					if(!p.width()) { p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft")||0, 10) - parseInt(that.currentItem.css("paddingRight")||0, 10)); }
				}
			};
		}

		//Create the placeholder
		that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

		//Append it after the actual current item
		that.currentItem.after(that.placeholder);

		//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
		o.placeholder.update(that, that.placeholder);

	},

	_contactContainers: function(event) {
		var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis,
			innermostContainer = null,
			innermostIndex = null;

		// get innermost container that intersects with item
		for (i = this.containers.length - 1; i >= 0; i--) {

			// never consider a container that's located within the item itself
			if($.contains(this.currentItem[0], this.containers[i].element[0])) {
				continue;
			}

			if(this._intersectsWith(this.containers[i].containerCache)) {

				// if we've already found a container and it's more "inner" than this, then continue
				if(innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
					continue;
				}

				innermostContainer = this.containers[i];
				innermostIndex = i;

			} else {
				// container doesn't intersect. trigger "out" event if necessary
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", event, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		// if no intersecting containers found, return
		if(!innermostContainer) {
			return;
		}

		// move the item into the container if it's not there already
		if(this.containers.length === 1) {
			if (!this.containers[innermostIndex].containerCache.over) {
				this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
				this.containers[innermostIndex].containerCache.over = 1;
			}
		} else {

			//When entering a new container, we will find the item with the least distance and append our item near it
			dist = 10000;
			itemWithLeastDistance = null;
			floating = innermostContainer.floating || this._isFloating(this.currentItem);
			posProperty = floating ? "left" : "top";
			sizeProperty = floating ? "width" : "height";
			axis = floating ? "clientX" : "clientY";

			for (j = this.items.length - 1; j >= 0; j--) {
				if(!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
					continue;
				}
				if(this.items[j].item[0] === this.currentItem[0]) {
					continue;
				}

				cur = this.items[j].item.offset()[posProperty];
				nearBottom = false;
				if ( event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2 ) {
					nearBottom = true;
				}

				if ( Math.abs( event[ axis ] - cur ) < dist ) {
					dist = Math.abs( event[ axis ] - cur );
					itemWithLeastDistance = this.items[ j ];
					this.direction = nearBottom ? "up": "down";
				}
			}

			//Check if dropOnEmpty is enabled
			if(!itemWithLeastDistance && !this.options.dropOnEmpty) {
				return;
			}

			if(this.currentContainer === this.containers[innermostIndex]) {
				if ( !this.currentContainer.containerCache.over ) {
					this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash() );
					this.currentContainer.containerCache.over = 1;
				}
				return;
			}

			itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
			this._trigger("change", event, this._uiHash());
			this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
			this.currentContainer = this.containers[innermostIndex];

			//Update the placeholder
			this.options.placeholder.update(this.currentContainer, this.placeholder);

			this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
			this.containers[innermostIndex].containerCache.over = 1;
		}


	},

	_createHelper: function(event) {

		var o = this.options,
			helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

		//Add the helper to the DOM if that didn't happen already
		if(!helper.parents("body").length) {
			$(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
		}

		if(helper[0] === this.currentItem[0]) {
			this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };
		}

		if(!helper[0].style.width || o.forceHelperSize) {
			helper.width(this.currentItem.width());
		}
		if(!helper[0].style.height || o.forceHelperSize) {
			helper.height(this.currentItem.height());
		}

		return helper;

	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj === "string") {
			obj = obj.split(" ");
		}
		if ($.isArray(obj)) {
			obj = {left: +obj[0], top: +obj[1] || 0};
		}
		if ("left" in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ("right" in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ("top" in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ("bottom" in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {


		//Get the offsetParent and cache its position
		this.offsetParent = this.helper.offsetParent();
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if(this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		// This needs to be actually done for all browsers, since pageX/pageY includes this information
		// with an ugly IE fix
		if( this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
		};

	},

	_getRelativeOffset: function() {

		if(this.cssPosition === "relative") {
			var p = this.currentItem.position();
			return {
				top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
				left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
			top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var ce, co, over,
			o = this.options;
		if(o.containment === "parent") {
			o.containment = this.helper[0].parentNode;
		}
		if(o.containment === "document" || o.containment === "window") {
			this.containment = [
				0 - this.offset.relative.left - this.offset.parent.left,
				0 - this.offset.relative.top - this.offset.parent.top,
				o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
				(o.containment === "document" ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
			];
		}

		if(!(/^(document|window|parent)$/).test(o.containment)) {
			ce = $(o.containment)[0];
			co = $(o.containment).offset();
			over = ($(ce).css("overflow") !== "hidden");

			this.containment = [
				co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
				co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
				co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
				co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
			];
		}

	},

	_convertPositionTo: function(d, pos) {

		if(!pos) {
			pos = this.position;
		}
		var mod = d === "absolute" ? 1 : -1,
			scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
			scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		return {
			top: (
				pos.top	+																// The absolute mouse position
				this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top * mod -											// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
			),
			left: (
				pos.left +																// The absolute mouse position
				this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
			)
		};

	},

	_generatePosition: function(event) {

		var top, left,
			o = this.options,
			pageX = event.pageX,
			pageY = event.pageY,
			scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		// This is another very weird special case that only happens for relative elements:
		// 1. If the css position is relative
		// 2. and the scroll parent is the document or similar to the offset parent
		// we have to refresh the relative offset during the scroll so there are no jumps
		if(this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
			this.offset.relative = this._getRelativeOffset();
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		if(this.originalPosition) { //If we are not dragging yet, we won't check for options

			if(this.containment) {
				if(event.pageX - this.offset.click.left < this.containment[0]) {
					pageX = this.containment[0] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top < this.containment[1]) {
					pageY = this.containment[1] + this.offset.click.top;
				}
				if(event.pageX - this.offset.click.left > this.containment[2]) {
					pageX = this.containment[2] + this.offset.click.left;
				}
				if(event.pageY - this.offset.click.top > this.containment[3]) {
					pageY = this.containment[3] + this.offset.click.top;
				}
			}

			if(o.grid) {
				top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
				pageY = this.containment ? ( (top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
				pageX = this.containment ? ( (left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

		}

		return {
			top: (
				pageY -																// The absolute mouse position
				this.offset.click.top -													// Click offset (relative to the element)
				this.offset.relative.top	-											// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
			),
			left: (
				pageX -																// The absolute mouse position
				this.offset.click.left -												// Click offset (relative to the element)
				this.offset.relative.left	-											// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
				( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
			)
		};

	},

	_rearrange: function(event, i, a, hardRefresh) {

		a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

		//Various things done here to improve the performance:
		// 1. we create a setTimeout, that calls refreshPositions
		// 2. on the instance, we have a counter variable, that get's higher after every append
		// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
		// 4. this lets only the last addition to the timeout stack through
		this.counter = this.counter ? ++this.counter : 1;
		var counter = this.counter;

		this._delay(function() {
			if(counter === this.counter) {
				this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
			}
		});

	},

	_clear: function(event, noPropagation) {

		this.reverting = false;
		// We delay all events that have to be triggered to after the point where the placeholder has been removed and
		// everything else normalized again
		var i,
			delayedTriggers = [];

		// We first have to update the dom position of the actual currentItem
		// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
		if(!this._noFinalSort && this.currentItem.parent().length) {
			this.placeholder.before(this.currentItem);
		}
		this._noFinalSort = null;

		if(this.helper[0] === this.currentItem[0]) {
			for(i in this._storedCSS) {
				if(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
					this._storedCSS[i] = "";
				}
			}
			this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
		} else {
			this.currentItem.show();
		}

		if(this.fromOutside && !noPropagation) {
			delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
		}
		if((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
			delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed
		}

		// Check if the items Container has Changed and trigger appropriate
		// events.
		if (this !== this.currentContainer) {
			if(!noPropagation) {
				delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
				delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.currentContainer));
				delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.currentContainer));
			}
		}


		//Post events to containers
		function delayEvent( type, instance, container ) {
			return function( event ) {
				container._trigger( type, event, instance._uiHash( instance ) );
			};
		}
		for (i = this.containers.length - 1; i >= 0; i--){
			if (!noPropagation) {
				delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
			}
			if(this.containers[i].containerCache.over) {
				delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
				this.containers[i].containerCache.over = 0;
			}
		}

		//Do what was originally in plugins
		if ( this.storedCursor ) {
			this.document.find( "body" ).css( "cursor", this.storedCursor );
			this.storedStylesheet.remove();
		}
		if(this._storedOpacity) {
			this.helper.css("opacity", this._storedOpacity);
		}
		if(this._storedZIndex) {
			this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
		}

		this.dragging = false;

		if(!noPropagation) {
			this._trigger("beforeStop", event, this._uiHash());
		}

		//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
		this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

		if ( !this.cancelHelperRemoval ) {
			if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
				this.helper.remove();
			}
			this.helper = null;
		}

		if(!noPropagation) {
			for (i=0; i < delayedTriggers.length; i++) {
				delayedTriggers[i].call(this, event);
			} //Trigger all delayed events
			this._trigger("stop", event, this._uiHash());
		}

		this.fromOutside = false;
		return !this.cancelHelperRemoval;

	},

	_trigger: function() {
		if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
			this.cancel();
		}
	},

	_uiHash: function(_inst) {
		var inst = _inst || this;
		return {
			helper: inst.helper,
			placeholder: inst.placeholder || $([]),
			position: inst.position,
			originalPosition: inst.originalPosition,
			offset: inst.positionAbs,
			item: inst.currentItem,
			sender: _inst ? _inst.element : null
		};
	}

});


/*!
 * jQuery UI Menu 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */


var menu = $.widget( "ui.menu", {
	version: "1.11.3",
	defaultElement: "<ul>",
	delay: 300,
	options: {
		icons: {
			submenu: "ui-icon-carat-1-e"
		},
		items: "> *",
		menus: "ul",
		position: {
			my: "left-1 top",
			at: "right top"
		},
		role: "menu",

		// callbacks
		blur: null,
		focus: null,
		select: null
	},

	_create: function() {
		this.activeMenu = this.element;

		// Flag used to prevent firing of the click handler
		// as the event bubbles up through nested menus
		this.mouseHandled = false;
		this.element
			.uniqueId()
			.addClass( "ui-menu ui-widget ui-widget-content" )
			.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length )
			.attr({
				role: this.options.role,
				tabIndex: 0
			});

		if ( this.options.disabled ) {
			this.element
				.addClass( "ui-state-disabled" )
				.attr( "aria-disabled", "true" );
		}

		this._on({
			// Prevent focus from sticking to links inside menu after clicking
			// them (focus should always stay on UL during navigation).
			"mousedown .ui-menu-item": function( event ) {
				event.preventDefault();
			},
			"click .ui-menu-item": function( event ) {
				var target = $( event.target );
				if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
					this.select( event );

					// Only set the mouseHandled flag if the event will bubble, see #9469.
					if ( !event.isPropagationStopped() ) {
						this.mouseHandled = true;
					}

					// Open submenu on click
					if ( target.has( ".ui-menu" ).length ) {
						this.expand( event );
					} else if ( !this.element.is( ":focus" ) && $( this.document[ 0 ].activeElement ).closest( ".ui-menu" ).length ) {

						// Redirect focus to the menu
						this.element.trigger( "focus", [ true ] );

						// If the active item is on the top level, let it stay active.
						// Otherwise, blur the active item since it is no longer visible.
						if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
							clearTimeout( this.timer );
						}
					}
				}
			},
			"mouseenter .ui-menu-item": function( event ) {
				// Ignore mouse events while typeahead is active, see #10458.
				// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
				// is over an item in the menu
				if ( this.previousFilter ) {
					return;
				}
				var target = $( event.currentTarget );
				// Remove ui-state-active class from siblings of the newly focused menu item
				// to avoid a jump caused by adjacent elements both having a class with a border
				target.siblings( ".ui-state-active" ).removeClass( "ui-state-active" );
				this.focus( event, target );
			},
			mouseleave: "collapseAll",
			"mouseleave .ui-menu": "collapseAll",
			focus: function( event, keepActiveItem ) {
				// If there's already an active item, keep it active
				// If not, activate the first item
				var item = this.active || this.element.find( this.options.items ).eq( 0 );

				if ( !keepActiveItem ) {
					this.focus( event, item );
				}
			},
			blur: function( event ) {
				this._delay(function() {
					if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
						this.collapseAll( event );
					}
				});
			},
			keydown: "_keydown"
		});

		this.refresh();

		// Clicks outside of a menu collapse any open menus
		this._on( this.document, {
			click: function( event ) {
				if ( this._closeOnDocumentClick( event ) ) {
					this.collapseAll( event );
				}

				// Reset the mouseHandled flag
				this.mouseHandled = false;
			}
		});
	},

	_destroy: function() {
		// Destroy (sub)menus
		this.element
			.removeAttr( "aria-activedescendant" )
			.find( ".ui-menu" ).addBack()
				.removeClass( "ui-menu ui-widget ui-widget-content ui-menu-icons ui-front" )
				.removeAttr( "role" )
				.removeAttr( "tabIndex" )
				.removeAttr( "aria-labelledby" )
				.removeAttr( "aria-expanded" )
				.removeAttr( "aria-hidden" )
				.removeAttr( "aria-disabled" )
				.removeUniqueId()
				.show();

		// Destroy menu items
		this.element.find( ".ui-menu-item" )
			.removeClass( "ui-menu-item" )
			.removeAttr( "role" )
			.removeAttr( "aria-disabled" )
			.removeUniqueId()
			.removeClass( "ui-state-hover" )
			.removeAttr( "tabIndex" )
			.removeAttr( "role" )
			.removeAttr( "aria-haspopup" )
			.children().each( function() {
				var elem = $( this );
				if ( elem.data( "ui-menu-submenu-carat" ) ) {
					elem.remove();
				}
			});

		// Destroy menu dividers
		this.element.find( ".ui-menu-divider" ).removeClass( "ui-menu-divider ui-widget-content" );
	},

	_keydown: function( event ) {
		var match, prev, character, skip,
			preventDefault = true;

		switch ( event.keyCode ) {
		case $.ui.keyCode.PAGE_UP:
			this.previousPage( event );
			break;
		case $.ui.keyCode.PAGE_DOWN:
			this.nextPage( event );
			break;
		case $.ui.keyCode.HOME:
			this._move( "first", "first", event );
			break;
		case $.ui.keyCode.END:
			this._move( "last", "last", event );
			break;
		case $.ui.keyCode.UP:
			this.previous( event );
			break;
		case $.ui.keyCode.DOWN:
			this.next( event );
			break;
		case $.ui.keyCode.LEFT:
			this.collapse( event );
			break;
		case $.ui.keyCode.RIGHT:
			if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
				this.expand( event );
			}
			break;
		case $.ui.keyCode.ENTER:
		case $.ui.keyCode.SPACE:
			this._activate( event );
			break;
		case $.ui.keyCode.ESCAPE:
			this.collapse( event );
			break;
		default:
			preventDefault = false;
			prev = this.previousFilter || "";
			character = String.fromCharCode( event.keyCode );
			skip = false;

			clearTimeout( this.filterTimer );

			if ( character === prev ) {
				skip = true;
			} else {
				character = prev + character;
			}

			match = this._filterMenuItems( character );
			match = skip && match.index( this.active.next() ) !== -1 ?
				this.active.nextAll( ".ui-menu-item" ) :
				match;

			// If no matches on the current filter, reset to the last character pressed
			// to move down the menu to the first item that starts with that character
			if ( !match.length ) {
				character = String.fromCharCode( event.keyCode );
				match = this._filterMenuItems( character );
			}

			if ( match.length ) {
				this.focus( event, match );
				this.previousFilter = character;
				this.filterTimer = this._delay(function() {
					delete this.previousFilter;
				}, 1000 );
			} else {
				delete this.previousFilter;
			}
		}

		if ( preventDefault ) {
			event.preventDefault();
		}
	},

	_activate: function( event ) {
		if ( !this.active.is( ".ui-state-disabled" ) ) {
			if ( this.active.is( "[aria-haspopup='true']" ) ) {
				this.expand( event );
			} else {
				this.select( event );
			}
		}
	},

	refresh: function() {
		var menus, items,
			that = this,
			icon = this.options.icons.submenu,
			submenus = this.element.find( this.options.menus );

		this.element.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length );

		// Initialize nested menus
		submenus.filter( ":not(.ui-menu)" )
			.addClass( "ui-menu ui-widget ui-widget-content ui-front" )
			.hide()
			.attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			})
			.each(function() {
				var menu = $( this ),
					item = menu.parent(),
					submenuCarat = $( "<span>" )
						.addClass( "ui-menu-icon ui-icon " + icon )
						.data( "ui-menu-submenu-carat", true );

				item
					.attr( "aria-haspopup", "true" )
					.prepend( submenuCarat );
				menu.attr( "aria-labelledby", item.attr( "id" ) );
			});

		menus = submenus.add( this.element );
		items = menus.find( this.options.items );

		// Initialize menu-items containing spaces and/or dashes only as dividers
		items.not( ".ui-menu-item" ).each(function() {
			var item = $( this );
			if ( that._isDivider( item ) ) {
				item.addClass( "ui-widget-content ui-menu-divider" );
			}
		});

		// Don't refresh list items that are already adapted
		items.not( ".ui-menu-item, .ui-menu-divider" )
			.addClass( "ui-menu-item" )
			.uniqueId()
			.attr({
				tabIndex: -1,
				role: this._itemRole()
			});

		// Add aria-disabled attribute to any disabled menu item
		items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

		// If the active item has been removed, blur the menu
		if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			this.blur();
		}
	},

	_itemRole: function() {
		return {
			menu: "menuitem",
			listbox: "option"
		}[ this.options.role ];
	},

	_setOption: function( key, value ) {
		if ( key === "icons" ) {
			this.element.find( ".ui-menu-icon" )
				.removeClass( this.options.icons.submenu )
				.addClass( value.submenu );
		}
		if ( key === "disabled" ) {
			this.element
				.toggleClass( "ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
		}
		this._super( key, value );
	},

	focus: function( event, item ) {
		var nested, focused;
		this.blur( event, event && event.type === "focus" );

		this._scrollIntoView( item );

		this.active = item.first();
		focused = this.active.addClass( "ui-state-focus" ).removeClass( "ui-state-active" );
		// Only update aria-activedescendant if there's a role
		// otherwise we assume focus is managed elsewhere
		if ( this.options.role ) {
			this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
		}

		// Highlight active parent menu item, if any
		this.active
			.parent()
			.closest( ".ui-menu-item" )
			.addClass( "ui-state-active" );

		if ( event && event.type === "keydown" ) {
			this._close();
		} else {
			this.timer = this._delay(function() {
				this._close();
			}, this.delay );
		}

		nested = item.children( ".ui-menu" );
		if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
			this._startOpening(nested);
		}
		this.activeMenu = item.parent();

		this._trigger( "focus", event, { item: item } );
	},

	_scrollIntoView: function( item ) {
		var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
		if ( this._hasScroll() ) {
			borderTop = parseFloat( $.css( this.activeMenu[0], "borderTopWidth" ) ) || 0;
			paddingTop = parseFloat( $.css( this.activeMenu[0], "paddingTop" ) ) || 0;
			offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
			scroll = this.activeMenu.scrollTop();
			elementHeight = this.activeMenu.height();
			itemHeight = item.outerHeight();

			if ( offset < 0 ) {
				this.activeMenu.scrollTop( scroll + offset );
			} else if ( offset + itemHeight > elementHeight ) {
				this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
			}
		}
	},

	blur: function( event, fromFocus ) {
		if ( !fromFocus ) {
			clearTimeout( this.timer );
		}

		if ( !this.active ) {
			return;
		}

		this.active.removeClass( "ui-state-focus" );
		this.active = null;

		this._trigger( "blur", event, { item: this.active } );
	},

	_startOpening: function( submenu ) {
		clearTimeout( this.timer );

		// Don't open if already open fixes a Firefox bug that caused a .5 pixel
		// shift in the submenu position when mousing over the carat icon
		if ( submenu.attr( "aria-hidden" ) !== "true" ) {
			return;
		}

		this.timer = this._delay(function() {
			this._close();
			this._open( submenu );
		}, this.delay );
	},

	_open: function( submenu ) {
		var position = $.extend({
			of: this.active
		}, this.options.position );

		clearTimeout( this.timer );
		this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
			.hide()
			.attr( "aria-hidden", "true" );

		submenu
			.show()
			.removeAttr( "aria-hidden" )
			.attr( "aria-expanded", "true" )
			.position( position );
	},

	collapseAll: function( event, all ) {
		clearTimeout( this.timer );
		this.timer = this._delay(function() {
			// If we were passed an event, look for the submenu that contains the event
			var currentMenu = all ? this.element :
				$( event && event.target ).closest( this.element.find( ".ui-menu" ) );

			// If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
			if ( !currentMenu.length ) {
				currentMenu = this.element;
			}

			this._close( currentMenu );

			this.blur( event );
			this.activeMenu = currentMenu;
		}, this.delay );
	},

	// With no arguments, closes the currently active menu - if nothing is active
	// it closes all menus.  If passed an argument, it will search for menus BELOW
	_close: function( startMenu ) {
		if ( !startMenu ) {
			startMenu = this.active ? this.active.parent() : this.element;
		}

		startMenu
			.find( ".ui-menu" )
				.hide()
				.attr( "aria-hidden", "true" )
				.attr( "aria-expanded", "false" )
			.end()
			.find( ".ui-state-active" ).not( ".ui-state-focus" )
				.removeClass( "ui-state-active" );
	},

	_closeOnDocumentClick: function( event ) {
		return !$( event.target ).closest( ".ui-menu" ).length;
	},

	_isDivider: function( item ) {

		// Match hyphen, em dash, en dash
		return !/[^\-\u2014\u2013\s]/.test( item.text() );
	},

	collapse: function( event ) {
		var newItem = this.active &&
			this.active.parent().closest( ".ui-menu-item", this.element );
		if ( newItem && newItem.length ) {
			this._close();
			this.focus( event, newItem );
		}
	},

	expand: function( event ) {
		var newItem = this.active &&
			this.active
				.children( ".ui-menu " )
				.find( this.options.items )
				.first();

		if ( newItem && newItem.length ) {
			this._open( newItem.parent() );

			// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
			this._delay(function() {
				this.focus( event, newItem );
			});
		}
	},

	next: function( event ) {
		this._move( "next", "first", event );
	},

	previous: function( event ) {
		this._move( "prev", "last", event );
	},

	isFirstItem: function() {
		return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
	},

	isLastItem: function() {
		return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
	},

	_move: function( direction, filter, event ) {
		var next;
		if ( this.active ) {
			if ( direction === "first" || direction === "last" ) {
				next = this.active
					[ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
					.eq( -1 );
			} else {
				next = this.active
					[ direction + "All" ]( ".ui-menu-item" )
					.eq( 0 );
			}
		}
		if ( !next || !next.length || !this.active ) {
			next = this.activeMenu.find( this.options.items )[ filter ]();
		}

		this.focus( event, next );
	},

	nextPage: function( event ) {
		var item, base, height;

		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isLastItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.nextAll( ".ui-menu-item" ).each(function() {
				item = $( this );
				return item.offset().top - base - height < 0;
			});

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items )
				[ !this.active ? "first" : "last" ]() );
		}
	},

	previousPage: function( event ) {
		var item, base, height;
		if ( !this.active ) {
			this.next( event );
			return;
		}
		if ( this.isFirstItem() ) {
			return;
		}
		if ( this._hasScroll() ) {
			base = this.active.offset().top;
			height = this.element.height();
			this.active.prevAll( ".ui-menu-item" ).each(function() {
				item = $( this );
				return item.offset().top - base + height > 0;
			});

			this.focus( event, item );
		} else {
			this.focus( event, this.activeMenu.find( this.options.items ).first() );
		}
	},

	_hasScroll: function() {
		return this.element.outerHeight() < this.element.prop( "scrollHeight" );
	},

	select: function( event ) {
		// TODO: It should never be possible to not have an active item at this
		// point, but the tests don't trigger mouseenter before click.
		this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
		var ui = { item: this.active };
		if ( !this.active.has( ".ui-menu" ).length ) {
			this.collapseAll( event, true );
		}
		this._trigger( "select", event, ui );
	},

	_filterMenuItems: function(character) {
		var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
			regex = new RegExp( "^" + escapedCharacter, "i" );

		return this.activeMenu
			.find( this.options.items )

			// Only match on items, not dividers or other content (#10571)
			.filter( ".ui-menu-item" )
			.filter(function() {
				return regex.test( $.trim( $( this ).text() ) );
			});
	}
});


/*!
 * jQuery UI Autocomplete 1.11.3
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */


$.widget( "ui.autocomplete", {
	version: "1.11.3",
	defaultElement: "<input>",
	options: {
		appendTo: null,
		autoFocus: false,
		delay: 300,
		minLength: 1,
		position: {
			my: "left top",
			at: "left bottom",
			collision: "none"
		},
		source: null,

		// callbacks
		change: null,
		close: null,
		focus: null,
		open: null,
		response: null,
		search: null,
		select: null
	},

	requestIndex: 0,
	pending: 0,

	_create: function() {
		// Some browsers only repeat keydown events, not keypress events,
		// so we use the suppressKeyPress flag to determine if we've already
		// handled the keydown event. #7269
		// Unfortunately the code for & in keypress is the same as the up arrow,
		// so we use the suppressKeyPressRepeat flag to avoid handling keypress
		// events when we know the keydown event was used to modify the
		// search term. #7799
		var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
			nodeName = this.element[ 0 ].nodeName.toLowerCase(),
			isTextarea = nodeName === "textarea",
			isInput = nodeName === "input";

		this.isMultiLine =
			// Textareas are always multi-line
			isTextarea ? true :
			// Inputs are always single-line, even if inside a contentEditable element
			// IE also treats inputs as contentEditable
			isInput ? false :
			// All other element types are determined by whether or not they're contentEditable
			this.element.prop( "isContentEditable" );

		this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
		this.isNewMenu = true;

		this.element
			.addClass( "ui-autocomplete-input" )
			.attr( "autocomplete", "off" );

		this._on( this.element, {
			keydown: function( event ) {
				if ( this.element.prop( "readOnly" ) ) {
					suppressKeyPress = true;
					suppressInput = true;
					suppressKeyPressRepeat = true;
					return;
				}

				suppressKeyPress = false;
				suppressInput = false;
				suppressKeyPressRepeat = false;
				var keyCode = $.ui.keyCode;
				switch ( event.keyCode ) {
				case keyCode.PAGE_UP:
					suppressKeyPress = true;
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					suppressKeyPress = true;
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					suppressKeyPress = true;
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					suppressKeyPress = true;
					this._keyEvent( "next", event );
					break;
				case keyCode.ENTER:
					// when menu is open and has focus
					if ( this.menu.active ) {
						// #6055 - Opera still allows the keypress to occur
						// which causes forms to submit
						suppressKeyPress = true;
						event.preventDefault();
						this.menu.select( event );
					}
					break;
				case keyCode.TAB:
					if ( this.menu.active ) {
						this.menu.select( event );
					}
					break;
				case keyCode.ESCAPE:
					if ( this.menu.element.is( ":visible" ) ) {
						if ( !this.isMultiLine ) {
							this._value( this.term );
						}
						this.close( event );
						// Different browsers have different default behavior for escape
						// Single press can mean undo or clear
						// Double press in IE means clear the whole form
						event.preventDefault();
					}
					break;
				default:
					suppressKeyPressRepeat = true;
					// search timeout should be triggered before the input value is changed
					this._searchTimeout( event );
					break;
				}
			},
			keypress: function( event ) {
				if ( suppressKeyPress ) {
					suppressKeyPress = false;
					if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
						event.preventDefault();
					}
					return;
				}
				if ( suppressKeyPressRepeat ) {
					return;
				}

				// replicate some key handlers to allow them to repeat in Firefox and Opera
				var keyCode = $.ui.keyCode;
				switch ( event.keyCode ) {
				case keyCode.PAGE_UP:
					this._move( "previousPage", event );
					break;
				case keyCode.PAGE_DOWN:
					this._move( "nextPage", event );
					break;
				case keyCode.UP:
					this._keyEvent( "previous", event );
					break;
				case keyCode.DOWN:
					this._keyEvent( "next", event );
					break;
				}
			},
			input: function( event ) {
				if ( suppressInput ) {
					suppressInput = false;
					event.preventDefault();
					return;
				}
				this._searchTimeout( event );
			},
			focus: function() {
				this.selectedItem = null;
				this.previous = this._value();
			},
			blur: function( event ) {
				if ( this.cancelBlur ) {
					delete this.cancelBlur;
					return;
				}

				clearTimeout( this.searching );
				this.close( event );
				this._change( event );
			}
		});

		this._initSource();
		this.menu = $( "<ul>" )
			.addClass( "ui-autocomplete ui-front" )
			.appendTo( this._appendTo() )
			.menu({
				// disable ARIA support, the live region takes care of that
				role: null
			})
			.hide()
			.menu( "instance" );

		this._on( this.menu.element, {
			mousedown: function( event ) {
				// prevent moving focus out of the text field
				event.preventDefault();

				// IE doesn't prevent moving focus even with event.preventDefault()
				// so we set a flag to know when we should ignore the blur event
				this.cancelBlur = true;
				this._delay(function() {
					delete this.cancelBlur;
				});

				// clicking on the scrollbar causes focus to shift to the body
				// but we can't detect a mouseup or a click immediately afterward
				// so we have to track the next mousedown and close the menu if
				// the user clicks somewhere outside of the autocomplete
				var menuElement = this.menu.element[ 0 ];
				if ( !$( event.target ).closest( ".ui-menu-item" ).length ) {
					this._delay(function() {
						var that = this;
						this.document.one( "mousedown", function( event ) {
							if ( event.target !== that.element[ 0 ] &&
									event.target !== menuElement &&
									!$.contains( menuElement, event.target ) ) {
								that.close();
							}
						});
					});
				}
			},
			menufocus: function( event, ui ) {
				var label, item;
				// support: Firefox
				// Prevent accidental activation of menu items in Firefox (#7024 #9118)
				if ( this.isNewMenu ) {
					this.isNewMenu = false;
					if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
						this.menu.blur();

						this.document.one( "mousemove", function() {
							$( event.target ).trigger( event.originalEvent );
						});

						return;
					}
				}

				item = ui.item.data( "ui-autocomplete-item" );
				if ( false !== this._trigger( "focus", event, { item: item } ) ) {
					// use value to match what will end up in the input, if it was a key event
					if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
						this._value( item.value );
					}
				}

				// Announce the value in the liveRegion
				label = ui.item.attr( "aria-label" ) || item.value;
				if ( label && $.trim( label ).length ) {
					this.liveRegion.children().hide();
					$( "<div>" ).text( label ).appendTo( this.liveRegion );
				}
			},
			menuselect: function( event, ui ) {
				var item = ui.item.data( "ui-autocomplete-item" ),
					previous = this.previous;

				// only trigger when focus was lost (click on menu)
				if ( this.element[ 0 ] !== this.document[ 0 ].activeElement ) {
					this.element.focus();
					this.previous = previous;
					// #6109 - IE triggers two focus events and the second
					// is asynchronous, so we need to reset the previous
					// term synchronously and asynchronously :-(
					this._delay(function() {
						this.previous = previous;
						this.selectedItem = item;
					});
				}

				if ( false !== this._trigger( "select", event, { item: item } ) ) {
					this._value( item.value );
				}
				// reset the term after the select event
				// this allows custom select handling to work properly
				this.term = this._value();

				this.close( event );
				this.selectedItem = item;
			}
		});

		this.liveRegion = $( "<span>", {
				role: "status",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			})
			.addClass( "ui-helper-hidden-accessible" )
			.appendTo( this.document[ 0 ].body );

		// turning off autocomplete prevents the browser from remembering the
		// value when navigating through history, so we re-enable autocomplete
		// if the page is unloaded before the widget is destroyed. #7790
		this._on( this.window, {
			beforeunload: function() {
				this.element.removeAttr( "autocomplete" );
			}
		});
	},

	_destroy: function() {
		clearTimeout( this.searching );
		this.element
			.removeClass( "ui-autocomplete-input" )
			.removeAttr( "autocomplete" );
		this.menu.element.remove();
		this.liveRegion.remove();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "source" ) {
			this._initSource();
		}
		if ( key === "appendTo" ) {
			this.menu.element.appendTo( this._appendTo() );
		}
		if ( key === "disabled" && value && this.xhr ) {
			this.xhr.abort();
		}
	},

	_appendTo: function() {
		var element = this.options.appendTo;

		if ( element ) {
			element = element.jquery || element.nodeType ?
				$( element ) :
				this.document.find( element ).eq( 0 );
		}

		if ( !element || !element[ 0 ] ) {
			element = this.element.closest( ".ui-front" );
		}

		if ( !element.length ) {
			element = this.document[ 0 ].body;
		}

		return element;
	},

	_initSource: function() {
		var array, url,
			that = this;
		if ( $.isArray( this.options.source ) ) {
			array = this.options.source;
			this.source = function( request, response ) {
				response( $.ui.autocomplete.filter( array, request.term ) );
			};
		} else if ( typeof this.options.source === "string" ) {
			url = this.options.source;
			this.source = function( request, response ) {
				if ( that.xhr ) {
					that.xhr.abort();
				}
				that.xhr = $.ajax({
					url: url,
					data: request,
					dataType: "json",
					success: function( data ) {
						response( data );
					},
					error: function() {
						response([]);
					}
				});
			};
		} else {
			this.source = this.options.source;
		}
	},

	_searchTimeout: function( event ) {
		clearTimeout( this.searching );
		this.searching = this._delay(function() {

			// Search if the value has changed, or if the user retypes the same value (see #7434)
			var equalValues = this.term === this._value(),
				menuVisible = this.menu.element.is( ":visible" ),
				modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

			if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
				this.selectedItem = null;
				this.search( null, event );
			}
		}, this.options.delay );
	},

	search: function( value, event ) {
		value = value != null ? value : this._value();

		// always save the actual value, not the one passed as an argument
		this.term = this._value();

		if ( value.length < this.options.minLength ) {
			return this.close( event );
		}

		if ( this._trigger( "search", event ) === false ) {
			return;
		}

		return this._search( value );
	},

	_search: function( value ) {
		this.pending++;
		this.element.addClass( "ui-autocomplete-loading" );
		this.cancelSearch = false;

		this.source( { term: value }, this._response() );
	},

	_response: function() {
		var index = ++this.requestIndex;

		return $.proxy(function( content ) {
			if ( index === this.requestIndex ) {
				this.__response( content );
			}

			this.pending--;
			if ( !this.pending ) {
				this.element.removeClass( "ui-autocomplete-loading" );
			}
		}, this );
	},

	__response: function( content ) {
		if ( content ) {
			content = this._normalize( content );
		}
		this._trigger( "response", null, { content: content } );
		if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
			this._suggest( content );
			this._trigger( "open" );
		} else {
			// use ._close() instead of .close() so we don't cancel future searches
			this._close();
		}
	},

	close: function( event ) {
		this.cancelSearch = true;
		this._close( event );
	},

	_close: function( event ) {
		if ( this.menu.element.is( ":visible" ) ) {
			this.menu.element.hide();
			this.menu.blur();
			this.isNewMenu = true;
			this._trigger( "close", event );
		}
	},

	_change: function( event ) {
		if ( this.previous !== this._value() ) {
			this._trigger( "change", event, { item: this.selectedItem } );
		}
	},

	_normalize: function( items ) {
		// assume all items have the right format when the first item is complete
		if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
			return items;
		}
		return $.map( items, function( item ) {
			if ( typeof item === "string" ) {
				return {
					label: item,
					value: item
				};
			}
			return $.extend( {}, item, {
				label: item.label || item.value,
				value: item.value || item.label
			});
		});
	},

	_suggest: function( items ) {
		var ul = this.menu.element.empty();
		this._renderMenu( ul, items );
		this.isNewMenu = true;
		this.menu.refresh();

		// size and position menu
		ul.show();
		this._resizeMenu();
		ul.position( $.extend({
			of: this.element
		}, this.options.position ) );

		if ( this.options.autoFocus ) {
			this.menu.next();
		}
	},

	_resizeMenu: function() {
		var ul = this.menu.element;
		ul.outerWidth( Math.max(
			// Firefox wraps long text (possibly a rounding bug)
			// so we add 1px to avoid the wrapping (#7513)
			ul.width( "" ).outerWidth() + 1,
			this.element.outerWidth()
		) );
	},

	_renderMenu: function( ul, items ) {
		var that = this;
		$.each( items, function( index, item ) {
			that._renderItemData( ul, item );
		});
	},

	_renderItemData: function( ul, item ) {
		return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
	},

	_renderItem: function( ul, item ) {
		return $( "<li>" ).text( item.label ).appendTo( ul );
	},

	_move: function( direction, event ) {
		if ( !this.menu.element.is( ":visible" ) ) {
			this.search( null, event );
			return;
		}
		if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
				this.menu.isLastItem() && /^next/.test( direction ) ) {

			if ( !this.isMultiLine ) {
				this._value( this.term );
			}

			this.menu.blur();
			return;
		}
		this.menu[ direction ]( event );
	},

	widget: function() {
		return this.menu.element;
	},

	_value: function() {
		return this.valueMethod.apply( this.element, arguments );
	},

	_keyEvent: function( keyEvent, event ) {
		if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
			this._move( keyEvent, event );

			// prevents moving cursor to beginning/end of the text field in some browsers
			event.preventDefault();
		}
	}
});

$.extend( $.ui.autocomplete, {
	escapeRegex: function( value ) {
		return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
	},
	filter: function( array, term ) {
		var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
		return $.grep( array, function( value ) {
			return matcher.test( value.label || value.value || value );
		});
	}
});

// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
	options: {
		messages: {
			noResults: "No search results.",
			results: function( amount ) {
				return amount + ( amount > 1 ? " results are" : " result is" ) +
					" available, use up and down arrow keys to navigate.";
			}
		}
	},

	__response: function( content ) {
		var message;
		this._superApply( arguments );
		if ( this.options.disabled || this.cancelSearch ) {
			return;
		}
		if ( content && content.length ) {
			message = this.options.messages.results( content.length );
		} else {
			message = this.options.messages.noResults;
		}
		this.liveRegion.children().hide();
		$( "<div>" ).text( message ).appendTo( this.liveRegion );
	}
});

var autocomplete = $.ui.autocomplete;



}));
/**
 * jquery.multisortable.js - v0.2
 * https://github.com/shvetsgroup/jquery.multisortable
 *
 * Author: Ethan Atlakson, Jay Hayes, Gabriel Such, Alexander Shvets
 * Last Revision 3/16/2012
 * multi-selectable, multi-sortable jQuery plugin
 */


!function($) {

	$.fn.multiselectable = function(options) {
		if (!options) {
			options = {}
		}
		options = $.extend({}, $.fn.multiselectable.defaults, options);

		function mouseDown(e) {
			var item = $(this),
				parent = item.parent(),
				myIndex = item.index();

			var prev = parent.find('.multiselectable-previous');
			// If no previous selection found, start selecting from first selected item.
			prev = prev.length ? prev : $(parent.find('.' + options.selectedClass)[0]).addClass('multiselectable-previous');
			var prevIndex = prev.index();

			if (e.ctrlKey || e.metaKey) {
				if (item.hasClass(options.selectedClass)) {
					item.removeClass(options.selectedClass).removeClass('multiselectable-previous')
					if (item.not('.child').length) {
						item.nextUntil(':not(.child)').removeClass(options.selectedClass);
					}
				}
				else {
					parent.find('.multiselectable-previous').removeClass('multiselectable-previous');
					item.addClass(options.selectedClass).addClass('multiselectable-previous')
					if (item.not('.child').length) {
						item.nextUntil(':not(.child)').addClass(options.selectedClass);
					}
				}
			}

			if (e.shiftKey) {
				var last_shift_range = parent.find('.multiselectable-shift');
				last_shift_range.removeClass(options.selectedClass).removeClass('multiselectable-shift');

				var shift_range;
				if (prevIndex < myIndex) {
					shift_range = item.prevUntil('.multiselectable-previous').add(prev).add(item);
				}
				else if (prevIndex > myIndex) {
					shift_range = item.nextUntil('.multiselectable-previous').add(prev).add(item);
				}
				shift_range.addClass(options.selectedClass).addClass('multiselectable-shift');
			}
			else {
				parent.find('.multiselectable-shift').removeClass('multiselectable-shift');
			}

			if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
				parent.find('.multiselectable-previous').removeClass('multiselectable-previous');
				if (!item.hasClass(options.selectedClass)) {
					parent.find('.' + options.selectedClass).removeClass(options.selectedClass);
					item.addClass(options.selectedClass).addClass('multiselectable-previous');
					if (item.not('.child').length) {
						item.nextUntil(':not(.child)').addClass(options.selectedClass);
					}
				}
			}

			options.mousedown(e, item);
		}

		function click(e) {
			if ( $(this).is('.ui-draggable-dragging') ) {
				return;
			}

			var item = $(this),	parent = item.parent();

			// If item wasn't draged and is not multiselected, it should reset selection for other items.
			if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
				parent.find('.multiselectable-previous').removeClass('multiselectable-previous');
				parent.find('.' + options.selectedClass).removeClass(options.selectedClass);
				item.addClass(options.selectedClass).addClass('multiselectable-previous');
				if (item.not('.child').length) {
					item.nextUntil(':not(.child)').addClass(options.selectedClass);
				}
			}

			options.click(e, item);
		}

		return this.each(function() {
			var list = $(this);

			if (!list.data('multiselectable')) {
				list.data('multiselectable', true)
					.delegate(options.items, 'mousedown', mouseDown)
					.delegate(options.items, 'click', click)
					.disableSelection();
			}
		})
	};

	$.fn.multiselectable.defaults = {
		click: function(event, elem) {},
		mousedown: function(event, elem) {},
		selectedClass: 'selected',
		items: 'li'
	};


	$.fn.multisortable = function(options) {
		if (!options) {
			options = {}
		}
		var settings = $.extend({}, $.fn.multisortable.defaults, options);

		function regroup(item, list) {
			if (list.find('.' + settings.selectedClass).length > 0) {
				var myIndex = item.data('i');

				var itemsBefore = list.find('.' + settings.selectedClass).filter(function() {
					return $(this).data('i') < myIndex
				}).css({
						position: '',
						width: '',
						left: '',
						top: '',
						zIndex: ''
					});

				item.before(itemsBefore);

				var itemsAfter = list.find('.' + settings.selectedClass).filter(function() {
					return $(this).data('i') > myIndex
				}).css({
						position: '',
						width: '',
						left: '',
						top: '',
						zIndex: ''
					});

				item.after(itemsAfter);

				setTimeout(function() {
					itemsAfter.add(itemsBefore).addClass(settings.selectedClass);
				}, 0);
			}
		}

		return this.each(function() {
			var list = $(this);

			//enable multi-selection
			list.multiselectable({
				selectedClass: settings.selectedClass,
				click: settings.click,
				items: settings.items,
				mousedown: settings.mousedown
			});

			//enable sorting
			options.cancel = settings.items + ':not(.' + settings.selectedClass + ')';
			options.placeholder = settings.placeholder;
			options.start = function(event, ui) {
				if (ui.item.hasClass(settings.selectedClass)) {
					var parent = ui.item.parent();

					//assign indexes to all selected items
					parent.find('.' + settings.selectedClass).each(function(i) {
						$(this).data('i', i);
					});

					// adjust placeholder size to be size of items
					var height = parent.find('.' + settings.selectedClass).length * ui.item.outerHeight();
					ui.placeholder.height(height);
				}

				settings.start(event, ui);
			};

			options.stop = function(event, ui) {
				regroup(ui.item, ui.item.parent());
				settings.stop(event, ui);
			};

			options.sort = function(event, ui) {
				var parent = ui.item.parent(),
					myIndex = ui.item.data('i'),
					top = parseInt(ui.item.css('top').replace('px', '')),
					left = parseInt(ui.item.css('left').replace('px', ''));

				// fix to keep compatibility using prototype.js and jquery together
				$.fn.reverse = Array.prototype._reverse || Array.prototype.reverse

				var height = 0;
				$('.' + settings.selectedClass, parent).filter(function() {
					return $(this).data('i') < myIndex;
				}).reverse().each(function() {
						height += $(this).outerHeight();
						$(this).css({
							left: left,
							top: top - height,
							position: 'absolute',
							zIndex: 1000,
							width: ui.item.width()
						})
					});

				height = ui.item.outerHeight();
				$('.' + settings.selectedClass, parent).filter(function() {
					return $(this).data('i') > myIndex;
				}).each(function() {
						var item = $(this);
						item.css({
							left: left,
							top: top + height,
							position: 'absolute',
							zIndex: 1000,
							width: ui.item.width()
						});

						height += item.outerHeight();
					});

				settings.sort(event, ui);
			};

			options.receive = function(event, ui) {
				regroup(ui.item, ui.sender);
				settings.receive(event, ui);
			};

			list.sortable(options).disableSelection();
		})
	};

	$.fn.multisortable.defaults = {
		start: function(event, ui) {},
		stop: function(event, ui) {},
		sort: function(event, ui) {},
		receive: function(event, ui) {},
		click: function(event, elem) {},
		mousedown: function(event, elem) {},
		selectedClass: 'selected',
		placeholder: 'placeholder',
		items: 'li'
	};

}(jQuery);
if (!window.console && !document.console) {
  window.console = {
    log: function() {}
  }
}
;
// https://github.com/mwalsher/actioncable-js
(function() {
  var slice = [].slice;

  this.ActionCable = {
    INTERNAL: {
      "message_types": {
        "welcome": "welcome",
        "ping": "ping",
        "confirmation": "confirm_subscription",
        "rejection": "reject_subscription"
      },
      "default_mount_path": "/cable",
      "protocols": ["actioncable-v1-json", "actioncable-unsupported"]
    },
    createConsumer: function(url) {
      var ref;
      if (url == null) {
        url = (ref = this.getConfig("url")) != null ? ref : this.INTERNAL.default_mount_path;
      }
      return new ActionCable.Consumer(this.createWebSocketURL(url));
    },
    getConfig: function(name) {
      var element;
      element = document.head.querySelector("meta[name='action-cable-" + name + "']");
      return element != null ? element.getAttribute("content") : void 0;
    },
    createWebSocketURL: function(url) {
      var a;
      if (url && !/^wss?:/i.test(url)) {
        a = document.createElement("a");
        a.href = url;
        a.href = a.href;
        a.protocol = a.protocol.replace("http", "ws");
        return a.href;
      } else {
        return url;
      }
    },
    startDebugging: function() {
      return this.debugging = true;
    },
    stopDebugging: function() {
      return this.debugging = null;
    },
    log: function() {
      var messages;
      messages = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (this.debugging) {
        messages.push(Date.now());
        return console.log.apply(console, ["[ActionCable]"].concat(slice.call(messages)));
      }
    }
  };

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ActionCable.ConnectionMonitor = (function() {
    var clamp, now, secondsSince;

    ConnectionMonitor.pollInterval = {
      min: 3,
      max: 30
    };

    ConnectionMonitor.staleThreshold = 6;

    function ConnectionMonitor(connection) {
      this.connection = connection;
      this.visibilityDidChange = bind(this.visibilityDidChange, this);
      this.reconnectAttempts = 0;
    }

    ConnectionMonitor.prototype.start = function() {
      if (!this.isRunning()) {
        this.startedAt = now();
        delete this.stoppedAt;
        this.startPolling();
        document.addEventListener("visibilitychange", this.visibilityDidChange);
        return ActionCable.log("ConnectionMonitor started. pollInterval = " + (this.getPollInterval()) + " ms");
      }
    };

    ConnectionMonitor.prototype.stop = function() {
      if (this.isRunning()) {
        this.stoppedAt = now();
        this.stopPolling();
        document.removeEventListener("visibilitychange", this.visibilityDidChange);
        return ActionCable.log("ConnectionMonitor stopped");
      }
    };

    ConnectionMonitor.prototype.isRunning = function() {
      return (this.startedAt != null) && (this.stoppedAt == null);
    };

    ConnectionMonitor.prototype.recordPing = function() {
      return this.pingedAt = now();
    };

    ConnectionMonitor.prototype.recordConnect = function() {
      this.reconnectAttempts = 0;
      this.recordPing();
      delete this.disconnectedAt;
      return ActionCable.log("ConnectionMonitor recorded connect");
    };

    ConnectionMonitor.prototype.recordDisconnect = function() {
      this.disconnectedAt = now();
      return ActionCable.log("ConnectionMonitor recorded disconnect");
    };

    ConnectionMonitor.prototype.startPolling = function() {
      this.stopPolling();
      return this.poll();
    };

    ConnectionMonitor.prototype.stopPolling = function() {
      return clearTimeout(this.pollTimeout);
    };

    ConnectionMonitor.prototype.poll = function() {
      return this.pollTimeout = setTimeout((function(_this) {
        return function() {
          _this.reconnectIfStale();
          return _this.poll();
        };
      })(this), this.getPollInterval());
    };

    ConnectionMonitor.prototype.getPollInterval = function() {
      var interval, max, min, ref;
      ref = this.constructor.pollInterval, min = ref.min, max = ref.max;
      interval = 5 * Math.log(this.reconnectAttempts + 1);
      return Math.round(clamp(interval, min, max) * 1000);
    };

    ConnectionMonitor.prototype.reconnectIfStale = function() {
      if (this.connectionIsStale()) {
        ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + (this.getPollInterval()) + " ms, time disconnected = " + (secondsSince(this.disconnectedAt)) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
        this.reconnectAttempts++;
        if (this.disconnectedRecently()) {
          return ActionCable.log("ConnectionMonitor skipping reopening recent disconnect");
        } else {
          ActionCable.log("ConnectionMonitor reopening");
          return this.connection.reopen();
        }
      }
    };

    ConnectionMonitor.prototype.connectionIsStale = function() {
      var ref;
      return secondsSince((ref = this.pingedAt) != null ? ref : this.startedAt) > this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.disconnectedRecently = function() {
      return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
    };

    ConnectionMonitor.prototype.visibilityDidChange = function() {
      if (document.visibilityState === "visible") {
        return setTimeout((function(_this) {
          return function() {
            if (_this.connectionIsStale() || !_this.connection.isOpen()) {
              ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState);
              return _this.connection.reopen();
            }
          };
        })(this), 200);
      }
    };

    now = function() {
      return new Date().getTime();
    };

    secondsSince = function(time) {
      return (now() - time) / 1000;
    };

    clamp = function(number, min, max) {
      return Math.max(min, Math.min(max, number));
    };

    return ConnectionMonitor;

  })();

}).call(this);
(function() {
  var i, message_types, protocols, ref, supportedProtocols, unsupportedProtocol,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  ref = ActionCable.INTERNAL, message_types = ref.message_types, protocols = ref.protocols;

  supportedProtocols = 2 <= protocols.length ? slice.call(protocols, 0, i = protocols.length - 1) : (i = 0, []), unsupportedProtocol = protocols[i++];

  ActionCable.Connection = (function() {
    Connection.reopenDelay = 500;

    function Connection(consumer) {
      this.consumer = consumer;
      this.open = bind(this.open, this);
      this.subscriptions = this.consumer.subscriptions;
      this.monitor = new ActionCable.ConnectionMonitor(this);
      this.disconnected = true;
    }

    Connection.prototype.send = function(data) {
      if (this.isOpen()) {
        this.webSocket.send(JSON.stringify(data));
        return true;
      } else {
        return false;
      }
    };

    Connection.prototype.open = function() {
      if (this.isActive()) {
        ActionCable.log("Attempted to open WebSocket, but existing socket is " + (this.getState()));
        throw new Error("Existing connection must be closed before opening");
      } else {
        ActionCable.log("Opening WebSocket, current state is " + (this.getState()) + ", subprotocols: " + protocols);
        if (this.webSocket != null) {
          this.uninstallEventHandlers();
        }
        this.webSocket = new WebSocket(this.consumer.url, protocols);
        this.installEventHandlers();
        this.monitor.start();
        return true;
      }
    };

    Connection.prototype.close = function(arg) {
      var allowReconnect, ref1;
      allowReconnect = (arg != null ? arg : {
        allowReconnect: true
      }).allowReconnect;
      if (!allowReconnect) {
        this.monitor.stop();
      }
      if (this.isActive()) {
        return (ref1 = this.webSocket) != null ? ref1.close() : void 0;
      }
    };

    Connection.prototype.reopen = function() {
      var error, error1;
      ActionCable.log("Reopening WebSocket, current state is " + (this.getState()));
      if (this.isActive()) {
        try {
          return this.close();
        } catch (error1) {
          error = error1;
          return ActionCable.log("Failed to reopen WebSocket", error);
        } finally {
          ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
          setTimeout(this.open, this.constructor.reopenDelay);
        }
      } else {
        return this.open();
      }
    };

    Connection.prototype.getProtocol = function() {
      var ref1;
      return (ref1 = this.webSocket) != null ? ref1.protocol : void 0;
    };

    Connection.prototype.isOpen = function() {
      return this.isState("open");
    };

    Connection.prototype.isActive = function() {
      return this.isState("open", "connecting");
    };

    Connection.prototype.isProtocolSupported = function() {
      var ref1;
      return ref1 = this.getProtocol(), indexOf.call(supportedProtocols, ref1) >= 0;
    };

    Connection.prototype.isState = function() {
      var ref1, states;
      states = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return ref1 = this.getState(), indexOf.call(states, ref1) >= 0;
    };

    Connection.prototype.getState = function() {
      var ref1, state, value;
      for (state in WebSocket) {
        value = WebSocket[state];
        if (value === ((ref1 = this.webSocket) != null ? ref1.readyState : void 0)) {
          return state.toLowerCase();
        }
      }
      return null;
    };

    Connection.prototype.installEventHandlers = function() {
      var eventName, handler;
      for (eventName in this.events) {
        handler = this.events[eventName].bind(this);
        this.webSocket["on" + eventName] = handler;
      }
    };

    Connection.prototype.uninstallEventHandlers = function() {
      var eventName;
      for (eventName in this.events) {
        this.webSocket["on" + eventName] = function() {};
      }
    };

    Connection.prototype.events = {
      message: function(event) {
        var identifier, message, ref1, type;
        if (!this.isProtocolSupported()) {
          return;
        }
        ref1 = JSON.parse(event.data), identifier = ref1.identifier, message = ref1.message, type = ref1.type;
        switch (type) {
          case message_types.welcome:
            this.monitor.recordConnect();
            return this.subscriptions.reload();
          case message_types.ping:
            return this.monitor.recordPing();
          case message_types.confirmation:
            return this.subscriptions.notify(identifier, "connected");
          case message_types.rejection:
            return this.subscriptions.reject(identifier);
          default:
            return this.subscriptions.notify(identifier, "received", message);
        }
      },
      open: function() {
        ActionCable.log("WebSocket onopen event, using '" + (this.getProtocol()) + "' subprotocol");
        this.disconnected = false;
        if (!this.isProtocolSupported()) {
          ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting.");
          return this.close({
            allowReconnect: false
          });
        }
      },
      close: function(event) {
        ActionCable.log("WebSocket onclose event");
        if (this.disconnected) {
          return;
        }
        this.disconnected = true;
        this.monitor.recordDisconnect();
        return this.subscriptions.notifyAll("disconnected", {
          willAttemptReconnect: this.monitor.isRunning()
        });
      },
      error: function() {
        return ActionCable.log("WebSocket onerror event");
      }
    };

    return Connection;

  })();

}).call(this);
(function() {
  var slice = [].slice;

  ActionCable.Subscriptions = (function() {
    function Subscriptions(consumer) {
      this.consumer = consumer;
      this.subscriptions = [];
    }

    Subscriptions.prototype.create = function(channelName, mixin) {
      var channel, params, subscription;
      channel = channelName;
      params = typeof channel === "object" ? channel : {
        channel: channel
      };
      subscription = new ActionCable.Subscription(this.consumer, params, mixin);
      return this.add(subscription);
    };

    Subscriptions.prototype.add = function(subscription) {
      this.subscriptions.push(subscription);
      this.consumer.ensureActiveConnection();
      this.notify(subscription, "initialized");
      this.sendCommand(subscription, "subscribe");
      return subscription;
    };

    Subscriptions.prototype.remove = function(subscription) {
      this.forget(subscription);
      if (!this.findAll(subscription.identifier).length) {
        this.sendCommand(subscription, "unsubscribe");
      }
      return subscription;
    };

    Subscriptions.prototype.reject = function(identifier) {
      var i, len, ref, results, subscription;
      ref = this.findAll(identifier);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        subscription = ref[i];
        this.forget(subscription);
        this.notify(subscription, "rejected");
        results.push(subscription);
      }
      return results;
    };

    Subscriptions.prototype.forget = function(subscription) {
      var s;
      this.subscriptions = (function() {
        var i, len, ref, results;
        ref = this.subscriptions;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          s = ref[i];
          if (s !== subscription) {
            results.push(s);
          }
        }
        return results;
      }).call(this);
      return subscription;
    };

    Subscriptions.prototype.findAll = function(identifier) {
      var i, len, ref, results, s;
      ref = this.subscriptions;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        s = ref[i];
        if (s.identifier === identifier) {
          results.push(s);
        }
      }
      return results;
    };

    Subscriptions.prototype.reload = function() {
      var i, len, ref, results, subscription;
      ref = this.subscriptions;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        subscription = ref[i];
        results.push(this.sendCommand(subscription, "subscribe"));
      }
      return results;
    };

    Subscriptions.prototype.notifyAll = function() {
      var args, callbackName, i, len, ref, results, subscription;
      callbackName = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      ref = this.subscriptions;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        subscription = ref[i];
        results.push(this.notify.apply(this, [subscription, callbackName].concat(slice.call(args))));
      }
      return results;
    };

    Subscriptions.prototype.notify = function() {
      var args, callbackName, i, len, results, subscription, subscriptions;
      subscription = arguments[0], callbackName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
      if (typeof subscription === "string") {
        subscriptions = this.findAll(subscription);
      } else {
        subscriptions = [subscription];
      }
      results = [];
      for (i = 0, len = subscriptions.length; i < len; i++) {
        subscription = subscriptions[i];
        results.push(typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : void 0);
      }
      return results;
    };

    Subscriptions.prototype.sendCommand = function(subscription, command) {
      var identifier;
      identifier = subscription.identifier;
      return this.consumer.send({
        command: command,
        identifier: identifier
      });
    };

    return Subscriptions;

  })();

}).call(this);
(function() {
  ActionCable.Subscription = (function() {
    var extend;

    function Subscription(consumer, params, mixin) {
      this.consumer = consumer;
      if (params == null) {
        params = {};
      }
      this.identifier = JSON.stringify(params);
      extend(this, mixin);
    }

    Subscription.prototype.perform = function(action, data) {
      if (data == null) {
        data = {};
      }
      data.action = action;
      return this.send(data);
    };

    Subscription.prototype.send = function(data) {
      return this.consumer.send({
        command: "message",
        identifier: this.identifier,
        data: JSON.stringify(data)
      });
    };

    Subscription.prototype.unsubscribe = function() {
      return this.consumer.subscriptions.remove(this);
    };

    extend = function(object, properties) {
      var key, value;
      if (properties != null) {
        for (key in properties) {
          value = properties[key];
          object[key] = value;
        }
      }
      return object;
    };

    return Subscription;

  })();

}).call(this);
(function() {
  ActionCable.Consumer = (function() {
    function Consumer(url) {
      this.url = url;
      this.subscriptions = new ActionCable.Subscriptions(this);
      this.connection = new ActionCable.Connection(this);
    }

    Consumer.prototype.send = function(data) {
      return this.connection.send(data);
    };

    Consumer.prototype.connect = function() {
      return this.connection.open();
    };

    Consumer.prototype.disconnect = function() {
      return this.connection.close({
        allowReconnect: false
      });
    };

    Consumer.prototype.ensureActiveConnection = function() {
      if (!this.connection.isActive()) {
        return this.connection.open();
      }
    };

    return Consumer;

  })();

}).call(this);
(function() {
  var Bacon, BufferingSource, Bus, CompositeUnsubscribe, ConsumingSource, Desc, Dispatcher, End, Error, Event, EventStream, Initial, Next, None, Observable, Property, PropertyDispatcher, Some, Source, UpdateBarrier, addPropertyInitValueToStream, assert, assertArray, assertEventStream, assertFunction, assertNoArguments, assertString, cloneArray, compositeUnsubscribe, containsDuplicateDeps, convertArgsToFunction, describe, end, eventIdCounter, findDeps, flatMap_, former, idCounter, initial, isArray, isFieldKey, isFunction, isObservable, latterF, liftCallback, makeFunction, makeFunctionArgs, makeFunction_, makeObservable, makeSpawner, next, nop, partiallyApplied, recursionDepth, registerObs, spys, toCombinator, toEvent, toFieldExtractor, toFieldKey, toOption, toSimpleExtractor, withDescription, withMethodCallSupport, _, _ref,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Bacon = {
    toString: function() {
      return "Bacon";
    }
  };

  Bacon.version = '0.7.16';

  Bacon.fromBinder = function(binder, eventTransformer) {
    if (eventTransformer == null) {
      eventTransformer = _.id;
    }
    return new EventStream(describe(Bacon, "fromBinder", binder, eventTransformer), function(sink) {
      var unbinder;
      return unbinder = binder(function() {
        var args, event, reply, value, _i, _len;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        value = eventTransformer.apply(null, args);
        if (!(isArray(value) && _.last(value) instanceof Event)) {
          value = [value];
        }
        reply = Bacon.more;
        for (_i = 0, _len = value.length; _i < _len; _i++) {
          event = value[_i];
          reply = sink(event = toEvent(event));
          if (reply === Bacon.noMore || event.isEnd()) {
            if (unbinder != null) {
              unbinder();
            } else {
              Bacon.scheduler.setTimeout((function() {
                return unbinder();
              }), 0);
            }
            return reply;
          }
        }
        return reply;
      });
    });
  };

  Bacon.$ = {
    asEventStream: function(eventName, selector, eventTransformer) {
      var _ref;
      if (isFunction(selector)) {
        _ref = [selector, null], eventTransformer = _ref[0], selector = _ref[1];
      }
      return withDescription(this.selector || this, "asEventStream", eventName, Bacon.fromBinder((function(_this) {
        return function(handler) {
          _this.on(eventName, selector, handler);
          return function() {
            return _this.off(eventName, selector, handler);
          };
        };
      })(this), eventTransformer));
    }
  };

  if ((_ref = typeof jQuery !== "undefined" && jQuery !== null ? jQuery : typeof Zepto !== "undefined" && Zepto !== null ? Zepto : null) != null) {
    _ref.fn.asEventStream = Bacon.$.asEventStream;
  }

  Bacon.fromEventTarget = function(target, eventName, eventTransformer) {
    var sub, unsub, _ref1, _ref2, _ref3, _ref4;
    sub = (_ref1 = target.addEventListener) != null ? _ref1 : (_ref2 = target.addListener) != null ? _ref2 : target.bind;
    unsub = (_ref3 = target.removeEventListener) != null ? _ref3 : (_ref4 = target.removeListener) != null ? _ref4 : target.unbind;
    return withDescription(Bacon, "fromEventTarget", target, eventName, Bacon.fromBinder(function(handler) {
      sub.call(target, eventName, handler);
      return function() {
        return unsub.call(target, eventName, handler);
      };
    }, eventTransformer));
  };

  Bacon.fromPromise = function(promise, abort) {
    return withDescription(Bacon, "fromPromise", promise, Bacon.fromBinder(function(handler) {
      promise.then(handler, function(e) {
        return handler(new Error(e));
      });
      return function() {
        if (abort) {
          return typeof promise.abort === "function" ? promise.abort() : void 0;
        }
      };
    }, (function(value) {
      return [value, end()];
    })));
  };

  Bacon.noMore = ["<no-more>"];

  Bacon.more = ["<more>"];

  Bacon.later = function(delay, value) {
    return withDescription(Bacon, "later", delay, value, Bacon.sequentially(delay, [value]));
  };

  Bacon.sequentially = function(delay, values) {
    var index;
    index = 0;
    return withDescription(Bacon, "sequentially", delay, values, Bacon.fromPoll(delay, function() {
      var value;
      value = values[index++];
      if (index < values.length) {
        return value;
      } else if (index === values.length) {
        return [value, end()];
      } else {
        return end();
      }
    }));
  };

  Bacon.repeatedly = function(delay, values) {
    var index;
    index = 0;
    return withDescription(Bacon, "repeatedly", delay, values, Bacon.fromPoll(delay, function() {
      return values[index++ % values.length];
    }));
  };

  Bacon.spy = function(spy) {
    return spys.push(spy);
  };

  spys = [];

  registerObs = function(obs) {
    var spy, _i, _len, _results;
    if (spys.length) {
      if (!registerObs.running) {
        try {
          registerObs.running = true;
          _results = [];
          for (_i = 0, _len = spys.length; _i < _len; _i++) {
            spy = spys[_i];
            _results.push(spy(obs));
          }
          return _results;
        } finally {
          delete registerObs.running;
        }
      }
    }
  };

  withMethodCallSupport = function(wrapped) {
    return function() {
      var args, context, f, methodName;
      f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (typeof f === "object" && args.length) {
        context = f;
        methodName = args[0];
        f = function() {
          return context[methodName].apply(context, arguments);
        };
        args = args.slice(1);
      }
      return wrapped.apply(null, [f].concat(__slice.call(args)));
    };
  };

  liftCallback = function(desc, wrapped) {
    return withMethodCallSupport(function() {
      var args, f, stream;
      f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      stream = partiallyApplied(wrapped, [
        function(values, callback) {
          return f.apply(null, __slice.call(values).concat([callback]));
        }
      ]);
      return withDescription.apply(null, [Bacon, desc, f].concat(__slice.call(args), [Bacon.combineAsArray(args).flatMap(stream)]));
    });
  };

  Bacon.fromCallback = liftCallback("fromCallback", function() {
    var args, f;
    f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return Bacon.fromBinder(function(handler) {
      makeFunction(f, args)(handler);
      return nop;
    }, (function(value) {
      return [value, end()];
    }));
  });

  Bacon.fromNodeCallback = liftCallback("fromNodeCallback", function() {
    var args, f;
    f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return Bacon.fromBinder(function(handler) {
      makeFunction(f, args)(handler);
      return nop;
    }, function(error, value) {
      if (error) {
        return [new Error(error), end()];
      }
      return [value, end()];
    });
  });

  Bacon.fromPoll = function(delay, poll) {
    return withDescription(Bacon, "fromPoll", delay, poll, Bacon.fromBinder((function(handler) {
      var id;
      id = Bacon.scheduler.setInterval(handler, delay);
      return function() {
        return Bacon.scheduler.clearInterval(id);
      };
    }), poll));
  };

  Bacon.interval = function(delay, value) {
    if (value == null) {
      value = {};
    }
    return withDescription(Bacon, "interval", delay, value, Bacon.fromPoll(delay, function() {
      return next(value);
    }));
  };

  Bacon.constant = function(value) {
    return new Property(describe(Bacon, "constant", value), function(sink) {
      sink(initial(value));
      sink(end());
      return nop;
    });
  };

  Bacon.never = function() {
    return withDescription(Bacon, "never", Bacon.fromArray([]));
  };

  Bacon.once = function(value) {
    return withDescription(Bacon, "once", value, Bacon.fromArray([value]));
  };

  Bacon.fromArray = function(values) {
    assertArray(values);
    values = cloneArray(values);
    return new EventStream(describe(Bacon, "fromArray", values), function(sink) {
      var reply, unsubd, value;
      unsubd = false;
      reply = Bacon.more;
      while ((reply !== Bacon.noMore) && !unsubd) {
        if (_.empty(values)) {
          sink(end());
          reply = Bacon.noMore;
        } else {
          value = values.splice(0, 1)[0];
          reply = sink(toEvent(value));
        }
      }
      return function() {
        return unsubd = true;
      };
    });
  };

  Bacon.mergeAll = function() {
    var streams;
    streams = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (isArray(streams[0])) {
      streams = streams[0];
    }
    if (streams.length) {
      return new EventStream(describe.apply(null, [Bacon, "mergeAll"].concat(__slice.call(streams))), function(sink) {
        var ends, sinks, smartSink;
        ends = 0;
        smartSink = function(obs) {
          return function(unsubBoth) {
            return obs.subscribeInternal(function(event) {
              var reply;
              if (event.isEnd()) {
                ends++;
                if (ends === streams.length) {
                  return sink(end());
                } else {
                  return Bacon.more;
                }
              } else {
                reply = sink(event);
                if (reply === Bacon.noMore) {
                  unsubBoth();
                }
                return reply;
              }
            });
          };
        };
        sinks = _.map(smartSink, streams);
        return compositeUnsubscribe.apply(null, sinks);
      });
    } else {
      return Bacon.never();
    }
  };

  Bacon.zipAsArray = function() {
    var streams;
    streams = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (isArray(streams[0])) {
      streams = streams[0];
    }
    return withDescription.apply(null, [Bacon, "zipAsArray"].concat(__slice.call(streams), [Bacon.zipWith(streams, function() {
      var xs;
      xs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return xs;
    })]));
  };

  Bacon.zipWith = function() {
    var f, streams, _ref1;
    f = arguments[0], streams = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (!isFunction(f)) {
      _ref1 = [f, streams[0]], streams = _ref1[0], f = _ref1[1];
    }
    streams = _.map((function(s) {
      return s.toEventStream();
    }), streams);
    return withDescription.apply(null, [Bacon, "zipWith", f].concat(__slice.call(streams), [Bacon.when(streams, f)]));
  };

  Bacon.groupSimultaneous = function() {
    var s, sources, streams;
    streams = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (streams.length === 1 && isArray(streams[0])) {
      streams = streams[0];
    }
    sources = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = streams.length; _i < _len; _i++) {
        s = streams[_i];
        _results.push(new BufferingSource(s));
      }
      return _results;
    })();
    return withDescription.apply(null, [Bacon, "groupSimultaneous"].concat(__slice.call(streams), [Bacon.when(sources, (function() {
      var xs;
      xs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return xs;
    }))]));
  };

  Bacon.combineAsArray = function() {
    var index, s, sources, stream, streams, _i, _len;
    streams = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (streams.length === 1 && isArray(streams[0])) {
      streams = streams[0];
    }
    for (index = _i = 0, _len = streams.length; _i < _len; index = ++_i) {
      stream = streams[index];
      if (!(isObservable(stream))) {
        streams[index] = Bacon.constant(stream);
      }
    }
    if (streams.length) {
      sources = (function() {
        var _j, _len1, _results;
        _results = [];
        for (_j = 0, _len1 = streams.length; _j < _len1; _j++) {
          s = streams[_j];
          _results.push(new Source(s, true, s.subscribeInternal));
        }
        return _results;
      })();
      return withDescription.apply(null, [Bacon, "combineAsArray"].concat(__slice.call(streams), [Bacon.when(sources, (function() {
        var xs;
        xs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return xs;
      })).toProperty()]));
    } else {
      return Bacon.constant([]);
    }
  };

  Bacon.onValues = function() {
    var f, streams, _i;
    streams = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), f = arguments[_i++];
    return Bacon.combineAsArray(streams).onValues(f);
  };

  Bacon.combineWith = function() {
    var f, streams;
    f = arguments[0], streams = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return withDescription.apply(null, [Bacon, "combineWith", f].concat(__slice.call(streams), [Bacon.combineAsArray(streams).map(function(values) {
      return f.apply(null, values);
    })]));
  };

  Bacon.combineTemplate = function(template) {
    var applyStreamValue, combinator, compile, compileTemplate, constantValue, current, funcs, mkContext, setValue, streams;
    funcs = [];
    streams = [];
    current = function(ctxStack) {
      return ctxStack[ctxStack.length - 1];
    };
    setValue = function(ctxStack, key, value) {
      return current(ctxStack)[key] = value;
    };
    applyStreamValue = function(key, index) {
      return function(ctxStack, values) {
        return setValue(ctxStack, key, values[index]);
      };
    };
    constantValue = function(key, value) {
      return function(ctxStack) {
        return setValue(ctxStack, key, value);
      };
    };
    mkContext = function(template) {
      if (isArray(template)) {
        return [];
      } else {
        return {};
      }
    };
    compile = function(key, value) {
      var popContext, pushContext;
      if (isObservable(value)) {
        streams.push(value);
        return funcs.push(applyStreamValue(key, streams.length - 1));
      } else if (value === Object(value) && typeof value !== "function" && !(value instanceof RegExp) && !(value instanceof Date)) {
        pushContext = function(key) {
          return function(ctxStack) {
            var newContext;
            newContext = mkContext(value);
            setValue(ctxStack, key, newContext);
            return ctxStack.push(newContext);
          };
        };
        popContext = function(ctxStack) {
          return ctxStack.pop();
        };
        funcs.push(pushContext(key));
        compileTemplate(value);
        return funcs.push(popContext);
      } else {
        return funcs.push(constantValue(key, value));
      }
    };
    compileTemplate = function(template) {
      return _.each(template, compile);
    };
    compileTemplate(template);
    combinator = function(values) {
      var ctxStack, f, rootContext, _i, _len;
      rootContext = mkContext(template);
      ctxStack = [rootContext];
      for (_i = 0, _len = funcs.length; _i < _len; _i++) {
        f = funcs[_i];
        f(ctxStack, values);
      }
      return rootContext;
    };
    return withDescription(Bacon, "combineTemplate", template, Bacon.combineAsArray(streams).map(combinator));
  };

  Bacon.retry = function(options) {
    var delay, isRetryable, maxRetries, retries, retry, source;
    if (!isFunction(options.source)) {
      throw "'source' option has to be a function";
    }
    source = options.source;
    retries = options.retries || 0;
    maxRetries = options.maxRetries || retries;
    delay = options.delay || function() {
      return 0;
    };
    isRetryable = options.isRetryable || function() {
      return true;
    };
    retry = function(context) {
      var delayedRetry, nextAttemptOptions;
      nextAttemptOptions = {
        source: source,
        retries: retries - 1,
        maxRetries: maxRetries,
        delay: delay,
        isRetryable: isRetryable
      };
      delayedRetry = function() {
        return Bacon.retry(nextAttemptOptions);
      };
      return Bacon.later(delay(context)).filter(false).concat(Bacon.once().flatMap(delayedRetry));
    };
    return withDescription(Bacon, "retry", options, source().flatMapError(function(e) {
      if (isRetryable(e) && retries > 0) {
        return retry({
          error: e,
          retriesDone: maxRetries - retries
        });
      } else {
        return Bacon.once(new Bacon.Error(e));
      }
    }));
  };

  eventIdCounter = 0;

  Event = (function() {
    function Event() {
      this.id = ++eventIdCounter;
    }

    Event.prototype.isEvent = function() {
      return true;
    };

    Event.prototype.isEnd = function() {
      return false;
    };

    Event.prototype.isInitial = function() {
      return false;
    };

    Event.prototype.isNext = function() {
      return false;
    };

    Event.prototype.isError = function() {
      return false;
    };

    Event.prototype.hasValue = function() {
      return false;
    };

    Event.prototype.filter = function() {
      return true;
    };

    Event.prototype.inspect = function() {
      return this.toString();
    };

    Event.prototype.log = function() {
      return this.toString();
    };

    return Event;

  })();

  Next = (function(_super) {
    __extends(Next, _super);

    function Next(valueF) {
      Next.__super__.constructor.call(this);
      if (isFunction(valueF)) {
        this.value = _.cached(valueF);
      } else {
        this.value = _.always(valueF);
      }
    }

    Next.prototype.isNext = function() {
      return true;
    };

    Next.prototype.hasValue = function() {
      return true;
    };

    Next.prototype.fmap = function(f) {
      var value;
      value = this.value;
      return this.apply(function() {
        return f(value());
      });
    };

    Next.prototype.apply = function(value) {
      return new Next(value);
    };

    Next.prototype.filter = function(f) {
      return f(this.value());
    };

    Next.prototype.toString = function() {
      return _.toString(this.value());
    };

    Next.prototype.log = function() {
      return this.value();
    };

    return Next;

  })(Event);

  Initial = (function(_super) {
    __extends(Initial, _super);

    function Initial() {
      return Initial.__super__.constructor.apply(this, arguments);
    }

    Initial.prototype.isInitial = function() {
      return true;
    };

    Initial.prototype.isNext = function() {
      return false;
    };

    Initial.prototype.apply = function(value) {
      return new Initial(value);
    };

    Initial.prototype.toNext = function() {
      return new Next(this.value);
    };

    return Initial;

  })(Next);

  End = (function(_super) {
    __extends(End, _super);

    function End() {
      return End.__super__.constructor.apply(this, arguments);
    }

    End.prototype.isEnd = function() {
      return true;
    };

    End.prototype.fmap = function() {
      return this;
    };

    End.prototype.apply = function() {
      return this;
    };

    End.prototype.toString = function() {
      return "<end>";
    };

    return End;

  })(Event);

  Error = (function(_super) {
    __extends(Error, _super);

    function Error(error) {
      this.error = error;
    }

    Error.prototype.isError = function() {
      return true;
    };

    Error.prototype.fmap = function() {
      return this;
    };

    Error.prototype.apply = function() {
      return this;
    };

    Error.prototype.toString = function() {
      return "<error> " + _.toString(this.error);
    };

    return Error;

  })(Event);

  idCounter = 0;

  Observable = (function() {
    function Observable(desc) {
      this.flatMapError = __bind(this.flatMapError, this);
      this.id = ++idCounter;
      withDescription(desc, this);
    }

    Observable.prototype.onValue = function() {
      var f;
      f = makeFunctionArgs(arguments);
      return this.subscribe(function(event) {
        if (event.hasValue()) {
          return f(event.value());
        }
      });
    };

    Observable.prototype.onValues = function(f) {
      return this.onValue(function(args) {
        return f.apply(null, args);
      });
    };

    Observable.prototype.onError = function() {
      var f;
      f = makeFunctionArgs(arguments);
      return this.subscribe(function(event) {
        if (event.isError()) {
          return f(event.error);
        }
      });
    };

    Observable.prototype.onEnd = function() {
      var f;
      f = makeFunctionArgs(arguments);
      return this.subscribe(function(event) {
        if (event.isEnd()) {
          return f();
        }
      });
    };

    Observable.prototype.errors = function() {
      return withDescription(this, "errors", this.filter(function() {
        return false;
      }));
    };

    Observable.prototype.filter = function() {
      var args, f;
      f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return convertArgsToFunction(this, f, args, function(f) {
        return withDescription(this, "filter", f, this.withHandler(function(event) {
          if (event.filter(f)) {
            return this.push(event);
          } else {
            return Bacon.more;
          }
        }));
      });
    };

    Observable.prototype.takeWhile = function() {
      var args, f;
      f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return convertArgsToFunction(this, f, args, function(f) {
        return withDescription(this, "takeWhile", f, this.withHandler(function(event) {
          if (event.filter(f)) {
            return this.push(event);
          } else {
            this.push(end());
            return Bacon.noMore;
          }
        }));
      });
    };

    Observable.prototype.endOnError = function() {
      var args, f;
      f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (f == null) {
        f = true;
      }
      return convertArgsToFunction(this, f, args, function(f) {
        return withDescription(this, "endOnError", this.withHandler(function(event) {
          if (event.isError() && f(event.error)) {
            this.push(event);
            return this.push(end());
          } else {
            return this.push(event);
          }
        }));
      });
    };

    Observable.prototype.take = function(count) {
      if (count <= 0) {
        return Bacon.never();
      }
      return withDescription(this, "take", count, this.withHandler(function(event) {
        if (!event.hasValue()) {
          return this.push(event);
        } else {
          count--;
          if (count > 0) {
            return this.push(event);
          } else {
            if (count === 0) {
              this.push(event);
            }
            this.push(end());
            return Bacon.noMore;
          }
        }
      }));
    };

    Observable.prototype.map = function() {
      var args, p;
      p = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (p instanceof Property) {
        return p.sampledBy(this, former);
      } else {
        return convertArgsToFunction(this, p, args, function(f) {
          return withDescription(this, "map", f, this.withHandler(function(event) {
            return this.push(event.fmap(f));
          }));
        });
      }
    };

    Observable.prototype.mapError = function() {
      var f;
      f = makeFunctionArgs(arguments);
      return withDescription(this, "mapError", f, this.withHandler(function(event) {
        if (event.isError()) {
          return this.push(next(f(event.error)));
        } else {
          return this.push(event);
        }
      }));
    };

    Observable.prototype.mapEnd = function() {
      var f;
      f = makeFunctionArgs(arguments);
      return withDescription(this, "mapEnd", f, this.withHandler(function(event) {
        if (event.isEnd()) {
          this.push(next(f(event)));
          this.push(end());
          return Bacon.noMore;
        } else {
          return this.push(event);
        }
      }));
    };

    Observable.prototype.doAction = function() {
      var f;
      f = makeFunctionArgs(arguments);
      return withDescription(this, "doAction", f, this.withHandler(function(event) {
        if (event.hasValue()) {
          f(event.value());
        }
        return this.push(event);
      }));
    };

    Observable.prototype.skip = function(count) {
      return withDescription(this, "skip", count, this.withHandler(function(event) {
        if (!event.hasValue()) {
          return this.push(event);
        } else if (count > 0) {
          count--;
          return Bacon.more;
        } else {
          return this.push(event);
        }
      }));
    };

    Observable.prototype.skipDuplicates = function(isEqual) {
      if (isEqual == null) {
        isEqual = function(a, b) {
          return a === b;
        };
      }
      return withDescription(this, "skipDuplicates", this.withStateMachine(None, function(prev, event) {
        if (!event.hasValue()) {
          return [prev, [event]];
        } else if (event.isInitial() || prev === None || !isEqual(prev.get(), event.value())) {
          return [new Some(event.value()), [event]];
        } else {
          return [prev, []];
        }
      }));
    };

    Observable.prototype.skipErrors = function() {
      return withDescription(this, "skipErrors", this.withHandler(function(event) {
        if (event.isError()) {
          return Bacon.more;
        } else {
          return this.push(event);
        }
      }));
    };

    Observable.prototype.withStateMachine = function(initState, f) {
      var state;
      state = initState;
      return withDescription(this, "withStateMachine", initState, f, this.withHandler(function(event) {
        var fromF, newState, output, outputs, reply, _i, _len;
        fromF = f(state, event);
        newState = fromF[0], outputs = fromF[1];
        state = newState;
        reply = Bacon.more;
        for (_i = 0, _len = outputs.length; _i < _len; _i++) {
          output = outputs[_i];
          reply = this.push(output);
          if (reply === Bacon.noMore) {
            return reply;
          }
        }
        return reply;
      }));
    };

    Observable.prototype.scan = function(seed, f, options) {
      var acc, f_, resultProperty, subscribe;
      if (options == null) {
        options = {};
      }
      f_ = toCombinator(f);
      f = options.lazyF ? f_ : function(x, y) {
        return f_(x(), y());
      };
      acc = toOption(seed).map(function(x) {
        return _.always(x);
      });
      subscribe = (function(_this) {
        return function(sink) {
          var initSent, reply, sendInit, unsub;
          initSent = false;
          unsub = nop;
          reply = Bacon.more;
          sendInit = function() {
            if (!initSent) {
              return acc.forEach(function(valueF) {
                initSent = true;
                reply = sink(new Initial(valueF));
                if (reply === Bacon.noMore) {
                  unsub();
                  return unsub = nop;
                }
              });
            }
          };
          unsub = _this.subscribeInternal(function(event) {
            var next, prev;
            if (event.hasValue()) {
              if (initSent && event.isInitial()) {
                return Bacon.more;
              } else {
                if (!event.isInitial()) {
                  sendInit();
                }
                initSent = true;
                prev = acc.getOrElse(function() {
                  return void 0;
                });
                next = _.cached(function() {
                  return f(prev, event.value);
                });
                acc = new Some(next);
                if (options.eager) {
                  next();
                }
                return sink(event.apply(next));
              }
            } else {
              if (event.isEnd()) {
                reply = sendInit();
              }
              if (reply !== Bacon.noMore) {
                return sink(event);
              }
            }
          });
          UpdateBarrier.whenDoneWith(resultProperty, sendInit);
          return unsub;
        };
      })(this);
      return resultProperty = new Property(describe(this, "scan", seed, f), subscribe);
    };

    Observable.prototype.fold = function(seed, f, options) {
      return withDescription(this, "fold", seed, f, this.scan(seed, f, options).sampledBy(this.filter(false).mapEnd().toProperty()));
    };

    Observable.prototype.zip = function(other, f) {
      if (f == null) {
        f = Array;
      }
      return withDescription(this, "zip", other, Bacon.zipWith([this, other], f));
    };

    Observable.prototype.diff = function(start, f) {
      f = toCombinator(f);
      return withDescription(this, "diff", start, f, this.scan([start], function(prevTuple, next) {
        return [next, f(prevTuple[0], next)];
      }).filter(function(tuple) {
        return tuple.length === 2;
      }).map(function(tuple) {
        return tuple[1];
      }));
    };

    Observable.prototype.flatMap = function() {
      return flatMap_(this, makeSpawner(arguments));
    };

    Observable.prototype.flatMapFirst = function() {
      return flatMap_(this, makeSpawner(arguments), true);
    };

    Observable.prototype.flatMapWithConcurrencyLimit = function() {
      var args, limit;
      limit = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return withDescription.apply(null, [this, "flatMapWithConcurrencyLimit", limit].concat(__slice.call(args), [flatMap_(this, makeSpawner(args), false, limit)]));
    };

    Observable.prototype.flatMapLatest = function() {
      var f, stream;
      f = makeSpawner(arguments);
      stream = this.toEventStream();
      return withDescription(this, "flatMapLatest", f, stream.flatMap(function(value) {
        return makeObservable(f(value)).takeUntil(stream);
      }));
    };

    Observable.prototype.flatMapError = function(fn) {
      return withDescription(this, "flatMapError", fn, this.mapError(function(err) {
        return new Bacon.Error(err);
      }).flatMap(function(x) {
        if (x instanceof Bacon.Error) {
          return fn(x.error);
        } else {
          return Bacon.once(x);
        }
      }));
    };

    Observable.prototype.flatMapConcat = function() {
      return withDescription.apply(null, [this, "flatMapConcat"].concat(__slice.call(arguments), [this.flatMapWithConcurrencyLimit.apply(this, [1].concat(__slice.call(arguments)))]));
    };

    Observable.prototype.bufferingThrottle = function(minimumInterval) {
      return withDescription(this, "bufferingThrottle", minimumInterval, this.flatMapConcat(function(x) {
        return Bacon.once(x).concat(Bacon.later(minimumInterval).filter(false));
      }));
    };

    Observable.prototype.not = function() {
      return withDescription(this, "not", this.map(function(x) {
        return !x;
      }));
    };

    Observable.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.subscribe(function(event) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log.apply(console, __slice.call(args).concat([event.log()])) : void 0 : void 0;
      });
      return this;
    };

    Observable.prototype.slidingWindow = function(n, minValues) {
      if (minValues == null) {
        minValues = 0;
      }
      return withDescription(this, "slidingWindow", n, minValues, this.scan([], (function(window, value) {
        return window.concat([value]).slice(-n);
      })).filter((function(values) {
        return values.length >= minValues;
      })));
    };

    Observable.prototype.combine = function(other, f) {
      var combinator;
      combinator = toCombinator(f);
      return withDescription(this, "combine", other, f, Bacon.combineAsArray(this, other).map(function(values) {
        return combinator(values[0], values[1]);
      }));
    };

    Observable.prototype.decode = function(cases) {
      return withDescription(this, "decode", cases, this.combine(Bacon.combineTemplate(cases), function(key, values) {
        return values[key];
      }));
    };

    Observable.prototype.awaiting = function(other) {
      return withDescription(this, "awaiting", other, Bacon.groupSimultaneous(this, other).map(function(_arg) {
        var myValues, otherValues;
        myValues = _arg[0], otherValues = _arg[1];
        return otherValues.length === 0;
      }).toProperty(false).skipDuplicates());
    };

    Observable.prototype.name = function(name) {
      this.toString = function() {
        return name;
      };
      return this;
    };

    Observable.prototype.withDescription = function() {
      return describe.apply(null, arguments).apply(this);
    };

    return Observable;

  })();

  Observable.prototype.reduce = Observable.prototype.fold;

  Observable.prototype.assign = Observable.prototype.onValue;

  flatMap_ = function(root, f, firstOnly, limit) {
    var deps, result;
    deps = [root];
    result = new EventStream(describe(root, "flatMap" + (firstOnly ? "First" : ""), f), function(sink) {
      var checkEnd, checkQueue, composite, queue, spawn;
      composite = new CompositeUnsubscribe();
      queue = [];
      spawn = function(event) {
        var child;
        child = makeObservable(f(event.value()));
        deps.push(child);
        UpdateBarrier.flushDepCache();
        return composite.add(function(unsubAll, unsubMe) {
          return child.subscribeInternal(function(event) {
            var reply;
            if (event.isEnd()) {
              _.remove(child, deps);
              UpdateBarrier.flushDepCache();
              checkQueue();
              checkEnd(unsubMe);
              return Bacon.noMore;
            } else {
              if (event instanceof Initial) {
                event = event.toNext();
              }
              reply = sink(event);
              if (reply === Bacon.noMore) {
                unsubAll();
              }
              return reply;
            }
          });
        });
      };
      checkQueue = function() {
        var event;
        event = queue.splice(0, 1)[0];
        if (event) {
          return spawn(event);
        }
      };
      checkEnd = function(unsub) {
        unsub();
        if (composite.empty()) {
          return sink(end());
        }
      };
      composite.add(function(__, unsubRoot) {
        return root.subscribeInternal(function(event) {
          if (event.isEnd()) {
            return checkEnd(unsubRoot);
          } else if (event.isError()) {
            return sink(event);
          } else if (firstOnly && composite.count() > 1) {
            return Bacon.more;
          } else {
            if (composite.unsubscribed) {
              return Bacon.noMore;
            }
            if (limit && composite.count() > limit) {
              return queue.push(event);
            } else {
              return spawn(event);
            }
          }
        });
      });
      return composite.unsubscribe;
    });
    result.internalDeps = function() {
      return deps;
    };
    return result;
  };

  EventStream = (function(_super) {
    __extends(EventStream, _super);

    function EventStream(desc, subscribe) {
      var dispatcher;
      if (isFunction(desc)) {
        subscribe = desc;
        desc = [];
      }
      EventStream.__super__.constructor.call(this, desc);
      assertFunction(subscribe);
      dispatcher = new Dispatcher(subscribe);
      this.subscribeInternal = dispatcher.subscribe;
      this.subscribe = UpdateBarrier.wrappedSubscribe(this);
      this.hasSubscribers = dispatcher.hasSubscribers;
      registerObs(this);
    }

    EventStream.prototype.delay = function(delay) {
      return withDescription(this, "delay", delay, this.flatMap(function(value) {
        return Bacon.later(delay, value);
      }));
    };

    EventStream.prototype.debounce = function(delay) {
      return withDescription(this, "debounce", delay, this.flatMapLatest(function(value) {
        return Bacon.later(delay, value);
      }));
    };

    EventStream.prototype.debounceImmediate = function(delay) {
      return withDescription(this, "debounceImmediate", delay, this.flatMapFirst(function(value) {
        return Bacon.once(value).concat(Bacon.later(delay).filter(false));
      }));
    };

    EventStream.prototype.throttle = function(delay) {
      return withDescription(this, "throttle", delay, this.bufferWithTime(delay).map(function(values) {
        return values[values.length - 1];
      }));
    };

    EventStream.prototype.bufferWithTime = function(delay) {
      return withDescription(this, "bufferWithTime", delay, this.bufferWithTimeOrCount(delay, Number.MAX_VALUE));
    };

    EventStream.prototype.bufferWithCount = function(count) {
      return withDescription(this, "bufferWithCount", count, this.bufferWithTimeOrCount(void 0, count));
    };

    EventStream.prototype.bufferWithTimeOrCount = function(delay, count) {
      var flushOrSchedule;
      flushOrSchedule = function(buffer) {
        if (buffer.values.length === count) {
          return buffer.flush();
        } else if (delay !== void 0) {
          return buffer.schedule();
        }
      };
      return withDescription(this, "bufferWithTimeOrCount", delay, count, this.buffer(delay, flushOrSchedule, flushOrSchedule));
    };

    EventStream.prototype.buffer = function(delay, onInput, onFlush) {
      var buffer, delayMs, reply;
      if (onInput == null) {
        onInput = (function() {});
      }
      if (onFlush == null) {
        onFlush = (function() {});
      }
      buffer = {
        scheduled: false,
        end: null,
        values: [],
        flush: function() {
          var reply;
          this.scheduled = false;
          if (this.values.length > 0) {
            reply = this.push(next(this.values));
            this.values = [];
            if (this.end != null) {
              return this.push(this.end);
            } else if (reply !== Bacon.noMore) {
              return onFlush(this);
            }
          } else {
            if (this.end != null) {
              return this.push(this.end);
            }
          }
        },
        schedule: function() {
          if (!this.scheduled) {
            this.scheduled = true;
            return delay((function(_this) {
              return function() {
                return _this.flush();
              };
            })(this));
          }
        }
      };
      reply = Bacon.more;
      if (!isFunction(delay)) {
        delayMs = delay;
        delay = function(f) {
          return Bacon.scheduler.setTimeout(f, delayMs);
        };
      }
      return withDescription(this, "buffer", this.withHandler(function(event) {
        buffer.push = this.push;
        if (event.isError()) {
          reply = this.push(event);
        } else if (event.isEnd()) {
          buffer.end = event;
          if (!buffer.scheduled) {
            buffer.flush();
          }
        } else {
          buffer.values.push(event.value());
          onInput(buffer);
        }
        return reply;
      }));
    };

    EventStream.prototype.merge = function(right) {
      var left;
      assertEventStream(right);
      left = this;
      return withDescription(left, "merge", right, Bacon.mergeAll(this, right));
    };

    EventStream.prototype.toProperty = function(initValue) {
      if (arguments.length === 0) {
        initValue = None;
      }
      return withDescription(this, "toProperty", initValue, this.scan(initValue, latterF, {
        lazyF: true
      }));
    };

    EventStream.prototype.toEventStream = function() {
      return this;
    };

    EventStream.prototype.sampledBy = function(sampler, combinator) {
      return withDescription(this, "sampledBy", sampler, combinator, this.toProperty().sampledBy(sampler, combinator));
    };

    EventStream.prototype.concat = function(right) {
      var left;
      left = this;
      return new EventStream(describe(left, "concat", right), function(sink) {
        var unsubLeft, unsubRight;
        unsubRight = nop;
        unsubLeft = left.subscribeInternal(function(e) {
          if (e.isEnd()) {
            return unsubRight = right.subscribeInternal(sink);
          } else {
            return sink(e);
          }
        });
        return function() {
          unsubLeft();
          return unsubRight();
        };
      });
    };

    EventStream.prototype.takeUntil = function(stopper) {
      var endMarker;
      endMarker = {};
      return withDescription(this, "takeUntil", stopper, Bacon.groupSimultaneous(this.mapEnd(endMarker), stopper.skipErrors()).withHandler(function(event) {
        var data, reply, value, _i, _len, _ref1;
        if (!event.hasValue()) {
          return this.push(event);
        } else {
          _ref1 = event.value(), data = _ref1[0], stopper = _ref1[1];
          if (stopper.length) {
            return this.push(end());
          } else {
            reply = Bacon.more;
            for (_i = 0, _len = data.length; _i < _len; _i++) {
              value = data[_i];
              if (value === endMarker) {
                reply = this.push(end());
              } else {
                reply = this.push(next(value));
              }
            }
            return reply;
          }
        }
      }));
    };

    EventStream.prototype.skipUntil = function(starter) {
      var started;
      started = starter.take(1).map(true).toProperty(false);
      return withDescription(this, "skipUntil", starter, this.filter(started));
    };

    EventStream.prototype.skipWhile = function() {
      var args, f, ok;
      f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      ok = false;
      return convertArgsToFunction(this, f, args, function(f) {
        return withDescription(this, "skipWhile", f, this.withHandler(function(event) {
          if (ok || !event.hasValue() || !f(event.value())) {
            if (event.hasValue()) {
              ok = true;
            }
            return this.push(event);
          } else {
            return Bacon.more;
          }
        }));
      });
    };

    EventStream.prototype.holdWhen = function(valve) {
      var putToHold, releaseHold, valve_;
      valve_ = valve.startWith(false);
      releaseHold = valve_.filter(function(x) {
        return !x;
      });
      putToHold = valve_.filter(_.id);
      return withDescription(this, "holdWhen", valve, this.filter(false).merge(valve_.flatMapConcat((function(_this) {
        return function(shouldHold) {
          if (!shouldHold) {
            return _this.takeUntil(putToHold);
          } else {
            return _this.scan([], (function(xs, x) {
              return xs.concat(x);
            }), {
              eager: true
            }).sampledBy(releaseHold).take(1).flatMap(Bacon.fromArray);
          }
        };
      })(this))));
    };

    EventStream.prototype.startWith = function(seed) {
      return withDescription(this, "startWith", seed, Bacon.once(seed).concat(this));
    };

    EventStream.prototype.withHandler = function(handler) {
      var dispatcher;
      dispatcher = new Dispatcher(this.subscribeInternal, handler);
      return new EventStream(describe(this, "withHandler", handler), dispatcher.subscribe);
    };

    return EventStream;

  })(Observable);

  Property = (function(_super) {
    __extends(Property, _super);

    function Property(desc, subscribe, handler) {
      if (isFunction(desc)) {
        handler = subscribe;
        subscribe = desc;
        desc = [];
      }
      Property.__super__.constructor.call(this, desc);
      assertFunction(subscribe);
      if (handler === true) {
        this.subscribeInternal = subscribe;
      } else {
        this.subscribeInternal = new PropertyDispatcher(this, subscribe, handler).subscribe;
      }
      this.subscribe = UpdateBarrier.wrappedSubscribe(this);
      registerObs(this);
    }

    Property.prototype.sampledBy = function(sampler, combinator) {
      var lazy, result, samplerSource, stream, thisSource;
      if (combinator != null) {
        combinator = toCombinator(combinator);
      } else {
        lazy = true;
        combinator = function(f) {
          return f();
        };
      }
      thisSource = new Source(this, false, this.subscribeInternal, lazy);
      samplerSource = new Source(sampler, true, sampler.subscribeInternal, lazy);
      stream = Bacon.when([thisSource, samplerSource], combinator);
      result = sampler instanceof Property ? stream.toProperty() : stream;
      return withDescription(this, "sampledBy", sampler, combinator, result);
    };

    Property.prototype.sample = function(interval) {
      return withDescription(this, "sample", interval, this.sampledBy(Bacon.interval(interval, {})));
    };

    Property.prototype.changes = function() {
      return new EventStream(describe(this, "changes"), (function(_this) {
        return function(sink) {
          return _this.subscribeInternal(function(event) {
            if (!event.isInitial()) {
              return sink(event);
            }
          });
        };
      })(this));
    };

    Property.prototype.withHandler = function(handler) {
      return new Property(describe(this, "withHandler", handler), this.subscribeInternal, handler);
    };

    Property.prototype.toProperty = function() {
      assertNoArguments(arguments);
      return this;
    };

    Property.prototype.toEventStream = function() {
      return new EventStream(describe(this, "toEventStream"), (function(_this) {
        return function(sink) {
          return _this.subscribeInternal(function(event) {
            if (event.isInitial()) {
              event = event.toNext();
            }
            return sink(event);
          });
        };
      })(this));
    };

    Property.prototype.and = function(other) {
      return withDescription(this, "and", other, this.combine(other, function(x, y) {
        return x && y;
      }));
    };

    Property.prototype.or = function(other) {
      return withDescription(this, "or", other, this.combine(other, function(x, y) {
        return x || y;
      }));
    };

    Property.prototype.delay = function(delay) {
      return this.delayChanges("delay", delay, function(changes) {
        return changes.delay(delay);
      });
    };

    Property.prototype.debounce = function(delay) {
      return this.delayChanges("debounce", delay, function(changes) {
        return changes.debounce(delay);
      });
    };

    Property.prototype.throttle = function(delay) {
      return this.delayChanges("throttle", delay, function(changes) {
        return changes.throttle(delay);
      });
    };

    Property.prototype.delayChanges = function() {
      var desc, f, _i;
      desc = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), f = arguments[_i++];
      return withDescription.apply(null, [this].concat(__slice.call(desc), [addPropertyInitValueToStream(this, f(this.changes()))]));
    };

    Property.prototype.takeUntil = function(stopper) {
      var changes;
      changes = this.changes().takeUntil(stopper);
      return withDescription(this, "takeUntil", stopper, addPropertyInitValueToStream(this, changes));
    };

    Property.prototype.startWith = function(value) {
      return withDescription(this, "startWith", value, this.scan(value, function(prev, next) {
        return next;
      }));
    };

    Property.prototype.bufferingThrottle = function() {
      var _ref1;
      return (_ref1 = Property.__super__.bufferingThrottle.apply(this, arguments)).bufferingThrottle.apply(_ref1, arguments).toProperty();
    };

    return Property;

  })(Observable);

  convertArgsToFunction = function(obs, f, args, method) {
    var sampled;
    if (f instanceof Property) {
      sampled = f.sampledBy(obs, function(p, s) {
        return [p, s];
      });
      return method.apply(sampled, [
        function(_arg) {
          var p, s;
          p = _arg[0], s = _arg[1];
          return p;
        }
      ]).map(function(_arg) {
        var p, s;
        p = _arg[0], s = _arg[1];
        return s;
      });
    } else {
      f = makeFunction(f, args);
      return method.apply(obs, [f]);
    }
  };

  addPropertyInitValueToStream = function(property, stream) {
    var justInitValue;
    justInitValue = new EventStream(describe(property, "justInitValue"), function(sink) {
      var unsub, value;
      value = null;
      unsub = property.subscribeInternal(function(event) {
        if (event.hasValue()) {
          value = event;
        }
        return Bacon.noMore;
      });
      UpdateBarrier.whenDoneWith(justInitValue, function() {
        if (value != null) {
          sink(value);
        }
        return sink(end());
      });
      return unsub;
    });
    return justInitValue.concat(stream).toProperty();
  };

  Dispatcher = (function() {
    function Dispatcher(subscribe, handleEvent) {
      var done, ended, prevError, pushIt, pushing, queue, removeSub, subscriptions, unsubscribeFromSource, waiters;
      if (subscribe == null) {
        subscribe = function() {
          return nop;
        };
      }
      subscriptions = [];
      queue = [];
      pushing = false;
      ended = false;
      this.hasSubscribers = function() {
        return subscriptions.length > 0;
      };
      prevError = null;
      unsubscribeFromSource = nop;
      removeSub = function(subscription) {
        return subscriptions = _.without(subscription, subscriptions);
      };
      waiters = null;
      done = function() {
        var w, ws, _i, _len, _results;
        if (waiters != null) {
          ws = waiters;
          waiters = null;
          _results = [];
          for (_i = 0, _len = ws.length; _i < _len; _i++) {
            w = ws[_i];
            _results.push(w());
          }
          return _results;
        }
      };
      pushIt = function(event) {
        var reply, sub, success, tmp, _i, _len;
        if (!pushing) {
          if (event === prevError) {
            return;
          }
          if (event.isError()) {
            prevError = event;
          }
          success = false;
          try {
            pushing = true;
            tmp = subscriptions;
            for (_i = 0, _len = tmp.length; _i < _len; _i++) {
              sub = tmp[_i];
              reply = sub.sink(event);
              if (reply === Bacon.noMore || event.isEnd()) {
                removeSub(sub);
              }
            }
            success = true;
          } finally {
            pushing = false;
            if (!success) {
              queue = [];
            }
          }
          success = true;
          while (queue.length) {
            event = queue.shift();
            this.push(event);
          }
          done(event);
          if (this.hasSubscribers()) {
            return Bacon.more;
          } else {
            unsubscribeFromSource();
            return Bacon.noMore;
          }
        } else {
          queue.push(event);
          return Bacon.more;
        }
      };
      this.push = (function(_this) {
        return function(event) {
          return UpdateBarrier.inTransaction(event, _this, pushIt, [event]);
        };
      })(this);
      if (handleEvent == null) {
        handleEvent = function(event) {
          return this.push(event);
        };
      }
      this.handleEvent = (function(_this) {
        return function(event) {
          if (event.isEnd()) {
            ended = true;
          }
          return handleEvent.apply(_this, [event]);
        };
      })(this);
      this.subscribe = (function(_this) {
        return function(sink) {
          var subscription, unsubSrc;
          if (ended) {
            sink(end());
            return nop;
          } else {
            assertFunction(sink);
            subscription = {
              sink: sink
            };
            subscriptions.push(subscription);
            if (subscriptions.length === 1) {
              unsubSrc = subscribe(_this.handleEvent);
              unsubscribeFromSource = function() {
                unsubSrc();
                return unsubscribeFromSource = nop;
              };
            }
            assertFunction(unsubscribeFromSource);
            return function() {
              removeSub(subscription);
              if (!_this.hasSubscribers()) {
                return unsubscribeFromSource();
              }
            };
          }
        };
      })(this);
    }

    return Dispatcher;

  })();

  PropertyDispatcher = (function(_super) {
    __extends(PropertyDispatcher, _super);

    function PropertyDispatcher(p, subscribe, handleEvent) {
      var current, currentValueRootId, ended, push;
      PropertyDispatcher.__super__.constructor.call(this, subscribe, handleEvent);
      current = None;
      currentValueRootId = void 0;
      push = this.push;
      subscribe = this.subscribe;
      ended = false;
      this.push = (function(_this) {
        return function(event) {
          if (event.isEnd()) {
            ended = true;
          }
          if (event.hasValue()) {
            current = new Some(event);
            currentValueRootId = UpdateBarrier.currentEventId();
          }
          return push.apply(_this, [event]);
        };
      })(this);
      this.subscribe = (function(_this) {
        return function(sink) {
          var dispatchingId, initSent, maybeSubSource, reply, valId;
          initSent = false;
          reply = Bacon.more;
          maybeSubSource = function() {
            if (reply === Bacon.noMore) {
              return nop;
            } else if (ended) {
              sink(end());
              return nop;
            } else {
              return subscribe.apply(this, [sink]);
            }
          };
          if (current.isDefined && (_this.hasSubscribers() || ended)) {
            dispatchingId = UpdateBarrier.currentEventId();
            valId = currentValueRootId;
            if (!ended && valId && dispatchingId && dispatchingId !== valId) {
              UpdateBarrier.whenDoneWith(p, function() {
                if (currentValueRootId === valId) {
                  return sink(initial(current.get().value()));
                }
              });
              return maybeSubSource();
            } else {
              UpdateBarrier.inTransaction(void 0, _this, (function() {
                return reply = sink(initial(current.get().value()));
              }), []);
              return maybeSubSource();
            }
          } else {
            return maybeSubSource();
          }
        };
      })(this);
    }

    return PropertyDispatcher;

  })(Dispatcher);

  Bus = (function(_super) {
    __extends(Bus, _super);

    function Bus() {
      var ended, guardedSink, sink, subscribeAll, subscribeInput, subscriptions, unsubAll, unsubscribeInput;
      sink = void 0;
      subscriptions = [];
      ended = false;
      guardedSink = (function(_this) {
        return function(input) {
          return function(event) {
            if (event.isEnd()) {
              unsubscribeInput(input);
              return Bacon.noMore;
            } else {
              return sink(event);
            }
          };
        };
      })(this);
      unsubAll = function() {
        var sub, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = subscriptions.length; _i < _len; _i++) {
          sub = subscriptions[_i];
          _results.push(typeof sub.unsub === "function" ? sub.unsub() : void 0);
        }
        return _results;
      };
      subscribeInput = function(subscription) {
        return subscription.unsub = subscription.input.subscribeInternal(guardedSink(subscription.input));
      };
      unsubscribeInput = function(input) {
        var i, sub, _i, _len;
        for (i = _i = 0, _len = subscriptions.length; _i < _len; i = ++_i) {
          sub = subscriptions[i];
          if (sub.input === input) {
            if (typeof sub.unsub === "function") {
              sub.unsub();
            }
            subscriptions.splice(i, 1);
            return;
          }
        }
      };
      subscribeAll = (function(_this) {
        return function(newSink) {
          var subscription, _i, _len, _ref1;
          sink = newSink;
          _ref1 = cloneArray(subscriptions);
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            subscription = _ref1[_i];
            subscribeInput(subscription);
          }
          return unsubAll;
        };
      })(this);
      Bus.__super__.constructor.call(this, describe(Bacon, "Bus"), subscribeAll);
      this.plug = (function(_this) {
        return function(input) {
          var sub;
          if (ended) {
            return;
          }
          sub = {
            input: input
          };
          subscriptions.push(sub);
          if ((sink != null)) {
            subscribeInput(sub);
          }
          return function() {
            return unsubscribeInput(input);
          };
        };
      })(this);
      this.push = (function(_this) {
        return function(value) {
          return typeof sink === "function" ? sink(next(value)) : void 0;
        };
      })(this);
      this.error = (function(_this) {
        return function(error) {
          return typeof sink === "function" ? sink(new Error(error)) : void 0;
        };
      })(this);
      this.end = (function(_this) {
        return function() {
          ended = true;
          unsubAll();
          return typeof sink === "function" ? sink(end()) : void 0;
        };
      })(this);
    }

    return Bus;

  })(EventStream);

  Source = (function() {
    function Source(obs, sync, subscribe, lazy) {
      this.obs = obs;
      this.sync = sync;
      this.subscribe = subscribe;
      this.lazy = lazy != null ? lazy : false;
      this.queue = [];
      if (this.subscribe == null) {
        this.subscribe = this.obs.subscribeInternal;
      }
      this.toString = this.obs.toString;
    }

    Source.prototype.markEnded = function() {
      return this.ended = true;
    };

    Source.prototype.consume = function() {
      if (this.lazy) {
        return _.always(this.queue[0]);
      } else {
        return this.queue[0];
      }
    };

    Source.prototype.push = function(x) {
      return this.queue = [x];
    };

    Source.prototype.mayHave = function() {
      return true;
    };

    Source.prototype.hasAtLeast = function() {
      return this.queue.length;
    };

    Source.prototype.flatten = true;

    return Source;

  })();

  ConsumingSource = (function(_super) {
    __extends(ConsumingSource, _super);

    function ConsumingSource() {
      return ConsumingSource.__super__.constructor.apply(this, arguments);
    }

    ConsumingSource.prototype.consume = function() {
      return this.queue.shift();
    };

    ConsumingSource.prototype.push = function(x) {
      return this.queue.push(x);
    };

    ConsumingSource.prototype.mayHave = function(c) {
      return !this.ended || this.queue.length >= c;
    };

    ConsumingSource.prototype.hasAtLeast = function(c) {
      return this.queue.length >= c;
    };

    ConsumingSource.prototype.flatten = false;

    return ConsumingSource;

  })(Source);

  BufferingSource = (function(_super) {
    __extends(BufferingSource, _super);

    function BufferingSource(obs) {
      this.obs = obs;
      BufferingSource.__super__.constructor.call(this, this.obs, true, this.obs.subscribeInternal);
    }

    BufferingSource.prototype.consume = function() {
      var values;
      values = this.queue;
      this.queue = [];
      return function() {
        return values;
      };
    };

    BufferingSource.prototype.push = function(x) {
      return this.queue.push(x());
    };

    BufferingSource.prototype.hasAtLeast = function() {
      return true;
    };

    return BufferingSource;

  })(Source);

  Source.isTrigger = function(s) {
    if (s instanceof Source) {
      return s.sync;
    } else {
      return s instanceof EventStream;
    }
  };

  Source.fromObservable = function(s) {
    if (s instanceof Source) {
      return s;
    } else if (s instanceof Property) {
      return new Source(s, false);
    } else {
      return new ConsumingSource(s, true);
    }
  };

  describe = function() {
    var args, context, method;
    context = arguments[0], method = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if ((context || method) instanceof Desc) {
      return context || method;
    } else {
      return new Desc(context, method, args);
    }
  };

  findDeps = function(x) {
    if (isArray(x)) {
      return _.flatMap(findDeps, x);
    } else if (isObservable(x)) {
      return [x];
    } else if (x instanceof Source) {
      return [x.obs];
    } else {
      return [];
    }
  };

  Desc = (function() {
    function Desc(context, method, args) {
      this.context = context;
      this.method = method;
      this.args = args;
    }

    Desc.prototype.apply = function(obs) {
      var deps, that;
      that = this;
      deps = _.cached((function() {
        return findDeps([that.context].concat(that.args));
      }));
      obs.internalDeps = obs.internalDeps || deps;
      obs.dependsOn = UpdateBarrier.dependsOn;
      obs.deps = deps;
      obs.toString = (function() {
        return _.toString(that.context) + "." + _.toString(that.method) + "(" + _.map(_.toString, that.args) + ")";
      });
      obs.inspect = function() {
        return obs.toString();
      };
      obs.desc = (function() {
        return {
          context: that.context,
          method: that.method,
          args: that.args
        };
      });
      return obs;
    };

    return Desc;

  })();

  withDescription = function() {
    var desc, obs, _i;
    desc = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), obs = arguments[_i++];
    return describe.apply(null, desc).apply(obs);
  };

  Bacon.when = function() {
    var f, i, index, ix, len, needsBarrier, pat, patSources, pats, patterns, resultStream, s, sources, triggerFound, usage, _i, _j, _len, _len1, _ref1;
    patterns = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (patterns.length === 0) {
      return Bacon.never();
    }
    len = patterns.length;
    usage = "when: expecting arguments in the form (Observable+,function)+";
    assert(usage, len % 2 === 0);
    sources = [];
    pats = [];
    i = 0;
    while (i < len) {
      patSources = _.toArray(patterns[i]);
      f = patterns[i + 1];
      pat = {
        f: (isFunction(f) ? f : (function() {
          return f;
        })),
        ixs: []
      };
      triggerFound = false;
      for (_i = 0, _len = patSources.length; _i < _len; _i++) {
        s = patSources[_i];
        index = _.indexOf(sources, s);
        if (!triggerFound) {
          triggerFound = Source.isTrigger(s);
        }
        if (index < 0) {
          sources.push(s);
          index = sources.length - 1;
        }
        _ref1 = pat.ixs;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          ix = _ref1[_j];
          if (ix.index === index) {
            ix.count++;
          }
        }
        pat.ixs.push({
          index: index,
          count: 1
        });
      }
      assert("At least one EventStream required", triggerFound ||  (!patSources.length));
      if (patSources.length > 0) {
        pats.push(pat);
      }
      i = i + 2;
    }
    if (!sources.length) {
      return Bacon.never();
    }
    sources = _.map(Source.fromObservable, sources);
    needsBarrier = (_.any(sources, function(s) {
      return s.flatten;
    })) && (containsDuplicateDeps(_.map((function(s) {
      return s.obs;
    }), sources)));
    return resultStream = new EventStream(describe.apply(null, [Bacon, "when"].concat(__slice.call(patterns))), function(sink) {
      var cannotMatch, cannotSync, ends, match, nonFlattened, part, triggers;
      triggers = [];
      ends = false;
      match = function(p) {
        var _k, _len2, _ref2;
        _ref2 = p.ixs;
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          i = _ref2[_k];
          if (!sources[i.index].hasAtLeast(i.count)) {
            return false;
          }
        }
        return true;
      };
      cannotSync = function(source) {
        return !source.sync || source.ended;
      };
      cannotMatch = function(p) {
        var _k, _len2, _ref2;
        _ref2 = p.ixs;
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          i = _ref2[_k];
          if (!sources[i.index].mayHave(i.count)) {
            return true;
          }
        }
      };
      nonFlattened = function(trigger) {
        return !trigger.source.flatten;
      };
      part = function(source) {
        return function(unsubAll) {
          var flush, flushLater, flushWhileTriggers;
          flushLater = function() {
            return UpdateBarrier.whenDoneWith(resultStream, flush);
          };
          flushWhileTriggers = function() {
            var functions, p, reply, trigger, _k, _len2;
            if (triggers.length > 0) {
              reply = Bacon.more;
              trigger = triggers.pop();
              for (_k = 0, _len2 = pats.length; _k < _len2; _k++) {
                p = pats[_k];
                if (match(p)) {
                  functions = (function() {
                    var _l, _len3, _ref2, _results;
                    _ref2 = p.ixs;
                    _results = [];
                    for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
                      i = _ref2[_l];
                      _results.push(sources[i.index].consume());
                    }
                    return _results;
                  })();
                  reply = sink(trigger.e.apply(function() {
                    var fun, values;
                    values = (function() {
                      var _l, _len3, _results;
                      _results = [];
                      for (_l = 0, _len3 = functions.length; _l < _len3; _l++) {
                        fun = functions[_l];
                        _results.push(fun());
                      }
                      return _results;
                    })();
                    return p.f.apply(p, values);
                  }));
                  if (triggers.length && needsBarrier) {
                    triggers = _.filter(nonFlattened, triggers);
                  }
                  if (reply === Bacon.noMore) {
                    return reply;
                  } else {
                    return flushWhileTriggers();
                  }
                }
              }
            } else {
              return Bacon.more;
            }
          };
          flush = function() {
            var reply;
            reply = flushWhileTriggers();
            if (ends) {
              ends = false;
              if (_.all(sources, cannotSync) || _.all(pats, cannotMatch)) {
                reply = Bacon.noMore;
                sink(end());
              }
            }
            if (reply === Bacon.noMore) {
              unsubAll();
            }
            return reply;
          };
          return source.subscribe(function(e) {
            var reply;
            if (e.isEnd()) {
              ends = true;
              source.markEnded();
              flushLater();
            } else if (e.isError()) {
              reply = sink(e);
            } else {
              source.push(e.value);
              if (source.sync) {
                triggers.push({
                  source: source,
                  e: e
                });
                if (needsBarrier || UpdateBarrier.hasWaiters()) {
                  flushLater();
                } else {
                  flush();
                }
              }
            }
            if (reply === Bacon.noMore) {
              unsubAll();
            }
            return reply || Bacon.more;
          });
        };
      };
      return compositeUnsubscribe.apply(null, (function() {
        var _k, _len2, _results;
        _results = [];
        for (_k = 0, _len2 = sources.length; _k < _len2; _k++) {
          s = sources[_k];
          _results.push(part(s));
        }
        return _results;
      })());
    });
  };

  containsDuplicateDeps = function(observables, state) {
    var checkObservable;
    if (state == null) {
      state = [];
    }
    checkObservable = function(obs) {
      var deps;
      if (Bacon._.contains(state, obs)) {
        return true;
      } else {
        deps = obs.internalDeps();
        if (deps.length) {
          state.push(obs);
          return Bacon._.any(deps, checkObservable);
        } else {
          state.push(obs);
          return false;
        }
      }
    };
    return Bacon._.any(observables, checkObservable);
  };

  Bacon.update = function() {
    var i, initial, lateBindFirst, patterns;
    initial = arguments[0], patterns = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    lateBindFirst = function(f) {
      return function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return function(i) {
          return f.apply(null, [i].concat(args));
        };
      };
    };
    i = patterns.length - 1;
    while (i > 0) {
      if (!(patterns[i] instanceof Function)) {
        patterns[i] = (function(x) {
          return function() {
            return x;
          };
        })(patterns[i]);
      }
      patterns[i] = lateBindFirst(patterns[i]);
      i = i - 2;
    }
    return withDescription.apply(null, [Bacon, "update", initial].concat(__slice.call(patterns), [Bacon.when.apply(Bacon, patterns).scan(initial, (function(x, f) {
      return f(x);
    }))]));
  };

  compositeUnsubscribe = function() {
    var ss;
    ss = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return new CompositeUnsubscribe(ss).unsubscribe;
  };

  CompositeUnsubscribe = (function() {
    function CompositeUnsubscribe(ss) {
      var s, _i, _len;
      if (ss == null) {
        ss = [];
      }
      this.unsubscribe = __bind(this.unsubscribe, this);
      this.unsubscribed = false;
      this.subscriptions = [];
      this.starting = [];
      for (_i = 0, _len = ss.length; _i < _len; _i++) {
        s = ss[_i];
        this.add(s);
      }
    }

    CompositeUnsubscribe.prototype.add = function(subscription) {
      var ended, unsub, unsubMe;
      if (this.unsubscribed) {
        return;
      }
      ended = false;
      unsub = nop;
      this.starting.push(subscription);
      unsubMe = (function(_this) {
        return function() {
          if (_this.unsubscribed) {
            return;
          }
          ended = true;
          _this.remove(unsub);
          return _.remove(subscription, _this.starting);
        };
      })(this);
      unsub = subscription(this.unsubscribe, unsubMe);
      if (!(this.unsubscribed || ended)) {
        this.subscriptions.push(unsub);
      }
      _.remove(subscription, this.starting);
      return unsub;
    };

    CompositeUnsubscribe.prototype.remove = function(unsub) {
      if (this.unsubscribed) {
        return;
      }
      if ((_.remove(unsub, this.subscriptions)) !== void 0) {
        return unsub();
      }
    };

    CompositeUnsubscribe.prototype.unsubscribe = function() {
      var s, _i, _len, _ref1;
      if (this.unsubscribed) {
        return;
      }
      this.unsubscribed = true;
      _ref1 = this.subscriptions;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        s = _ref1[_i];
        s();
      }
      this.subscriptions = [];
      return this.starting = [];
    };

    CompositeUnsubscribe.prototype.count = function() {
      if (this.unsubscribed) {
        return 0;
      }
      return this.subscriptions.length + this.starting.length;
    };

    CompositeUnsubscribe.prototype.empty = function() {
      return this.count() === 0;
    };

    return CompositeUnsubscribe;

  })();

  Bacon.CompositeUnsubscribe = CompositeUnsubscribe;

  Some = (function() {
    function Some(value) {
      this.value = value;
    }

    Some.prototype.getOrElse = function() {
      return this.value;
    };

    Some.prototype.get = function() {
      return this.value;
    };

    Some.prototype.filter = function(f) {
      if (f(this.value)) {
        return new Some(this.value);
      } else {
        return None;
      }
    };

    Some.prototype.map = function(f) {
      return new Some(f(this.value));
    };

    Some.prototype.forEach = function(f) {
      return f(this.value);
    };

    Some.prototype.isDefined = true;

    Some.prototype.toArray = function() {
      return [this.value];
    };

    Some.prototype.inspect = function() {
      return "Some(" + this.value + ")";
    };

    Some.prototype.toString = function() {
      return this.inspect();
    };

    return Some;

  })();

  None = {
    getOrElse: function(value) {
      return value;
    },
    filter: function() {
      return None;
    },
    map: function() {
      return None;
    },
    forEach: function() {},
    isDefined: false,
    toArray: function() {
      return [];
    },
    inspect: function() {
      return "None";
    },
    toString: function() {
      return this.inspect();
    }
  };

  UpdateBarrier = (function() {
    var afterTransaction, afters, collectDeps, currentEventId, dependsOn, findIndependent, flatDeps, flush, flushDepCache, hasWaiters, inTransaction, independent, rootEvent, waiters, whenDoneWith, wrappedSubscribe;
    rootEvent = void 0;
    waiters = [];
    afters = [];
    afterTransaction = function(f) {
      if (rootEvent) {
        return afters.push(f);
      } else {
        return f();
      }
    };
    independent = function(waiter) {
      return !_.any(waiters, (function(other) {
        return waiter.obs.dependsOn(other.obs);
      }));
    };
    whenDoneWith = function(obs, f) {
      if (rootEvent) {
        return waiters.push({
          obs: obs,
          f: f
        });
      } else {
        return f();
      }
    };
    findIndependent = function() {
      while (!independent(waiters[0])) {
        waiters.push(waiters.splice(0, 1)[0]);
      }
      return waiters.splice(0, 1)[0];
    };
    flush = function() {
      var _results;
      _results = [];
      while (waiters.length) {
        _results.push(findIndependent().f());
      }
      return _results;
    };
    inTransaction = function(event, context, f, args) {
      var flatDeps, result;
      if (rootEvent) {
        return f.apply(context, args);
      } else {
        rootEvent = event;
        try {
          result = f.apply(context, args);
          flush();
        } finally {
          rootEvent = void 0;
          while (afters.length) {
            f = afters.splice(0, 1)[0];
            f();
          }
          flatDeps = {};
        }
        return result;
      }
    };
    currentEventId = function() {
      if (rootEvent) {
        return rootEvent.id;
      } else {
        return void 0;
      }
    };
    wrappedSubscribe = function(obs) {
      return function(sink) {
        var doUnsub, unsub, unsubd;
        unsubd = false;
        doUnsub = function() {};
        unsub = function() {
          unsubd = true;
          return doUnsub();
        };
        doUnsub = obs.subscribeInternal(function(event) {
          return afterTransaction(function() {
            var reply;
            if (!unsubd) {
              reply = sink(event);
              if (reply === Bacon.noMore) {
                return unsub();
              }
            }
          });
        });
        return unsub;
      };
    };
    hasWaiters = function() {
      return waiters.length > 0;
    };
    flatDeps = {};
    dependsOn = function(b) {
      var myDeps;
      myDeps = flatDeps[this.id];
      if (!myDeps) {
        myDeps = flatDeps[this.id] = {};
        collectDeps(this, this);
      }
      return myDeps[b.id];
    };
    collectDeps = function(orig, o) {
      var dep, _i, _len, _ref1, _results;
      _ref1 = o.internalDeps();
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        dep = _ref1[_i];
        flatDeps[orig.id][dep.id] = true;
        _results.push(collectDeps(orig, dep));
      }
      return _results;
    };
    flushDepCache = function() {
      return flatDeps = {};
    };
    return {
      whenDoneWith: whenDoneWith,
      hasWaiters: hasWaiters,
      inTransaction: inTransaction,
      currentEventId: currentEventId,
      wrappedSubscribe: wrappedSubscribe,
      dependsOn: dependsOn,
      flushDepCache: flushDepCache
    };
  })();

  Bacon.EventStream = EventStream;

  Bacon.Property = Property;

  Bacon.Observable = Observable;

  Bacon.Bus = Bus;

  Bacon.Initial = Initial;

  Bacon.Next = Next;

  Bacon.End = End;

  Bacon.Error = Error;

  nop = function() {};

  latterF = function(_, x) {
    return x();
  };

  former = function(x, _) {
    return x;
  };

  initial = function(value) {
    return new Initial(_.always(value));
  };

  next = function(value) {
    return new Next(_.always(value));
  };

  end = function() {
    return new End();
  };

  toEvent = function(x) {
    if (x instanceof Event) {
      return x;
    } else {
      return next(x);
    }
  };

  cloneArray = function(xs) {
    return xs.slice(0);
  };

  assert = function(message, condition) {
    if (!condition) {
      throw message;
    }
  };

  assertEventStream = function(event) {
    if (!(event instanceof EventStream)) {
      throw "not an EventStream : " + event;
    }
  };

  assertFunction = function(f) {
    return assert("not a function : " + f, isFunction(f));
  };

  isFunction = function(f) {
    return typeof f === "function";
  };

  isArray = function(xs) {
    return xs instanceof Array;
  };

  isObservable = function(x) {
    return x instanceof Observable;
  };

  assertArray = function(xs) {
    if (!isArray(xs)) {
      throw "not an array : " + xs;
    }
  };

  assertNoArguments = function(args) {
    return assert("no arguments supported", args.length === 0);
  };

  assertString = function(x) {
    if (typeof x !== "string") {
      throw "not a string : " + x;
    }
  };

  partiallyApplied = function(f, applied) {
    return function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return f.apply(null, applied.concat(args));
    };
  };

  makeSpawner = function(args) {
    if (args.length === 1 && isObservable(args[0])) {
      return _.always(args[0]);
    } else {
      return makeFunctionArgs(args);
    }
  };

  makeFunctionArgs = function(args) {
    args = Array.prototype.slice.call(args);
    return makeFunction_.apply(null, args);
  };

  makeFunction_ = withMethodCallSupport(function() {
    var args, f;
    f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (isFunction(f)) {
      if (args.length) {
        return partiallyApplied(f, args);
      } else {
        return f;
      }
    } else if (isFieldKey(f)) {
      return toFieldExtractor(f, args);
    } else {
      return _.always(f);
    }
  });

  makeFunction = function(f, args) {
    return makeFunction_.apply(null, [f].concat(__slice.call(args)));
  };

  makeObservable = function(x) {
    if (isObservable(x)) {
      return x;
    } else {
      return Bacon.once(x);
    }
  };

  isFieldKey = function(f) {
    return (typeof f === "string") && f.length > 1 && f.charAt(0) === ".";
  };

  Bacon.isFieldKey = isFieldKey;

  toFieldExtractor = function(f, args) {
    var partFuncs, parts;
    parts = f.slice(1).split(".");
    partFuncs = _.map(toSimpleExtractor(args), parts);
    return function(value) {
      var _i, _len;
      for (_i = 0, _len = partFuncs.length; _i < _len; _i++) {
        f = partFuncs[_i];
        value = f(value);
      }
      return value;
    };
  };

  toSimpleExtractor = function(args) {
    return function(key) {
      return function(value) {
        var fieldValue;
        if (value == null) {
          return void 0;
        } else {
          fieldValue = value[key];
          if (isFunction(fieldValue)) {
            return fieldValue.apply(value, args);
          } else {
            return fieldValue;
          }
        }
      };
    };
  };

  toFieldKey = function(f) {
    return f.slice(1);
  };

  toCombinator = function(f) {
    var key;
    if (isFunction(f)) {
      return f;
    } else if (isFieldKey(f)) {
      key = toFieldKey(f);
      return function(left, right) {
        return left[key](right);
      };
    } else {
      return assert("not a function or a field key: " + f, false);
    }
  };

  toOption = function(v) {
    if (v instanceof Some || v === None) {
      return v;
    } else {
      return new Some(v);
    }
  };

  _ = {
    indexOf: Array.prototype.indexOf ? function(xs, x) {
      return xs.indexOf(x);
    } : function(xs, x) {
      var i, y, _i, _len;
      for (i = _i = 0, _len = xs.length; _i < _len; i = ++_i) {
        y = xs[i];
        if (x === y) {
          return i;
        }
      }
      return -1;
    },
    indexWhere: function(xs, f) {
      var i, y, _i, _len;
      for (i = _i = 0, _len = xs.length; _i < _len; i = ++_i) {
        y = xs[i];
        if (f(y)) {
          return i;
        }
      }
      return -1;
    },
    head: function(xs) {
      return xs[0];
    },
    always: function(x) {
      return function() {
        return x;
      };
    },
    negate: function(f) {
      return function(x) {
        return !f(x);
      };
    },
    empty: function(xs) {
      return xs.length === 0;
    },
    tail: function(xs) {
      return xs.slice(1, xs.length);
    },
    filter: function(f, xs) {
      var filtered, x, _i, _len;
      filtered = [];
      for (_i = 0, _len = xs.length; _i < _len; _i++) {
        x = xs[_i];
        if (f(x)) {
          filtered.push(x);
        }
      }
      return filtered;
    },
    map: function(f, xs) {
      var x, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = xs.length; _i < _len; _i++) {
        x = xs[_i];
        _results.push(f(x));
      }
      return _results;
    },
    each: function(xs, f) {
      var key, value, _results;
      _results = [];
      for (key in xs) {
        value = xs[key];
        _results.push(f(key, value));
      }
      return _results;
    },
    toArray: function(xs) {
      if (isArray(xs)) {
        return xs;
      } else {
        return [xs];
      }
    },
    contains: function(xs, x) {
      return _.indexOf(xs, x) !== -1;
    },
    id: function(x) {
      return x;
    },
    last: function(xs) {
      return xs[xs.length - 1];
    },
    all: function(xs, f) {
      var x, _i, _len;
      if (f == null) {
        f = _.id;
      }
      for (_i = 0, _len = xs.length; _i < _len; _i++) {
        x = xs[_i];
        if (!f(x)) {
          return false;
        }
      }
      return true;
    },
    any: function(xs, f) {
      var x, _i, _len;
      if (f == null) {
        f = _.id;
      }
      for (_i = 0, _len = xs.length; _i < _len; _i++) {
        x = xs[_i];
        if (f(x)) {
          return true;
        }
      }
      return false;
    },
    without: function(x, xs) {
      return _.filter((function(y) {
        return y !== x;
      }), xs);
    },
    remove: function(x, xs) {
      var i;
      i = _.indexOf(xs, x);
      if (i >= 0) {
        return xs.splice(i, 1);
      }
    },
    fold: function(xs, seed, f) {
      var x, _i, _len;
      for (_i = 0, _len = xs.length; _i < _len; _i++) {
        x = xs[_i];
        seed = f(seed, x);
      }
      return seed;
    },
    flatMap: function(f, xs) {
      return _.fold(xs, [], (function(ys, x) {
        return ys.concat(f(x));
      }));
    },
    cached: function(f) {
      var value;
      value = None;
      return function() {
        if (value === None) {
          value = f();
          f = null;
        }
        return value;
      };
    },
    toString: function(obj) {
      var ex, internals, key, value;
      try {
        recursionDepth++;
        if (obj == null) {
          return "undefined";
        } else if (isFunction(obj)) {
          return "function";
        } else if (isArray(obj)) {
          if (recursionDepth > 5) {
            return "[..]";
          }
          return "[" + _.map(_.toString, obj).toString() + "]";
        } else if (((obj != null ? obj.toString : void 0) != null) && obj.toString !== Object.prototype.toString) {
          return obj.toString();
        } else if (typeof obj === "object") {
          if (recursionDepth > 5) {
            return "{..}";
          }
          internals = (function() {
            var _results;
            _results = [];
            for (key in obj) {
              if (!__hasProp.call(obj, key)) continue;
              value = (function() {
                try {
                  return obj[key];
                } catch (_error) {
                  ex = _error;
                  return ex;
                }
              })();
              _results.push(_.toString(key) + ":" + _.toString(value));
            }
            return _results;
          })();
          return "{" + internals + "}";
        } else {
          return obj;
        }
      } finally {
        recursionDepth--;
      }
    }
  };

  recursionDepth = 0;

  Bacon._ = _;

  Bacon.scheduler = {
    setTimeout: function(f, d) {
      return setTimeout(f, d);
    },
    setInterval: function(f, i) {
      return setInterval(f, i);
    },
    clearInterval: function(id) {
      return clearInterval(id);
    },
    now: function() {
      return new Date().getTime();
    }
  };

  if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
    define([], function() {
      return Bacon;
    });
    this.Bacon = Bacon;
  } else if (typeof module !== "undefined" && module !== null) {
    module.exports = Bacon;
    Bacon.Bacon = Bacon;
  } else {
    this.Bacon = Bacon;
  }

}).call(this);

//jquery.class.js

(function( $ ) {

	// if we are initializing a new class
	var initializing = false,

		// tests if we can get super in .toString()
		fnTest = /xyz/.test(function() {
			xyz;
		}) ? /\b_super\b/ : /.*/,

		// overwrites an object with methods, sets up _super
		inheritProps = function( newProps, oldProps, addTo ) {
			addTo = addTo || newProps
			for ( var name in newProps ) {
				// Check if we're overwriting an existing function
				addTo[name] = typeof newProps[name] == "function" && typeof oldProps[name] == "function" && fnTest.test(newProps[name]) ? (function( name, fn ) {
					return function() {
						var tmp = this._super,
							ret;

						// Add a new ._super() method that is the same method
						// but on the super-class
						this._super = oldProps[name];

						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						ret = fn.apply(this, arguments);
						this._super = tmp;
						return ret;
					};
				})(name, newProps[name]) : newProps[name];
			}
		};


	/**
	 * @class jQuery.Class
	 * @plugin jquery/class
	 * @tag core
	 * @download dist/jquery/jquery.class.js
	 * @test jquery/class/qunit.html
	 * Class provides simulated inheritance in JavaScript. Use $.Class to bridge the gap between
	 * jQuery's functional programming style and Object Oriented Programming.
	 * It is based off John Resig's [http://ejohn.org/blog/simple-javascript-inheritance/|Simple Class]
	 * Inheritance library.  Besides prototypal inheritance, it includes a few important features:
	 * <ul>
	 *     <li>Static inheritance</li>
	 *     <li>Introspection</li>
	 *     <li>Namespaces</li>
	 *     <li>Setup and initialization methods</li>
	 *     <li>Easy callback function creation</li>
	 * </ul>
	 * <h2>Static v. Prototype</h2>
	 * <p>Before learning about Class, it's important to
	 * understand the difference between
	 * a class's <b>static</b> and <b>prototype</b> properties.
	 * </p>
	 * @codestart
	 * //STATIC
	 * MyClass.staticProperty  //shared property
	 *
	 * //PROTOTYPE
	 * myclass = new MyClass()
	 * myclass.prototypeMethod() //instance method
	 * @codeend
	 * <p>A static (or class) property is on the Class constructor
	 * function itself
	 * and can be thought of being shared by all instances of the Class.
	 * Prototype propertes are available only on instances of the Class.
	 * </p>
	 * <h2>A Basic Class</h2>
	 * <p>The following creates a Monster class with a
	 * name (for introspection), static, and prototype members.
	 * Every time a monster instance is created, the static
	 * count is incremented.
	 *
	 * </p>
	 * @codestart
	 * $.Class.extend('Monster',
	 * /* @static *|
	 * {
	 *   count: 0
	 * },
	 * /* @prototype *|
	 * {
	 *   init: function( name ) {
	 *
	 *     // saves name on the monster instance
	 *     this.name = name;
	 *
	 *     // sets the health
	 *     this.health = 10;
	 *
	 *     // increments count
	 *     this.Class.count++;
	 *   },
	 *   eat: function( smallChildren ){
	 *     this.health += smallChildren;
	 *   },
	 *   fight: function() {
	 *     this.health -= 2;
	 *   }
	 * });
	 *
	 * hydra = new Monster('hydra');
	 *
	 * dragon = new Monster('dragon');
	 *
	 * hydra.name        // -> hydra
	 * Monster.count     // -> 2
	 * Monster.shortName // -> 'Monster'
	 *
	 * hydra.eat(2);     // health = 12
	 *
	 * dragon.fight();   // health = 8
	 *
	 * @codeend
	 *
	 * <p>
	 * Notice that the prototype <b>init</b> function is called when a new instance of Monster is created.
	 * </p>
	 * <h2>Inheritance</h2>
	 * <p>When a class is extended, all static and prototype properties are available on the new class.
	 * If you overwrite a function, you can call the base class's function by calling
	 * <code>this._super</code>.  Lets create a SeaMonster class.  SeaMonsters are less
	 * efficient at eating small children, but more powerful fighters.
	 * </p>
	 * @codestart
	 * Monster.extend("SeaMonster",{
	 *   eat: function( smallChildren ) {
	 *     this._super(smallChildren / 2);
	 *   },
	 *   fight: function() {
	 *     this.health -= 1;
	 *   }
	 * });
	 *
	 * lockNess = new SeaMonster('Lock Ness');
	 * lockNess.eat(4);   //health = 12
	 * lockNess.fight();  //health = 11
	 * @codeend
	 * <h3>Static property inheritance</h3>
	 * You can also inherit static properties in the same way:
	 * @codestart
	 * $.Class.extend("First",
	 * {
	 *     staticMethod: function() { return 1;}
	 * },{})
	 *
	 * First.extend("Second",{
	 *     staticMethod: function() { return this._super()+1;}
	 * },{})
	 *
	 * Second.staticMethod() // -> 2
	 * @codeend
	 * <h2>Namespaces</h2>
	 * <p>Namespaces are a good idea! We encourage you to namespace all of your code.
	 * It makes it possible to drop your code into another app without problems.
	 * Making a namespaced class is easy:
	 * </p>
	 * @codestart
	 * $.Class.extend("MyNamespace.MyClass",{},{});
	 *
	 * new MyNamespace.MyClass()
	 * @codeend
	 * <h2 id='introspection'>Introspection</h2>
	 * Often, it's nice to create classes whose name helps determine functionality.  Ruby on
	 * Rails's [http://api.rubyonrails.org/classes/ActiveRecord/Base.html|ActiveRecord] ORM class
	 * is a great example of this.  Unfortunately, JavaScript doesn't have a way of determining
	 * an object's name, so the developer must provide a name.  Class fixes this by taking a String name for the class.
	 * @codestart
	 * $.Class.extend("MyOrg.MyClass",{},{})
	 * MyOrg.MyClass.shortName //-> 'MyClass'
	 * MyOrg.MyClass.fullName //->  'MyOrg.MyClass'
	 * @codeend
	 * The fullName (with namespaces) and the shortName (without namespaces) are added to the Class's
	 * static properties.
	 *
	 *
	 * <h2>Setup and initialization methods</h2>
	 * <p>
	 * Class provides static and prototype initialization functions.
	 * These come in two flavors - setup and init.
	 * Setup is called before init and
	 * can be used to 'normalize' init's arguments.
	 * </p>
	 * <div class='whisper'>PRO TIP: Typically, you don't need setup methods in your classes. Use Init instead.
	 * Reserve setup methods for when you need to do complex pre-processing of your class before init is called.
	 *
	 * </div>
	 * @codestart
	 * $.Class.extend("MyClass",
	 * {
	 *   setup: function() {} //static setup
	 *   init: function() {} //static constructor
	 * },
	 * {
	 *   setup: function() {} //prototype setup
	 *   init: function() {} //prototype constructor
	 * })
	 * @codeend
	 *
	 * <h3>Setup</h3>
	 * <p>Setup functions are called before init functions.  Static setup functions are passed
	 * the base class followed by arguments passed to the extend function.
	 * Prototype static functions are passed the Class constructor function arguments.</p>
	 * <p>If a setup function returns an array, that array will be used as the arguments
	 * for the following init method.  This provides setup functions the ability to normalize
	 * arguments passed to the init constructors.  They are also excellent places
	 * to put setup code you want to almost always run.</p>
	 * <p>
	 * The following is similar to how [jQuery.Controller.prototype.setup]
	 * makes sure init is always called with a jQuery element and merged options
	 * even if it is passed a raw
	 * HTMLElement and no second parameter.
	 * </p>
	 * @codestart
	 * $.Class.extend("jQuery.Controller",{
	 *   ...
	 * },{
	 *   setup: function( el, options ) {
	 *     ...
	 *     return [$(el),
	 *             $.extend(true,
	 *                this.Class.defaults,
	 *                options || {} ) ]
	 *   }
	 * })
	 * @codeend
	 * Typically, you won't need to make or overwrite setup functions.
	 * <h3>Init</h3>
	 *
	 * <p>Init functions are called after setup functions.
	 * Typically, they receive the same arguments
	 * as their preceding setup function.  The Foo class's <code>init</code> method
	 * gets called in the following example:
	 * </p>
	 * @codestart
	 * $.Class.Extend("Foo", {
	 *   init: function( arg1, arg2, arg3 ) {
	 *     this.sum = arg1+arg2+arg3;
	 *   }
	 * })
	 * var foo = new Foo(1,2,3);
	 * foo.sum //-> 6
	 * @codeend
	 * <h2>Callbacks</h2>
	 * <p>Similar to jQuery's proxy method, Class provides a
	 * [jQuery.Class.static.callback callback]
	 * function that returns a callback to a method that will always
	 * have
	 * <code>this</code> set to the class or instance of the class.
	 * </p>
	 * The following example uses this.callback to make sure
	 * <code>this.name</code> is available in <code>show</code>.
	 * @codestart
	 * $.Class.extend("Todo",{
	 *   init: function( name ) { this.name = name }
	 *   get: function() {
	 *     $.get("/stuff",this.callback('show'))
	 *   },
	 *   show: function( txt ) {
	 *     alert(this.name+txt)
	 *   }
	 * })
	 * new Todo("Trash").get()
	 * @codeend
	 * <p>Callback is available as a static and prototype method.</p>
	 * <h2>Demo</h2>
	 * @demo jquery/class/class.html
	 *
	 * @constructor Creating a new instance of an object that has extended jQuery.Class
	 *     calls the init prototype function and returns a new instance of the class.
	 *
	 */

	jQuery.Class = function() {
		if (arguments.length) {
			jQuery.Class.extend.apply(jQuery.Class, arguments);
		}
	};

	/* @Static*/
	$.extend($.Class, {
		/**
		 * @function callback
		 * Returns a callback function for a function on this Class.
		 * The callback function ensures that 'this' is set appropriately.  
		 * @codestart
		 * $.Class.extend("MyClass",{
		 *     getData: function() {
		 *         this.showing = null;
		 *         $.get("data.json",this.callback('gotData'),'json')
		 *     },
		 *     gotData: function( data ) {
		 *         this.showing = data;
		 *     }
		 * },{});
		 * MyClass.showData();
		 * @codeend
		 * <h2>Currying Arguments</h2>
		 * Additional arguments to callback will fill in arguments on the returning function.
		 * @codestart
		 * $.Class.extend("MyClass",{
		 *    getData: function( <b>callback</b> ) {
		 *      $.get("data.json",this.callback('process',<b>callback</b>),'json');
		 *    },
		 *    process: function( <b>callback</b>, jsonData ) { //callback is added as first argument
		 *        jsonData.processed = true;
		 *        callback(jsonData);
		 *    }
		 * },{});
		 * MyClass.getData(showDataFunc)
		 * @codeend
		 * <h2>Nesting Functions</h2>
		 * Callback can take an array of functions to call as the first argument.  When the returned callback function
		 * is called each function in the array is passed the return value of the prior function.  This is often used
		 * to eliminate currying initial arguments.
		 * @codestart
		 * $.Class.extend("MyClass",{
		 *    getData: function( callback ) {
		 *      //calls process, then callback with value from process
		 *      $.get("data.json",this.callback(['process2',callback]),'json') 
		 *    },
		 *    process2: function( type,jsonData ) {
		 *        jsonData.processed = true;
		 *        return [jsonData];
		 *    }
		 * },{});
		 * MyClass.getData(showDataFunc);
		 * @codeend
		 * @param {String|Array} fname If a string, it represents the function to be called.  
		 * If it is an array, it will call each function in order and pass the return value of the prior function to the
		 * next function.
		 * @return {Function} the callback function.
		 */
		callback: function( funcs ) {

			//args that should be curried
			var args = jQuery.makeArray(arguments),
				self;

			funcs = args.shift();

			if (!jQuery.isArray(funcs) ) {
				funcs = [funcs];
			}

			self = this;
			
			return function class_cb() {
				var cur = args.concat(jQuery.makeArray(arguments)),
					isString, 
					length = funcs.length,
					f = 0,
					func;

				for (; f < length; f++ ) {
					func = funcs[f];
					if (!func ) {
						continue;
					}

					isString = typeof func == "string";
					if ( isString && self._set_called ) {
						self.called = func;
					}
					cur = (isString ? self[func] : func).apply(self, cur || []);
					if ( f < length - 1 ) {
						cur = !jQuery.isArray(cur) || cur._use_call ? [cur] : cur
					}
				}
				return cur;
			}
		},
		/**
		 *   @function getObject 
		 *   Gets an object from a String.
		 *   If the object or namespaces the string represent do not
		 *   exist it will create them.  
		 *   @codestart
		 *   Foo = {Bar: {Zar: {"Ted"}}}
		 *   $.Class.getobject("Foo.Bar.Zar") //-> "Ted"
		 *   @codeend
		 *   @param {String} objectName the object you want to get
		 *   @param {Object} [current=window] the object you want to look in.
		 *   @return {Object} the object you are looking for.
		 */
		getObject: function( objectName, current ) {
			var current = current || window,
				parts = objectName ? objectName.split(/\./) : [],
				i = 0;
			for (; i < parts.length; i++ ) {
				current = current[parts[i]] || (current[parts[i]] = {})
			}
			return current;
		},
		/**
		 * @function newInstance
		 * Creates a new instance of the class.  This method is useful for creating new instances
		 * with arbitrary parameters.
		 * <h3>Example</h3>
		 * @codestart
		 * $.Class.extend("MyClass",{},{})
		 * var mc = MyClass.newInstance.apply(null, new Array(parseInt(Math.random()*10,10))
		 * @codeend
		 * @return {class} instance of the class
		 */
		newInstance: function() {
			var inst = this.rawInstance(),
				args;
			if ( inst.setup ) {
				args = inst.setup.apply(inst, arguments);
			}
			if ( inst.init ) {
				inst.init.apply(inst, $.isArray(args) ? args : arguments);
			}
			return inst;
		},
		/**
		 * Copy and overwrite options from old class
		 * @param {Object} oldClass
		 * @param {String} fullName
		 * @param {Object} staticProps
		 * @param {Object} protoProps
		 */
		setup: function( oldClass, fullName ) {
			this.defaults = $.extend(true, {}, oldClass.defaults, this.defaults);
			return arguments;
		},
		rawInstance: function() {
			initializing = true;
			var inst = new this();
			initializing = false;
			return inst;
		},
		/**
		 * Extends a class with new static and prototype functions.  There are a variety of ways
		 * to use extend:
		 * @codestart
		 * //with className, static and prototype functions
		 * $.Class.extend('Task',{ STATIC },{ PROTOTYPE })
		 * //with just classname and prototype functions
		 * $.Class.extend('Task',{ PROTOTYPE })
		 * //With just a className
		 * $.Class.extend('Task')
		 * @codeend
		 * @param {String} [fullName]  the classes name (used for classes w/ introspection)
		 * @param {Object} [klass]  the new classes static/class functions
		 * @param {Object} [proto]  the new classes prototype functions
		 * @return {jQuery.Class} returns the new class
		 */
		extend: function( fullName, klass, proto ) {
			// figure out what was passed
			if ( typeof fullName != 'string' ) {
				proto = klass;
				klass = fullName;
				fullName = null;
			}
			if (!proto ) {
				proto = klass;
				klass = null;
			}

			proto = proto || {};
			var _super_class = this,
				_super = this.prototype,
				name, shortName, namespace, prototype;

			// Instantiate a base class (but only create the instance,
			// don't run the init constructor)
			initializing = true;
			prototype = new this();
			initializing = false;
			// Copy the properties over onto the new prototype
			inheritProps(proto, _super, prototype);

			// The dummy class constructor

			function Class() {
				// All construction is actually done in the init method
				if ( initializing ) return;

				if ( this.constructor !== Class && arguments.length ) { //we are being called w/o new
					return arguments.callee.extend.apply(arguments.callee, arguments)
				} else { //we are being called w/ new
					return this.Class.newInstance.apply(this.Class, arguments)
				}
			}
			// Copy old stuff onto class
			for ( name in this ) {
				if ( this.hasOwnProperty(name) && $.inArray(name, ['prototype', 'defaults', 'getObject']) == -1 ) {
					Class[name] = this[name];
				}
			}

			// do static inheritance
			inheritProps(klass, this, Class);

			// do namespace stuff
			if ( fullName ) {

				var parts = fullName.split(/\./),
					shortName = parts.pop(),
					current = $.Class.getObject(parts.join('.')),
					namespace = current;

				
				current[shortName] = Class;
			}

			// set things that can't be overwritten
			$.extend(Class, {
				prototype: prototype,
				namespace: namespace,
				shortName: shortName,
				constructor: Class,
				fullName: fullName
			});

			//make sure our prototype looks nice
			Class.prototype.Class = Class.prototype.constructor = Class;


			/**
			 * @attribute fullName 
			 * The full name of the class, including namespace, provided for introspection purposes.
			 * @codestart
			 * $.Class.extend("MyOrg.MyClass",{},{})
			 * MyOrg.MyClass.shortName //-> 'MyClass'
			 * MyOrg.MyClass.fullName //->  'MyOrg.MyClass'
			 * @codeend
			 */

			var args = Class.setup.apply(Class, [_super_class].concat($.makeArray(arguments)));

			if ( Class.init ) {
				Class.init.apply(Class, args || []);
			}

			/* @Prototype*/
			return Class;
			/** 
			 * @function setup
			 * Called with the same arguments as new Class(arguments ...) when a new instance is created.
			 * @codestart
			 * $.Class.extend("MyClass",
			 * {
			 *    setup: function( val ) {
			 *       this.val = val;
			 *    }
			 * })
			 * var mc = new MyClass("Check Check")
			 * mc.val //-> 'Check Check'
			 * @codeend
			 * 
			 * <div class='whisper'>PRO TIP: 
			 * Setup functions are used to normalize constructor arguments and provide a place for
			 * setup code that extending classes don't have to remember to call _super to
			 * run.
			 * </div>
			 * 
			 * @return {Array|undefined} If an array is return, [jQuery.Class.prototype.init] is 
			 * called with those arguments; otherwise, the original arguments are used.
			 */
			//break up
			/** 
			 * @function init
			 * Called with the same arguments as new Class(arguments ...) when a new instance is created.
			 * @codestart
			 * $.Class.extend("MyClass",
			 * {
			 *    init: function( val ) {
			 *       this.val = val;
			 *    }
			 * })
			 * var mc = new MyClass("Check Check")
			 * mc.val //-> 'Check Check'
			 * @codeend
			 */
			//Breaks up code
			/**
			 * @attribute Class
			 * References the static properties of the instance's class.
			 * <h3>Quick Example</h3>
			 * @codestart
			 * // a class with a static classProperty property
			 * $.Class.extend("MyClass", {classProperty : true}, {});
			 * 
			 * // a new instance of myClass
			 * var mc1 = new MyClass();
			 * 
			 * //
			 * mc1.Class.classProperty = false;
			 * 
			 * // creates a new MyClass
			 * var mc2 = new mc.Class();
			 * @codeend
			 * Getting static properties via the Class property, such as it's 
			 * [jQuery.Class.static.fullName fullName] is very common.
			 */
		}

	})





	jQuery.Class.prototype.
	/**
	 * @function callback
	 * Returns a callback function.  This does the same thing as and is described better in [jQuery.Class.static.callback].
	 * The only difference is this callback works
	 * on a instance instead of a class.
	 * @param {String|Array} fname If a string, it represents the function to be called.  
	 * If it is an array, it will call each function in order and pass the return value of the prior function to the
	 * next function.
	 * @return {Function} the callback function
	 */
	callback = jQuery.Class.callback;


})(jQuery);

//jquery.lang.js

(function( $ ) {
	// Several of the methods in this plugin use code adapated from Prototype
	//  Prototype JavaScript framework, version 1.6.0.1
	//  (c) 2005-2007 Sam Stephenson
	var regs = {
		undHash: /_|-/,
		colons: /::/,
		words: /([A-Z]+)([A-Z][a-z])/g,
		lowerUpper: /([a-z\d])([A-Z])/g,
		dash: /([a-z\d])([A-Z])/g,
		replacer: /\{([^\}]+)\}/g
	},
	getObject = function( objectName, current, remove) {
		var current = current || window,
			parts = objectName ? objectName.split(/\./) : [],
			ret,
			i = 0;
		for (; i < parts.length-1 && current; i++ ) {
			current = current[parts[i]]
		}
		ret = current[parts[i]];
		if(remove){
			delete current[parts[i]];
		}
		return ret;
	};

	/** 
	 * @class jQuery.String
	 */
	var str = ($.String =
	{
		/**
		 * @function strip
		 * @param {String} s returns a string with leading and trailing whitespace removed.
		 */
		strip: function( string ) {
			return string.replace(/^\s+/, '').replace(/\s+$/, '');
		},
		/**
		 * Capitalizes a string
		 * @param {String} s the string to be lowercased.
		 * @return {String} a string with the first character capitalized, and everything else lowercased
		 */
		capitalize: function( s, cache ) {
			return s.charAt(0).toUpperCase() + s.substr(1);
		},

		/**
		 * Returns if string ends with another string
		 * @param {String} s String that is being scanned
		 * @param {String} pattern What the string might end with
		 * @return {Boolean} true if the string ends wtih pattern, false if otherwise
		 */
		endsWith: function(){}