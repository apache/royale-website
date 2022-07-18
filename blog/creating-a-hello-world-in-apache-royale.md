---
title: Creating a Hello World in Apache Royale
author: Carlos Rovira
date: 2018-02-12
tags: ["blog", "Basic UI Set", "Royale Examples"]
layout: "blog-post.html"
---
This section will try to bring simple code examples that should help to develop with Apache Royale more quickly. This is in part a tribute to Peter deHaan blogs he did for [Apache Flex](http://blog.flexexamples.com/), [ActionScript 3](http://actionscriptexamples.com/) and [Adobe AIR](http://airexamples.com/) some years ago. Hope you like it and want to contribute to get a huge library of Royale code snippets well organized and searchable.

So lets begin with our first code snippet: Hello World.

```mxml
<?xml version="1.0" encoding="utf-8"?>
<js:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
            xmlns:js="library://ns.apache.org/royale/basic">

    <js:valuesImpl>
        <js:SimpleCSSValuesImpl />
    </js:valuesImpl>

    <js:initialView>
        <js:View>
            <js:Label text="Hello World" />
        </js:View>
    </js:initialView>
</js:Application>
```

In this example you can see the use of the following MXML tags:

- **Application**: Is the main tag in your application. All content in Apache Royale is added inside this tag.
- **SimpleCSSValuesImpl**: This class implements a minimal set of CSS rules that is sufficient for most applications.
- **View**: This is the class for most views in a Royale application.
- **Label**: Implements the basic control for show a label with text.

## Where to go from here

- [Apache Royale documentation "Get Started" page](https://apache.github.io/royale-docs/get-started)
- [Apache Royale documentation "Hello World" page](https://apache.github.io/royale-docs/get-started/hello-world)

The result of this "Hello World" code snippet is the following:

<iframe width="100%" height="300" src="/blog-examples/BE0001_Hello_World/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0001_Hello_World/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0001_Hello_World):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0001_Hello_World"><i class="fa fa-download"></i> Project Source Code</a>