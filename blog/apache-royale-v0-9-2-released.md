---
title: "Apache Royale v0.9.2 released!"
author: "Carlos Rovira"
date: 2018-03-19
tags: ["blog", "Announcements", "Releases"]
layout: "blog-post.html"
---

The Apache Royale community is pleased to announce the release of Apache Royale 0.9.2.

![](/img/blog/release-0.9.2.png)

The Apache Royale project is a continuation of the previous effort called FlexJS to produce a next-generation of the Apache Flex SDK that enables developers to use MXML and ActionScript to generate HTML/JS/CSS applications which can run natively in browsers. The cross-compiled code can also be used in Apache Cordova (Adobe PhoneGap) mobile applications.

This release should be considered 'beta' quality. The purpose of this release is to gather feedback about the features and implementation strategies, and to recruit new contributors. We hope to grow the code base into an SDK and tool chain that delivers the highest productivity when developing applications that can run on many platforms. Beta releases may not handle production needs.

## Changes in 0.9.2:

- Added [ApplicationParametersBead and ApplicationParametersCaseInsensitiveBead](https://github.com/apache/royale-asjs/issues/129)
- Added virtual item renderer management for fixed row height vertical lists.
- Added Menu and MenuBar
- Added DividedBox
- Many CSS default values are now in the basic.css theme.
- Theme support. Now compiler will copy all resources in "assets" folder to target
- Added JSON2ASVO, a utility that creates AS classes from a JSON result
- Added JSONReviver, a class that converts JSON to AS classes sort of like AMF
- Added HScrollViewport
- Added VScrollViewport
- Fixed bugs in XML parsing and converting back to strings
  - https://github.com/apache/royale-asjs/issues/120
  - https://github.com/apache/royale-asjs/issues/121
  - https://github.com/apache/royale-asjs/issues/122
  - https://github.com/apache/royale-asjs/issues/123
- Fixed Maven distribution so you can use in IDEs like VSCode, Moonshine and more.
  - https://github.com/apache/royale-asjs/issues/125

You can see more [here](https://github.com/apache/royale-asjs/blob/develop/RELEASE_NOTES.md).

You can download a [binary distribution](https://royale.apache.org/download/), the [source code](https://royale.apache.org/source-code/) or browse our [GitHub repositories](https://github.com/apache/royale-asjs/wiki/Apache-Royale-Source-Code-Repositories). If you're a NPM user you can check [Apache Royale at NPM](https://www.npmjs.com/org/apache-royale).

As well, you can help us [filing bugs in the framework](https://github.com/apache/royale-asjs/issues) or [compiler](https://github.com/apache/royale-compiler/issues).

For questions about how to use Royale, send email to [mailto:users@royale.apache.org](users@royale.apache.org).  For questions and feedback on the development of the source code in the release, send email to [dev@royale.apache.org](mailto:dev@royale.apache.org).

Enjoy! 🙂