---
title: "Using the Jewel Slider Control"
author: "Carlos Rovira"
date: 2018-04-12
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
In this example we'll see the basic use of the Jewel **Slider** control in a Royale application. It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel">
    
    <fx:Script>
        <![CDATA[
        
        private function clickHandler(event:MouseEvent):void
        {
            slider_w.value = 400;
            slider_h.value = 200;
        }

        private function onValueChange(event:Event):void
       {
            button.width = slider_w.value;
            button.height = slider_h.value;
            button.text = slider_w.value + "x" + slider_h.value;
        }
        ]]>
    </fx:Script>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:VerticalLayout gap="10"/>
            </j:beads>

            <j:Slider id="slider_w" width="250" value="250" minimum="100" maximum="500"
               valueChange="onValueChange(event)"/>

            <j:Slider id="slider_h" width="250" value="80" minimum="40" maximum="300"
               valueChange="onValueChange(event)"/>

            <j:Button id="button" text="Slider to 400x200" width="250" height="80" emphasis="secondary"
               click="clickHandler(event)"/>
        </j:View>
    </j:initialView>
    
</j:Application>
```

In this example, you can click the Jewel button to set up slider values. When you do this the **ValueChangeEvent.VALUE_CHANGE** will fire, calling the **onValueChange** event handler and setting width, height and text in the **Button**.

On the other hand, you can drag each **slider** to change width and height in the Button, and function to update value in _"onValueChange"_ will be called continuously as you drag the slider controls.

You can click in the track at any place to change the value immediately to the value at that point in the track. And if you need them, you have available _"input"_ and _"change"_ events in Slider. The first fires each time you move the slider thumb from one position to another, and the second fires when Slider ends its change from one position to another.

## Where to go from here

- [Jewel Slider Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/slider)
- [Jewel Button Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/button)

The result of this code snippet is the following:

<iframe width="100%" height="450" src="/blog-examples/BE0003_Using_Jewel_Slider_Control/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0003_Using_Jewel_Slider_Control/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0003_Using_Jewel_Slider_Control):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0003_Using_Jewel_Slider_Control"><i class="fa fa-download"></i> Project Source Code</a>