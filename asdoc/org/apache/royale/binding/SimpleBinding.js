/**
 * Generated by Apache Royale Compiler from org/apache/royale/binding/SimpleBinding.as
 * org.apache.royale.binding.SimpleBinding
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.SimpleBinding');
/* Royale Dependency List: org.apache.royale.core.IStrand,org.apache.royale.events.Event,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.ValueChangeEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.IBead');
goog.require('org.apache.royale.core.IBinding');
goog.require('org.apache.royale.core.IDocument');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @implements {org.apache.royale.core.IBead}
 * @implements {org.apache.royale.core.IDocument}
 * @implements {org.apache.royale.core.IBinding}
 * @param {boolean=} isStatic
 */
org.apache.royale.binding.SimpleBinding = function(isStatic) {
  isStatic = typeof isStatic !== 'undefined' ? isStatic : false;
  this.org_apache_royale_binding_SimpleBinding__isStatic = isStatic;
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.binding.SimpleBinding.prototype.org_apache_royale_binding_SimpleBinding__isStatic;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.binding.SimpleBinding.prototype.org_apache_royale_binding_SimpleBinding__destination;


/**
 * @private
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.org_apache_royale_binding_SimpleBinding__sourceID;


/**
 * @private
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.org_apache_royale_binding_SimpleBinding__destinationPropertyName;


/**
 * @private
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.org_apache_royale_binding_SimpleBinding__sourcePropertyName;


/**
 * @protected
 * @type {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.binding.SimpleBinding.prototype.dispatcher;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.binding.SimpleBinding.prototype.source;


/**
 * @protected
 * @type {Object}
 */
org.apache.royale.binding.SimpleBinding.prototype.document;


/**
 * @private
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.org_apache_royale_binding_SimpleBinding__eventName;


/**
 * @private
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.org_apache_royale_binding_SimpleBinding__sourceEventName = 'valueChange';


/**
 * @param {string} eventName
 */
org.apache.royale.binding.SimpleBinding.prototype.setSourceEventName = function(eventName) {
  this.org_apache_royale_binding_SimpleBinding__sourceEventName = eventName;
};


/**
 *  @copy org.apache.royale.core.IDocument#setDocument()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.binding.SimpleBinding.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.document = document;
};


/**
 * @royaleignorecoercion org.apache.royale.events.ValueChangeEvent
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.binding.SimpleBinding.prototype.org_apache_royale_binding_SimpleBinding_changeHandler = function(event) {
  if (event.type == org.apache.royale.events.ValueChangeEvent.VALUE_CHANGE) {
    var /** @type {Object} */ vce = event;
    if (vce.propertyName != this.sourcePropertyName)
      return;
  }
  this.destination[this.destinationPropertyName] = this.source[this.sourcePropertyName];
};


/**
 * @royaleignorecoercion org.apache.royale.events.IEventDispatcher
 * @royaleignorecoercion org.apache.royale.events.ValueChangeEvent
 * @private
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.binding.SimpleBinding.prototype.org_apache_royale_binding_SimpleBinding_sourceChangeHandler = function(event) {
  if (event.type == org.apache.royale.events.ValueChangeEvent.VALUE_CHANGE && event.propertyName != this.sourceID)
    return;
  if (this.dispatcher)
    this.dispatcher.removeEventListener(this.eventName, org.apache.royale.utils.Language.closure(this.org_apache_royale_binding_SimpleBinding_changeHandler, this, 'org_apache_royale_binding_SimpleBinding_changeHandler'));
  this.source = this.dispatcher = this.document[this.sourceID];
  if (this.dispatcher)
    this.dispatcher.addEventListener(this.eventName, org.apache.royale.utils.Language.closure(this.org_apache_royale_binding_SimpleBinding_changeHandler, this, 'org_apache_royale_binding_SimpleBinding_changeHandler'));
  this.destination[this.destinationPropertyName] = this.source ? this.source[this.sourcePropertyName] : null;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.eventName;


org.apache.royale.binding.SimpleBinding.prototype.get__eventName = function() {
  return this.org_apache_royale_binding_SimpleBinding__eventName;
};


org.apache.royale.binding.SimpleBinding.prototype.set__eventName = function(value) {
  this.org_apache_royale_binding_SimpleBinding__eventName = value;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.binding.SimpleBinding.prototype.destination;


org.apache.royale.binding.SimpleBinding.prototype.get__destination = function() {
  return this.org_apache_royale_binding_SimpleBinding__destination;
};


org.apache.royale.binding.SimpleBinding.prototype.set__destination = function(value) {
  this.org_apache_royale_binding_SimpleBinding__destination = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.sourceID;


org.apache.royale.binding.SimpleBinding.prototype.get__sourceID = function() {
  return this.org_apache_royale_binding_SimpleBinding__sourceID;
};


org.apache.royale.binding.SimpleBinding.prototype.set__sourceID = function(value) {
  this.org_apache_royale_binding_SimpleBinding__sourceID = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.destinationPropertyName;


org.apache.royale.binding.SimpleBinding.prototype.get__destinationPropertyName = function() {
  return this.org_apache_royale_binding_SimpleBinding__destinationPropertyName;
};


org.apache.royale.binding.SimpleBinding.prototype.set__destinationPropertyName = function(value) {
  this.org_apache_royale_binding_SimpleBinding__destinationPropertyName = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.binding.SimpleBinding.prototype.sourcePropertyName;


org.apache.royale.binding.SimpleBinding.prototype.get__sourcePropertyName = function() {
  return this.org_apache_royale_binding_SimpleBinding__sourcePropertyName;
};


org.apache.royale.binding.SimpleBinding.prototype.set__sourcePropertyName = function(value) {
  this.org_apache_royale_binding_SimpleBinding__sourcePropertyName = value;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IStrand}
 */
