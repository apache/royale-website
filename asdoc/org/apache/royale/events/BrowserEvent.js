/**
 * Generated by Apache Royale Compiler from org/apache/royale/events/BrowserEvent.as
 * org.apache.royale.events.BrowserEvent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.events.BrowserEvent');
/* Royale Dependency List: org.apache.royale.events.getTargetWrapper*/

goog.require('org.apache.royale.events.IBrowserEvent');



/**
 * @constructor
 * @implements {org.apache.royale.events.IBrowserEvent}
 */
org.apache.royale.events.BrowserEvent = function() {
};


/**
 * @type {Object}
 */
org.apache.royale.events.BrowserEvent.prototype.nativeEvent;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.events.BrowserEvent.prototype.org_apache_royale_events_BrowserEvent_wrappedEvent;


/**
 * @param {goog.events.BrowserEvent} event
 */
org.apache.royale.events.BrowserEvent.prototype.wrapEvent = function(event) {
  this.org_apache_royale_events_BrowserEvent_wrappedEvent = event;
  this.nativeEvent = event.getBrowserEvent();
};


/**
 * The underlying browser event object.
 * (for debugging purposes)
 *
 * @asreturn The underlying browser event object.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @return {Object}
 */
org.apache.royale.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.org_apache_royale_events_BrowserEvent_wrappedEvent.getBrowserEvent();
};


/**
 * Tests to see which button was pressed during the event. This is really only
 * useful in IE and Gecko browsers. And in IE, it's only useful for
 * mousedown/mouseup events, because click only fires for the left mouse button.
 *
 * Safari 2 only reports the left button being clicked, and uses the value '1'
 * instead of 0. Opera only reports a mousedown event for the middle button, and
 * no mouse events for the right button. Opera has default behavior for left and
 * middle click that can only be overridden via a configuration setting.
 *
 * There's a nice table of this mess at http://www.unixpapa.com/js/mouse.html.
 *
 * @asparam button The button to test for.
 * @asreturn True if button was pressed.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @param {number} button
 * @return {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.isButton = function(button) {
  return !!(this.org_apache_royale_events_BrowserEvent_wrappedEvent.isButton(button));
};


/**
 * Whether this has an "action"-producing mouse button.
 *
 * By definition, this includes left-click on windows/linux, and left-click
 * without the ctrl key on Macs.
 *
 * @asreturn The result.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 * @return {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return !!(this.org_apache_royale_events_BrowserEvent_wrappedEvent.isMouseActionButton());
};


/**
 * Whether the default action has been prevented.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 */
org.apache.royale.events.BrowserEvent.prototype.preventDefault = function() {
  this.org_apache_royale_events_BrowserEvent_wrappedEvent.preventDefault();
};


/**
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 */
org.apache.royale.events.BrowserEvent.prototype.stopImmediatePropagation = function() {
  this.org_apache_royale_events_BrowserEvent_wrappedEvent.getBrowserEvent().stopImmediatePropagation();
  this.org_apache_royale_events_BrowserEvent_wrappedEvent.stopPropagation();
};


/**
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion Royale 0.0
 */
