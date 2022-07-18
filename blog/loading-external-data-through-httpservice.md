---
title: "Loading external data through HTTPService"
author: "Carlos Rovira"
date: 2018-09-23
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
This example shows you how to use **HTTPService** to access external data to use in your Apache Royale application.

You can use HTTPService to retrieve data in XML, JSON, or other formats. We'll use Github API services to get JSON formatted GitHub data so we can load info about the code of this example, which is hosted in GitHub.

It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:js="library://ns.apache.org/royale/basic"
              xmlns:html="library://ns.apache.org/royale/html"
              xmlns:services="services.*">

    <fx:Script>
        <![CDATA[
           import org.apache.royale.events.Event;
           import org.apache.royale.events.MouseEvent;
           import org.apache.royale.jewel.Alert;

           public function getGithubContent(event:MouseEvent):void
           {
               service.getContent();
           }
           
           public function dataReadyHandler(event:Event):void
            {
               Alert.show(service.jsonToString, "JSON data retrieved");
               jsonData.html = "Some JSON Data: <br><strong> - service.json.name:</strong> " + service.json.name + 
                                "<br><strong> - service.json.sha:</strong> " + service.json.sha +
                                "<br><strong> - service.json._links.html</strong> " + service.json._links.html;
                sourceCodeMXMLText.text =  service.sourceCode;
            }
        ]]>
    </fx:Script>
    
    <fx:Declarations>
        <services:GitHubService id="service" 
           sourceCodeUrl="https://api.github.com/repos/apache/royale-asjs/contents/examples/blog/BE0011_Loading_external_data_through_HTTPService/src/main/royale/BE0011_Loading_external_data_through_HTTPService.mxml"
           dataReady="dataReadyHandler(event)"/> 
    </fx:Declarations>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:HorizontalCenteredLayout/>
            </j:beads>

            <j:Card percentWidth="90">
                <html:H3 text="Loading Github external data through HTTPService"/>
                
                <j:Label text="This example loads its source code in the text code panel:"/>

                 <html:Pre height="300" percentWidth="100" style="background-color: white">
                    <html:beads>
                        <j:ScrollingViewport/>
                    </html:beads>
                    <html:Code id="sourceCodeMXMLText"/>
                </html:Pre>
                
                <j:Label id="jsonData" multiline="true" html="This label shows JSON data when loaded."/>

                <j:Button text="Retrieve source code from Github" emphasis="primary" click="getGithubContent(event)"/>
             </j:Card>
        </j:View>
    </j:initialView>
</j:Application>
```

We create an Apache Royale interface that shows a text code panel to load the source code of this example in it. Github doesn't let us load a page from its domain in an iFrame, so this is the only way to embed GitHub content in your application.

The text code panel is made of _pre_ and _code_ html tags with some custom style to make the background white. We provide a Label to show accessing Json data directly with dot notation. Finally we provide a button to trigger the **HTTPService**.

> **Tip:** We use the **ScrollingViewport** bead to add scrolling behavior to our text code panel.

The most important piece in this example is the custom **GitHubService** class that wraps the HTTPService object. We declare it in MXML in our application to pass the Github URL to request and declare an event handler to show the data once it is loaded.

This is the **GitHubService** class:

```as3
package services
{
    import org.apache.royale.events.Event;
    import org.apache.royale.events.EventDispatcher;
    import org.apache.royale.net.HTTPConstants;
    import org.apache.royale.net.HTTPService;
    import org.apache.royale.utils.string.Base64;

    [Event(name="dataReady", type="org.apache.royale.events.Event")]
    /**
     * GitHubService is in charge of getting the source code of some example
     * so we can show the code in a TabBarContentPanel along with the working example
     */
    public class GitHubService extends EventDispatcher
    {
        /**
         * constructor
         */
        public function GitHubService():void
        {    
            service = new HTTPService();
            service.addEventListener(HTTPConstants.COMPLETE, completeHandler);
        }

        /**
         * the service that performs the request to Github
         */
        private var service:HTTPService;

        /**
         * we dispatch an event once we have the source code from github
         */
        private function completeHandler(event:Event):void
        {
            dispatchEvent(new Event("dataReady"));
        }

        private var _sourceCodeUrl:String = null;
        /**
         * The source code url we want to retrieve
         */
        public function get sourceCodeUrl():String
        {
            return _sourceCodeUrl;
        }
        public function set sourceCodeUrl(value:String):void
        {
            _sourceCodeUrl = value;
            service.url = sourceCodeUrl;
        }

        /**
         * json returns the retrieved GitHub JSON Object
         */
        public function get json():Object
        {
            return service.json;
        }

        /**
         * jsonToString returns the retrieved GitHub JSON Object as String
         */
        public function get jsonToString():String
        {
            return service.data;
        }

        /**
         * decode and return the base 64 content (real source code)
         */
        public function get sourceCode():String
        {
            return Base64.decode(service.json.content);
        }
        
        /**
         * trigger the HTTPService to retrieve the GitHub data
         */
        public function getContent():void
        {
            service.send();
        }
    }
}
```

We instantiate the HTTPService in the constructor, and declare an event listener for the **HTTPConstants.COMPLETE** event, so we perform actions when the data finishes loading. The action we do from this class is throw a new event "**dataReady**" to consume in our application.

**sourceCodeUrl** will pass the GitHub url to be called by our service class, and fills **HTTPService.url** so HTTPService knows what url to target.

As we get the data loaded, we can manage it with **HTTPService.data**, and we have a convenient **HTTPService.json** getter to access the JSON Object that HTTPService already parses for us. We exposed this data in our json class as **jsonToString** and **json** getters respectively.

Finally, the source code is in the **json.content** variable, but comes encoded in **base64**, so we can use Apache Royale's **decode** function in the **Base64** class to get the decoded xml string to use in our example App. We exposed this in a convenient getter function in our service called **sourceCode**.

## Where to go from here

- [Apache Royale documentation page about loading external data](https://apache.github.io/royale-docs/features/loading-external-data)
- [Jewel Label Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/label)
- [Jewel Button Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/button)
- [Jewel Card Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/card)

The result of this code snippet is the following:

<iframe width="100%" height="650" src="/blog-examples/BE0011_Loading_external_data_through_HTTPService/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0011_Loading_external_data_through_HTTPService/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0011_Loading_external_data_through_HTTPService):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0011_Loading_external_data_through_HTTPService"><i class="fa fa-download"></i> Project Source Code</a>