org.apache.royale.binding.SimpleBinding.prototype.strand;


org.apache.royale.binding.SimpleBinding.prototype.set__strand = function(value) {
  if (this.dispatcher)
    this.dispatcher.removeEventListener(this.eventName, org.apache.royale.utils.Language.closure(this.org_apache_royale_binding_SimpleBinding_changeHandler, this, 'org_apache_royale_binding_SimpleBinding_changeHandler'));
  if (this.destination == null)
    this.destination = value;
  if (this.org_apache_royale_binding_SimpleBinding__isStatic) {
    this.source = this.document;
    this.dispatcher = this.source.staticEventDispatcher;
  } else {
    if (this.sourceID != null) {
      this.source = this.dispatcher = this.document[this.sourceID];
      this.document.addEventListener(this.org_apache_royale_binding_SimpleBinding__sourceEventName, org.apache.royale.utils.Language.closure(this.org_apache_royale_binding_SimpleBinding_sourceChangeHandler, this, 'org_apache_royale_binding_SimpleBinding_sourceChangeHandler'));
      if (this.source == null) {
        return;
      }
    } else {
      this.source = this.dispatcher = this.document;
    }
  }
  this.dispatcher.addEventListener(this.eventName, org.apache.royale.utils.Language.closure(this.org_apache_royale_binding_SimpleBinding_changeHandler, this, 'org_apache_royale_binding_SimpleBinding_changeHandler'));
  try {
    this.destination[this.destinationPropertyName] = this.source[this.sourcePropertyName];
  } catch (e) {
  }
};


Object.defineProperties(org.apache.royale.binding.SimpleBinding.prototype, /** @lends {org.apache.royale.binding.SimpleBinding.prototype} */ {
/**
 * @type {string}
 */
eventName: {
get: org.apache.royale.binding.SimpleBinding.prototype.get__eventName,
set: org.apache.royale.binding.SimpleBinding.prototype.set__eventName},
/**
 * @type {Object}
 */
destination: {
get: org.apache.royale.binding.SimpleBinding.prototype.get__destination,
set: org.apache.royale.binding.SimpleBinding.prototype.set__destination},
/**
 * @type {string}
 */
sourceID: {
get: org.apache.royale.binding.SimpleBinding.prototype.get__sourceID,
set: org.apache.royale.binding.SimpleBinding.prototype.set__sourceID},
/**
 * @type {string}
 */
destinationPropertyName: {
get: org.apache.royale.binding.SimpleBinding.prototype.get__destinationPropertyName,
set: org.apache.royale.binding.SimpleBinding.prototype.set__destinationPropertyName},
/**
 * @type {string}
 */
sourcePropertyName: {
get: org.apache.royale.binding.SimpleBinding.prototype.get__sourcePropertyName,
set: org.apache.royale.binding.SimpleBinding.prototype.set__sourcePropertyName},
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.binding.SimpleBinding.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.SimpleBinding.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SimpleBinding', qName: 'org.apache.royale.binding.SimpleBinding', kind: 'class' }], interfaces: [org.apache.royale.core.IBead, org.apache.royale.core.IDocument, org.apache.royale.core.IBinding] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.SimpleBinding.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'eventName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.binding.SimpleBinding'},
        'destination': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.binding.SimpleBinding'},
        'sourceID': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.binding.SimpleBinding'},
        'destinationPropertyName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.binding.SimpleBinding'},
        'sourcePropertyName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.binding.SimpleBinding'},
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.binding.SimpleBinding'}
      };
    },
    methods: function () {
      return {
        'SimpleBinding': { type: '', declaredBy: 'org.apache.royale.binding.SimpleBinding', parameters: function () { return [ 'Boolean', true ]; }},
        'setSourceEventName': { type: 'void', declaredBy: 'org.apache.royale.binding.SimpleBinding', parameters: function () { return [ 'String', false ]; }},
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.binding.SimpleBinding', parameters: function () { return [ 'Object', false ,'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.binding.SimpleBinding.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./SimpleBinding.js.map
