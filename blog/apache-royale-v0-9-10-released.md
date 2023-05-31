---
title: "Apache Royale v0.9.10 released!"
author: "Yishay Weiss"
date: 2023-05-31
tags: ["blog", "Announcements", "Releases"]
layout: "blog-post.html"
---

The Apache Royale community is pleased to announce the release of **Apache Royale 0.9.10**.

The Apache Royale project is the next generation of the Apache Flex SDK. It lets developers use **MXML** and **ActionScript 3** to generate **HTML/JS/CSS** applications which can run natively in browsers. The cross-compiled code can also run on platforms like **Electron** or **Apache Cordova** (Adobe PhoneGap) to build mobile applications.

This release should be considered 'beta' quality, although _we're very close to a 1.0 release_ and _we have many applications in production_ at this point. The purpose of this release is to continue to gather feedback about Royale's features and the project's implementation strategies, and to recruit new contributors. We hope to grow the code base into an SDK and tool chain that delivers the highest productivity when developing applications that can run on many platforms. Beta releases, however, may not handle all production needs.

## Changes in 0.9.10:

### Apache Royale Framework 0.9.10

- RoyaleUnit
  - Added BDD-style expect() method for natural language assertions
  - Added a number of new asserts, including checks for NaN, less than, greater than, less or equal, greater or equal, within range, is of type, throws exception, and matches regular expression.
- MXRoyale
  - Various bug fixes
- Jewel
  - Various bug fixes
- Dozens of bugs reported, investigated, and squashed. For details of closed bug reports see [GitHub Issues list](https://github.com/apache/royale-asjs/issues?q=is%3Aissue+is%3Aclosed).

### Apache Royale Compiler 0.9.10

- **aslint** is a new command line code linter for ActionScript and MXML, with a programmatic API for use in editors and IDEs.
- compiler: Added `--watch` compiler option that keeps compiler active and incrementally compiles when changes to _.as_ and _.mxml_ files are detected. You may exit with Ctrl+C.
- compiler: Added support for `??` null coalescing operator to ActionScript.
- compiler: Added support for `?.` null conditional operator to ActionScript.
- compiler: Added support for `@""` verbatim strings to ActionScript.
- compiler: Fix JS output for chained `Date` setter initialization, like `date.minutes = date.seconds = 0`.
- compiler: Fix `<![CDATA[]]>` handling in MXML for properties with `[CollapseWhiteSpace]` metadata.
- royaleunit-ant-tasks: The `<royaleunit>` Ant Task can now use Playwright to run headless tests in HTML/JS. Set the `player` to chromium, webkit, or firefox.
- royaleunit-ant-tasks: Added a new `commandArgs` attribute to the `<royaleunit>` Ant Task. It may be used to pass extra command line arguments to the executable specified in the `command` attribute.
- formatter: Can load configuration options with `-load-config+=path/to/file.xml`, similar to compiler.
- formatter: If a file named _asformat-config.xml_ appears in the current working directory, automatically load it with `-load-config`. To disable this behavior, use `-skip-local-config-file=true`.
- formatter: Fix issue where more than one new line might appear at the end of a file.
- formatter: Fix indentation between opening and closing parentheses/brackets on separate lines.
- formatter: Fix detection of `Script` elements in MXML when line endings are CRLF.
- formatter: Fix exception when file starts with UTF BOM character.
- formatter: Fix issue where ternary operator inside `if` condition was formatted incorrectly.
- formatter: Fix missing formatting for `finally` block.
- formatter: If a case or default clause in a `switch` contains only a block, indent is not increased.
- formatter: If formatting is skipped because compiler errors are found, display those compiler errors.

For additional information on recent issues that have been closed, see [Github Issues List](https://github.com/apache/royale-compiler/issues?q=is%3Aissue+is%3Aclosed)

You can download a [binary distribution](https://royale.apache.org/download/), the [source code](https://royale.apache.org/source-code/) or browse our [GitHub repositories](https://github.com/apache/royale-asjs/wiki/Apache-Royale-Source-Code-Repositories). If you're a NPM user you can check [Apache Royale at NPM](https://www.npmjs.com/org/apache-royale).

As well, you can help us [filing bug reports for issues you encounter in the framework](https://github.com/apache/royale-asjs/issues) or [compiler](https://github.com/apache/royale-compiler/issues).

For questions about how to use Royale, send email to [mailto:users@royale.apache.org](users@royale.apache.org).  For questions and feedback on the development of the source code in the release, send email to [dev@royale.apache.org](mailto:dev@royale.apache.org).

Enjoy! 🙂
