/**
 * Generated by Apache Royale Compiler from org/apache/royale/states/SetProperty.as
 * org.apache.royale.states.SetProperty
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.states.SetProperty');
/* Royale Dependency List: org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IDocument');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 1.0.0
 * @constructor
 * @implements {org.apache.royale.core.IDocument}
 */
org.apache.royale.states.SetProperty = function() {
  ;
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.states.SetProperty.prototype.org_apache_royale_states_SetProperty__target;


/**
 * @private
 * @type {string}
 */
org.apache.royale.states.SetProperty.prototype.org_apache_royale_states_SetProperty__name;


/**
 * @private
 * @type {*}
 */
org.apache.royale.states.SetProperty.prototype.org_apache_royale_states_SetProperty__value;


/**
 * @private
 * @type {*}
 */
org.apache.royale.states.SetProperty.prototype.org_apache_royale_states_SetProperty__previousValue;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.states.SetProperty.prototype.org_apache_royale_states_SetProperty__document;


/**
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.states.SetProperty.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.document = document;
};


/**
 * @asprivate 
 * Initialize this object from a descriptor.
 * @param {Object} properties
 * @return {Object}
 */
org.apache.royale.states.SetProperty.prototype.initializeFromObject = function(properties) {
  for (var /** @type {string} */ p in properties) {
    this[p] = properties[p];
  }
  return org.apache.royale.utils.Language.resolveUncertain(Object(this));
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.states.SetProperty.prototype.target;


org.apache.royale.states.SetProperty.prototype.get__target = function() {
  return this.org_apache_royale_states_SetProperty__target;
};


org.apache.royale.states.SetProperty.prototype.set__target = function(value) {
  this.org_apache_royale_states_SetProperty__target = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.states.SetProperty.prototype.name;


org.apache.royale.states.SetProperty.prototype.get__name = function() {
  return this.org_apache_royale_states_SetProperty__name;
};


org.apache.royale.states.SetProperty.prototype.set__name = function(value) {
  this.org_apache_royale_states_SetProperty__name = value;
};


/**
 * @nocollapse
 * @export
 * @type {*}
 */
org.apache.royale.states.SetProperty.prototype.value;


org.apache.royale.states.SetProperty.prototype.get__value = function() {
  return this.org_apache_royale_states_SetProperty__value;
};


org.apache.royale.states.SetProperty.prototype.set__value = function(value) {
  this.org_apache_royale_states_SetProperty__value = value;
};


/**
 * @nocollapse
 * @export
 * @type {*}
 */
org.apache.royale.states.SetProperty.prototype.previousValue;


org.apache.royale.states.SetProperty.prototype.get__previousValue = function() {
  return this.org_apache_royale_states_SetProperty__previousValue;
};


org.apache.royale.states.SetProperty.prototype.set__previousValue = function(value) {
  this.org_apache_royale_states_SetProperty__previousValue = value;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.states.SetProperty.prototype.document;


org.apache.royale.states.SetProperty.prototype.get__document = function() {
  return this.org_apache_royale_states_SetProperty__document;
};


org.apache.royale.states.SetProperty.prototype.set__document = function(value) {
  this.org_apache_royale_states_SetProperty__document = value;
};


Object.defineProperties(org.apache.royale.states.SetProperty.prototype, /** @lends {org.apache.royale.states.SetProperty.prototype} */ {
/**
 * @type {string}
 */
target: {
get: org.apache.royale.states.SetProperty.prototype.get__target,
set: org.apache.royale.states.SetProperty.prototype.set__target},
/**
 * @type {string}
 */
name: {
get: org.apache.royale.states.SetProperty.prototype.get__name,
set: org.apache.royale.states.SetProperty.prototype.set__name},
/**
 * @type {*}
 */
value: {
get: org.apache.royale.states.SetProperty.prototype.get__value,
set: org.apache.royale.states.SetProperty.prototype.set__value},
/**
 * @type {*}
 */
previousValue: {
get: org.apache.royale.states.SetProperty.prototype.get__previousValue,
set: org.apache.royale.states.SetProperty.prototype.set__previousValue},
/**
 * @type {Object}
 */
document: {
get: org.apache.royale.states.SetProperty.prototype.get__document,
set: org.apache.royale.states.SetProperty.prototype.set__document}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.states.SetProperty.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SetProperty', qName: 'org.apache.royale.states.SetProperty', kind: 'class' }], interfaces: [org.apache.royale.core.IDocument] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.states.SetProperty.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'target': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.states.SetProperty'},
        'name': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.states.SetProperty'},
        'value': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.states.SetProperty'},
        'previousValue': { type: '*', access: 'readwrite', declaredBy: 'org.apache.royale.states.SetProperty'},
        'document': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.states.SetProperty'}
      };
    },
    methods: function () {
      return {
        'SetProperty': { type: '', declaredBy: 'org.apache.royale.states.SetProperty'},
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.states.SetProperty', parameters: function () { return [ 'Object', false ,'String', true ]; }},
        'initializeFromObject': { type: 'Object', declaredBy: 'org.apache.royale.states.SetProperty', parameters: function () { return [ 'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.states.SetProperty.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./SetProperty.js.map
