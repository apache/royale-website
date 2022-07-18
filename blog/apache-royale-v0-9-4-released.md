---
title: "Apache Royale v0.9.4 released!"
author: "Carlos Rovira"
date: 2018-12-10
tags: ["blog", "Announcements", "Releases"]
layout: "blog-post.html"
---

The Apache Royale community is pleased to announce the release of Apache Royale 0.9.4.

![](/img/blog/release-0.9.4.png)

The Apache Royale project is a continuation of the previous effort called FlexJS to produce a next-generation of the Apache Flex SDK that enables developers to use MXML and ActionScript to generate HTML/JS/CSS applications which can run natively in browsers. The cross-compiled code can also be used in Apache Cordova (Adobe PhoneGap) mobile applications.

This release should be considered 'beta' quality. The purpose of this release is to gather feedback about the features and implementation strategies, and to recruit new contributors. We hope to grow the code base into an SDK and tool chain that deliver the highest productivity when developing applications that can run on many platforms. Beta releases may not handle production needs.

In 0.9.4 you can find important additions like a full new UI set called **Jewel** that's ready for production. This new set was designed with look and feel / themes in mind, so you can have a cool interface out of the box just using Jewel. Another great addition is bringing full **AMF/RemoteObject** support to Apache Royale so you can ease your migration from Apache Flex.

We are also working hard on MX and Spark **emulation** components that will help make your migration of an existing Apache Flex application a breeze. Many people are contributing to this effort, but more are welcome: please help us develop this powerful feature.

## Changes in 0.9.4:

- [Better way to style components: ClassSelectorList](https://github.com/apache/royale-asjs/issues/205)
- [Fixed AMF / RemoteObject support](https://github.com/apache/royale-asjs/issues/204)
- [Added New Jewel UI set And first 72 Jewel Themes, 12 Colors, Light and Dark (Initial work).](https://github.com/apache/royale-asjs/issues/154)
- [Renamed TextOverflow bead to EllipsisOverflow. It now supports Label elements as well.](https://github.com/apache/royale-asjs/issues/130)
- [Added IEEventAdapterBead.](https://github.com/apache/royale-asjs/issues/131)
- [Added Object getter/setter utility functions.](https://github.com/apache/royale-asjs/issues/132)
- [Added InfiniteVScroller Bead.](https://github.com/apache/royale-asjs/issues/134)
- Initial release of the migration component sets (MXRoyale and SparkRoyale) that have a goal of reducing the effort for those moving existing Flex applications to Royale.
- Initial release of the Tour de Flex example migrated to Royale via the migration component sets. This is a work in progress. You can see the latest version running on our [CI server.](http://apacheroyaleci.westus2.cloudapp.azure.com:8080/job/TourDeFlexMigration/lastSuccessfulBuild/artifact/examples/mxroyale/tourdeflexmodules/bin/js-debug/index.html)

### Known Issues:

- Users only using Basic components and not MXRoyale or SparkRoyale emulation components should delete _frameworks/libs/MXRoyale.swc_, _frameworks/libs/SparkRoyale.swc_, _frameworks/js/libs/MXRoyaleJS.swc_, and _frameworks/js/libs/SparkRoyaleJS.swc_ from their library paths (or from the file system).

Updates to the _RELEASE_NOTES_ discovered after this file was packaged into the release artifacts can be found here:

[https://github.com/apache/royale-asjs/wiki/Release-Notes-0.9.4](https://github.com/apache/royale-asjs/wiki/Release-Notes-0.9.4)


You can see more [here](https://github.com/apache/royale-asjs/blob/develop/RELEASE_NOTES.md).

You can download a [binary distribution](https://royale.apache.org/download/), the [source code](https://royale.apache.org/source-code/) or browse our [GitHub repositories](https://github.com/apache/royale-asjs/wiki/Apache-Royale-Source-Code-Repositories). If you're a NPM user you can check [Apache Royale at NPM](https://www.npmjs.com/org/apache-royale).

As well, you can help us [filing bugs in the framework](https://github.com/apache/royale-asjs/issues) or [compiler](https://github.com/apache/royale-compiler/issues).

For questions about how to use Royale, send email to [mailto:users@royale.apache.org](users@royale.apache.org).  For questions and feedback on the development of the source code in the release, send email to [dev@royale.apache.org](mailto:dev@royale.apache.org).

Enjoy! 🙂