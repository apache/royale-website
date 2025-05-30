/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/beads/layouts/FlexibleFirstChildHorizontalLayout.as
 * org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout');
/* Royale Dependency List: org.apache.royale.core.ILayoutView,org.apache.royale.core.UIBase,XML*/

goog.require('org.apache.royale.html.beads.layouts.HorizontalLayout');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9
 * @constructor
 * @extends {org.apache.royale.html.beads.layouts.HorizontalLayout}
 */
org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout = function() {
  org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout, org.apache.royale.html.beads.layouts.HorizontalLayout);


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.org_apache_royale_html_beads_layouts_FlexibleFirstChildHorizontalLayout__maxWidth;


/**
 * @private
 * @type {number}
 */
org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.org_apache_royale_html_beads_layouts_FlexibleFirstChildHorizontalLayout__maxHeight;


/**
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @override
 */
org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.layout = function() {
  var /** @type {org.apache.royale.core.ILayoutView} */ contentView = this.layoutView;
  contentView.element.style["display"] = "flex";
  contentView.element.style["flex-flow"] = "row";
  if (!contentView.element.style["align-items"])
    contentView.element.style["align-items"] = "center";
  var /** @type {number} */ n = contentView.numElements;
  if (n == 0)
    return false;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {Object} */ child = contentView.getElementAt(i);
    child.element.style["flex-grow"] = (i == 0) ? "1" : "0";
    child.element.style["flex-shrink"] = "0";
    if (!isNaN(child.percentWidth))
      child.element.style["flex-basis"] = child.percentWidth.toString() + "%";
  }
  return true;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.maxWidth;


org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.get__maxWidth = function() {
  return this.org_apache_royale_html_beads_layouts_FlexibleFirstChildHorizontalLayout__maxWidth;
};


org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.set__maxWidth = function(value) {
  this.org_apache_royale_html_beads_layouts_FlexibleFirstChildHorizontalLayout__maxWidth = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.maxHeight;


org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.get__maxHeight = function() {
  return this.org_apache_royale_html_beads_layouts_FlexibleFirstChildHorizontalLayout__maxHeight;
};


org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.set__maxHeight = function(value) {
  this.org_apache_royale_html_beads_layouts_FlexibleFirstChildHorizontalLayout__maxHeight = value;
};


Object.defineProperties(org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype, /** @lends {org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype} */ {
/**
 * @type {number}
 */
maxWidth: {
get: org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.get__maxWidth,
set: org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.set__maxWidth},
/**
 * @type {number}
 */
maxHeight: {
get: org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.get__maxHeight,
set: org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.set__maxHeight}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'FlexibleFirstChildHorizontalLayout', qName: 'org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'maxWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout'},
        'maxHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout'}
      };
    },
    methods: function () {
      return {
        'FlexibleFirstChildHorizontalLayout': { type: '', declaredBy: 'org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./FlexibleFirstChildHorizontalLayout.js.map
