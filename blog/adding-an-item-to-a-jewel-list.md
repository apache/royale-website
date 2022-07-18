---
title: "Adding an item to a Jewel List"
author: "Carlos Rovira"
date: 2018-04-16
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
In this example we'll cover how to set up a Jewel **List** control that shows a list of basic string data in a Royale application, and then add an item to the list. It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:js="library://ns.apache.org/royale/basic"
              xmlns:html="library://ns.apache.org/royale/html">
    
    <fx:Script>
        <![CDATA[
           private function changeHandler(event:Event):void {
               selected.text = "Selected: " + list.selectedItem;
           }
           
           private function clickHandler(event:Event):void {
               avengersCharacters.addItem("Hawkeye");
           }
        ]]>
    </fx:Script>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:VerticalLayout gap="10"/>
            </j:beads>
            
            <html:H3 text="Avengers Character List"/>
    
            <j:List id="list" width="200" height="300" change="changeHandler(event)">
                <j:beads>
                    <j:AddListItemRendererForArrayListData/>
                </j:beads>
                <j:dataProvider>
                    <js:ArrayList id="avengersCharacters" source="[Iron Man, Hulk, Thor, Captain America, Black Widow]" />
                </j:dataProvider>
            </j:List>
            <j:Label id="selected"/>

            <j:Button width="200" emphasis="primary" text="who is missing?" click="clickHandler(event)"/>
        </j:View>
    </j:initialView>

</j:Application>
```

In this example, the List is populated from an ArrayList object that holds a basic array of the data. The ArrayList has all collection methods to manage internal data, like addItem and addItemAt. We used Avengers character names to showcase this example, but you'll see one character is missing ;).
For this example we used the Amethyst Jewel Theme to match movie colors better.

When you select a row in the List a CHANGE event is fired. We have the event call an event handler that shows the data for the selected item in a label.

Finally you can click the "Who's missing?" button to add the missing Avenger to the list. The List will update to reflect the addition. For this to happen you'll need to use a bead that encapsulates the code responsible of adding the item to the data provider and create the corresponding item renderer called **AddListItemRendererForArrayListData**.

## Where to go from here

- [Jewel List Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/list)
- [Jewel Button Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/button)

The result of this code snippet is the following:

<iframe width="100%" height="500" src="/blog-examples/BE0004_Adding_an_item_to_a_Jewel_List/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0004_Adding_an_item_to_a_Jewel_List/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0004_Adding_an_item_to_a_Jewel_List):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0004_Adding_an_item_to_a_Jewel_List"><i class="fa fa-download"></i> Project Source Code</a>