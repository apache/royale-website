---
title: "Selecting options from a group of Jewel CheckBox controls"
author: "Carlos Rovira"
date: 2018-05-22
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
In this example we'll show a set of Jewel **CheckBox** controls that let the user select one or more options in a Royale application. It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:html="library://ns.apache.org/royale/html">

    <fx:Script>
        <![CDATA[
           private function checkboxChanged(event:Event):void
            {
               result.text = "The options selected are: ";
               
               if(chk1.selected)
                   result.text += chk1.value + " ";
               if(chk2.selected)
                   result.text += chk2.value + " ";
               if(chk3.selected)
                   result.text += chk3.value;
            }
        ]]>
    </fx:Script>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:VerticalLayout gap="10"/>
            </j:beads>

            <html:H2 text="Selecting options from a group of Jewel Checkbox controls"/>
            
            <j:Label text="Which option(s) do you prefer?"/>
    
            <j:CheckBox id="chk1" text="Option 1" value="1" change="checkboxChanged(event)"/>
            <j:CheckBox id="chk2" text="Option 2" value="2" change="checkboxChanged(event)"/>
            <j:CheckBox id="chk3" text="Option 3" value="3" change="checkboxChanged(event)">
                <j:beads>
                    <j:Disabled id="opt3disable" disabled="false"/>
                </j:beads>
            </j:CheckBox>

            <j:Label id="result" text="The options selected are:"/>

            <j:Button text="disable/enable option 3" emphasis="primary" click="opt3disable.disabled = !opt3disable.disabled"/>
        </j:View>
    </j:initialView>

</j:Application>
```

The CheckBox is a two-state button control with the following properties available:

- **text**: The label description for the CheckBox
- **value**: The internal value of the CheckBox
- **selected**: If this is true it means that the CheckBox is selected; it is false otherwise

Each checkbox has **CLICK** and **CHANGE** events. **CLICK** is dispatched when the user clicks the CheckBox, either to select it or to remove the selection. **CHANGE** is dispatched when the CheckBox is selected/unselected, and is used in this example to update a label with the value properties of all selected check boxes.

As a bonus, you can provide the ability to disable/enable any of the check boxes (and any other Jewel control) by adding the **Disabled bead** to it. In the example, see if you can have Option 3 both selected and disabled!

Adding beads lets you extend what controls can do by composition, rather than being limited to what the control inherits. The Disabled bead lets you enable or disable the control programmatically, depending on whatever you find important for your application (for instance, whether the user is logged in or has made a selection in another control that is required before selecting one of these options). We'll be talking more about beads in future posts.

## Where to go from here

- [Jewel CheckBox Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/checkbox)
- [Jewel Label Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/label)

The result of this code snippet is the following:

<iframe width="100%" height="300" src="/blog-examples/BE0007_Selecting_options_from_a_group_of_jewel_checkbox_controls/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0007_Selecting_options_from_a_group_of_jewel_checkbox_controls/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0007_Selecting_options_from_a_group_of_jewel_checkbox_controls):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0007_Selecting_options_from_a_group_of_jewel_checkbox_controls"><i class="fa fa-download"></i> Project Source Code</a>