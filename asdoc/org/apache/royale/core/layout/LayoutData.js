/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/layout/LayoutData.as
 * org.apache.royale.core.layout.LayoutData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.layout.LayoutData');
/* Royale Dependency List: org.apache.royale.core.layout.EdgeData,org.apache.royale.core.layout.MarginData*/




/**
 * @constructor
 */
org.apache.royale.core.layout.LayoutData = function() {
};


/**
 * @private
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.layout.LayoutData.prototype.org_apache_royale_core_layout_LayoutData__border;


/**
 * @private
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.layout.LayoutData.prototype.org_apache_royale_core_layout_LayoutData__padding;


/**
 * @private
 * @type {org.apache.royale.core.layout.MarginData}
 */
org.apache.royale.core.layout.LayoutData.prototype.org_apache_royale_core_layout_LayoutData__margins;


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.layout.LayoutData.prototype.border;


org.apache.royale.core.layout.LayoutData.prototype.get__border = function() {
  return this.org_apache_royale_core_layout_LayoutData__border;
};


org.apache.royale.core.layout.LayoutData.prototype.set__border = function(value) {
  this.org_apache_royale_core_layout_LayoutData__border = value;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.layout.EdgeData}
 */
org.apache.royale.core.layout.LayoutData.prototype.padding;


org.apache.royale.core.layout.LayoutData.prototype.get__padding = function() {
  return this.org_apache_royale_core_layout_LayoutData__padding;
};


org.apache.royale.core.layout.LayoutData.prototype.set__padding = function(value) {
  this.org_apache_royale_core_layout_LayoutData__padding = value;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.layout.MarginData}
 */
org.apache.royale.core.layout.LayoutData.prototype.margins;


org.apache.royale.core.layout.LayoutData.prototype.get__margins = function() {
  return this.org_apache_royale_core_layout_LayoutData__margins;
};


org.apache.royale.core.layout.LayoutData.prototype.set__margins = function(value) {
  this.org_apache_royale_core_layout_LayoutData__margins = value;
};


Object.defineProperties(org.apache.royale.core.layout.LayoutData.prototype, /** @lends {org.apache.royale.core.layout.LayoutData.prototype} */ {
/**
 * @type {org.apache.royale.core.layout.EdgeData}
 */
border: {
get: org.apache.royale.core.layout.LayoutData.prototype.get__border,
set: org.apache.royale.core.layout.LayoutData.prototype.set__border},
/**
 * @type {org.apache.royale.core.layout.EdgeData}
 */
padding: {
get: org.apache.royale.core.layout.LayoutData.prototype.get__padding,
set: org.apache.royale.core.layout.LayoutData.prototype.set__padding},
/**
 * @type {org.apache.royale.core.layout.MarginData}
 */
margins: {
get: org.apache.royale.core.layout.LayoutData.prototype.get__margins,
set: org.apache.royale.core.layout.LayoutData.prototype.set__margins}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.layout.LayoutData.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'LayoutData', qName: 'org.apache.royale.core.layout.LayoutData', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.layout.LayoutData.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'border': { type: 'org.apache.royale.core.layout.EdgeData', access: 'readwrite', declaredBy: 'org.apache.royale.core.layout.LayoutData'},
        'padding': { type: 'org.apache.royale.core.layout.EdgeData', access: 'readwrite', declaredBy: 'org.apache.royale.core.layout.LayoutData'},
        'margins': { type: 'org.apache.royale.core.layout.MarginData', access: 'readwrite', declaredBy: 'org.apache.royale.core.layout.LayoutData'}
      };
    },
    methods: function () {
      return {
        'LayoutData': { type: '', declaredBy: 'org.apache.royale.core.layout.LayoutData'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.layout.LayoutData.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./LayoutData.js.map
