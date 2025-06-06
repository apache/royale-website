/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/Application.as
 * org.apache.royale.core.Application
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.Application');
/* Royale Dependency List: org.apache.royale.core.IApplicationView,org.apache.royale.core.IBead,org.apache.royale.core.IChild,org.apache.royale.core.IUIBase,org.apache.royale.core.IValuesImpl,org.apache.royale.core.UIBase,org.apache.royale.core.ValuesManager,org.apache.royale.events.Event,org.apache.royale.utils.MXMLDataInterpreter,org.apache.royale.utils.Timer,org.apache.royale.utils.html.getStyle,org.apache.royale.utils.sendEvent,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.core.ApplicationBase');
goog.require('org.apache.royale.core.IParent');
goog.require('org.apache.royale.core.IPopUpHost');
goog.require('org.apache.royale.core.IPopUpHostParent');
goog.require('org.apache.royale.core.IInitialViewApplication');
goog.require('org.apache.royale.core.IRenderedObject');
goog.require('org.apache.royale.core.IStrand');
goog.require('org.apache.royale.events.IEventDispatcher');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.ApplicationBase}
 * @implements {org.apache.royale.core.IStrand}
 * @implements {org.apache.royale.core.IParent}
 * @implements {org.apache.royale.events.IEventDispatcher}
 * @implements {org.apache.royale.core.IInitialViewApplication}
 * @implements {org.apache.royale.core.IPopUpHost}
 * @implements {org.apache.royale.core.IPopUpHostParent}
 * @implements {org.apache.royale.core.IRenderedObject}
 */
org.apache.royale.core.Application = function() {
  org.apache.royale.core.Application.base(this, 'constructor');
  
  this.element = document.getElementsByTagName('body')[0];
  this.element.className = 'Application';
};
goog.inherits(org.apache.royale.core.Application, org.apache.royale.core.ApplicationBase);


/**
 * @protected
 * @type {org.apache.royale.core.IParent}
 */
org.apache.royale.core.Application.prototype.instanceParent = null;


/**
 * @private
 * @type {org.apache.royale.core.IApplicationView}
 */
org.apache.royale.core.Application.prototype.org_apache_royale_core_Application__initialView;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.Application.prototype.org_apache_royale_core_Application__model;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.Application.prototype.org_apache_royale_core_Application__controller;


/**
 *  An method called by the compiler's generated
 *  code to kick off the setting of MXML attribute
 *  values and instantiation of child tags.
 *
 *  The call has to be made in the generated code
 *  in order to ensure that the constructors have
 *  completed first.
 *
 *  @asparam data The encoded data representing the
 *  MXML attributes.
 *
 *  @see org.apache.royale.utils.MXMLDataInterpreter
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Array} data
 */
org.apache.royale.core.Application.prototype.generateMXMLAttributes = function(data) {
  var /** @type {number} */ propCount = (data[0]) >> 0;
  var /** @type {number} */ n = (data.length) >> 0;
  for (var /** @type {number} */ i = 1; i < n; i += 3) {
    if (data[i] == "initialView") {
      var /** @type {Array} */ initialViewArray = data.splice(i, 3);
      var /** @type {number} */ offset = ((propCount - 1) * 3 + 1) >> 0;
      data.splice(offset, 0, initialViewArray[0], initialViewArray[1], initialViewArray[2]);
    }
  }
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLProperties(this, data);
};


/**
 * @type {Array}
 */
org.apache.royale.core.Application.prototype.beads;


/**
 *  @copy org.apache.royale.core.IParent#addElement()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 *  @royaleignorecoercion HTMLElement
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.Application.prototype.addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.appendChild(c.positioner);
  c.addedToParent();
};


/**
 *  @copy org.apache.royale.core.IParent#addElementAt()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.Application.prototype.addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  var /** @type {NodeList} */ children = this.internalChildren();
  if (index >= children.length)
    this.addElement(c); else {
    this.element.insertBefore(c.positioner, children[index]);
    c.addedToParent();
  }
};


/**
 *  @copy org.apache.royale.core.IParent#getElementAt()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.core.Application.prototype.getElementAt = function(index) {
  
  var /** @type {NodeList} */ children = this.internalChildren();
  return children[index].royale_wrapper;
};


