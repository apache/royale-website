---
title: "Using View States to show or hide content"
author: "Carlos Rovira"
date: 2018-06-06
tags: ["blog", "Jewel UI Set", "Royale Examples"]
layout: "blog-post.html"
---
This example shows you how to display or hide content in your Royale application, thanks to the **View States** feature. It uses the new Jewel UI set that supports themes and is available in [the 0.9.4 release or later](https://royale.apache.org/download/).

```mxml
<?xml version="1.0" encoding="UTF-8"?>
<j:Application xmlns:fx="http://ns.adobe.com/mxml/2009"
              xmlns:j="library://ns.apache.org/royale/jewel"
              xmlns:js="library://ns.apache.org/royale/basic"
              xmlns:html="library://ns.apache.org/royale/html">
    
    <j:initialView>
        <j:View id="view">
            <j:states>
                <js:State name="login" />        
                <js:State name="loggedIn" />        
            </j:states>
            
            <j:beads>
                <js:SimpleStatesImpl/>
            </j:beads>

            <j:Card id="loginForm" includeIn="login">
                <html:H1 text="Royale login"/>
                <j:TextInput id="username" text="someuser"/>
                <j:TextInput id="password" text="somepass">
                    <j:beads>
                        <j:PasswordInput/>
                    </j:beads>
                </j:TextInput>
                <j:Button text="Login" emphasis="primary" click="view.currentState = 'loggedIn'" />
            </j:Card>

            <j:Card id="loggedInForm" includeIn="loggedIn">
                <html:H1 text="You are logged in!! :)"/>
                <j:Button text="Logout" click="view.currentState = 'login'"/>
            </j:Card>
        </j:View>
    </j:initialView>

</j:Application>
```

The View States feature is a way of putting different filters over part of the application so that different things appear depending on what the app is doing, what permissions the user has, what the user has just done, or some other condition. You create a series of "states" and associate components of your application with one or more of the states. The way you associate a component with a state is to add the includeIn attribute to the component and set the attribute equal to one or more of the available states. Once you have associated a parent component to a state, all of its children (the things "inside" it) are also associated to the state.

Using states gives you a lightweight and quick way of updating what the user sees, without having to provide all sorts of modules that have to be loaded and unloaded.

The example shows using states to switch between two Card components, what you see before logging in and what you see once you have logged in. To make this work you need to add the SimpleStatesImpl bead. Then define the states you need in the State class. Here, our two states are login and loggedIn. Finally, add an "includeIn" attribute to each Card component and associate it with a state.

When you first see the app, the currentState in the view is the first state listed in the State class: login.

When you click the button, the "click" function assigns a new state as the currentState. Anything that is not associated with the new state magically disappears, and anything that is associated with it is suddenly visible.

Instead of using includeIn, you have another way via dot notation in attributes, in this case notice the notation visible="true" and `visible.<state>="false"` in the following code:

```mxml
<j:Card id="loginForm" visible="true" visible.loggedIn="false">
    <html:H1 text="Royale login"/>
    <j:TextInput id="username" text="someuser"/>
    <j:TextInput id="password" text="somepass">
        <j:beads>
            <j:PasswordInput/>
        </j:beads>
    </j:TextInput>
    <j:Button text="Login" emphasis="primary" click="view.currentState = 'loggedIn'" />
</j:Card>

<j:Card id="loggedInForm" visible="false" visible.loggedIn="true">
    <html:H1 text="You are logged in!! :)"/>
    <j:Button text="Logout" click="view.currentState = 'login'"/>
</j:Card>
```

You can use it in almost any attribute you want, not only visible.

Another way to set SimpleStatesImpl is vía CSS. You can do this in MXML or in an external CSS file:

```css
@namespace "//www.w3.org/1999/xhtml";
@namespace js "library://ns.apache.org/royale/basic";
    
global {
    IStatesImpl: ClassReference("org.apache.royale.core.SimpleStatesImpl");
}
```

## Where to go from here

- [View States Royale Docs page](https://apache.github.io/royale-docs/features/view-states)
- [Jewel TextInput Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/textinput)
- [Jewel Button Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/button)
- [Jewel Card Royale Docs page](https://apache.github.io/royale-docs/component-sets/jewel/card)

The result of this code snippet is the following:

<iframe width="100%" height="300" src="/blog-examples/BE0008_Using_View_States_to_show_or_hide_content/index.html"></iframe>

(We're using an iframe to host the actual results of this example compilation. To see the example in a separate window click <a href="/blog-examples/BE0008_Using_View_States_to_show_or_hide_content/index.html" target="_blank">this link</a>.)

Full project with source code can be found [here](https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0008_Using_View_States_to_show_or_hide_content):

<a class="btn btn-download" href="https://github.com/apache/royale-asjs/tree/develop/examples/blog/BE0008_Using_View_States_to_show_or_hide_content"><i class="fa fa-download"></i> Project Source Code</a>