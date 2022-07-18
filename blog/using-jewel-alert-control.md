---
title: "Using the Jewel Alert Control"
author: "Carlos Rovira"
date: 2018-04-06
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
The following code shows the basic method for displaying an **Alert** dialog in a Royale application. It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel">
    
    <fx:Script>
        <![CDATA[
           import org.apache.royale.jewel.Alert;
           import org.apache.royale.events.CloseEvent;

          private function clickHandler(event:MouseEvent):void {
              var alert:Alert = Alert.show("Do you want to save your changes?", "Save Changes", Alert.YES | Alert.NO);
              alert.addEventListener(CloseEvent.CLOSE, alertClickHandler);
          }
      
          private function alertClickHandler(event:CloseEvent):void {
              if (event.detail == Alert.YES)
                  button.text="You answered Yes";
              else
                  button.text="You answered No";
          }
       ]]>
    </fx:Script>

    <j:initialView>
        <j:View>
            <j:Button id="button" text="Click Me" emphasis="primary" click="clickHandler(event)"/>
        </j:View>
    </j:initialView>
    
</j:Application>
```

In this example, the Jewel button adds a click handler that will be in charge of showing the Alert control. When the user clicks the button the Alert.show() static method is called. You can add a custom message, a custom title and choose which buttons will be created for that instance of the Alert.

Finally, the Alert instance adds an event listener to manage the alert response when the dialog is closed. In this example we're changing the label of the button according to the button the user clicks in the Alert.

## Where to go from here

- [Jewel Alert Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/alert)
- [Jewel Button Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/button)

The result of this code snippet is the following:

<iframe width="100%" height="300" src="/blog-examples/BE0002_Using_Jewel_Alert_Control/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0002_Using_Jewel_Alert_Control/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0002_Using_Jewel_Alert_Control):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0002_Using_Jewel_Alert_Control"><i class="fa fa-download"></i> Project Source Code</a>