/**
 * Generated by Apache Royale Compiler from org/apache/royale/site/TopMenuButton.as
 * org.apache.royale.site.TopMenuButton
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.site.TopMenuButton');
/* Royale Dependency List: org.apache.royale.core.WrappedHTMLElement*/

goog.require('org.apache.royale.core.UIBase');



/**
 * Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.UIBase}
 */
org.apache.royale.site.TopMenuButton = function() {
  org.apache.royale.site.TopMenuButton.base(this, 'constructor');
  this.typeNames = "TopMenuButton";
};
goog.inherits(org.apache.royale.site.TopMenuButton, org.apache.royale.core.UIBase);


/**
 * @private
 * @type {string}
 */
org.apache.royale.site.TopMenuButton.prototype.org_apache_royale_site_TopMenuButton__htmlText;


/**
 * @private
 * @type {string}
 */
org.apache.royale.site.TopMenuButton.prototype.org_apache_royale_site_TopMenuButton__href;


/**
 * @asreturn The actual element to be parented.
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @royaleignorecoercion HTMLLIElement
 * @protected
 * @override
 */
org.apache.royale.site.TopMenuButton.prototype.createElement = function() {
  var /** @type {HTMLLIElement} */ li = document.createElement("li");
  this.element = li;
  return this.element;
};


/**
 * @royaleignorecoercion HTMLAnchorElement
 * @override
 */
org.apache.royale.site.TopMenuButton.prototype.addedToParent = function() {
  org.apache.royale.site.TopMenuButton.superClass_.addedToParent.apply(this);
  var /** @type {HTMLAnchorElement} */ anchor = document.createElement("a");
  anchor.className = "TopMenuButtonContent";
  anchor.href = this.href;
  anchor.textContent = this.htmlText;
  this.element.appendChild(anchor);
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.site.TopMenuButton.prototype.htmlText;


org.apache.royale.site.TopMenuButton.prototype.get__htmlText = function() {
  return this.org_apache_royale_site_TopMenuButton__htmlText;
};


org.apache.royale.site.TopMenuButton.prototype.set__htmlText = function(value) {
  this.org_apache_royale_site_TopMenuButton__htmlText = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.site.TopMenuButton.prototype.href;


org.apache.royale.site.TopMenuButton.prototype.get__href = function() {
  return this.org_apache_royale_site_TopMenuButton__href;
};


org.apache.royale.site.TopMenuButton.prototype.set__href = function(value) {
  this.org_apache_royale_site_TopMenuButton__href = value;
};


Object.defineProperties(org.apache.royale.site.TopMenuButton.prototype, /** @lends {org.apache.royale.site.TopMenuButton.prototype} */ {
/**
 * @type {string}
 */
htmlText: {
get: org.apache.royale.site.TopMenuButton.prototype.get__htmlText,
set: org.apache.royale.site.TopMenuButton.prototype.set__htmlText},
/**
 * @type {string}
 */
href: {
get: org.apache.royale.site.TopMenuButton.prototype.get__href,
set: org.apache.royale.site.TopMenuButton.prototype.set__href}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.site.TopMenuButton.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'TopMenuButton', qName: 'org.apache.royale.site.TopMenuButton', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.site.TopMenuButton.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'htmlText': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.site.TopMenuButton'},
        'href': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.site.TopMenuButton'}
      };
    },
    methods: function () {
      return {
        'TopMenuButton': { type: '', declaredBy: 'org.apache.royale.site.TopMenuButton'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.site.TopMenuButton'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.site.TopMenuButton.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./TopMenuButton.js.map
