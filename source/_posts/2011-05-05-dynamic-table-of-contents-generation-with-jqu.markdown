--- 
permalink: dynamic-table-of-contents-generation-with-jquery
layout: post
title: Dynamic "table of contents" generation with jQuery
published: true
categories: []

---

A quick way to generate a dynamic table of contents, based on the sections as they appear in the content.

{% gist 958465 %}

The first block loops through all the section headers (which are `<h1>`s), and injects them as anchor tags into the initially empty TOC wrapper DIV.

`$("<a/>")` is sexy jQuery syntax to create a fresh DOM element.

`.data()` is a nice way to store metadata about a DOM element. It's nice because it doesn't store the data \*in\* the DOM, which is notoriously slow.

The second block just adds the click handler and uses the $.scrollTo plugin for some fancy scrolling animation.

It's small, but neat, and it removes the need to maintain a duplicate list of section names.

Originally found on [Frontend Dev Guidelines][2]

 [1]: http://twitter.com/taitems
 [2]: http://taitems.github.com/Front-End-Development-Guidelines/
