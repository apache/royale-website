/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IDocument.as
 * org.apache.royale.core.IDocument
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IDocument');
/* Royale Dependency List: */



/**
 * @interface
 */
org.apache.royale.core.IDocument = function() {
};
/**
 *  This method is called to notify an instance of what MXML document
 *  it belongs to, if any, and what its assigned id is in that
 *  document, if any.
 *
 *  @asparam document The MXML document that hosts this component.
 *  @asparam id The optional id of the component in the document.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} document
 * @param {string=} id
 */
org.apache.royale.core.IDocument.prototype.setDocument = function(document, id) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IDocument.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IDocument', qName: 'org.apache.royale.core.IDocument', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IDocument.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'setDocument': { type: 'void', declaredBy: 'org.apache.royale.core.IDocument', parameters: function () { return [ 'Object', false ,'String', true ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IDocument.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./IDocument.js.map
