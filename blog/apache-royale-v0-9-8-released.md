---
title: "Apache Royale v0.9.8 released!"
author: "Yishay Weiss"
date: 2021-09-02
tags: ["blog", "Announcements", "Releases"]
layout: "blog-post.html"
---

The Apache Royale community is pleased to announce the release of **Apache Royale 0.9.8**.

The Apache Royale project is the next generation of the Apache Flex SDK. It lets developers use **MXML** and **ActionScript 3** to generate **HTML/JS/CSS** applications which can run natively in browsers. The cross-compiled code can also run on platforms like **Electron** or **Apache Cordova** (Adobe PhoneGap) to build mobile applications.

This release should be considered 'beta' quality, although _we're very close to a 1.0 release_ and _we have many applications in production_ at this point. The purpose of this release is to continue to gather feedback about Royale's features and the project's implementation strategies, and to recruit new contributors. We hope to grow the code base into an SDK and tool chain that delivers the highest productivity when developing applications that can run on many platforms. Beta releases, however, may not handle all production needs.

## Changes in 0.9.8:

### Apache Royale Framework 0.9.8

- Core
  - Added getClassStyle function that get an Object with all styles in a CSS className.
- Basic
  - Move getParentEventTarget() from EventDispatcher to UIBase to reduce require dependencies. This allows EventDispatcher to be used in non-GUI contexts, such as Node.js.
  - UIBase, added loadBeads hook method
  - Added BrowserResizeListener bead that listen for browser resizing and resizes a component accordingly. Old one was renamed to "BrowserResizeApplicationListener"
  - StyledUIBase & ClassSelectorListSupport, added replaceClass method
  - Added ILabelFunction and LabelFunction bead
  - Added LayoutChildren: A bead to trigger layout in children. Added support in StyledLayoutBase.
  - Added interfaces for better extension in Basic and Jewel: IColumns, ITableModel, ITableView, ITextButton, IPaddings, IPositioning
  - Paddings: New bead to add padding in mxml to a component
  - Positioning: New bead to add positioning in mxml to a component
  - Add SelectionDataItemRendererFactoryForCollectionView to handle ISelectionModel for components that uses selection and add/remove/update items at runtime.
- RoyaleUnit
  - Fixed issue where CIListener incorrectly escaped quotes in messages.
  - Better error messages when `[BeforeClass]` or `[AfterClass]` is detected, but method is not found by reflection.
- Jewel
  - ASDocs: multiple refactors in many components to document and describe better components
  - Item Renderers
    - Refactor to make Basic Layout the default (before was horizontal baked)
    - Initializers now use new Paddings bead. Create a default if no one is found.
    - Remove then minimum height of 34px, so we can have renderers with less height
  - New BinaryImage component
  - Card:
    - New CardExpandedContent: Used for content that needs to avoid paddings like navigation bars
  - Button, CheckBox, RadioButton: 
    - add "spanLabel" to separate the text from other decorations like icons and get more control over styling
  - Image added "loadComplete" event
    - New ClipImage bead for images to allow clipping
    - New ErrorImage beads
  - Added SimpleLoader component that show an indeterminate spin circle
  - DataContainer
    - dataProvider is now the DefaultProperty
  - List 
    - Added label function through beads
    - New ListAlternateRowColor bead (should be temporal until get nth-child css styles work in compiler)
    - dataProvider is now the DefaultProperty
    - Fixes on SearchFilterForList
  - ComboBox:
    - Fix Sizing issues
    - Improve open popup faster
    - new ComboBoxItemByField bead that allows to select an item by field
    - dataProvider is now the DefaultProperty
    - add item renderer support at mxml (TLC) level
    - Fixes on SearchFilter
  - DateField:
    - Fix Sizing issues
  - TabBar: 
    - Multiple refactors to decouple functionality in beads and make renderers more flexible. Now we allow vertical layouts and indicator in renderer can be positiones in different places
    - Add "sameWidths" to make all buttons share the same width.
    - dataProvider is now the DefaultProperty
  - Table
    - Refactor to get better scrolling and fixed header
    - Added label function through beads
    - New TableAlternateRowColor bead
    - Solve RTE when set columns at runtime
    - Added Initializer
    - New TableAlternateRowColor bead (should be temporal until get nth-child css styles work in compiler)
    - Removed CRUD beads and added new CRUDTableItemRendererFactoryForCollectionView
  - DataGrid
    - Multiple fixes in column dimensions to allow more configurations
    - Added sorting through DataGridSortBead
    - Added swap of columns
    - Added label function through beads
    - dataProvider is now the DefaultProperty
    - add item renderer support at mxml (TLC) level
  - PresentationModels refactor for List and DataGrid based controls to allow more flexibility
  - NumericStepper:
    - Fix Sizing Issues
  - New responsive beads: ResponsiveSize, ResponsiveResizeListener and ResponsiveLabelVisibility
  - New TileHorizontalLayout and TileVerticalLayout beads
  - New ViewLayout for View
  - Removed Jewel ControlBar since it was just an HGroup
  - Jewel Themes:
    - Lots of changes to accommodate the rest of component development and fixes in jewel
    - Add fluid text sizing responsiveness, so size of text shrinks or grows depending on device to fit on different screens
  - Start of VirtualDataGrid component (still has some issues)
