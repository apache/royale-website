---
title: "Hello Node: How to transpile ActionScript 3 for Node.js"
author: "Josh Tynjala"
date: 2018-10-03
tags: ["blog", "Node.js", "asnodec"]
layout: "blog-post.html"
---
> **Note:** This tutorial was originally published in [Josh Tynjala](https://twitter.com/joshtynjala)'s NextGen ActionScript website, but is now donated to Apache Royale. The tutorial has been adapted to correct the things that changed in Apache Royale since it was published.

Over the years, many developers have dreamed of using ActionScript on both the client and the server. Today, the Apache Royale™ SDK finally makes it possible.

![Apache Royale and Node.js logos](/img/blog/apache-royale-node-js.png)

Let's learn to use **asnodec** to write _ActionScript_ code that runs in the popular server-side JavaScript environment, [Node.js](http://nodejs.org/).

![Screenshot of Node.js console output running in the terminal](/img/blog/nodejs-terminal@2x.jpg)

With **asnodec**, we'll get full access to all Node.js APIs, and it's even possible to require npm modules in ActionScript. We'll start with a simple example.

## Requirements

For this tutorial, you should install [Node.js](https://nodejs.org/). The newest Long Term Support (LTS) release is recommended.

Additionally, you will need [Apache Royale 0.9.4 or newer](https://royale.apache.org/download). Use the [downloads page](https://royale.apache.org/download), or download it from Node Package Manager with

```sh
npm install -g @apache-royale/royale-js
```

## Create a new project

1. Create a new, empty folder for your project, and name it _HelloNode_.
1. Inside the new project, create a new folder named _src_. This is where our ActionScript classes will go.
1. Inside the _src_ folder, create a file named _HelloNode.as_, and add the following code:

```as3
package
{
    public class HelloNode
    {
        public function HelloNode()
        {
            console.log("Hello", process.release.name, process.version);
            dns.lookup("localhost", null, dnsLookupCallback);
        }

        private function dnsLookupCallback(error:Object, address:String):void
        {
            console.log("The address of localhost is:", address);
        }
    }
}
```

In this class, we're doing two things. First, we're printing the version of Node to the console. Then, we're using Node's built-in [**dns**](https://nodejs.org/api/dns.html) module to look up an IP address.

> It is not necessary to call `require()` for built-in Node modules in ActionScript. The compiler will detect when a module is used, and it will generate the appropriate call to `require()` automatically when generating the final JavaScript. (`require()` is necessary for custom modules)

## Compile the project on the command line

Inside the Apache Royale SDK, the _js/bin_ folder contains several different exeuctables used to transpile ActionScript to JavaScript.

What do each of those executables in _js/bin_ do?

- **asjsc** compiles pure ActionScript to JavaScript with access to web browser APIs like the HTML DOM.
- **asnodec** compiles pure ActionScript to JavaScript with access to Node.js APIs to create server-side or command line projects. _We'll use this one._
- **mxmlc** compiles applications that use the Apache Royale framework components.

Use the **asnodec** executable to transpile the `HelloNode` ActionScript class that you created above for Node.js.

```sh
asnodec src/HelloNode.as
```

This will produce a folder named _bin_ containing _js-debug_ and _js-release_ folders. The _js-debug_ folder contains JavaScript that is easy to read, and each class is loaded at runtime from a separate file. The _js-release_ folder contains JavaScript that has been concatenated and minified for production.

The project should now contain the following files and folders:

![Screenshot of project files, including bin/js-debug, bin/js-release, and src/HelloNode.as](/img/blog/node-project-files@2x.jpg)

Finally, let's try running our code with Node.js.

## Run the project

Inside the js-debug folder, a file named index.js will be created as the entry point for your Node.js project. You can run this script using the `node` executable:

```sh
node bin/js-debug/index.js
```

You should see the following output in your console:

```
Hello node v6.11.0
The address of localhost is: 127.0.0.1
```

(The Node version number might be different, obviously!)

## What's Next?

This is just a simple example, but it gives you a glimpse of how developers can bring ActionScript server-side using Apache Royale and Node.js. By using an established ecosystem like Node.js, ActionScript developers can take advantage of all of the libraries published to NPM and join a large, vibrant community.