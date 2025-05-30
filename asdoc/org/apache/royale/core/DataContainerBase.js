/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/DataContainerBase.as
 * org.apache.royale.core.DataContainerBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.DataContainerBase');
/* Royale Dependency List: org.apache.royale.core.IFactory,org.apache.royale.core.ValuesManager,org.apache.royale.utils.sendEvent,XML*/

goog.require('org.apache.royale.core.ContainerBase');
goog.require('org.apache.royale.core.IItemRendererProvider');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.ContainerBase}
 * @implements {org.apache.royale.core.IItemRendererProvider}
 */
org.apache.royale.core.DataContainerBase = function() {
  org.apache.royale.core.DataContainerBase.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.DataContainerBase, org.apache.royale.core.ContainerBase);


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.core.DataContainerBase.prototype.org_apache_royale_core_DataContainerBase__DCinitialized;


/**
 * @asprivate
 * @override
 */
org.apache.royale.core.DataContainerBase.prototype.addedToParent = function() {
  if (!this.org_apache_royale_core_DataContainerBase__DCinitialized) {
    org.apache.royale.core.ValuesManager.valuesImpl.init(this);
    this.org_apache_royale_core_DataContainerBase__DCinitialized = true;
  }
  org.apache.royale.core.DataContainerBase.superClass_.addedToParent.apply(this);
  org.apache.royale.utils.sendEvent(this, "initComplete");
};


/**
 * @private
 * @type {org.apache.royale.core.IFactory}
 */
org.apache.royale.core.DataContainerBase.prototype.org_apache_royale_core_DataContainerBase__itemRenderer = null;


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IFactory}
 */
org.apache.royale.core.DataContainerBase.prototype.itemRenderer;


org.apache.royale.core.DataContainerBase.prototype.get__itemRenderer = function() {
  return this.org_apache_royale_core_DataContainerBase__itemRenderer;
};


org.apache.royale.core.DataContainerBase.prototype.set__itemRenderer = function(value) {
  this.org_apache_royale_core_DataContainerBase__itemRenderer = value;
};


Object.defineProperties(org.apache.royale.core.DataContainerBase.prototype, /** @lends {org.apache.royale.core.DataContainerBase.prototype} */ {
/**
 * @type {org.apache.royale.core.IFactory}
 */
itemRenderer: {
get: org.apache.royale.core.DataContainerBase.prototype.get__itemRenderer,
set: org.apache.royale.core.DataContainerBase.prototype.set__itemRenderer}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.DataContainerBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DataContainerBase', qName: 'org.apache.royale.core.DataContainerBase', kind: 'class' }], interfaces: [org.apache.royale.core.IItemRendererProvider] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.DataContainerBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'itemRenderer': { type: 'org.apache.royale.core.IFactory', access: 'readwrite', declaredBy: 'org.apache.royale.core.DataContainerBase'}
      };
    },
    methods: function () {
      return {
        'DataContainerBase': { type: '', declaredBy: 'org.apache.royale.core.DataContainerBase'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.core.DataContainerBase'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.DataContainerBase.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./DataContainerBase.js.map
