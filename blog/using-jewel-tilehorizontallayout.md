---
title: "Using Jewel TileHorizontalLayout"
author: "Carlos Rovira"
date: 2020-08-11
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
This example shows how to use the Jewel **TileHorizontalLayout** in Jewel components and data-based containers to arrange child elements as tiles. The layout lets you customize the tiles' size, the gaps between tiles, and whether you want them organized by rows or columns.

This layout is modeled very closely on the [Apache Flex Spark TileLayout](https://flex.apache.org/asdoc/spark/layouts/TileLayout.html).

## Example structure

We're using the **Jewel UI set** to build a simple interface as a placeholder for the example. We use a Jewel **Card** in the middle of the screen. Inside the **CardPrimaryContent** we add a **TabBarContent** to switch between a **Container** and a **DataContainer** both using the **TileHorizontalLayout** to display child elements as tiles. We switch between the views using a TabBar inside a **CardExpandedContent**.

> Use **CardExpandedContent** when we need the content adjusted to fit the Card borders without any gap. In our example, we want the TabBar to fill all the available space.

## Adding the TabBar

We declare the **TabBar** using an inline **ArrayList** as **dataProvider** with the data to build each **TabBarButton**.

```mxml
<j:CardExpandedContent>
    <j:TabBar localId="tabbar" width="100%" selectedIndex="0" sameWidths="true"
       itemRenderer="itemRenderers.TabBarVerticalIconItemRenderer">
        <js:ArrayList>
            <fx:Array>
                <vos:TabBarButtonVO label="Tile Container" hash="sec1" icon="{FontAwesome5IconType.TH_LARGE}"/>
                <vos:TabBarButtonVO label="Tile DataContainer" hash="sec2" icon="{FontAwesome5IconType.TH_LIST}"/>
            </fx:Array>
        </js:ArrayList>
    </j:TabBar>
</j:CardExpandedContent>
```

The Tabbar add two buttons to control the content that fills all available space (width is 100%). It makes both buttons the same width and puts the focus on the first one (selectedIndex = 0). The **TabBarVerticalIconItemRenderer** item renderer controls each button's layout. Check the full code to see details on configuring the renderer.

With this code in place we can add the content.

## Add the dual TabBarContent

The main content is structured as follows:

```mxml
<j:CardPrimaryContent>
    <j:TabBarContent selectedContent="{(tabbar.selectedItem as TabBarButtonVO).hash}">
        <j:SectionContent name="sec1">
            <j:Container width="100%">
                <!-- Content to show as tiles-->
            </j:Container>
        </j:SectionContent>
            
        <j:SectionContent name="sec2">
            <j:DataContainer width="100%" height="250">
                <!-- Content to show as tiles-->
            </j:DataContainer>
        </j:SectionContent>

    </j:TabBarContent>
</j:CardPrimaryContent>
```

The TabBarContent's **selectedContent** is bound to the TabBar's **selectedItem** so when a TabBar button is selected the content changes accordingly.

## Using the tile layout in a Container

Inside the **SectionContent** we add a **Container** configured with **TileHorizontalLayout**. We can add any content we want to the container, but the size of each piece will be controlled by the layout.

Since no height is provided, no scrolling will be added as the number of content items increases or decreases, and the surrounding card will grow or shrink to adapt to them.

The layout is configured with some horizontal and vertical gaps, and we want three columns by default. This means that the width of the tiles will be calculated to fill all available space, taking into account the **requestedColumnCount** and the gaps:

```mxml
<j:Container width="100%">
    <j:beads>
        <j:TileHorizontalLayout localId="thl" verticalGap="6"
            horizontalGap="6" requestedColumnCount="3"/>
    </j:beads>
    
    <html:Div className="box" text="1"/>
    <html:Div className="box" text="2"/>
    <html:Div className="box" text="3"/>
    <html:Div className="box" text="4"/>
    <html:Div className="box" text="5"/>
    <html:Div className="box" text="6"/>
    <html:Div className="box" text="7"/>
    <html:Div className="box" text="8"/>
    <html:Div className="box" text="9"/>
    <html:Div className="box" text="10"/>
    <html:Div className="box" text="11"/>
    <html:Div className="box" text="12"/>

</j:Container>
```

## Using the tile layout in a DataContainer

Inside the **SectionContent** we add a **DataContainer** configured with the **TileHorizontalLayout**. As its name indicates, the content is generated dynamically based on the data in the ArrayList, and the item renderer controls the display of each tile.

> You can use other data-based containers like a **List** if you need more functionality like selection of items, roll-over support or keyboard accessibility.

For this example, we limit the height of the container so the content can be hidden, and add scrolling with the **ScrollingViewport** bead.

Also we configure **columnWidth** and **rowHeight** so the columns will be calculated based on tile size and gaps.

```mxml
<j:DataContainer width="100%" height="250"
    itemRenderer="itemRenderers.VerticalIconListItemRenderer">
    <j:beads>
        <j:ScrollingViewport/>
        <j:TileHorizontalLayout localId="thll" verticalGap="6"
                horizontalGap="6" columnWidth="130" rowHeight="70"/>
    </j:beads>

    <js:ArrayList>
        <fx:Array>
            <vos:IconListVO label="Ank" icon="{FontAwesome5IconType.ANKH}"/>
            <vos:IconListVO label="Atom" icon="{FontAwesome5IconType.ATOM}"/>
            <vos:IconListVO label="Burn" icon="{FontAwesome5IconType.BURN}"/>
            <vos:IconListVO label="Candy Cane" icon="{FontAwesome5IconType.CANDY_CANE}"/>
            <vos:IconListVO label="Fire" icon="{FontAwesome5IconType.FIRE_ALT}"/>
            <vos:IconListVO label="Duck" icon="{FontAwesome5IconType.DUCK}"/>
            <vos:IconListVO label="Cloud And Moon" icon="{FontAwesome5IconType.CLOUD_MOON}"/>
            <vos:IconListVO label="Europe" icon="{FontAwesome5IconType.GLOBE_EUROPE}"/>
            <vos:IconListVO label="Electric Guitar" icon="{FontAwesome5IconType.GUITAR_ELECTRIC}"/>
            <vos:IconListVO label="Mask" icon="{FontAwesome5IconType.MASK}"/>
            <vos:IconListVO label="Skull" icon="{FontAwesome5IconType.SKULL}"/>
            <vos:IconListVO label="Spider" icon="{FontAwesome5IconType.SPIDER}"/>
        </fx:Array>
    </js:ArrayList>
    
</j:DataContainer>
```

## CardActions to control sizing at runtime

In the example we also add some sliders to control different settings of each layout. For example, to change columnWidth we configure the following slider:

```mxml
<j:VGroup>
    <j:Label text="columnWidth"/>
    <j:HSlider width="200" value="85" minimum="50" maximum="150" 
            valueChange="tabbar.selectedIndex == 0 ? thl.columnWidth = event.target.value : thll.columnWidth = event.target.value;"/>
</j:VGroup>
```

We use the tabbar selectedIndex to affect the current selected content layout and avoid changing the content layout in the other tab. Check the final code example to see the rest of sliders since all are similar.

And that's all! I hope you like this layout example in Royale. As always, enjoy coding with Apache Royale!

## Where to go from here

- [Apache Royale Data Binding documentation page](https://apache.github.io/royale-docs/features/data-binding)
- [Apache Royale Jewel UI Set documentation page](https://apache.github.io/royale-docs/component-sets/jewel)
- [Jewel TabBar Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/tabbar)
- [Jewel TabBarContent Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/tabbarcontent)
- [Jewel Container Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/container)
- [Jewel DataContainer Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/datacontainer)

The result of this code snippet is the following:

<iframe width="100%" height="600" src="/blog-examples/BE0015_Using_Jewel_TileHorizontalLayout/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0015_Using_Jewel_TileHorizontalLayout/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0015_Using_Jewel_TileHorizontalLayout):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0015_Using_Jewel_TileHorizontalLayout"><i class="fa fa-download"></i> Project Source Code</a>