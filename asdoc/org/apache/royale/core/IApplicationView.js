/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IApplicationView.as
 * org.apache.royale.core.IApplicationView
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IApplicationView');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IStatesObject');
goog.require('org.apache.royale.core.IUIBase');



/**
 * @interface
 * @extends {org.apache.royale.core.IUIBase}
 * @extends {org.apache.royale.core.IStatesObject}
 */
org.apache.royale.core.IApplicationView = function() {
};
/**  * @type {Object}
 */org.apache.royale.core.IApplicationView.prototype.applicationModel;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IApplicationView.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IApplicationView', qName: 'org.apache.royale.core.IApplicationView', kind: 'interface' }], interfaces: [org.apache.royale.core.IUIBase, org.apache.royale.core.IStatesObject] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IApplicationView.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'applicationModel': { type: 'Object', access: 'writeonly', declaredBy: 'org.apache.royale.core.IApplicationView'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IApplicationView.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IApplicationView.js.map
