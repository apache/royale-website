---
title: "Source Code"
---
# Source Code

Get the code, build and modify to your needs.

## Current Release

The current version of Apache Royale is **0.9.9**, released in **April 2022**. It is **beta quality**. This means that Royale may not work entirely as you or we want it to, and that certain "standard" components or functions are not yet available. However, you can create applications in Royale and compile them to run either in a browser window or on the Flash/AIR platforms.

Download the source code for Royale from one of the Apache mirror sites:

<div class="btn-group">
<a class="btn btn-download" href="http://www.apache.org/dyn/closer.lua/royale/0.9.9/apache-royale-0.9.9-src.tar.gz"><i class="fa fa-download"></i> Apache Royale 0.9.9 Source (TAR.GZ)</a>
<a class="btn btn-download" href="http://www.apache.org/dyn/closer.lua/royale/0.9.9/apache-royale-0.9.9-src.zip"><i class="fa fa-download"></i> Apache Royale 0.9.9 Source (ZIP)</a>
</div>

## Older Releases

Searching for older releases of Apache Royale? Please, take a look at the [Apache Royale Releases page on Github](https://github.com/apache/royale-asjs/releases).

## Repositories

Apache Royale is composed of the following repositories.

### Compiler

The Compiler is designed to transpile MXML and ActionScript to JavaScript, SWF and potentially other output definitions. We are working on other possible outputs like WebAssembly but many others could be as well added.

You can check out the compiler source via git using the following commands:

```sh
git clone //github.com/apache/royale-compiler.git royale-compiler
cd royale-compiler
git checkout develop
```

### Typedefs

Typedefs are _.swc_ library files designed to allow type-checking for application development. They contain the type definitions in ActionScript, but none of the actual implementation of the JavaScript code.

These are used for type-checking at compile-time, but are not cross-compiled and included as JavaScript code for deployment. To use these typedef _.swc_ files, the native JavaScript code libraries are linked at run-time in the HTML.

You can check out the typedefs source via git using the following commands:

```sh
git clone //github.com/apache/royale-typedefs.git royale-typedefs
cd royale-typedefs
git checkout develop
```

### Framework (asjs)

ASJS Framework is a collection of _.swc_ library files which can be used to make application development easier. This includes core language features in ActionScript which do not exist in JavaScript, abstractions of HTML elements, component sets, and more.

Check out the asjs source via git using the following commands:

```sh
git clone //github.com/apache/royale-asjs.git royale-asjs
cd royale-asjs
git checkout develop
```