- Collections
  - ArrayList.length now is bindable
- Maven Distribtuon:
  - The distributions built by Maven should now be equivalent to those of the Ant build.
- Maven Archetypes:
  - updated royale-simple-application-archetype
  - new new royale-jewel-application-archetype
  - new new royale-jewel-module-application-archetype
  - new new royale-jewel-crux-application-archetype
- Dozens of bugs reported, investigated, and squashed. For details of closed bug reports see [GitHub Issues list](https://github.com/apache/royale-asjs/issues?q=is%3Aissue+is%3Aclosed).

Updates to the _RELEASE_NOTES_ made after this file was packaged into the release artifacts can be found here:

[https://github.com/apache/royale-asjs/wiki/Release-Notes-0.9.8](https://github.com/apache/royale-asjs/wiki/Release-Notes-0.9.8)

### Apache Royale Compiler 0.9.8

- Fixed issue where problems in .mxml files were sometimes duplicated.
- Fixed issue where unrecognized characters in .mxml files were sometimes ignored, and now an error is reported.
- Fixed some missing syntax checks for bindable variables that should have been the same as non-bindable variables. This may produce some new errors that weren't there before (such as duplicate variable names), but they should have been.
- Fixed issue where a type annotation referencing a class with a private constructor was not correctly resolved.
- Improvements/Fixes in Binding support, added support for binding inheritance, similar to Flex.
- (JS) Source map debugging paths of SDK classes are updated to allow breakpoints in the original .as or .mxml files in the SDK when debugging in a browser or IDE.
- (JS) Added source-map-source-root compiler option to optionally customize the source root of source maps.
- (JS) No longer generates @export annotations for exported symbols in debug builds. Exports are smartly generated when creating a release build, and if they are disabled, they will be omitted from framework classes now too. This can help reduce the size of a release build.
- (JS) Fixed issue where compiling a .swc library with another .swc library on the library-path did not copy the required .js files to the new .swc library. Only when a .swc library is added external-library-path should the .js files not get copied.
- (JS) Improved reproducible builds of .swc library files by ensuring that the paths to .js.map source map files are always referenced with forward slash and never backslash. This matches the existing behavior of references to .js files included with .swc libraries.
- (JS) Static getters/setters are not accessed with `["name"]` syntax in generated JavaScript anymore, which required them to always be exported, even if the associated export symbols compiler option were disabled.
- (JS) When internal namespace is used in ActionScript, the generated JavaScript adds the @package annotation.
- (JS) Fixed issue where the Language class was not loaded in the correct order when type coersion is required in a static initializer.
- (JS) (Advanced) Added export-internal-symbols and prevent-rename-internal-symbols compiler options to match the existing options for public and protected namespaces.
- (JS) (Advanced) Added prevent-rename-public-static-methods, prevent-rename-public-instance-methods, prevent-rename-public-static-variables, prevent-rename-public-instance-variables, prevent-rename-public-static-accessors, and prevent-rename-public-instance-accessors compiler options to provide more granular control when prevent-rename-public-symbols is true (same for protected and internal namespaces too).

For additional information on recent issues that have been closed, see [Github Issues List](https://github.com/apache/royale-compiler/issues?q=is%3Aissue+is%3Aclosed)

You can download a [binary distribution](https://royale.apache.org/download/), the [source code](https://royale.apache.org/source-code/) or browse our [GitHub repositories](https://github.com/apache/royale-asjs/wiki/Apache-Royale-Source-Code-Repositories). If you're a NPM user you can check [Apache Royale at NPM](https://www.npmjs.com/org/apache-royale).

As well, you can help us [filing bug reports for issues you encounter in the framework](https://github.com/apache/royale-asjs/issues) or [compiler](https://github.com/apache/royale-compiler/issues).

For questions about how to use Royale, send email to [mailto:users@royale.apache.org](users@royale.apache.org).  For questions and feedback on the development of the source code in the release, send email to [dev@royale.apache.org](mailto:dev@royale.apache.org).

Enjoy! 🙂