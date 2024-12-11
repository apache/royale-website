---
title: "Apache Royale v0.9.12 released!"
author: "Josh Tynjala"
date: 2024-12-11
tags: ["blog", "Announcements", "Releases"]
layout: "blog-post.html"
---

The Apache Royale community is pleased to announce the release of **Apache Royale 0.9.12**.

The Apache Royale project is the next generation of the Apache Flex SDK. It lets developers use **MXML** and **ActionScript 3** to generate **HTML/JS/CSS** applications which can run natively in web browsers. The cross-compiled code can also run on platforms like **Electron** or **Apache Cordova** to build desktop or mobile applications.

This release should be considered 'beta' quality, although _we're very close to a 1.0 release_ and _we have many applications in production_ at this point. The purpose of this release is to continue to gather feedback about Royale's features and the project's implementation strategies, and to recruit new contributors. We hope to grow the code base into an SDK and tool chain that delivers the highest productivity when developing applications that can run on many platforms. Beta releases, however, may not handle all production needs.

## Changes in 0.9.12:

### Apache Royale Framework 0.9.12

- Basic
  - Make shift click aware of the first selection in `ListMultiSelectionMouseController`.
  - Added `ReusableDataItemRendererFactoryForCollectionView` for reusable item renderers.
  - Fixed exception in `StyleInheritanceWithObserverBead` due to attempting to set style inheritance on non-element (e.g. Text) descendant nodes under the strand.
  - `ContainerView` Checks the type on adding to strand and not on every `contentView` access
  - Optimized closing tree nodes.

- Core
  - Added `removeDynamicSelector` method. Removes a CSS selector dynamically at runtime.
  - Added support for native `PointerEvent`.
  - Added `toDecimals` utility method.
  - Fixed "click" not being converted to Royale `MouseEvent`.

- Graphics
  - Fixed `PathBuilder` using out of range radius values when drawing rounded rectangles.

- Icons
  - Added `FontAwesome6IconType` with Font Awesome 6 icons.
  - Added new icons to `MaterialIconType` and `FontAwesome5IconType`.

- Jewel
  - Added `RestrictRegExp` bead, which is essentially a copy of Restrict, but with RegExp property.
  - Added `RestrictValidator` for validation based on StringValidator capabilities and RegExp pattern.
  - Added ability to dynamically assign `itemRenderer` to `DataGridColumn`
  - Added ability to extend and override `SnackbarView` in `Snackbar`.
  - Added `ComboBoxListWidth` bead to set ComboBox List width.
  - Fixed issue in `DateChooser` where next/previous buttons without text setup property were sized incorrectly.
  - Fixed font size alignment in `RadioButton`.

- MXRoyaleBase
  - Added missing `mx.messaging.Producer` to MXML manifest.
  - Ensure that `SecureHTTPChannel`, `AMFChannel`, and `SecureAMFChannel` are included in SWC.

- MXRoyale
  - Added event when tool tip changes.
  - Fixed tooltip getting created twice.
  - Fixed `Bitmap` class for embedding compatibility with Flex.

- Network
  - Added `execute()` method to `HttpRequestTask`.
  - Fixed creation of loader in `HttpRequestTask`.
  - Fixed `BinaryUploader` POST data sent to server.
  - Made response headers accessible from `URLBinaryLoader` and `URLStream`.

- XML
  - Improve performance of getting descendants.
  - Added index to XMLList prototype instead of instances to prevent GC thrashing.

