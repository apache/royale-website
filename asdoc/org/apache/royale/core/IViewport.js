/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IViewport.as
 * org.apache.royale.core.IViewport
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IViewport');
/* Royale Dependency List: org.apache.royale.core.IUIBase,org.apache.royale.geom.Size*/

goog.require('org.apache.royale.core.IBead');



/**
 * @interface
 * @extends {org.apache.royale.core.IBead}
 */
org.apache.royale.core.IViewport = function() {
};
/**  * @type {org.apache.royale.core.IUIBase}
 */org.apache.royale.core.IViewport.prototype.contentView;
/**
 * Sets the upper left position of the viewport
 * @asparam x The left position.
 * @asparam y The top position.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} x
 * @param {number} y
 */
org.apache.royale.core.IViewport.prototype.setPosition = function(x, y) {
};
/**
 * Size the content area based on any visible scrolling controls and
 * the given width and height.  If width and/or height is NaN
 * then that dimension is being sized to content.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} width
 * @param {number} height
 */
org.apache.royale.core.IViewport.prototype.layoutViewportBeforeContentLayout = function(width, height) {
};
/**
 * This method is invoked after layout is complete.  If width and/or height is
 * sized to content, the viewport should determine that size and set the
 * content area size appropriately, and display any scrolling controls
 * before returning the resulting size of the viewport (which means the
 * area used up by both content area and scrolling controls).
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.geom.Size} contentSize
 */
org.apache.royale.core.IViewport.prototype.layoutViewportAfterContentLayout = function(contentSize) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IViewport.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IViewport', qName: 'org.apache.royale.core.IViewport', kind: 'interface' }], interfaces: [org.apache.royale.core.IBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IViewport.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'contentView': { type: 'org.apache.royale.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.royale.core.IViewport'}
      };
    },
    methods: function () {
      return {
        'setPosition': { type: 'void', declaredBy: 'org.apache.royale.core.IViewport', parameters: function () { return [ 'Number', false ,'Number', false ]; }},
        'layoutViewportBeforeContentLayout': { type: 'void', declaredBy: 'org.apache.royale.core.IViewport', parameters: function () { return [ 'Number', false ,'Number', false ]; }},
        'layoutViewportAfterContentLayout': { type: 'void', declaredBy: 'org.apache.royale.core.IViewport', parameters: function () { return [ 'org.apache.royale.geom.Size', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IViewport.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IViewport.js.map
