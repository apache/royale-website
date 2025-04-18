/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/ExtraData.as
 * org.apache.royale.reflection.ExtraData
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.ExtraData');
/* Royale Dependency List: org.apache.royale.reflection.nativejs.AS3Array,org.apache.royale.reflection.nativejs.AS3Boolean,org.apache.royale.reflection.nativejs.AS3Function,org.apache.royale.reflection.nativejs.AS3Number,org.apache.royale.reflection.nativejs.AS3Object,org.apache.royale.reflection.nativejs.AS3String,org.apache.royale.reflection.nativejs.AS3Vector,org.apache.royale.reflection.nativejs.AS3int,org.apache.royale.reflection.nativejs.AS3uint*/




/**
 * @constructor
 */
org.apache.royale.reflection.ExtraData = function() {
};


/**
 * @package
 * @type {string}
 */
org.apache.royale.reflection.ExtraData.CLOSURE_QNAME = "builtin.as$0.MethodClosure";


/**
 * @private
 * @type {Map}
 */
org.apache.royale.reflection.ExtraData.reflectionData;


/**
 * this is non-reflectable
 */
org.apache.royale.reflection.ExtraData.reset = function() {
  org.apache.royale.reflection.ExtraData.reflectionData = null;
};


/**
 * this is non-reflectable
 * @param {*} key
 * @return {boolean}
 */
org.apache.royale.reflection.ExtraData.hasData = function(key) {
  return !!(org.apache.royale.reflection.ExtraData.reflectionData && org.apache.royale.reflection.ExtraData.reflectionData.has(key));
};


/**
 * this is non-reflectable
 * @param {*} key
 * @return {Object}
 */
org.apache.royale.reflection.ExtraData.getData = function(key) {
  return org.apache.royale.reflection.ExtraData.reflectionData.get(key);
};


/**
 * this method itself is non-reflectable
 * If an application requires reflection of specific Native types and Royale synthetic types in javascript
 * call this method for each specific representation inside the nativejs package
 * at startup, before reflection is used in any code
 *
 * Use this to add selective definitions only (PAYG)
 * If this method is never used, it
 * will not be included in release build
 *
 * example:
 * import org.apache.royale.reflection.nativejs.AS3Array
 * ExtraData.addExternalDefinition(AS3Array())
 *
 * @royaleignorecoercion Array
 * @param {Object} item
 */
org.apache.royale.reflection.ExtraData.addExternDefintion = function(item) {
  if (!org.apache.royale.reflection.ExtraData.reflectionData)
    org.apache.royale.reflection.ExtraData.reflectionData = new Map();
  var /** @type {Array} */ items;
  if (!Array.isArray(item)) {
    items = [item];
  } else {
    items = item;
  }
  var foreachiter0_target = items;
  for (var foreachiter0 in foreachiter0_target) 
  {
  item = foreachiter0_target[foreachiter0];
  {
    org.apache.royale.reflection.ExtraData.reflectionData.set(item['name'], item);
    if (item['classRef'] && !org.apache.royale.reflection.ExtraData.reflectionData.has(item['classRef'])) {
      org.apache.royale.reflection.ExtraData.reflectionData.set(item['classRef'], item);
    }
  }}
  
};


/**
 * this method itself is non-reflectable
 * If an application requires reflection of default Native types and Royale synthetic types in javascript
 * call this method near application startup, before reflection is used in any code
 *
 * Use this to add corresponding reflection support for native js definitions
 * that are used to correspond to common native as3 types (non-PAYG)
 * If this method is never used, the dependencies inside it
 * will not be included in release build
 *
 */
org.apache.royale.reflection.ExtraData.addAll = function() {
  var /** @type {Array} */ items = [org.apache.royale.reflection.nativejs.AS3Array(), org.apache.royale.reflection.nativejs.AS3Number(), org.apache.royale.reflection.nativejs.AS3String(), org.apache.royale.reflection.nativejs.AS3Boolean(), org.apache.royale.reflection.nativejs.AS3int(), org.apache.royale.reflection.nativejs.AS3uint(), org.apache.royale.reflection.nativejs.AS3Vector(), org.apache.royale.reflection.nativejs.AS3Object(), org.apache.royale.reflection.nativejs.AS3Function()];
  while (items.length)
    org.apache.royale.reflection.ExtraData.addExternDefintion(items.pop());
};


/**
 * @nocollapse
 * @type {boolean}
 */
org.apache.royale.reflection.ExtraData.isRelevant;


org.apache.royale.reflection.ExtraData.get__isRelevant = function() {
  return true;
};


Object.defineProperties(org.apache.royale.reflection.ExtraData, /** @lends {org.apache.royale.reflection.ExtraData} */ {
/**
 * @type {boolean}
 */
isRelevant: {
get: org.apache.royale.reflection.ExtraData.get__isRelevant}}
);
//# sourceMappingURL=./ExtraData.js.map
