/**
 * Generated by Apache Royale Compiler from org/apache/royale/html/Container.as
 * org.apache.royale.html.Container
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.html.Container');
/* Royale Dependency List: org.apache.royale.core.ValuesManager,org.apache.royale.events.Event,org.apache.royale.utils.MXMLDataInterpreter,XML*/

goog.require('org.apache.royale.core.ContainerBase');
goog.require('org.apache.royale.core.IMXMLDocument');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.ContainerBase}
 * @implements {org.apache.royale.core.IMXMLDocument}
 */
org.apache.royale.html.Container = function() {
  
  this.org_apache_royale_html_Container__mxmlDocument = this;
  this.typeNames = 'Container';
  org.apache.royale.html.Container.base(this, 'constructor');
};
goog.inherits(org.apache.royale.html.Container, org.apache.royale.core.ContainerBase);


/**
 * @private
 * @type {Array}
 */
org.apache.royale.html.Container.prototype.org_apache_royale_html_Container__mxmlDescriptor;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.html.Container.prototype.org_apache_royale_html_Container__mxmlDocument;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.html.Container.prototype.org_apache_royale_html_Container__initialized;


/**
 * @asprivate
 * @override
 */
org.apache.royale.html.Container.prototype.addedToParent = function() {
  if (!this.org_apache_royale_html_Container__initialized) {
    org.apache.royale.core.ValuesManager.valuesImpl.init(this);
  }
  org.apache.royale.html.Container.superClass_.addedToParent.apply(this);
  if (!this.org_apache_royale_html_Container__initialized) {
    org.apache.royale.utils.MXMLDataInterpreter.generateMXMLInstances(this.org_apache_royale_html_Container__mxmlDocument, this, this.MXMLDescriptor);
    this.dispatchEvent(new org.apache.royale.events.Event("initBindings"));
    this.dispatchEvent(new org.apache.royale.events.Event("initComplete"));
    this.org_apache_royale_html_Container__initialized = true;
  }
};


/**
 *  @asprivate
 * @param {Object} document
 * @param {Array} value
 */
org.apache.royale.html.Container.prototype.setMXMLDescriptor = function(document, value) {
  this.org_apache_royale_html_Container__mxmlDocument = document;
  this.org_apache_royale_html_Container__mxmlDescriptor = value;
};


/**
 *  @copy org.apache.royale.core.Application#generateMXMLAttributes()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.8
 * @param {Array} data
 */
org.apache.royale.html.Container.prototype.generateMXMLAttributes = function(data) {
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLProperties(this, data);
};


/**
 * @type {Array}
 */
org.apache.royale.html.Container.prototype.mxmlContent;


/**
 * @nocollapse
 * @export
 * @type {Array}
 */
org.apache.royale.html.Container.prototype.MXMLDescriptor;


org.apache.royale.html.Container.prototype.get__MXMLDescriptor = function() {
  return this.org_apache_royale_html_Container__mxmlDescriptor;
};


Object.defineProperties(org.apache.royale.html.Container.prototype, /** @lends {org.apache.royale.html.Container.prototype} */ {
/**
 * @type {Array}
 */
MXMLDescriptor: {
get: org.apache.royale.html.Container.prototype.get__MXMLDescriptor}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.html.Container.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Container', qName: 'org.apache.royale.html.Container', kind: 'class' }], interfaces: [org.apache.royale.core.IMXMLDocument] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.html.Container.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'mxmlContent': { type: 'Array', get_set: function (/** org.apache.royale.html.Container */ inst, /** * */ v) {return v !== undefined ? inst.mxmlContent = v : inst.mxmlContent;}}
      };
    },
    accessors: function () {
      return {
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.html.Container'}
      };
    },
    methods: function () {
      return {
        'Container': { type: '', declaredBy: 'org.apache.royale.html.Container'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.html.Container'},
        'setMXMLDescriptor': { type: 'void', declaredBy: 'org.apache.royale.html.Container', parameters: function () { return [ 'Object', false ,'Array', false ]; }},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.royale.html.Container', parameters: function () { return [ 'Array', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.html.Container.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./Container.js.map
