/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/layouts/OneFlexibleChildHorizontalLayoutForOverflow.as
 * org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow');
/* Royale Dependency List: org.apache.royale.core.ILayoutChild,org.apache.royale.core.ILayoutView,org.apache.royale.core.IStrand,org.apache.royale.core.UIBase,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.core.LayoutBase');
goog.require('org.apache.royale.core.IDocument');
goog.require('org.apache.royale.html.beads.layouts.IOneFlexibleChildLayout');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.LayoutBase}
 * @implements {org.apache.royale.html.beads.layouts.IOneFlexibleChildLayout}
 * @implements {org.apache.royale.core.IDocument}
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow = function() {
  org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow, org.apache.royale.core.LayoutBase);


/**
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.org_apache_royale_html_beads_layouts_OneFlexibleChildHorizontalLayoutForOverflow_parentSizeChangedHandler = function(event) {
  this.performLayout();
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.org_apache_royale_html_beads_layouts_OneFlexibleChildHorizontalLayoutForOverflow__flexibleChild;


/**
 * @protected
 * @type {org.apache.royale.core.ILayoutChild}
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.actualChild;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.org_apache_royale_html_beads_layouts_OneFlexibleChildHorizontalLayoutForOverflow_document;


/**
 * @copy org.apache.royale.core.IBeadLayout#layout
 * @override
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.layout = function() {
  if (this.flexibleChild == null)
    return false;
  var /** @type {org.apache.royale.core.ILayoutView} */ contentView = this.layoutView;
  this.actualChild = this.org_apache_royale_html_beads_layouts_OneFlexibleChildHorizontalLayoutForOverflow_document[this.flexibleChild];
  var /** @type {number} */ n = contentView.numElements;
  if (n == 0)
    return false;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.royale.core.UIBase} */ child = org.apache.royale.utils.Language.as(contentView.getElementAt(i), org.apache.royale.core.UIBase);
    if (child.element.style["display"] != "inline-flex" && child.element.style["display"] != "none")
      child.element.style["display"] = "inline-block";
  }
  var /** @type {number} */ w = this.host.width - 1;
  for (i = 0; i < n; i++) {
    child = org.apache.royale.utils.Language.as(contentView.getElementAt(i), org.apache.royale.core.UIBase);
    if (child != this.actualChild)
      w -= child.width;
  }
  this.actualChild.width = w;
  return true;
};


/**
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.org_apache_royale_html_beads_layouts_OneFlexibleChildHorizontalLayoutForOverflow_document = document;
};


org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.set__strand = function(value) {
  org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.superClass_.set__strand.apply(this, [value]);
  org.apache.royale.utils.Language.as(this.host.parent, org.apache.royale.events.IEventDispatcher).addEventListener("sizeChanged", org.apache.royale.utils.Language.closure(this.org_apache_royale_html_beads_layouts_OneFlexibleChildHorizontalLayoutForOverflow_parentSizeChangedHandler, this, 'org_apache_royale_html_beads_layouts_OneFlexibleChildHorizontalLayoutForOverflow_parentSizeChangedHandler'));
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.flexibleChild;


org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.get__flexibleChild = function() {
  return this.org_apache_royale_html_beads_layouts_OneFlexibleChildHorizontalLayoutForOverflow__flexibleChild;
};


org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.set__flexibleChild = function(value) {
  this.org_apache_royale_html_beads_layouts_OneFlexibleChildHorizontalLayoutForOverflow__flexibleChild = value;
};


Object.defineProperties(org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype, /** @lends {org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.set__strand},
/**
 * @type {string}
 */
flexibleChild: {
get: org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.get__flexibleChild,
set: org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.set__flexibleChild}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'OneFlexibleChildHorizontalLayoutForOverflow', qName: 'org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow', kind: 'class' }], interfaces: [org.apache.royale.html.beads.layouts.IOneFlexibleChildLayout, org.apache.royale.core.IDocument] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow'},
        'flexibleChild': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow'}
      };
    },
    methods: function () {
      return {
        'OneFlexibleChildHorizontalLayoutForOverflow': { type: '', declaredBy: 'org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow'},
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow', parameters: function () { return [ 'Object', false ,'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.layouts.OneFlexibleChildHorizontalLayoutForOverflow.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./OneFlexibleChildHorizontalLayoutForOverflow.js.map
