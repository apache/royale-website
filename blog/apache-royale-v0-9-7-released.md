---
title: "Apache Royale v0.9.7 released!"
author: "Carlos Rovira"
date: 2020-05-15
tags: ["blog", "Announcements", "Releases"]
layout: "blog-post.html"
---

The Apache Royale community is pleased to announce the release of **Apache Royale 0.9.7**.

![](/img/blog/release-0.9.7.png)

The Apache Royale project is the next generation of the Apache Flex SDK. It lets developers use **MXML** and **ActionScript 3** to generate **HTML/JS/CSS** applications which can run natively in browsers. The cross-compiled code can also run on platforms like **Electron** or **Apache Cordova** (Adobe PhoneGap) to build mobile applications.

This release should be considered 'beta' quality, although _we're very close to a 1.0 release_ and _we have many applications in production_ at this point. The purpose of this release is to continue to gather feedback about Royale's features and the project's implementation strategies, and to recruit new contributors. We hope to grow the code base into an SDK and tool chain that delivers the highest productivity when developing applications that can run on many platforms. Beta releases, however, may not handle all production needs.

## Changes in 0.9.7:

### Apache Royale Framework 0.9.7

- Reflection support improved (supports access to custom namespaces) including improved utility methods
- Added a `getTimer` emulation to Core library, similar to `flash.utils.getTimer`
- added `[RoyaleArrayLike]` implementation support to Royale Collections, and BinaryData
- improvements to XML/E4X conformance, and memory footprint
- General improvements in Bindings, including function bindings
- Added new Router classes
- Added AMFLocalStorage, a javascript version of the Flash runtime LSO (Local Shared Object)
- Added new ItemRendererInitializer bead infrastructure to decouple better item renderers functionality
- Added ToolTipRemovalWhenItemRemoved for renderers that use tooltips.
- Fix bin/mxmlc and bin/compc scripts that did not understand certain default compiler options in royale-config.xml
- Crux:
  - Improved:
    - Crux can now be used in MXRoyale and SparkRoyale applications
  - New:
    - Added support for using Command pattern to Crux
    - Added Documentation in royale-docs site
- Graphics:
  - New:
    - Added new high-parity swf graphics emulation (UIGraphicBase)
