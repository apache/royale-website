---
title: "Creating a group of Jewel radio buttons"
author: "Carlos Rovira"
date: 2018-05-02
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
In this example we'll cover how to show a list of options in a Royale application with a group of Jewel **RadioButton** controls. It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:html="library://ns.apache.org/royale/html">
    
    <fx:Script>
        <![CDATA[
           private function radioChanged(event:Event):void
            {
                result.text = "The radio button selected has the value: " + RadioButton(event.target).value;
            }
        ]]>
    </fx:Script>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:VerticalLayout gap="10"/>
            </j:beads>

            <html:H2 text="Creating a group of Jewel RadioButtons"/>
            
            <j:Label text="Which option do you prefer?"/>
    
            <j:RadioButton text="Option 1" groupName="radios" value="1" change="radioChanged(event)"/>
            <j:RadioButton text="Option 2" groupName="radios" value="2" change="radioChanged(event)"/>
            <j:RadioButton text="Option 3" groupName="radios" value="3" change="radioChanged(event)">
                <j:beads>
                    <j:Disabled id="opt3disable" disabled="false"/>
                </j:beads>
            </j:RadioButton>

            <j:Label id="result" text="The radio button selected has the value:"/>

            <j:Button text="disable/enable option 3" emphasis="primary" click="opt3disable.disabled = !opt3disable.disabled"/>
        </j:View>
    </j:initialView>

</j:Application>
```

The radio buttons have these properties available:

- **text**: The label description for the radio button
- **value**: The internal value of the radio button
- **selected**: If this is true it means that the radio button is selected; it is false otherwise
- **groupName**: All radio buttons with the same group name are related, so the user can change which radio button is selected but can never select more than one member of the group at a time

Each radio button has **CLICK** and **CHANGE** events. **CLICK** is dispatched when the user clicks the RadioButton. **CHANGE** is dispatched when the RadioButton is selected/unselected, and is used in this example to update a label with the value property of the selected radio button.

As a bonus, you can provide the ability to disable/enable any of the radio buttons (and any other Jewel control) by adding the **Disabled bead** to it. Adding beads lets you change what controls can do by composition, rather than being limited to what the control inherits. The Disabled bead lets you enable or disable the control programmatically, depending on whatever you find important for your application (for instance, whether the user is logged in or has made a selection in another control that is required before selecting one of these options). We'll be talking more about beads in future posts.

## Where to go from here

- [Jewel RadioButton Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/radiobutton)
- [Jewel Button Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/button)
- [Jewel Label Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/label)

The result of this code snippet is the following:

<iframe width="100%" height="300" src="/blog-examples/BE0005_Creating_a_group_of_Jewel_RadioButtons/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0005_Creating_a_group_of_Jewel_RadioButtons/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0005_Creating_a_group_of_Jewel_RadioButtons):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0005_Creating_a_group_of_Jewel_RadioButtons"><i class="fa fa-download"></i> Project Source Code</a>