- Fixed broken download locations for _playerglobal.swc_ and Adobe AIR SDK in _InstallAdobeSDKs.xml_ script.
- Compiler and command line tools now require Java 11 or newer to run.
- Dozens of bugs reported, investigated, and squashed. For details of closed bug reports see [GitHub Issues list](https://github.com/apache/royale-asjs/issues?q=is%3Aissue+is%3Aclosed).

### Apache Royale Compiler 0.9.12

- compiler: Added new `--infer-types` compiler option that allows the compiler to automatically detect an appropriate type for both variables and function signatures that have omitted their declared types. Type inference is based on either the initializer or return values.
- compiler: Abstract classes now support abstract getter and setter methods.
- compiler: Added `--strict-flex-css` compiler option to optionally enable CSS syntax limitations that match Flex.
- compiler: Improved type checking for `&&` and `||` binary operators and `?:` ternary operator.
- compiler: Removed obsolete "AMD" and "Goog" JavaScript backends, and finished some refactoring to make codebase easier to maintain.
- compiler: Now requires Java 11 or newer to run. Previously required Java 8 minimum.
- compiler: Updated various Java dependencies with security updates.
- compiler: Fixed some Flex SDK integration tests that had been failing for a while.
- compiler: Fix parsing of `<arguments>` or `<request>` properties for `RemoteObject`, `WebService`, or `HTTPService` tags in MXML.
- compiler: Fix missing warning for duplicate function parameter names.
- compiler: Fix missing error for multiple root nodes in `<fx:Model>` tag.
- compiler: Fix missing errors for invalid MXML manifest files.
- compiler: Fix null exception when emitting JavaScript if a variable is untyped or function doesn't have a return type
- compiler: Fix exception for multiple intializers in an MXML field tag.
- compiler: Fix column position of string inside metadata.
- compiler: Fix exception when an event attribute in MXML is missing `=` and quotes.
- compiler: Fix unnecessary warning when reading SWF data that contains `EnableTelemetry` tag without a password.
- compiler: Fix backslash as an escape character for `{` and `}` inside MXML data binding.
- compiler: Fix backslash characters being unescaped in property values when emitting JavaScript.
- compiler: Fix overflow exception caused by `uint` values that overflowed an integer in the compiler.
- compiler: Fix incorrect error or warning positions for CSS content inside `<fx:Style>` tag.
- compiler: Fix non-string values in an MXML array sometimes getting incorrectly wrapped in quotes when emitting JavaScript.
- compiler: Fix null exception for `<fx:Style>` tags that contain only comments.
- compiler: Fix exceptions for `<fx:Style>` tags and _defaults.css_ files that contain invalid CSS.
- compiler: Fix silently ignoring errors in some invalid CSS content, if it appears at the end after valid content.
- compiler: Fix crash when attempting to use `--remove-circulars=false` with a release build.
- compiler: Added CSS support for modern syntax without commas in `rgb` and `rgba` functions.
- compiler: Added CSS support for `radial-gradient`, `conic-gradient`, and repeating gradient functions in JS.
- compiler: Added CSS support for several translate, rotate, scale, skew, and matrix transformation functions in JS.
- compiler: Add CSS support for declaring custom properties (CSS variables) and using `var` function in JS.
- compiler: Fix crash when `[Style]` is of type `Object` and value is passed in MXML.
- compiler: Fix null pointer exception when omitting quoted `<fx:Style>` value for `source` attribute.
- compiler: Fix null pointer exception when omitting quoted `<fx:Binding>` value for `source`, `destination`, and `twoWay` attributes.
- compiler: Fix null pointer exception when omitting quoted `<fx:Vector>` value for `fixed`, and `type` attributes.
- compiler: Fix missing problem for invalid `twoWay` value for `<fx:Binding>` tag.
- compiler: Fix exception for unexpected attributes added to `<fx:Array>` and `<fx:Vector>` tags.
- compiler: Changed to better problem message when MXML `implements` attribute is empty.
- compiler: Fix exception when assigning to a property that has a getter, but not a setter.
- compiler: Fix exception when working with certain namespace expressions.
- compiler: Fix configuration problems not being reported when compc options are passed to mxmlc.
- compiler: Fix source maps for fields and methods in the private namespace or custom namespaces.
- compiler: Fixed end line and end column of numeric literal with `+` or `-` sign.
- compiler: Fixed lines and columns of function body.
- compiler: Added support for Friendly Call Frames in source maps.
- compiler: Fixed missing warning for assignment in `else if` conditional.
- compiler: Fixed missing warnings for assignment, return, and comparison of `null`, `undefined`, and `NaN` values with other values that could never possibly be compatible.
- compiler: Fixed missing errors when calling objects as functions that can never possibly be callable.
- compiler: Add `[RoyaleCallableInstances]` metadata to allow instances of a typedef class to be callable as functions. Used by jQuery externs.
- compiler: Fixed incorrect conflicting definition error when a method in a language namespace (like public/protected) has the same name as a method in a custom namespace.
- debugger: Fix exception when evaluating certain expressions at run-time.
- formatter: Added `insert-new-line-else` configuration option.
- formatter: Filtered out unnecessary compiler warnings.
- formatter: Fix stack overflow on some platforms when `<fx:Script>` code is large enough.
- formatter: Fix missing indent after empty object literal when `collapse-empty-blocks` is true (it's not a block).
- formatter: Fix Unicode and ASCII escape sequences getting lost when formatting string literals.
- formatter: Fix formatting for configuration constants that gate definitions (like types or fields) without braces.
- formatter: Fix formatting for object literal inside parentheses.
- formatter: Fix ignored formatting when file contains unresolved configuration constants.
- formatter: Fix formatting for comments on same line as control flow that doesn't have braces.
- formatter: Fix _asformat-config.xml_ file being ignored.
- formatter: Fix ignored implicit semicolon being formatted as `null`.
- formatter: Fix formatting for comment between brace and `else`.
- formatter: Fix formatting of unary operators that (depending on context) may also be arithmetic operators.
- formatter: Fix formatting for switch/case inside for-each or for-in loop.
- linter: Fix implicit semicolon incorrectly detected as an empty statement that should be removed (it can't be removed).
- linter: Fix MXML linter being incorrectly used for _.as_ files and AS3 linter being incorrectly used for _.mxml_ files.
- Building royale-compiler now requires JDK 11 or newer.

For additional information on recent issues that have been closed, see [Github Issues List](https://github.com/apache/royale-compiler/issues?q=is%3Aissue+is%3Aclosed)

You can download a [binary distribution](https://royale.apache.org/download/), the [source code](https://royale.apache.org/source-code/) or browse our [GitHub repositories](https://github.com/apache/royale-asjs/wiki/Apache-Royale-Source-Code-Repositories). If you're a NPM user you can check [Apache Royale at NPM](https://www.npmjs.com/org/apache-royale).

As well, you can help us [filing bug reports for issues you encounter in the framework](https://github.com/apache/royale-asjs/issues) or [compiler](https://github.com/apache/royale-compiler/issues).

For questions about how to use Royale, send email to [mailto:users@royale.apache.org](users@royale.apache.org).  For questions and feedback on the development of the source code in the release, send email to [dev@royale.apache.org](mailto:dev@royale.apache.org).

Enjoy! 🙂