/**
 *  @copy org.apache.royale.core.IParent#getElementIndex()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.core.Application.prototype.getElementIndex = function(c) {
  
  var /** @type {NodeList} */ children = this.internalChildren();
  var /** @type {number} */ n = (children.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (children[i] == c.positioner)
      return i;
  }
  return -1;
};


/**
 *  @copy org.apache.royale.core.IParent#removeElement()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion HTMLElement
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.Application.prototype.removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.removeChild(c.positioner);
};


/**
 * @asreturn {Object} The array of children.
 * @protected
 * @return {NodeList}
 */
org.apache.royale.core.Application.prototype.internalChildren = function() {
  return this.element.childNodes;
};


/**
 * @protected
 * @type {org.apache.royale.utils.Timer}
 */
org.apache.royale.core.Application.prototype.startupTimer;


/**
 * @royaleignorecoercion org.apache.royale.core.IBead
 */
org.apache.royale.core.Application.prototype.start = function() {
  if (org.apache.royale.utils.Language.is(this.model, org.apache.royale.core.IBead))
    this.addBead(this.model);
  if (org.apache.royale.utils.Language.is(this.controller, org.apache.royale.core.IBead))
    this.addBead(this.controller);
  for (var /** @type {number} */ index in this.beads) {
    this.addBead(this.beads[index]);
  }
  org.apache.royale.utils.sendEvent(this, "beadsAdded");
  if (org.apache.royale.utils.sendEvent(this, new org.apache.royale.events.Event("preinitialize", false, true)))
    this.initialize(); else {
    this.startupTimer = new org.apache.royale.utils.Timer(34, 0);
    this.startupTimer.addEventListener("timer", org.apache.royale.utils.Language.closure(this.handleStartupTimer, this, 'handleStartupTimer'));
    this.startupTimer.start();
  }
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.Application.prototype.handleStartupTimer = function(event) {
  if (org.apache.royale.utils.sendEvent(this, new org.apache.royale.events.Event("preinitialize", false, true))) {
    this.startupTimer.stop();
    this.initialize();
  }
};


/**
 * @royaleignorecoercion org.apache.royale.core.IBead
 * @royaleignorecoercion org.apache.royale.core.UIBase
 * @protected
 */
org.apache.royale.core.Application.prototype.initialize = function() {
  org.apache.royale.utils.MXMLDataInterpreter.generateMXMLInstances(this, this.instanceParent, this.MXMLDescriptor);
  org.apache.royale.utils.sendEvent(this, 'initialize');
  if (this.initialView) {
    this.initialView.applicationModel = this.model;
    this.addElement(this.initialView);
    var /** @type {Object} */ baseView = this.initialView;
    if (!isNaN(baseView.percentWidth) || !isNaN(baseView.percentHeight)) {
      var /** @type {CSSStyleDeclaration} */ style = org.apache.royale.utils.html.getStyle(this);
      style.height = window.innerHeight.toString() + 'px';
      style.width = window.innerWidth.toString() + 'px';
      org.apache.royale.utils.sendEvent(this.initialView, "sizeChanged");
    }
    org.apache.royale.utils.sendEvent(this, "viewChanged");
  }
  org.apache.royale.utils.sendEvent(this, "applicationComplete");
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IValuesImpl}
 */
org.apache.royale.core.Application.prototype.valuesImpl;


org.apache.royale.core.Application.prototype.set__valuesImpl = function(value) {
  org.apache.royale.core.ValuesManager.valuesImpl = value;
  org.apache.royale.core.ValuesManager.valuesImpl.init(this);
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IApplicationView}
 */
org.apache.royale.core.Application.prototype.initialView;


org.apache.royale.core.Application.prototype.get__initialView = function() {
  return this.org_apache_royale_core_Application__initialView;
};


org.apache.royale.core.Application.prototype.set__initialView = function(value) {
  this.org_apache_royale_core_Application__initialView = value;
};


org.apache.royale.core.Application.prototype.get__model = function() {
  return this.org_apache_royale_core_Application__model;
};


org.apache.royale.core.Application.prototype.set__model = function(value) {
  this.org_apache_royale_core_Application__model = value;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.core.Application.prototype.controller;


org.apache.royale.core.Application.prototype.get__controller = function() {
  return this.org_apache_royale_core_Application__controller;
};


org.apache.royale.core.Application.prototype.set__controller = function(value) {
  this.org_apache_royale_core_Application__controller = value;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IPopUpHostParent}
 */
org.apache.royale.core.Application.prototype.popUpParent;


org.apache.royale.core.Application.prototype.get__popUpParent = function() {
  return this;
};


/**
 * @nocollapse
 * @export
 * @type {Array}
 */
org.apache.royale.core.Application.prototype.MXMLDescriptor;


org.apache.royale.core.Application.prototype.get__MXMLDescriptor = function() {
  return null;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.Application.prototype.numElements;


org.apache.royale.core.Application.prototype.get__numElements = function() {
  
  var /** @type {NodeList} */ children = this.internalChildren();
  return (children.length) >> 0;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IPopUpHost}
 */
org.apache.royale.core.Application.prototype.popUpHost;


org.apache.royale.core.Application.prototype.get__popUpHost = function() {
  return this;
};


Object.defineProperties(org.apache.royale.core.Application.prototype, /** @lends {org.apache.royale.core.Application.prototype} */ {
/**
 * @type {org.apache.royale.core.IValuesImpl}
 */
valuesImpl: {
set: org.apache.royale.core.Application.prototype.set__valuesImpl},
/**
 * @type {org.apache.royale.core.IApplicationView}
 */
initialView: {
get: org.apache.royale.core.Application.prototype.get__initialView,
set: org.apache.royale.core.Application.prototype.set__initialView},
/**
 * @type {Object}
 */
model: {
get: org.apache.royale.core.Application.prototype.get__model,
set: org.apache.royale.core.Application.prototype.set__model},
/**
 * @type {Object}
 */
controller: {
get: org.apache.royale.core.Application.prototype.get__controller,
set: org.apache.royale.core.Application.prototype.set__controller},
/**
 * @type {org.apache.royale.core.IPopUpHostParent}
 */
popUpParent: {
get: org.apache.royale.core.Application.prototype.get__popUpParent},
/**
 * @type {Array}
 */
MXMLDescriptor: {
get: org.apache.royale.core.Application.prototype.get__MXMLDescriptor},
/**
 * @type {number}
 */
numElements: {
get: org.apache.royale.core.Application.prototype.get__numElements},
/**
 * @type {org.apache.royale.core.IPopUpHost}
 */
popUpHost: {
get: org.apache.royale.core.Application.prototype.get__popUpHost}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.Application.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Application', qName: 'org.apache.royale.core.Application', kind: 'class' }], interfaces: [org.apache.royale.core.IStrand, org.apache.royale.core.IParent, org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IInitialViewApplication, org.apache.royale.core.IPopUpHost, org.apache.royale.core.IPopUpHostParent, org.apache.royale.core.IRenderedObject] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.Application.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'beads': { type: 'Array', get_set: function (/** org.apache.royale.core.Application */ inst, /** * */ v) {return v !== undefined ? inst.beads = v : inst.beads;}}
      };
    },
    accessors: function () {
      return {
        'valuesImpl': { type: 'org.apache.royale.core.IValuesImpl', access: 'writeonly', declaredBy: 'org.apache.royale.core.Application'},
        'initialView': { type: 'org.apache.royale.core.IApplicationView', access: 'readwrite', declaredBy: 'org.apache.royale.core.Application'},
        'model': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.Application', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'controller': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.Application', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: '__NoChangeEvent__' } ] } ]; }},
        'popUpParent': { type: 'org.apache.royale.core.IPopUpHostParent', access: 'readonly', declaredBy: 'org.apache.royale.core.Application'},
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.royale.core.Application'},
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.core.Application'},
        'popUpHost': { type: 'org.apache.royale.core.IPopUpHost', access: 'readonly', declaredBy: 'org.apache.royale.core.Application'}
      };
    },
    methods: function () {
      return {
        'Application': { type: '', declaredBy: 'org.apache.royale.core.Application'},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.royale.core.Application', parameters: function () { return [ 'Array', false ]; }},
        'addElement': { type: 'void', declaredBy: 'org.apache.royale.core.Application', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.royale.core.Application', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'int', false ,'Boolean', true ]; }},
        'getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.core.Application', parameters: function () { return [ 'int', false ]; }},
        'getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.core.Application', parameters: function () { return [ 'org.apache.royale.core.IChild', false ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.royale.core.Application', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'start': { type: 'void', declaredBy: 'org.apache.royale.core.Application'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.Application.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./Application.js.map