org.apache.royale.events.BrowserEvent.prototype.stopPropagation = function() {
  this.org_apache_royale_events_BrowserEvent_wrappedEvent.stopPropagation();
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.org_apache_royale_events_BrowserEvent__buttons = -1;


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.altKey;


org.apache.royale.events.BrowserEvent.prototype.get__altKey = function() {
  return !!(this.org_apache_royale_events_BrowserEvent_wrappedEvent.altKey);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.button;


org.apache.royale.events.BrowserEvent.prototype.get__button = function() {
  return (this.org_apache_royale_events_BrowserEvent_wrappedEvent.button) >>> 0;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.charCode;


org.apache.royale.events.BrowserEvent.prototype.get__charCode = function() {
  return (this.org_apache_royale_events_BrowserEvent_wrappedEvent.charCode) >>> 0;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.clientX;


org.apache.royale.events.BrowserEvent.prototype.get__clientX = function() {
  return Number(this.org_apache_royale_events_BrowserEvent_wrappedEvent.clientX);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.localX;


org.apache.royale.events.BrowserEvent.prototype.get__localX = function() {
  return this.clientX;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.clientY;


org.apache.royale.events.BrowserEvent.prototype.get__clientY = function() {
  return Number(this.org_apache_royale_events_BrowserEvent_wrappedEvent.clientY);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.localY;


org.apache.royale.events.BrowserEvent.prototype.get__localY = function() {
  return this.clientY;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.ctrlKey;


org.apache.royale.events.BrowserEvent.prototype.get__ctrlKey = function() {
  return !!(this.org_apache_royale_events_BrowserEvent_wrappedEvent.ctrlKey);
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.events.BrowserEvent.prototype.currentTarget;


org.apache.royale.events.BrowserEvent.prototype.get__currentTarget = function() {
  return org.apache.royale.events.getTargetWrapper(this.org_apache_royale_events_BrowserEvent_wrappedEvent.currentTarget);
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.defaultPrevented;


org.apache.royale.events.BrowserEvent.prototype.get__defaultPrevented = function() {
  return !!(this.org_apache_royale_events_BrowserEvent_wrappedEvent.defaultPrevented);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.keyCode;


org.apache.royale.events.BrowserEvent.prototype.get__keyCode = function() {
  return (this.org_apache_royale_events_BrowserEvent_wrappedEvent.keyCode) >>> 0;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.metaKey;


org.apache.royale.events.BrowserEvent.prototype.get__metaKey = function() {
  return !!(this.org_apache_royale_events_BrowserEvent_wrappedEvent.metaKey);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.offsetX;


org.apache.royale.events.BrowserEvent.prototype.get__offsetX = function() {
  return Number(this.org_apache_royale_events_BrowserEvent_wrappedEvent.offsetX);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.offsetY;


org.apache.royale.events.BrowserEvent.prototype.get__offsetY = function() {
  return Number(this.org_apache_royale_events_BrowserEvent_wrappedEvent.offsetY);
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.platformModifierKey;


org.apache.royale.events.BrowserEvent.prototype.get__platformModifierKey = function() {
  return this.platformModifierKey;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.events.BrowserEvent.prototype.relatedTarget;


org.apache.royale.events.BrowserEvent.prototype.get__relatedTarget = function() {
  return org.apache.royale.events.getTargetWrapper(this.org_apache_royale_events_BrowserEvent_wrappedEvent.relatedTarget);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.screenX;


org.apache.royale.events.BrowserEvent.prototype.get__screenX = function() {
  return Number(this.org_apache_royale_events_BrowserEvent_wrappedEvent.screenX);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.screenY;


org.apache.royale.events.BrowserEvent.prototype.get__screenY = function() {
  return Number(this.org_apache_royale_events_BrowserEvent_wrappedEvent.screenY);
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.shiftKey;


org.apache.royale.events.BrowserEvent.prototype.get__shiftKey = function() {
  return !!(this.org_apache_royale_events_BrowserEvent_wrappedEvent.shiftKey);
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.events.BrowserEvent.prototype.state;


org.apache.royale.events.BrowserEvent.prototype.get__state = function() {
  return this.org_apache_royale_events_BrowserEvent_wrappedEvent.state;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.events.BrowserEvent.prototype.target;


org.apache.royale.events.BrowserEvent.prototype.get__target = function() {
  return org.apache.royale.events.getTargetWrapper(this.org_apache_royale_events_BrowserEvent_wrappedEvent.target);
};


/**
 * @nocollapse
 * @export
 * @type {Date}
 */
org.apache.royale.events.BrowserEvent.prototype.timestamp;


org.apache.royale.events.BrowserEvent.prototype.get__timestamp = function() {
  return this.org_apache_royale_events_BrowserEvent_wrappedEvent.timestamp;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.events.BrowserEvent.prototype.type;


org.apache.royale.events.BrowserEvent.prototype.get__type = function() {
  return org.apache.royale.utils.Language.string(this.org_apache_royale_events_BrowserEvent_wrappedEvent.type);
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.events.BrowserEvent.prototype.buttonDown;


org.apache.royale.events.BrowserEvent.prototype.get__buttonDown = function() {
  if (this.org_apache_royale_events_BrowserEvent__buttons > -1)
    return this.org_apache_royale_events_BrowserEvent__buttons == 1;
  var /** @type {*} */ ev = this.org_apache_royale_events_BrowserEvent_wrappedEvent.getBrowserEvent();
  if ('buttons' in ev)
    return ev["buttons"] == 1;
  return ev["which"] == 1;
};


org.apache.royale.events.BrowserEvent.prototype.set__buttonDown = function(value) {
  this.org_apache_royale_events_BrowserEvent__buttons = (value ? 1 : 0) >> 0;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.buttons;


org.apache.royale.events.BrowserEvent.prototype.get__buttons = function() {
  return (this.org_apache_royale_events_BrowserEvent_wrappedEvent.getBrowserEvent().buttons) >> 0;
};


Object.defineProperties(org.apache.royale.events.BrowserEvent.prototype, /** @lends {org.apache.royale.events.BrowserEvent.prototype} */ {
/**
 * @type {boolean}
 */
altKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__altKey},
/**
 * @type {number}
 */
button: {
get: org.apache.royale.events.BrowserEvent.prototype.get__button},
/**
 * @type {number}
 */
charCode: {
get: org.apache.royale.events.BrowserEvent.prototype.get__charCode},
/**
 * @type {number}
 */
clientX: {
get: org.apache.royale.events.BrowserEvent.prototype.get__clientX},
/**
 * @type {number}
 */
localX: {
get: org.apache.royale.events.BrowserEvent.prototype.get__localX},
/**
 * @type {number}
 */
clientY: {
get: org.apache.royale.events.BrowserEvent.prototype.get__clientY},
/**
 * @type {number}
 */
localY: {
get: org.apache.royale.events.BrowserEvent.prototype.get__localY},
/**
 * @type {boolean}
 */
ctrlKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__ctrlKey},
/**
 * @type {Object}
 */
currentTarget: {
get: org.apache.royale.events.BrowserEvent.prototype.get__currentTarget},
/**
 * @type {boolean}
 */
defaultPrevented: {
get: org.apache.royale.events.BrowserEvent.prototype.get__defaultPrevented},
/**
 * @type {number}
 */
keyCode: {
get: org.apache.royale.events.BrowserEvent.prototype.get__keyCode},
/**
 * @type {boolean}
 */
metaKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__metaKey},
/**
 * @type {number}
 */
offsetX: {
get: org.apache.royale.events.BrowserEvent.prototype.get__offsetX},
/**
 * @type {number}
 */
offsetY: {
get: org.apache.royale.events.BrowserEvent.prototype.get__offsetY},
/**
 * @type {boolean}
 */
platformModifierKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__platformModifierKey},
/**
 * @type {Object}
 */
relatedTarget: {
get: org.apache.royale.events.BrowserEvent.prototype.get__relatedTarget},
/**
 * @type {number}
 */
screenX: {
get: org.apache.royale.events.BrowserEvent.prototype.get__screenX},
/**
 * @type {number}
 */
screenY: {
get: org.apache.royale.events.BrowserEvent.prototype.get__screenY},
/**
 * @type {boolean}
 */
shiftKey: {
get: org.apache.royale.events.BrowserEvent.prototype.get__shiftKey},
/**
 * @type {Object}
 */
state: {
get: org.apache.royale.events.BrowserEvent.prototype.get__state},
/**
 * @type {Object}
 */
target: {
get: org.apache.royale.events.BrowserEvent.prototype.get__target},
/**
 * @type {Date}
 */
timestamp: {
get: org.apache.royale.events.BrowserEvent.prototype.get__timestamp},
/**
 * @type {string}
 */
type: {
get: org.apache.royale.events.BrowserEvent.prototype.get__type},
/**
 * @type {boolean}
 */
buttonDown: {
get: org.apache.royale.events.BrowserEvent.prototype.get__buttonDown,
set: org.apache.royale.events.BrowserEvent.prototype.set__buttonDown},
/**
 * @type {number}
 */
buttons: {
get: org.apache.royale.events.BrowserEvent.prototype.get__buttons}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.events.BrowserEvent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'BrowserEvent', qName: 'org.apache.royale.events.BrowserEvent', kind: 'class' }], interfaces: [org.apache.royale.events.IBrowserEvent] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.events.BrowserEvent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'nativeEvent': { type: 'Object', get_set: function (/** org.apache.royale.events.BrowserEvent */ inst, /** * */ v) {return v !== undefined ? inst.nativeEvent = v : inst.nativeEvent;}}
      };
    },
    accessors: function () {
      return {
        'altKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'button': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'charCode': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'clientX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'localX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'clientY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'localY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'ctrlKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'currentTarget': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'defaultPrevented': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'keyCode': { type: 'uint', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'metaKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'offsetX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'offsetY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'platformModifierKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'relatedTarget': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'screenX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'screenY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'shiftKey': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'state': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'target': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'timestamp': { type: 'Date', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'type': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'buttonDown': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'buttons': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.events.BrowserEvent'}
      };
    },
    methods: function () {
      return {
        'wrapEvent': { type: 'void', declaredBy: 'org.apache.royale.events.BrowserEvent', parameters: function () { return [ 'goog.events.BrowserEvent', false ]; }},
        'getBrowserEvent': { type: 'Object', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'isButton': { type: 'Boolean', declaredBy: 'org.apache.royale.events.BrowserEvent', parameters: function () { return [ 'int', false ]; }},
        'isMouseActionButton': { type: 'Boolean', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'preventDefault': { type: 'void', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'stopImmediatePropagation': { type: 'void', declaredBy: 'org.apache.royale.events.BrowserEvent'},
        'stopPropagation': { type: 'void', declaredBy: 'org.apache.royale.events.BrowserEvent'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.events.BrowserEvent.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./BrowserEvent.js.map
