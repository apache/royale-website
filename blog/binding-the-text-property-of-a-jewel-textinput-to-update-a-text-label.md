---
title: "Binding the text property of a Jewel TextInput to update a text Label"
author: "Carlos Rovira"
date: 2018-05-09
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
In this example we'll cover how to use the data binding feature with a Jewel **TextInput** field in a Royale application. It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:js="library://ns.apache.org/royale/basic">
    <fx:Script>
        <![CDATA[
           private function textChanged(event:Event):void
            {
                result.text = "The textinput text value is: " + textinput.text;
            }
        ]]>
    </fx:Script>

    <j:beads>
        <js:ApplicationDataBinding />
    </j:beads>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:VerticalLayout gap="10"/>
            </j:beads>

            <j:Label text="Binding the text property of a Jewel TextInput field to update a text Label"/>

            <j:TextInput id="textinput" change="textChanged(event)">
                <j:beads>
                    <j:TextPrompt prompt="Using change event"/>
                </j:beads>
            </j:TextInput>

            <j:Label id="result" text="The TextInput field text value is: "/>

            <j:TextInput id="databinding_ti">
                <j:beads>
                    <j:TextPrompt prompt="Using databinding"/>
                </j:beads>
            </j:TextInput>

            <j:Label text="The TextInput field text value is: {databinding_ti.text}"/>
        </j:View>
    </j:initialView>

</j:Application>
```
**Data binding** is a general technique that binds together and synchonizes data from a provider, or source (in this case the contents of the text property of a TextInput field), and a consumer (in this case the text property of a Label). You can use data binding with many controls, variables and components to provide a powerful user experience. You can bind a List as the data provider for an ArrayList variable so the ArrayList displays details of the item the user selects in the List. Changing a Slider's value can change the width of a control or container the Slider is bound to.

In Apache Royale, you can configure data binding at different levels: Application, View, Container, ItemRenderer, and more. This follows the **PAYG** (Pay As You Go) philosophy that is key to the global design of Apache Royale. PAYG keeps an application as lightweight as possible, since you only add many features and functions to the components that actually need them. Other front-end technologies follow a "just in case" model of providing every possible function to each component even though most of those features, and the weight of that code, will serve no good use. In Royale you stay light and agile by declaring features like data binding only if the application, or some part of it, needs them.

In this example, we use data binding at the application level, since the whole example is only a few lines of code. So we use the **ApplicationDataBinding** bead. This bead adheres to the Application _strand_, "composing" or "adding" the binding functionality at the application level. In a more complex application, you might decide you only need data binding in a particular **View** or **Container**. Then you could use a **ViewDataBinding** bead, or a **ContainerDataBinding** bead. PAYG ensures features like data binding are only present where you really need them, and not using up system resources by sitting around in parts of the application where they will never be used.

In our example the first **TextInput** control uses a normal **CHANGE** event handler to update the text property of the Label field below it. The second TextInput control uses data binding to update the Label below it. You get the same result, but in different ways.

Notice that both TextInput controls use a **TextPrompt** bead that adds the prompt functionality to the control. We wanted that feature for this example; but since not every TextInput control in every application has to have a prompt, you "pay" for the function by adding the TextPrompt bead only where you need it: PAYG!

## Where to go from here

- [Data Binding Royale Docs page](https://apache.github.io/royale-docs/features/data-binding)
- [Jewel TextInput Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/textinput)
- [Jewel Label Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/label)

The result of this code snippet is the following:

<iframe width="100%" height="300" src="/blog-examples/BE0006_Binding_the_text_property_of_a_Jewel_Textinput_to_update_a_text_label/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0006_Binding_the_text_property_of_a_Jewel_Textinput_to_update_a_text_label/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0006_Binding_the_text_property_of_a_Jewel_Textinput_to_update_a_text_label):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0006_Binding_the_text_property_of_a_Jewel_Textinput_to_update_a_text_label"><i class="fa fa-download"></i> Project Source Code</a>