/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IRollOverModel.as
 * org.apache.royale.core.IRollOverModel
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IRollOverModel');
/* Royale Dependency List: */

goog.require('org.apache.royale.core.IBeadModel');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 * @extends {org.apache.royale.core.IBeadModel}
 */
org.apache.royale.core.IRollOverModel = function() {
};
/**  * @type {number}
 */org.apache.royale.core.IRollOverModel.prototype.rollOverIndex;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IRollOverModel.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IRollOverModel', qName: 'org.apache.royale.core.IRollOverModel', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IBeadModel] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IRollOverModel.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'rollOverIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.royale.core.IRollOverModel'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IRollOverModel.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IRollOverModel.js.map
