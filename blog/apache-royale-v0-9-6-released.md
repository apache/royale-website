---
title: "Apache Royale v0.9.6 released!"
author: "Carlos Rovira"
date: 2019-10-08
tags: ["blog", "Announcements", "Releases"]
layout: "blog-post.html"
---

The Apache Royale community is pleased to announce the release of **Apache Royale 0.9.6**.

![](blog/release-0.9.6.png)

The Apache Royale project is the next generation of the Apache Flex SDK. It lets developers use **MXML** and **ActionScript 3** to generate **HTML/JS/CSS** applications which can run natively in browsers. The cross-compiled code can also run on platforms like **Electron** or **Apache Cordova** (Adobe PhoneGap) to build mobile applications.

This release should be considered 'beta' quality, although _we're very close to a 1.0 release_ and _we have many applications in production_ at this point. The purpose of this release is to continue to gather feedback about Royale's features and the project's implementation strategies, and to recruit new contributors. We hope to grow the code base into an SDK and tool chain that delivers the highest productivity when developing applications that can run on many platforms. Beta releases, however, may not handle all production needs.

## Changes in 0.9.6:

### Apache Royale Docs

- We have restructured and largely rewritten the online documentation. It now contains reference pages for components and code, and links to Apache Royale ([ASDoc](https://royale.apache.org/asdoc/)) references to help new users get up to speed with Royale. Check it out [here](https://apache.github.io/royale-docs/).

### Apache Royale Framework 0.9.6

- Compiles faster.
- For applications targeting JavaScript, you can now incorporate the vast resources available in existing, free JavaScript libraries.
- Many additional components are available:
  - for the Jewel component set, Wizard, PopUp, TabBar, Module, ModuleLoader, FooterBar, Badge, ScrollableSectionContent, and HorizontalListScroll are now available.
- Emulations of many other components are available.
- Many improvements and fixes in the Jewel component set:
  - Full implementation of DateField/DateChooser.
  - Components now work correctly on IE11 and on Android/iOS mobile devices.
  - Many improvements to all themes, such as styles for new components and a disabled style that was missing in some components.
  - Many beads have been added for Jewel components:
    - Search filter bead for Jewel ComboBox
    - SearchFilterForList bead to use with Jewel List and TextInput
     - RequiredSelection for DropDownList
  - Improvements to how your application handles focus.
  - Button now extends from the new BasicButton.
- Many improvements to the Tour De Jewel demo app to show components and beads introduced in this version.
- Added BrowserOrientation bead.
- Added loadCSS, to load external CSS dynamically.
- Added generation of source-maps to all Royale libs for better debugging of framework code.
- Added new [RoyaleUnit](https://apache.github.io/royale-docs/testing/royaleunit.html) library for unit testing.
- Improvements to AMF / RemoteObject Support.
- AMFBinaryData api now matches flash.utils.ByteArray (one missing feature is support for non-UTF String encoding). It therefore now works for deep cloning via readObject/writeObject and registerClassAlias.
- Updates to the Royale collections library with support for sorting and filtering via ArrayListView. Simple example added to Tour de Jewel.
- A conforming runtime implementation of AS3 Vector (typed Arrays) was added for JavaScript output, with options for avoiding certain runtime checks.
- int, uint, and Class are now represented as simple, distinct types (Class is now not an 'Object' and int is now not a 'Number', for example), and these support indirect 'as' or 'is' type checking and instantiation, matching swf behavior.
- General improvements and additions to the Reflection library.
- A new Apache Royale Crux MVC/DI/IOC application architecture library (based on the Swiz framework that was popular in Flex development) was added, with some simple examples.
- Added and updated documentation in many areas of the [ASDoc reference](https://royale.apache.org/asdoc/).
- Dozens of bugs reported, investigated, and squashed. For details of closed bug reports see [GitHub Issues list](https://github.com/apache/royale-asjs/issues?q=is%3Aissue+is%3Aclosed).

### Apache Royale Compiler 0.9.6

- Added `-allow-abstract-classes` compiler option to enable abstract keyword for classes and methods.
- Added `-allow-private-constructor`s compiler option to enable classes with private constructors.
- Added `-allow-import-aliases` compiler option to enable import-renaming syntax.
- Added `-verbose` compiler option to reduce console output by default.
- Added RoyaleUnit tasks for Apache Ant.
- Fixed incorrect compiler error when unicodeRange value is specified for Embed metadata.
- Fixed missing compiler error when adding type parameters to classes other the Vector.
- Fixed missing compiler error for instantiation of a variable with new that is not typed as Class or Function.
- Fixed missing compiler warning for missing types on function parameter.
- Fixed internal cache that broke IDEs that use the compiler to provide code intelligence.
- Fixed automatic type coercion in generated JavaScript so that it better matches SWF behavior.

Updates to the _RELEASE_NOTES_ made after this file was packaged into the release artifacts can be found at this [link](https://github.com/apache/royale-asjs/wiki/Release-Notes-0.9.6). You can see more [here](https://github.com/apache/royale-asjs/blob/develop/RELEASE_NOTES.md).

You can download a [binary distribution](https://royale.apache.org/download/), the [source code](https://royale.apache.org/source-code/) or browse our [GitHub repositories](https://github.com/apache/royale-asjs/wiki/Apache-Royale-Source-Code-Repositories). If you're a NPM user you can check [Apache Royale at NPM](https://www.npmjs.com/org/apache-royale).

As well, you can help us [filing bug reports for issues you encounter in the framework](https://github.com/apache/royale-asjs/issues) or [compiler](https://github.com/apache/royale-compiler/issues).

For questions about how to use Royale, send email to [mailto:users@royale.apache.org](users@royale.apache.org).  For questions and feedback on the development of the source code in the release, send email to [dev@royale.apache.org](mailto:dev@royale.apache.org).

Enjoy! 🙂