/**
 * Generated by Apache Royale Compiler from ASDocClass.as
 * ASDocClass
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('ASDocClass');
/* Royale Dependency List: */

goog.require('org.apache.royale.events.EventDispatcher');



/**
 * @constructor
 * @extends {org.apache.royale.events.EventDispatcher}
 */
ASDocClass = function() {// Compiler generated Binding support implementation:
ASDocClass.base(this, 'constructor');

};
// Compiler generated Binding support implementation:
goog.inherits(ASDocClass, org.apache.royale.events.EventDispatcher);


/**
 * @nocollapse
 * @const
 * @type {string}
 */
ASDocClass.key = "baseClassname:string;description:string;events:object;members:object;qname:string;tags:object;type:string";


/**
 * @private
 * @type {Array}
 */
ASDocClass.prototype.ASDocClass__baseInterfaceNames = null;


/**
 * @private
 * @type {string}
 */
ASDocClass.prototype.ASDocClass__baseClassname = null;


/**
 * @private
 * @type {string}
 */
ASDocClass.prototype.ASDocClass__description = null;


/**
 * @private
 * @type {Array}
 */
ASDocClass.prototype.ASDocClass__members = null;


/**
 * @private
 * @type {Array}
 */
ASDocClass.prototype.ASDocClass__tags = null;


/**
 * @private
 * @type {string}
 */
ASDocClass.prototype.ASDocClass__type = null;


/**
 * @private
 * @type {string}
 */
ASDocClass.prototype.ASDocClass__qname = null;


/**
 * @private
 * @type {Array}
 */
ASDocClass.prototype.ASDocClass__events = null;


/**
 * @nocollapse
 * @export
 * @type {Array}
 */
ASDocClass.prototype.baseInterfaceNames;


ASDocClass.prototype.get__baseInterfaceNames = function() {
return this.ASDocClass__baseInterfaceNames;
};


ASDocClass.prototype.set__baseInterfaceNames = function(__v__) {
this.ASDocClass__baseInterfaceNames = __v__;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
ASDocClass.prototype.baseClassname;


ASDocClass.prototype.get__baseClassname = function() {
return this.ASDocClass__baseClassname;
};


ASDocClass.prototype.set__baseClassname = function(__v__) {
this.ASDocClass__baseClassname = __v__;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
ASDocClass.prototype.description;


ASDocClass.prototype.get__description = function() {
return this.ASDocClass__description;
};


ASDocClass.prototype.set__description = function(__v__) {
this.ASDocClass__description = __v__;
};


/**
 * @nocollapse
 * @export
 * @type {Array}
 */
ASDocClass.prototype.members;


ASDocClass.prototype.get__members = function() {
return this.ASDocClass__members;
};


ASDocClass.prototype.set__members = function(__v__) {
this.ASDocClass__members = __v__;
};


/**
 * @nocollapse
 * @export
 * @type {Array}
 */
ASDocClass.prototype.tags;


ASDocClass.prototype.get__tags = function() {
return this.ASDocClass__tags;
};


ASDocClass.prototype.set__tags = function(__v__) {
this.ASDocClass__tags = __v__;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
ASDocClass.prototype.type;


ASDocClass.prototype.get__type = function() {
return this.ASDocClass__type;
};


ASDocClass.prototype.set__type = function(__v__) {
this.ASDocClass__type = __v__;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
ASDocClass.prototype.qname;


ASDocClass.prototype.get__qname = function() {
return this.ASDocClass__qname;
};


ASDocClass.prototype.set__qname = function(__v__) {
this.ASDocClass__qname = __v__;
};


/**
 * @nocollapse
 * @export
 * @type {Array}
 */
ASDocClass.prototype.events;


ASDocClass.prototype.get__events = function() {
return this.ASDocClass__events;
};


ASDocClass.prototype.set__events = function(__v__) {
this.ASDocClass__events = __v__;
};


Object.defineProperties(ASDocClass.prototype, /** @lends {ASDocClass.prototype} */ {
/**
 * @type {Array}
 */
baseInterfaceNames: {
get: ASDocClass.prototype.get__baseInterfaceNames,
set: ASDocClass.prototype.set__baseInterfaceNames},
/**
 * @type {string}
 */
baseClassname: {
get: ASDocClass.prototype.get__baseClassname,
set: ASDocClass.prototype.set__baseClassname},
/**
 * @type {string}
 */
description: {
get: ASDocClass.prototype.get__description,
set: ASDocClass.prototype.set__description},
/**
 * @type {Array}
 */
members: {
get: ASDocClass.prototype.get__members,
set: ASDocClass.prototype.set__members},
/**
 * @type {Array}
 */
tags: {
get: ASDocClass.prototype.get__tags,
set: ASDocClass.prototype.set__tags},
/**
 * @type {string}
 */
type: {
get: ASDocClass.prototype.get__type,
set: ASDocClass.prototype.set__type},
/**
 * @type {string}
 */
qname: {
get: ASDocClass.prototype.get__qname,
set: ASDocClass.prototype.set__qname},
/**
 * @type {Array}
 */
events: {
get: ASDocClass.prototype.get__events,
set: ASDocClass.prototype.set__events}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
ASDocClass.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ASDocClass', qName: 'ASDocClass', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
ASDocClass.prototype.ROYALE_REFLECTION_INFO = function () {
return {
  accessors: function () {
    return {
      'baseInterfaceNames': { type: 'Array', access: 'readwrite', declaredBy: 'ASDocClass'},
      'baseClassname': { type: 'String', access: 'readwrite', declaredBy: 'ASDocClass'},
      'description': { type: 'String', access: 'readwrite', declaredBy: 'ASDocClass'},
      'members': { type: 'Array', access: 'readwrite', declaredBy: 'ASDocClass'},
      'tags': { type: 'Array', access: 'readwrite', declaredBy: 'ASDocClass'},
      'type': { type: 'String', access: 'readwrite', declaredBy: 'ASDocClass'},
      'qname': { type: 'String', access: 'readwrite', declaredBy: 'ASDocClass'},
      'events': { type: 'Array', access: 'readwrite', declaredBy: 'ASDocClass'}
    };
  }
};
};
/**
 * @const
 * @type {number}
 */
ASDocClass.prototype.ROYALE_COMPILE_FLAGS = 9;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
ASDocClass.prototype.ROYALE_INITIAL_STATICS = Object.keys(ASDocClass);
