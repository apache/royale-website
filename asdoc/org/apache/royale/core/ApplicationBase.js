/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/ApplicationBase.as
 * org.apache.royale.core.ApplicationBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.ApplicationBase');
/* Royale Dependency List: org.apache.royale.utils.CSSUtils,org.apache.royale.utils.html.getStyle,org.apache.royale.utils.sendEvent*/

goog.require('org.apache.royale.core.HTMLElementWrapper');
goog.require('org.apache.royale.core.IFlexInfo');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.HTMLElementWrapper}
 * @implements {org.apache.royale.core.IFlexInfo}
 */
org.apache.royale.core.ApplicationBase = function() {
  org.apache.royale.core.ApplicationBase.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.ApplicationBase, org.apache.royale.core.HTMLElementWrapper);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.ApplicationBase.prototype.org_apache_royale_core_ApplicationBase__info;


/**
 *  An Object containing information generated
 *  by the compiler that is useful at startup time.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @return {Object}
 */
org.apache.royale.core.ApplicationBase.prototype.info = function() {
  return this.org_apache_royale_core_ApplicationBase__info;
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.org_apache_royale_core_ApplicationBase__width;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.org_apache_royale_core_ApplicationBase__height;


/**
 *  @copy org.apache.royale.core.ILayoutChild#setHeight
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.ApplicationBase.prototype.setHeight = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this.org_apache_royale_core_ApplicationBase__height != value) {
    this.org_apache_royale_core_ApplicationBase__height = value;
    org.apache.royale.utils.html.getStyle(this).height = value.toString() + 'px';
    if (!noEvent)
      org.apache.royale.utils.sendEvent(this, "heightChanged");
  }
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#setWidth
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.ApplicationBase.prototype.setWidth = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this.org_apache_royale_core_ApplicationBase__width != value) {
    this.org_apache_royale_core_ApplicationBase__width = value;
    org.apache.royale.utils.html.getStyle(this).width = value.toString() + 'px';
    if (!noEvent)
      org.apache.royale.utils.sendEvent(this, "widthChanged");
  }
};


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.org_apache_royale_core_ApplicationBase__explicitWidth;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.org_apache_royale_core_ApplicationBase__explicitHeight;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.org_apache_royale_core_ApplicationBase__percentWidth;


/**
 * @private
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.org_apache_royale_core_ApplicationBase__percentHeight;


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.width;


org.apache.royale.core.ApplicationBase.prototype.get__width = function() {
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = org.apache.royale.utils.html.getStyle(this).width;
  if (strpixels == null)
    pixels = NaN;
  else
    pixels = org.apache.royale.utils.CSSUtils.toNumber(strpixels, NaN);
  if (isNaN(pixels)) {
    pixels = this.element.offsetWidth;
    if (pixels === 0 && this.element.scrollWidth !== 0) {
      pixels = this.element.scrollWidth;
    }
  }
  return pixels;
};


org.apache.royale.core.ApplicationBase.prototype.set__width = function(value) {
  if (this.explicitWidth != value) {
    this.explicitWidth = value;
  }
  this.setWidth(value);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.height;


org.apache.royale.core.ApplicationBase.prototype.get__height = function() {
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = org.apache.royale.utils.html.getStyle(this).height;
  if (strpixels == null)
    pixels = NaN;
  else
    pixels = org.apache.royale.utils.CSSUtils.toNumber(strpixels, NaN);
  if (isNaN(pixels)) {
    pixels = this.element.offsetHeight;
    if (pixels === 0 && this.element.scrollHeight !== 0) {
      pixels = this.element.scrollHeight;
    }
  }
  return pixels;
};


org.apache.royale.core.ApplicationBase.prototype.set__height = function(value) {
  if (this.explicitHeight != value) {
    this.explicitHeight = value;
  }
  this.setHeight(value);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.explicitWidth;


org.apache.royale.core.ApplicationBase.prototype.get__explicitWidth = function() {
  return this.org_apache_royale_core_ApplicationBase__explicitWidth;
};


org.apache.royale.core.ApplicationBase.prototype.set__explicitWidth = function(value) {
  if (this.org_apache_royale_core_ApplicationBase__explicitWidth == value)
    return;
  if (!isNaN(value))
    this.org_apache_royale_core_ApplicationBase__percentWidth = NaN;
  this.org_apache_royale_core_ApplicationBase__explicitWidth = value;
  org.apache.royale.utils.sendEvent(this, "explicitWidthChanged");
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.explicitHeight;


org.apache.royale.core.ApplicationBase.prototype.get__explicitHeight = function() {
  return this.org_apache_royale_core_ApplicationBase__explicitHeight;
};


org.apache.royale.core.ApplicationBase.prototype.set__explicitHeight = function(value) {
  if (this.org_apache_royale_core_ApplicationBase__explicitHeight == value)
    return;
  if (!isNaN(value))
    this.org_apache_royale_core_ApplicationBase__percentHeight = NaN;
  this.org_apache_royale_core_ApplicationBase__explicitHeight = value;
  org.apache.royale.utils.sendEvent(this, "explicitHeightChanged");
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.percentWidth;


org.apache.royale.core.ApplicationBase.prototype.get__percentWidth = function() {
  return this.org_apache_royale_core_ApplicationBase__percentWidth;
};


org.apache.royale.core.ApplicationBase.prototype.set__percentWidth = function(value) {
  this.org_apache_royale_core_ApplicationBase__percentWidth = value;
  org.apache.royale.utils.html.getStyle(this).width = value.toString() + '%';
  if (!isNaN(value))
    this.org_apache_royale_core_ApplicationBase__explicitWidth = NaN;
  org.apache.royale.utils.sendEvent(this, "percentWidthChanged");
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.percentHeight;


org.apache.royale.core.ApplicationBase.prototype.get__percentHeight = function() {
  return this.org_apache_royale_core_ApplicationBase__percentHeight;
};


org.apache.royale.core.ApplicationBase.prototype.set__percentHeight = function(value) {
  this.org_apache_royale_core_ApplicationBase__percentHeight = value;
  org.apache.royale.utils.html.getStyle(this).height = value.toString() + '%';
  if (!isNaN(value))
    this.org_apache_royale_core_ApplicationBase__explicitHeight = NaN;
  org.apache.royale.utils.sendEvent(this, "percentHeightChanged");
};


Object.defineProperties(org.apache.royale.core.ApplicationBase.prototype, /** @lends {org.apache.royale.core.ApplicationBase.prototype} */ {
/**
 * @type {number}
 */
width: {
get: org.apache.royale.core.ApplicationBase.prototype.get__width,
set: org.apache.royale.core.ApplicationBase.prototype.set__width},
/**
 * @type {number}
 */
height: {
get: org.apache.royale.core.ApplicationBase.prototype.get__height,
set: org.apache.royale.core.ApplicationBase.prototype.set__height},
/**
 * @type {number}
 */
explicitWidth: {
get: org.apache.royale.core.ApplicationBase.prototype.get__explicitWidth,
set: org.apache.royale.core.ApplicationBase.prototype.set__explicitWidth},
/**
 * @type {number}
 */
explicitHeight: {
get: org.apache.royale.core.ApplicationBase.prototype.get__explicitHeight,
set: org.apache.royale.core.ApplicationBase.prototype.set__explicitHeight},
/**
 * @type {number}
 */
percentWidth: {
get: org.apache.royale.core.ApplicationBase.prototype.get__percentWidth,
set: org.apache.royale.core.ApplicationBase.prototype.set__percentWidth},
/**
 * @type {number}
 */
percentHeight: {
get: org.apache.royale.core.ApplicationBase.prototype.get__percentHeight,
set: org.apache.royale.core.ApplicationBase.prototype.set__percentHeight}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.ApplicationBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ApplicationBase', qName: 'org.apache.royale.core.ApplicationBase', kind: 'class' }], interfaces: [org.apache.royale.core.IFlexInfo] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.ApplicationBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'widthChanged' } ] } ]; }},
        'height': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'heightChanged' } ] } ]; }},
        'explicitWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'explicitHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'percentWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'percentHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.ApplicationBase'}
      };
    },
    methods: function () {
      return {
        'ApplicationBase': { type: '', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'info': { type: 'Object', declaredBy: 'org.apache.royale.core.ApplicationBase'},
        'setHeight': { type: 'void', declaredBy: 'org.apache.royale.core.ApplicationBase', parameters: function () { return [ 'Number', false ,'Boolean', true ]; }},
        'setWidth': { type: 'void', declaredBy: 'org.apache.royale.core.ApplicationBase', parameters: function () { return [ 'Number', false ,'Boolean', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.ApplicationBase.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ApplicationBase.js.map
