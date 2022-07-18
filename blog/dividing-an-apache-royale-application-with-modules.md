---
title: "Dividing an Apache Royale application with modules"
author: "Carlos Rovira"
date: 2019-06-26
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---

This example shows how you can break an Apache Royale application into parts called Modules. You then have a main application that acts as a shell for the modules, that hold key features or functions, and that are loaded on demand, not when the user first opens the application.

In this way you benefit from better load times for your application since you don't load all the code at once. Another benefit is better compile times, since you have to build the application or module to which you have made changes, so you compile less code.

The application uses a **ModuleLoader** to load each module as it is needed. ModuleLoader can load a module directly (this is the default behavior), or you can turn off automatic loading by setting **autoLoad** to false, and perform the load of each module on demand.

This example shows a **Jewel Card** with a ModuleLoader and a button that triggers the load. You can push the button and see the sample **Module** load.

## The Main Application

This is the code for the main application that holds the ModuleLoader:

```mxml
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:js="library://ns.apache.org/royale/basic"
              xmlns:html="library://ns.apache.org/royale/html">

    <fx:Script>
        <![CDATA[
           public function loadModule():void
           {
               moduleLoader.loadModule();
           }
        ]]>
    </fx:Script>
    
    <j:beads>
        <js:ApplicationDataBinding />
    </j:beads>

    <j:initialView>
        <j:View>
            <j:beads>
                <j:HorizontalCenteredLayout/>
            </j:beads>

            <j:Card percentWidth="90">
                <html:H3 text="Dividing an Apache Royale application with modules"/>
                
                <j:Label html="This example uses Modules to load parts of the application"/>

                <j:ModuleLoader localId="moduleLoader" autoLoad="false"
                               modulePath="modules" moduleName="JewelModule"/>

                <j:Button text="Load a Module" emphasis="primary" click="loadModule()"/>
             </j:Card>
        </j:View>
    </j:initialView>
</j:Application>
```

As you can see, the **ModuleLoader** needs to know the **modulePath** (the path where the module can be found) and the **moduleName** (the name of the module to load). We set **autoLoad** to false to avoid having the module load when **ModuleLoader** is added to the application. The module loads when a user pushes the button that calls **moduleLoader.loadModule()**. That's all!

## The Sample Module

This is the code for the Module:

```mxml
<j:Module xmlns:fx="http://ns.adobe.com/mxml/2009"
        xmlns:j="library://ns.apache.org/royale/jewel"
        xmlns:js="library://ns.apache.org/royale/basic"
        initComplete="initModule()">
    
    <fx:Script>
        <![CDATA[
            private function initModule():void
            {
                trace("Initialize the module!");
            }
        ]]>
    </fx:Script>

    <j:beads>
        <js:ContainerDataBinding/>
        <j:VerticalLayout/>
    </j:beads>
    
    <j:valuesImpl>
        <js:SimpleCSSValuesImpl/>
    </j:valuesImpl>
    
    <j:HGroup gap="3">
        <j:IconTextInput>
            <j:beads>
                <j:TextPrompt prompt="Search..."/>
                <j:SizeControl size="xlarge"/>
            </j:beads>
            <j:icon>
                <js:FontIcon text="{MaterialIconType.SEARCH}" material="true"/>
            </j:icon>
        </j:IconTextInput>
        <j:Button text="Search" emphasis="secondary">
            <j:beads>
                <j:SizeControl size="xlarge"/>
            </j:beads>
        </j:Button>
    </j:HGroup>
    
</j:Module>
```

We need to use the **Module** tag as the main tag. This means that the module can't be loaded on its own. It needs to be parented by an application and loaded by a ModuleLoader.

The content of the module can be whatever code you want. In this case we are adding just a few Jewel controls to show a big search box.

Notice that the module has an **initComplete** handler where you can execute code you need to initialize the module (in this case just a log a message). This is similar to the **applicationComplete** feature for the application itself.

> Since this particular module uses a search icon that comes from MaterialIconType, when you add it directly to an application, the compiler injects a link to make Material Icons available. Since this class is used in a module, not in the application itself, Royale adds it via JavaScript to the html head when the module is loaded, so it is ready to be added to the application.

## Project structure

We have multiple compilation units (one application and one or more modules), building this application is more complex than a simpler application. You used to have a project for the application and a project for the module. You would like to copy the module output files into the target application folder to make the module available for the compiled application. In this example, Maven helps you by providing a maven build layout for an application and its modules and copying the files you need to the right folders for both debug and release compilations. Check the project source code below.

A simpler option is to have only one project with application and modules all together. This is how [Tour De Flex](https://github.com/apache/royale-asjs/tree/develop/examples/mxroyale/tourdeflexmodules) is done. For this layout you must use **module-output** compiler option so royale can output modules in the folder you prefer. Check [Apache Royale Modules documentation page](https://apache.github.io/royale-docs/create-an-application/modules.html) to know more about it.

## Where to go from here

- [Apache Royale Modules documentation page](https://apache.github.io/royale-docs/features/modules)
- [Jewel TextInput Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/textinput)
- [Jewel Button Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/button)
- [Jewel Card Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/card)

The result of this code snippet is the following:

<iframe width="100%" height="400" src="/blog-examples/BE0013_Dividing_an_Apache_Royale_application_with_modules/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0013_Dividing_an_Apache_Royale_application_with_modules/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0013_Dividing_an_Apache_Royale_application_with_modules):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0013_Dividing_an_Apache_Royale_application_with_modules"><i class="fa fa-download"></i> Project Source Code</a>