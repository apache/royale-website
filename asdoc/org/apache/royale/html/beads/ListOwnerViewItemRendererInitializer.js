/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/ListOwnerViewItemRendererInitializer.as
 * org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer');
/* Royale Dependency List: org.apache.royale.core.IIndexedItemRenderer,org.apache.royale.core.IItemRendererOwnerView,org.apache.royale.core.IOwnerViewItemRenderer,org.apache.royale.core.IStrand,org.apache.royale.core.IStrandWithModelView,org.apache.royale.core.ItemRendererOwnerViewBead,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.html.beads.ListItemRendererInitializer');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.html.beads.ListItemRendererInitializer}
 */
org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer = function() {
  org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer, org.apache.royale.html.beads.ListItemRendererInitializer);


/**
 * @protected
 * @type {org.apache.royale.core.IItemRendererOwnerView}
 */
org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.prototype.ownerView;


/**
 *  @asprivate
 *  @royaleignorecoercion org.apache.royale.core.HTMLElementWrapper
 * @override
 */
org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.prototype.initializeIndexedItemRenderer = function(ir, data, index) {
  org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.superClass_.initializeIndexedItemRenderer.apply(this, [ir, data, index]);
  if (this.ownerView) {
    if (org.apache.royale.utils.Language.is(ir, org.apache.royale.core.IOwnerViewItemRenderer))
      org.apache.royale.utils.Language.as(ir, org.apache.royale.core.IOwnerViewItemRenderer).itemRendererOwnerView = this.ownerView; else {
      ir.addBead(new org.apache.royale.core.ItemRendererOwnerViewBead(this.ownerView));
    }
  }
};


org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.prototype.set__strand = function(value) {
  org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.superClass_.set__strand.apply(this, [value]);
  this.ownerView = org.apache.royale.utils.Language.as(org.apache.royale.utils.Language.as(this._strand, org.apache.royale.core.IStrandWithModelView).view, org.apache.royale.core.IItemRendererOwnerView);
};


Object.defineProperties(org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.prototype, /** @lends {org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListOwnerViewItemRendererInitializer', qName: 'org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer'}
      };
    },
    methods: function () {
      return {
        'ListOwnerViewItemRendererInitializer': { type: '', declaredBy: 'org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer'},
        'initializeIndexedItemRenderer': { type: 'void', declaredBy: 'org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer', parameters: function () { return [ 'org.apache.royale.core.IIndexedItemRenderer', false ,'Object', false ,'int', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.ListOwnerViewItemRendererInitializer.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ListOwnerViewItemRendererInitializer.js.map
