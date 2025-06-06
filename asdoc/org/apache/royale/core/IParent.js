/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IParent.as
 * org.apache.royale.core.IParent
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IParent');
/* Royale Dependency List: org.apache.royale.core.IChild*/




/**
 * @interface
 */
org.apache.royale.core.IParent = function() {
};
/**
 *  Add a component to the parent.
 * 
 *  @asparam c The subcomponent to add.
 *  @asparam dispatchEvent Whether to dispatch an event after adding the child.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.IParent.prototype.addElement = function(c, dispatchEvent) {
};
/**
 *  Add a component to the parent at the specified index.
 * 
 *  @asparam c The subcomponent to add.
 *  @asparam c The index where the subcomponent should be added.
 *  @asparam dispatchEvent Whether to dispatch an event after adding the child.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.IParent.prototype.addElementAt = function(c, index, dispatchEvent) {
};
/**
 *  Gets the index of this subcomponent.
 * 
 *  @asparam c The subcomponent to retrieve the index.
 *  @asreturn The index (zero-based).
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.core.IParent.prototype.getElementIndex = function(c) {
};
/**
 *  Remove a component from the parent.
 * 
 *  @asparam c The subcomponent to remove.
 *  @asparam dispatchEvent Whether to dispatch an event after removing the child.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.IParent.prototype.removeElement = function(c, dispatchEvent) {
};
/**  * @type {number}
 */org.apache.royale.core.IParent.prototype.numElements;
/**
 *  Get a component from the parent at specified index.
 * 
 *  @asparam c The index of the subcomponent.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.core.IParent.prototype.getElementAt = function(index) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IParent.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IParent', qName: 'org.apache.royale.core.IParent', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IParent.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.core.IParent'}
      };
    },
    methods: function () {
      return {
        'addElement': { type: 'void', declaredBy: 'org.apache.royale.core.IParent', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.royale.core.IParent', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'int', false ,'Boolean', true ]; }},
        'getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.core.IParent', parameters: function () { return [ 'org.apache.royale.core.IChild', false ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.royale.core.IParent', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.core.IParent', parameters: function () { return [ 'int', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IParent.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IParent.js.map
