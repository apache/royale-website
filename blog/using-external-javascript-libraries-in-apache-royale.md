---
title: "Using external JavaScript libraries in Apache Royale"
author: "Carlos Rovira"
date: 2019-06-03
tags: ["blog", "Electron", "Royale Examples"]
layout: "blog-post.html"
---
This example shows how to use external JavaScript libraries in your Apache Royale application. You can add quick functionality to your application by including code that is not part of Apache Royale itself or is even not written in ActionScript.

In this way, _you get lots of libraries available for free in the Internet to strengthen and extend your Apache Royale Application._

It also allows an IDE to provide code completion, type checking, etc.

The example shows a **Jewel Card** with a code text zone that loads an ActionScript code example. Click the _"highlight block"_ button to show the code in a beautifully colored way, thanks to processing by a highlight library which is an external JavaScript library.

> The JavaScript library used to show this feature is [highlightjs](https://highlightjs.org/). In JavaScript this library creates the hljs object our code references.

## How to use JavaScript external libraries

We have two solutions available for using external JavaScript libraries in Apache Royale. We'll focus first on the better and recommended way, which is using the **@externs** compiler directive.

This method gives you robust access to JavaScript methods though ActionScript with dot access syntax (and lets you use code hinting in your IDE). But if you need to prototype something quickly, you can use dynamic syntax with _bracket access_ notation.

## Dot access

This is the recommended way. You get all advantages of an object-oriented language like ActionScript 3: type checking, compiler errors and warnings, and code hinting and code completion in your favorite IDEs.

![](/img/blog/Captura-de-pantalla-2019-06-03-a-las-18.20.46.png)

The code for this [hljs as3 stub code](https://github.com/apache/royale-asjs/blob/develop/examples/blog/BE0012_Using_external_javascript_libraries_in_Apache_Royale/src/main/royale/hljs.as) is located in this blog example project and is the **@externs** class definition for **hljs**:

```as3
////////////////////////////////////////////////////////////////////////////////
//
//  Licensed to the Apache Software Foundation (ASF) under one or more
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//  the License.  You may obtain a copy of the License at
//
//      //www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////
package
{
    /**
     * @externs
     */
    COMPILE::JS
    public class hljs
    {
        /** 
         * <inject_script>
         * var script = document.createElement("script");
         * script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js");
         * document.head.appendChild(script);
         * var link = document.createElement("link");
         * link.setAttribute("rel", "stylesheet");
         * link.setAttribute("type", "text/css");
         * link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css");
         * document.head.appendChild(link);
         * </inject_script>
         */
        public function hljs(){}

        public static function highlightBlock(block:Element):void {}
    }
}
```

You can see two main things in this code:

1. An inject_html directive declared in the constructor adds the following lines to the html template, so you do not need to add the lines manually. If you use this library, Royale adds these references automatically, and if you remove all references, Royale removes the dependencies to the JavaScript library and nothing is output in the html file.
1. Use the highlightBlock static function, which you can access as a normal method in the AS3 hljs class.

## Bracket access

If you need to prototype something quickly you can use this method but remember we don't recommend that you use this in your main Apache Royale project.

First, reference the JavaScript library (and/or css if it exists) in your html template. For **hljs** you can copy the following lines:

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<link rel="stylesheet" title="Atom One Dark" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css">
```

Then you can start using the library in your code. An example with the highlightjs hljs object is:

```as3
var hljs:Object = window["hljs"];
hljs["highlightBlock"](block);
```

As you can see, this avoids using a more structured language like ActionScript 3. You lose type checking and the compiler will not help you if you write something wrong. Plus, if the API is changed, that code will not be able to warn you about the changes.

## The example

The example uses **HTTPService** to retrieve sample code and display it in an **html:Code** component. When the application loads, it fires the **initialize** event. We use that to order HTTPService to load the text file. When the file finishes loading, HTTPService fires a complete event. We use that to add the text file content to the **code_txt** _String variable_.

> Note: Since the code_txt variable uses data binding (it's marked with the **Bindable** metadata and we prepared the application to handle data binding with the **ApplicationDataBinding** bead), the application fills the html:Code **sourceCodeMXMLText** with the loaded text.

This is the code for this example:

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<!--

 Licensed to the Apache Software Foundation (ASF) under one or more
 contributor license agreements.  See the NOTICE file distributed with
 this work for additional information regarding copyright ownership.
 The ASF licenses this file to You under the Apache License, Version 2.0
 (the "License"); you may not use this file except in compliance with
 the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

-->
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:js="library://ns.apache.org/royale/basic"
              xmlns:html="library://ns.apache.org/royale/html"
              initialize="codeTextLoader.send();">

    <fx:Script>
        <![CDATA[
           [Bindable]
           public var code_txt:String;

           public function highLightContent():void
           {
                COMPILE::JS
                {
                    hljs.highlightBlock(sourceCodeMXMLText.element);   
                }
           }
        ]]>
    </fx:Script>
    
    <j:beads>
        <js:ApplicationDataBinding/>
        <js:HTTPService id="codeTextLoader" url="as3code.txt" complete="code_txt = codeTextLoader.data;"/>
    </j:beads>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:HorizontalCenteredLayout/>
            </j:beads>

            <j:Card width="90%">
                <html:H3 text="Using external JavaScript Libraries"/>
                
                <j:Label html="This example uses hljs library to highligh a piece of code"/>

                <html:Pre height="300" width="100%" style="background-color: white">
                    <html:beads>
                        <j:ScrollingViewport/>
                    </html:beads>
                    <html:Code id="sourceCodeMXMLText" text="{code_txt}"/>
                </html:Pre>
                
                <j:Button text="highlight Block" emphasis="primary" click="highLightContent()"/>
             </j:Card>
        </j:View>
    </j:initialView>
</j:Application>
```

In the example code you can see how we call the _hljs.highlightBlock_ method with the recommended dot syntax as with any other ActionScript code, creating a seamless integration between your project code and the external JavaScript code.

## Conclusion

You can see how simple and elegant it can be to use external JS code, while not compromising the safe syntax you have when using the MXML and AS3 languages, to give you more dynamic options for your application at no cost.

## Where to go from here

- [Other use of @externs in a Jewel Alert component](https://github.com/apache/royale-asjs/blob/eaf2dbde05a3823e0c148ba806c025eb56388a7a/frameworks/projects/Jewel/src/main/royale/org/apache/royale/jewel/Alert.as#L225)
- [Loading external data through HTTPService](https://royale.apache.org/loading-external-data-through-httpservice/)
- [Binding the text property of a Jewel TextInput to update a text Label](https://royale.apache.org/binding-the-text-property-of-a-jewel-textinput-to-update-a-text-label/)

The result of this code snippet is the following:

<iframe width="100%" height="600" src="/blog-examples/BE0012_Using_external_javascript_libraries_in_Apache_Royale/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0012_Using_external_javascript_libraries_in_Apache_Royale/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0012_Using_external_javascript_libraries_in_Apache_Royale):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0012_Using_external_javascript_libraries_in_Apache_Royale"><i class="fa fa-download"></i> Project Source Code</a>