/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/SelectableItemRendererClassFactory.as
 * org.apache.royale.core.SelectableItemRendererClassFactory
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.SelectableItemRendererClassFactory');
/* Royale Dependency List: org.apache.royale.core.IItemRenderer,org.apache.royale.core.IStrand,org.apache.royale.core.ValuesManager*/

goog.require('org.apache.royale.core.ItemRendererClassFactory');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.ItemRendererClassFactory}
 */
org.apache.royale.core.SelectableItemRendererClassFactory = function() {
  org.apache.royale.core.SelectableItemRendererClassFactory.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.SelectableItemRendererClassFactory, org.apache.royale.core.ItemRendererClassFactory);


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.SelectableItemRendererClassFactory.prototype.org_apache_royale_core_SelectableItemRendererClassFactory_selectableBeadClass;


/**
 *  @copy org.apache.royale.core.IItemRendererClassFactory#createItemRenderer()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @override
 */
org.apache.royale.core.SelectableItemRendererClassFactory.prototype.createItemRenderer = function() {
  var /** @type {org.apache.royale.core.IItemRenderer} */ ir = org.apache.royale.core.SelectableItemRendererClassFactory.superClass_.createItemRenderer.apply(this);
  ir.addBead(new this.org_apache_royale_core_SelectableItemRendererClassFactory_selectableBeadClass());
  return ir;
};


org.apache.royale.core.SelectableItemRendererClassFactory.prototype.set__strand = function(value) {
  org.apache.royale.core.SelectableItemRendererClassFactory.superClass_.set__strand.apply(this, [value]);
  this.org_apache_royale_core_SelectableItemRendererClassFactory_selectableBeadClass =  /** @type {Object|null} */ (org.apache.royale.core.ValuesManager.valuesImpl.getValue(value, "iSelectableItemRenderer"));
};


Object.defineProperties(org.apache.royale.core.SelectableItemRendererClassFactory.prototype, /** @lends {org.apache.royale.core.SelectableItemRendererClassFactory.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.core.SelectableItemRendererClassFactory.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.SelectableItemRendererClassFactory.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SelectableItemRendererClassFactory', qName: 'org.apache.royale.core.SelectableItemRendererClassFactory', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.SelectableItemRendererClassFactory.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.core.SelectableItemRendererClassFactory'}
      };
    },
    methods: function () {
      return {
        'SelectableItemRendererClassFactory': { type: '', declaredBy: 'org.apache.royale.core.SelectableItemRendererClassFactory'},
        'createItemRenderer': { type: 'org.apache.royale.core.IItemRenderer', declaredBy: 'org.apache.royale.core.SelectableItemRendererClassFactory'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.SelectableItemRendererClassFactory.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./SelectableItemRendererClassFactory.js.map