- Jewel:
  - Improved:
    - Massive refactors and improvments
    - Hierachy improved in many Jewel framework branches to make StyleUIBase the base of all components and unify APIs.
    - StyleUIBase now improve width and height so we can use NaN values to unset values. For JS this means return to default values.
    - Card: Added new subcomponents (CardHeader, CardTitle, CardPrimaryContent and CardActions)
    - Button: Added new unboxed and outlined styles (also to IconButton and ToggleButton)
    - CheckBox and RadioButton now can size the icon part
    - ComboBox can now confifure custom renders and supports rowCount, and fixed percent width. also popup adapts to data provider length.
    - List supports now variableRowHeight, scrollToIndex and can be navigated with arrow cursors (up/down)
    - Item Renderer: Use the new Initializer infrastructure
    - Remove mappers to rely on basic ones, also remove CRUD beads (Add, Remove and Update item beads)
    - Layouts, Group and Container supports variableRowHeight
    - Layouts many fixes and improvements in alignment, and now dispatch childs dispatch a "sizeChanged"
    - Viewport and ScrollingViewport refactor. Viewport has now clipContent so Container can activate/deactivate
    - added tabindex in many components and to Disabled bead (=-1)
    - Prompt beads now support changes at runtime
    - TabBar: fix AssignTabContent bead when change dataprovider
    - Jewel Themes was updated to show many visual improvements in colors and styles. Flat and Light themes are almost finished. Still Dark themes are work in progress.
    - [Tour De Jewel](https://royale.apache.org/tourdejewel/) was updated to show all the latest updates
  - New:
    - Runtime Theme Switch. Can be seen working in Tour De Jewel
    - StyledUIBase now adds min and max width and height properties.
    - Added VSlider. The original Slider is now HSlider.
    - Added Paddings bead
    - Added VContainer and HContainer for clipped content
    - Added DataGrid
    - Added ButtonBar
    - Added ComboBoxTrucatedText
    - Added DrawerFooter
    - Added VirtualList and VirtualComboBox to load huge amounts of data in a performant way
    - New colors for text and icons (lightest, light, normal, dark and darkest)
    - Added Jewel TodoMVC and TodoMVC with Crux examples following the TodoMVC website guidelines. Also added more blog examples.
- Icons
  - Refactored classes IIcon classes to support more icons sets
  - Added FontAwesome v5 support (also v4)
  - Icons now support Material and FontAwesome (more sets can be added)
- SVG:
    - Fixed SVGImage when using Maven
- Network:
  - Improved:
    - URLLoader now respects contentType passed in via URLRequest.
  - New:
    - Added URLVariables emulation
- MXRoyale:
  - Improved:
    - mx.utils.ObjectUtil – improved parity
    - mx.net.SharedObject – improved parity
    - add support for legacy HttpService decoding format
    - Fixes in mx.messaging for polling support, mx.external.ExternalInterface
  - New:
    - mx.net.SharedObjectJSON – new alternative
- Maven:
  - Massive improvements
  - Now Maven can generate a valid distribution (SDK) to use in any IDE (tested on VSCode and Moonshine)
distribution can be JS only
  - SASS generation is now separated from main build to a profile to save lots of time when no need to build themes
- RoyaleUnit:
  - `[Test(async)]` may be used to define asynchronous tests
  - `[BeforeClass]` and `[AfterClass]` metadata must be added to static methods
  - `[Test]` metadata supports an 'expected' attribute to expect a thrown exception
  - Fixed incorrect order of expected and actual values in assert messages
- RoyaleUnitUI: An optional UI to display the results of RoyaleUnit tests
- Dozens of bugs reported, investigated, and squashed. For details of closed bug reports see [GitHub Issues list](https://github.com/apache/royale-asjs/issues?q=is%3Aissue+is%3Aclosed).

Updates to the _RELEASE_NOTES_ made after this file was packaged into the release artifacts can be found here:

[https://github.com/apache/royale-asjs/wiki/Release-Notes-0.9.7](https://github.com/apache/royale-asjs/wiki/Release-Notes-0.9.7)

### Apache Royale Compiler 0.9.7

- Definitions containing `[JSModule]` with a custom module name are no longer required to use strict camelCase naming scheme.
- Added Flex emulation RPC WebService partial support
- Fix add event handler code in renderers and inline Components
- (SWF/JS) Added support for `[RoyaleArrayLike]` metadata-driven support for proxying compile-time numeric-typed array index access to get/set method calls and also specific for-in/for-each-in loop support.
- (JS) Compiler updates to support more e4X variations/scenarios, including 'use namespace' and 'default xml namespace' directives
- (JS) Compiler updates to address custom namespace-related output, and reflection support
- (JS) Compiler updates to output more compact Reflection data
- Fixed a compiler memory leak that was occurring over multiple compilations
- Fixes in bindable code generation for accessors, and in bindable function generation for swf
- Fixed `-show-binding-warnings=false` option to switch off binding warnings
- Maven: Many fixes, improvements and Updates
- Support for Maven distribution (Create SDK with Maven)
- (JS) Prevent renaming of public variables in release builds so that they may be set from MXML.
- (JS) Fix conflict between methods of the same name in superclass and subclass, where the superclass method is private and the subclass method is public.
- (JS) Added `-jsx-factory` compiler option to customize the factory method used in code generated from [JSX].
- (JS) Added `-inline-constants` compiler option that optionally replaces references to contants with their value when the value is a primitive (like numeric, boolean, or string).
- (SWF/JS) Added `-warn-this-within-closure` compiler option that controls whether the compiler emits warnings when referencing `this` in closures or anonymous functions.
- (SWF/JS) Added `-strict-identifier-names` compiler option to make the compiler emit errors when using certain keywords as identifiers, to match the old behavior of the Flex SDK compiler.
- (SWF/JS) Fix metadata attributes being ignored if they did not have a value. Example: async was ignored in `[Test(async)]`.
- (SWF/JS) Fix path resolving error when specifying a source file with ./ or .\ on the command line.
- (SWF/JS) Fix `[ArrayElementType]` being ignored when setting the `[DefaultProperty]` in MXML.
- (SWF) Fix mxmlc and compc scripts in the bin folder that didn't work from the command line.
- (SWF/JS) Fix incorrect resolving of a property with a different namespace than the parent element in MXML. Properties must have the same namespace as the component, just like in Flex.
- (SWF/JS) Fix missing error for values that cannot be parsed as text in MXML.
- (JS) Fix stripped end quotes from strings in data binding expressions in MXML.
- (Maven) Added missing MXML manifest for core language types like Object, Array, Number, String, Boolean, etc.
- (JS) Fixed null reference error on source map generation with certain folder hierarchies.
- (JS) Fixed lost UTF-8 encoding when using remove-circulars.
- (SWF/JS) Fix missing error when setting private/inaccessible property in MXML.
- (JS) Fix "missing var keyword" warning from Closure compiler for type definitions.
- (SWF/JS) Fix missing error for calling a getter as a function (similar to attempting to call a variable as a function) when it is the wrong type.
- (JS) Fix missing . in generated JS when using static getter/setter in a custom namespace.

For additional information on recent issues that have been closed, see [Github Issues List](https://github.com/apache/royale-compiler/issues?q=is%3Aissue+is%3Aclosed)

You can download a [binary distribution](https://royale.apache.org/download/), the [source code](https://royale.apache.org/source-code/) or browse our [GitHub repositories](https://github.com/apache/royale-asjs/wiki/Apache-Royale-Source-Code-Repositories). If you're a NPM user you can check [Apache Royale at NPM](https://www.npmjs.com/org/apache-royale).

As well, you can help us [filing bug reports for issues you encounter in the framework](https://github.com/apache/royale-asjs/issues) or [compiler](https://github.com/apache/royale-compiler/issues).

For questions about how to use Royale, send email to [mailto:users@royale.apache.org](users@royale.apache.org).  For questions and feedback on the development of the source code in the release, send email to [dev@royale.apache.org](mailto:dev@royale.apache.org).

Enjoy! 🙂