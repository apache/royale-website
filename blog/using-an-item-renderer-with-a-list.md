---
title: "Using an Item Renderer with a List"
author: "Carlos Rovira"
date: 2018-07-13
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
This example shows how to use an **ItemRenderer** to display the items in a List in your Royale application. It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:js="library://ns.apache.org/royale/basic"
              xmlns:html="library://ns.apache.org/royale/html"
              xmlns:models="models.*">

    <fx:Style>
        @namespace "http://www.w3.org/1999/xhtml";
        @namespace j "library://ns.apache.org/royale/jewel";

        .iconListItemRenderer
        {
            IItemRenderer: ClassReference("itemRenderers.IconListItemRenderer");
        }
        .iconListItemRenderer .fonticon
        {
            margin-right: 24px;
        }
    </fx:Style>

    <j:model>
        <models:ListsModel id="listModel"/>
    </j:model>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:VerticalCenteredLayout/>
            </j:beads>

            <j:Card width="340">
                <j:CardHeader>
                    <html:H3 text="Jewel List With ItemRenderer" className="primary-normal"/>
                </j:CardHeader>
                <j:CardPrimaryContent>
                
                    <j:List width="100%" height="300" className="iconListItemRenderer">
                        <j:beads>
                            <js:ConstantBinding
                               sourceID="listModel"
                               sourcePropertyName="iconListData"
                               destinationPropertyName="dataProvider"/>
                        </j:beads>
                    </j:List>
                    
                </j:CardPrimaryContent>
            </j:Card>
        </j:View>
    </j:initialView>

</j:Application>
```

By default, Apache Royale Jewel List-based controls display their data as plain text using **ListItemRenderer**. But Royale is capable of much more, and you can extend ListItemRenderer to display the items in your list in a pleasing and user-friendly way.

In this example we created an **IconListItemRenderer** in mxml that extends ListItemRenderer:

```mxml
<?xml version="1.0" encoding="utf-8"?>
<j:ListItemRenderer xmlns:fx="http://ns.adobe.com/mxml/2009"
                    xmlns:j="library://ns.apache.org/royale/jewel"
                    xmlns:js="library://ns.apache.org/royale/basic"
                    xmlns:html="library://ns.apache.org/royale/html">

    <fx:Script>
        <![CDATA[
            import vos.IconListVO;
            
            [Bindable("dataChange")]
            public function get iconList():IconListVO
            {
                return data as IconListVO;
            }
        ]]>
    </fx:Script>

    <j:beads>
        <js:ItemRendererDataBinding />
        <j:HorizontalLayout gap="3" itemsVerticalAlign="itemsCenter"/>
    </j:beads>
    
    <js:MaterialIcon text="{iconList ? iconList.icon : ''}" visible="{iconList ? iconList.icon != null : false}"/>

    <html:Span text="{iconList ? iconList.label : ''}"/>
    
</j:ListItemRenderer>
```

The list gets its items from the data provider and passes them through the item renderer. The item renderer models each item in a consistent way: it adds a **FontIcon** to display an appropriate icon (selected, in this case, from the Google Material Icons font) at the left, and the text of the item in a Label to the right. To manage the components for each list item, you can use absolute positioning, layout classes or CSS. We used CSS in the **fx:Style** section in the main file for simplicity. As you see, the item renderer is declared in CSS as well, and is located in the _itemRenderers_ package.

Note that we use Data Binding, deploying **ItemRendererDataBinding**. Data binding in Royale is not available by default to reduce code size. You add it where you need it, following the **PAYG** principle in Royale: **Pay As You Go**. We add a data binding bead here since we need the function, and not anywhere we don't need it.

The data used in the List control **dataProvider** is declared in the ActionScript 3 **ListsModel** class:

```mxml
package models
{
    import org.apache.royale.collections.ArrayList;
    import vos.IconListVO;

    public class ListsModel 
    {
        /**
         * this is the dataProvider for the List
         */
        private var _iconListData:ArrayList = new ArrayList([
            new IconListVO("Alert", MaterialIconType.WEB_ASSET),
            new IconListVO("Button", MaterialIconType.CROP_7_5),
            new IconListVO("DropDownList", MaterialIconType.CREDIT_CARD),
            new IconListVO("CheckBox", MaterialIconType.CHECK_BOX),
            new IconListVO("Label", MaterialIconType.LABEL),
            new IconListVO("List", MaterialIconType.LIST_ALT),
            new IconListVO("RadioButton", MaterialIconType.RADIO_BUTTON_CHECKED),
            new IconListVO("Slider", MaterialIconType.STORAGE),
            new IconListVO("Text", MaterialIconType.SUBJECT),
            new IconListVO("TextInput", MaterialIconType.TEXT_FIELDS)            
        ]);

        public function get iconListData():ArrayList
        {
            return _iconListData;
        }
    }
}
```

The **MaterialIconType** class uses the icon names as they appear in the Material Icons font for convenience and to avoid typos. One additional benefit of using MaterialIconType in your code is that it injects the font into your html directly, without you having to deal with that step.

This class uses a data object (DOT, or POJO, depending on how you name this kind of code), called **IconListVO** to instance each piece of data that will appear in the List control.

Here's the result of this code snippet:

```as3
package vos
{
    [Bindable]
    public class IconListVO
    {
        public var label:String;
        public var icon:String;

        public function IconListVO(label:String, icon:String = null)
        {
            this.label = label;
            this.icon = icon;
        }
    }
}
```

In the main file, note how we link the **ListsModel** class through the **model** variable accessible throughout Royale to make it easy to link a model as a bead.

Finally, we link the model data to the list dataProvider using data binding, with **ApplicationDataBinding** (since we are at the Application level) and the **ConstantBinding** class that knows where the data is located (_sourceID_), what property holds it (_iconListData_) and where to inject the data (_destinationPropertyName_).

Hope you like this example 🙂

## Where to go from here

- [ItemRenderers Royale Docs page](https://apache.github.io/royale-docs/features/item-renderers)
- [Jewel List Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/list)
- [Jewel Card Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/card)

The result of this code snippet is the following:

<iframe width="100%" height="500" src="/blog-examples/BE0009_Using_an_Item_Renderer_with_a_List/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0009_Using_an_Item_Renderer_with_a_List/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0009_Using_an_Item_%20Renderer_with_a_List):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0009_Using_an_Item_%20Renderer_with_a_List"><i class="fa fa-download"></i> Project Source Code</a>