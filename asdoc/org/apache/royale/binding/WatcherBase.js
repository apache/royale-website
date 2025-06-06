/**
 * Generated by Apache Royale Compiler from org/apache/royale/binding/WatcherBase.as
 * org.apache.royale.binding.WatcherBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.binding.WatcherBase');
/* Royale Dependency List: org.apache.royale.binding.GenericBinding,org.apache.royale.utils.Language*/




/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Royale 1.0.0
 * @constructor
 */
org.apache.royale.binding.WatcherBase = function() {
  ;
};


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.binding.WatcherBase.prototype.listeners;


/**
 * @protected
 * @type {Array}
 */
org.apache.royale.binding.WatcherBase.prototype.children;


/**
 * @type {Object}
 */
org.apache.royale.binding.WatcherBase.prototype.value;


/**
 *  This is an abstract method that subclasses implement.  Implementations
 *  handle changes in the parent chain.  For example, if watching 
 *  {a.b.c} and this watcher is watching "b", then handle "a" changing.
 *
 *  @asparam parent The new parent.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} parent
 */
org.apache.royale.binding.WatcherBase.prototype.parentChanged = function(parent) {
};


/**
 *  Add a child to this watcher, meaning that the child
 *  is watching a sub value of ours.  For example, if watching 
 *  {a.b.c} and this watcher is watching "b", then this method
 *  is called to add the watcher watching "c".
 *
 *  @asparam child The new child
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.binding.WatcherBase} child
 */
org.apache.royale.binding.WatcherBase.prototype.addChild = function(child) {
  if (!this.children)
    this.children = [child];
  else
    this.children.push(child);
  child.parentChanged(this);
};


/**
 *  Add a binding to this watcher, meaning that the binding
 *  is notified when our value changes.  Bindings are classes
 *  that actually perform the change based on changes
 *  detected to this portion of the chain.
 *
 *  @asparam binding The new binding.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.binding.GenericBinding} binding
 */
org.apache.royale.binding.WatcherBase.prototype.addBinding = function(binding) {
  if (!this.listeners)
    this.listeners = [binding];
  else
    this.listeners.push(binding);
  binding.valueChanged(this.value, typeof(binding.source) === "function");
};


/**
 *  This method is called when the value
 *  might have changed and goes through
 *  and makes sure the children are updated.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 */
org.apache.royale.binding.WatcherBase.prototype.updateChildren = function() {
  if (this.children) {
    var /** @type {number} */ n = (this.children.length) >> 0;
    for (var /** @type {number} */ i = 0; i < n; ++i) {
      this.children[i].parentChanged(this);
    }
  }
};


/**
 *  @asprivate
 * @private
 * @param {Object} oldval
 * @return {boolean}
 */
org.apache.royale.binding.WatcherBase.prototype.org_apache_royale_binding_WatcherBase_valueChanged = function(oldval) {
  if (oldval == null && this.value == null)
    return false;
  var /** @type {string} */ valType = typeof(this.value);
  if (valType == "string") {
    if (oldval == null && this.value == "")
      return false;
    else
      return oldval != this.value;
  }
  if (valType == "number") {
    if (oldval == null && this.value == 0)
      return false;
    else
      return oldval != this.value;
  }
  if (valType == "boolean") {
    if (oldval == null && this.value == false)
      return false;
    else
      return oldval != this.value;
  }
  return true;
};


/**
 *  Calls a function inside a try catch block to try to
 *  update the value.
 *
 *  @asparam wrappedFunction The function to call.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @protected
 * @param {Function} wrappedFunction
 */
org.apache.royale.binding.WatcherBase.prototype.wrapUpdate = function(wrappedFunction) {
  try {
    wrappedFunction.apply(this);
  } catch (error) {
    var /** @type {number} */ n = (org.apache.royale.binding.WatcherBase.allowedErrorTypes.length) >> 0;
    for (var /** @type {number} */ i = 0; i < n; i++) {
      if (org.apache.royale.utils.Language.is(error, org.apache.royale.binding.WatcherBase.allowedErrorTypes[i].type)) {
        var /** @type {Function} */ handler = org.apache.royale.binding.WatcherBase.allowedErrorTypes[i].handler;
        if (handler != null)
          this.value = handler(this, wrappedFunction);
        else
          this.value = null;
      }
    }
    
    var /** @type {string} */ s = error.message;
    n = (org.apache.royale.binding.WatcherBase.allowedErrors.length) >> 0;
    for (i = 0; i < n; i++) {
      if (s.indexOf(org.apache.royale.utils.Language.string(org.apache.royale.binding.WatcherBase.allowedErrors[i])) != -1)
        return;
    }
    throw error;
  }
};


/**
 * @nocollapse
 * @type {Array}
 */
org.apache.royale.binding.WatcherBase.allowedErrors = ["Call attempted on an object that is not a function.", "null has no properties.", "undefined has no properties.", "undefined is not an object", "has no properties.", "and there is no default value", "invalid null argument."];


/**
 * @nocollapse
 * @type {Array}
 */
org.apache.royale.binding.WatcherBase.allowedErrorTypes = [{type:RangeError}];


/**
 *  Notify the various bindings that the value has changed so they can update
 *  their data binding expressions.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.binding.GenericBinding
 */
org.apache.royale.binding.WatcherBase.prototype.notifyListeners = function() {
  if (this.listeners) {
    var /** @type {number} */ n = (this.listeners.length) >> 0;
    for (var /** @type {number} */ i = 0; i < n; i++) {
      var /** @type {Object} */ gb = this.listeners[i];
      gb.valueChanged(this.value, typeof(gb.source) === "function");
    }
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.binding.WatcherBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'WatcherBase', qName: 'org.apache.royale.binding.WatcherBase', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.binding.WatcherBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'value': { type: 'Object', get_set: function (/** org.apache.royale.binding.WatcherBase */ inst, /** * */ v) {return v !== undefined ? inst.value = v : inst.value;}},
        '|allowedErrors': { type: 'Array', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.binding.WatcherBase.allowedErrors = v : org.apache.royale.binding.WatcherBase.allowedErrors;}},
        '|allowedErrorTypes': { type: 'Array', get_set: function (/** * */ v) {return v !== undefined ? org.apache.royale.binding.WatcherBase.allowedErrorTypes = v : org.apache.royale.binding.WatcherBase.allowedErrorTypes;}}
      };
    },
    methods: function () {
      return {
        'WatcherBase': { type: '', declaredBy: 'org.apache.royale.binding.WatcherBase'},
        'parentChanged': { type: 'void', declaredBy: 'org.apache.royale.binding.WatcherBase', parameters: function () { return [ 'Object', false ]; }},
        'addChild': { type: 'void', declaredBy: 'org.apache.royale.binding.WatcherBase', parameters: function () { return [ 'org.apache.royale.binding.WatcherBase', false ]; }},
        'addBinding': { type: 'void', declaredBy: 'org.apache.royale.binding.WatcherBase', parameters: function () { return [ 'org.apache.royale.binding.GenericBinding', false ]; }},
        'updateChildren': { type: 'void', declaredBy: 'org.apache.royale.binding.WatcherBase'},
        'notifyListeners': { type: 'void', declaredBy: 'org.apache.royale.binding.WatcherBase'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.binding.WatcherBase.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./WatcherBase.js.map
