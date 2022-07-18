---
title: "Apache Royale v0.9.9 released!"
author: "Yishay Weiss"
date: 2022-03-30
tags: ["blog", "Announcements", "Releases"]
layout: "blog-post.html"
---

The Apache Royale community is pleased to announce the release of **Apache Royale 0.9.9**.

The Apache Royale project is the next generation of the Apache Flex SDK. It lets developers use **MXML** and **ActionScript 3** to generate **HTML/JS/CSS** applications which can run natively in browsers. The cross-compiled code can also run on platforms like **Electron** or **Apache Cordova** (Adobe PhoneGap) to build mobile applications.

This release should be considered 'beta' quality, although _we're very close to a 1.0 release_ and _we have many applications in production_ at this point. The purpose of this release is to continue to gather feedback about Royale's features and the project's implementation strategies, and to recruit new contributors. We hope to grow the code base into an SDK and tool chain that delivers the highest productivity when developing applications that can run on many platforms. Beta releases, however, may not handle all production needs.

## Changes in 0.9.9:

### Apache Royale Framework 0.9.9

- MXRoyale
  - MXRoyale has been split 2 libs : MXRoyaleBase (mostly non-UI code) and MXRoyale (mostly UI code). Users of MXRoyale should see no immediate changes as the build of this swc remains the same.
  - Listen to children's resize events to fix some layout issues
  - Various fixes to measured sizes (ComboBox, and other UI components)
  - Fixes to labels in item renderers not displaying correctly
  - ComboBox prompt fixes
  - ArrayCollection.refresh() updating lists
  - Various fixes to labels in item renderers not showing correctly
  - Add option to add custom header renderers to data grids
  - Fix issues with Menu.show() when receiving non-null parent arguments
  - Improve emulation of ADG's expand/collapse behavior
- SparkRoyale
  - ComboBox sizing improvements
- Basic
  - Improvements to DragBead's out of bounds behavior
- RoyaleUnit
  - Fix coercion error in MetadataRunner when expecting an exception in a test, like [Test(expected="RangeError")]
- Reflection
  - getQualifiedSuperclassName() can find the superclass of a Class object in JS, matching the behavior of SWF
- Examples
  - Ace example running in Maven
  - Added Jewel TriStateCheckBox example in [Tour De Jewel](https://royale.apache.org/tourdejewel/)
- Jewel
  - Improved:
    - Added emphasized and secondary sass settings for Jewel CheckBox / Switch
  - New:
    - Added Jewel TriStateCheckBox and some associated beads: TriStateCheckBoxTooltipState, TriStateCheckBoxState
    - Added ComboBoxReadOnly bead
- Icons
  - Icon constants have been added to MaterialIconType and FontAwesome5IconType
- Dozens of bugs reported, investigated, and squashed. For details of closed bug reports see [GitHub Issues list](https://github.com/apache/royale-asjs/issues?q=is%3Aissue+is%3Aclosed).

### Apache Royale Compiler 0.9.9

- **asformat** is a new command line code formatter for ActionScript and MXML, with a programmatic API for use in editors and IDEs.
- Added a boolean new compiler option `compiler.mxml.force-local-id` - (short commandline form `force-local-id`). This is a quick way to avoid propagating id attributes to browser DOM in JSRoyale. 
- (JS) Added new string compiler options `js-getter-prefix` and `js-setter-prefix` to optionally specify different prefixes to use instead of 'get_' and 'set_' for accessors in the generated JavaScript. Useful for integrating with JS libraries/languages that use a different naming convention.
- (JS) Fix for `@royalesuppressexport` feature which had stopped working
- (JS) Fix for `mx.managers.SystemManager` subclass not being generated for applications that were not direct subclasses of the relevant application classes.
- (JS) Improvement in output of locale properties files as ResourceBundles. Now using original Flex/SWF parsing approach for improved parity.
- (JS) First implementation of multiple-catch support in Javascript
- (JS) Added unsafe option for outputting literal javascript (via externally defined jsUnsafeNativeInline function)
- Fixed `<!---->` in MXML being incorrectly detected as an unclosed ASDoc comment, instead of an empty regular comment.
- (JS) Improved the generated JavaScript for `if`, `else if`, and `else` statements that contained only a semicolon and no braces.
- (JS) Generated JavaScript for `parseInt()` passes `0` instead of `undefined` for radix argument to avoid number format exception.
- (JS) Fixed several issues with generated JavaScript for E4X expressions when using `js-dynamic-access-unknown-members` compiler option.
- (JS) Fixed a couple of issues with generated JavaScript when using custom namespaces.
- Fixed missing `[Event]` metadata in playerglobal.swc classes generated from documentation.
- Fixed parse exception when binding to XML.

For additional information on recent issues that have been closed, see [Github Issues List](https://github.com/apache/royale-compiler/issues?q=is%3Aissue+is%3Aclosed)

You can download a [binary distribution](https://royale.apache.org/download/), the [source code](https://royale.apache.org/source-code/) or browse our [GitHub repositories](https://github.com/apache/royale-asjs/wiki/Apache-Royale-Source-Code-Repositories). If you're a NPM user you can check [Apache Royale at NPM](https://www.npmjs.com/org/apache-royale).

As well, you can help us [filing bug reports for issues you encounter in the framework](https://github.com/apache/royale-asjs/issues) or [compiler](https://github.com/apache/royale-compiler/issues).

For questions about how to use Royale, send email to [mailto:users@royale.apache.org](users@royale.apache.org).  For questions and feedback on the development of the source code in the release, send email to [dev@royale.apache.org](mailto:dev@royale.apache.org).

Enjoy! 🙂