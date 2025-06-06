/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IScrollingViewport.as
 * org.apache.royale.core.IScrollingViewport
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IScrollingViewport');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IViewport');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.core.IViewport}
 * @extends {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.core.IScrollingViewport = function() {
};
/**  * @type {number}
 */org.apache.royale.core.IScrollingViewport.prototype.verticalScrollPosition;
/**  * @type {number}
 */org.apache.royale.core.IScrollingViewport.prototype.horizontalScrollPosition;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IScrollingViewport.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IScrollingViewport', qName: 'org.apache.royale.core.IScrollingViewport', kind: 'interface' }], interfaces: [org.apache.royale.core.IViewport, org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IScrollingViewport.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'verticalScrollPosition': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.core.IScrollingViewport'},
        'horizontalScrollPosition': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.royale.core.IScrollingViewport'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IScrollingViewport.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IScrollingViewport.js.map
