---
title: "Customization through the Royale API"
author: "Carlos Rovira"
date: 2018-08-01
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
This example shows you how to use the powerful Royale API to get access to the internal workings of components and customize them to suit your needs. As you can see, although Royale does a lot for you to simplify development, you always have full control of your code.

It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:js="library://ns.apache.org/royale/basic"
              xmlns:html="library://ns.apache.org/royale/html"
              xmlns:models="models.*">

    <fx:Script>
        <![CDATA[
            import org.apache.royale.core.IBeadLayout;
            import org.apache.royale.core.IBeadView;
            import org.apache.royale.events.CloseEvent;
            import org.apache.royale.events.Event;
            import org.apache.royale.events.MouseEvent;
            import org.apache.royale.jewel.Alert;
            import org.apache.royale.jewel.CheckBox;
            import org.apache.royale.jewel.beads.layouts.HorizontalLayout;
            import org.apache.royale.jewel.beads.layouts.VerticalLayout;
            import org.apache.royale.jewel.beads.views.AlertView;

           private var alert:Alert;
           private var check:CheckBox;

           // Adding content to the Alert component and changing the ControlBar's Buttons Layout
           private function clickHandler(event:MouseEvent):void {
               alert = Alert.show("This example shows access to AlertView and ControlBar to add a CheckBox to the Alert's content area, expand the Button layout and change its defaults. The height of the alert is changed to 300px, too.", "Customized Alert Example", 3);
               alert.addEventListener(CloseEvent.CLOSE, alertClickHandler);
                alert.height = 300;

               check = new CheckBox();
               check.selected = true;
               check.text = "Buttons must fill the ControlBar's available space";
               check.addEventListener(Event.CHANGE, expandButtons);

               expandButtons();
           }
           
           private function expandButtons(event:Event = null):void {
               var alertView:AlertView = alert.getBeadByType(IBeadView) as AlertView;

               if(event == null)
               {
                   var verticalLayout:VerticalLayout = new VerticalLayout();
                   verticalLayout.gap = 9;
                   alertView.content.addBead(verticalLayout);

                   alertView.content.addElement(check);
               }

               var layout:HorizontalLayout = alertView.controlBar.getBeadByType(IBeadLayout) as HorizontalLayout;
               layout.itemsExpand = check.selected;
           }

           // Event handler function for displaying the selected Alert button.
           private function alertClickHandler(event:CloseEvent):void {
               alert.removeEventListener(CloseEvent.CLOSE, alertClickHandler);

               if (event.detail == Alert.YES)
                   status.text="You answered Yes";
               else
                   status.text="You answered No";
           }
        ]]>
    </fx:Script>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:HorizontalCenteredLayout/>
            </j:beads>

            <j:Card width="350">
                <html:H3 text="Customization through Royale API"/>
                
                <j:Label text="This is a complex example that adds and retrieves beads at runtime. Click the button below to display an Alert window that adds content and makes changes in some parts of the default layout."
                       multiline="true"/>
                <j:Button text="Click Me" click="clickHandler(event)"/>
                <j:Label id="status"/>
            </j:Card>
        </j:View>
    </j:initialView>

</j:Application>
```

This example takes the [Using the Jewel Alert Control](https://royale.apache.org/using-jewel-alert-control/) example and uses the Royale API to add content and customize some parts of the Alert.

The code is more complex than in some of our other examples, for teaching purposes:

- In the **clickHandler** method, we create an Alert control and create a CheckBox to add to the Alert's content zone. Then we call the **expandButtons** method to end initial customization.
- The **expandButtons** method is where the heavy work of the Royale API happens:
  - Since all components in Royale are "composed" through the Strand/Bead API, we want to access the view part of the Alert; in this case we're talking about AlertView.
  - We can access AlertView with **getBeadByType** that retrieves a bead by its type.
  - Then, for learning purposes, we create a VerticalLayout bead and add it to the Alert's content using the **addBead** method (you can investigate other methods in the API like **removeBead** as well).
  - We add the CheckBox created in the previous method to the Alert's content. Since this involves a call-back method and an initialization method, we only want to add the checkbox at initialization time and not each time the user clicks the CheckBox.
  - Finally, we retrieve the ControlBar's default HorizontalLayout and customize it to expand its items (the buttons) to fill all the available space in the control bar. We use **getBeadByType** again to reference the layout, and then use a method available in most Jewel Layouts called **itemsExpand** that expect a Boolean. When this method is set to "true" all items in the layout expand to use all available space.

## Where to go from here

- [Jewel Alert Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/alert)
- [Jewel Button Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/button)
- [Jewel CheckBox Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/checkbox)
- [Jewel Label Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/label)
- [Jewel Card Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/card)

The result of this code snippet is the following:

<iframe width="100%" height="400" src="/blog-examples/BE0010_Customization_through_the_Royale_API/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0010_Customization_through_the_Royale_API/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0010_Customization_through_the_Royale_API):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0010_Customization_through_the_Royale_API"><i class="fa fa-download"></i> Project Source Code</a>