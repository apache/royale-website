/**
 * Generated by Apache Royale Compiler from org/apache/royale/reflection/nativejs/AS3Boolean.as
 * org.apache.royale.reflection.nativejs.AS3Boolean
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.reflection.nativejs.AS3Boolean');
/* Royale Dependency List: */
goog.provide('org.apache.royale.reflection.nativejs.AS3Boolean.singleton');



/**
 * Provides data for a stand-in TypeDefinition of the native as3 type for javascript
 * @return {Object}
 */
org.apache.royale.reflection.nativejs.AS3Boolean = function() {
  if (org.apache.royale.reflection.nativejs.AS3Boolean.singleton)
    return org.apache.royale.reflection.nativejs.AS3Boolean.singleton;
  var /** @type {Object} */ ret = {};
  ret['classRef'] = Boolean;
  ret['name'] = 'Boolean';
  ret['NATIVE_TYPE'] = true;
  ret['NATIVE_BASE'] = Object;
  ret['ROYALE_CLASS_INFO'] = {names:[{name:'Boolean', qName:'Boolean', kind:'class'}]};
  ret['ROYALE_REFLECTION_INFO'] = function() {
    return {'methods':function() {
      return {'Boolean':{'parameters':function() {
        return ['*', true];
      }, 'type':'', 'declaredBy':'Boolean'}};
    }};
  };
  org.apache.royale.reflection.nativejs.AS3Boolean.singleton = ret;
  return ret;
}


/**
 * @package
 * @type {*}
 */
org.apache.royale.reflection.nativejs.AS3Boolean.singleton = null
