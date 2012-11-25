---
layout: post
title: "jQuery .live() gotchya"
date: 2012-04-27 12:51
comments: true
categories: 
---

I was recently trying to fix a bug somebody introduced in our app, and after a bunch of digging I found the misunderstanding of `$.fn.live`.

*tldr: cacheing a selector, then attaching a `$.fn.live` event listener, then attempting to use that cached selector (accessed via closure) can break.*

{% gist 2511352 %} 

The cached selector is **not live**, but attaching the event handler via `$.fn.live` works.

For this to work as expected, you'd have to do a re-selection within the event handler, instead of trying to use a cached selector. 

Good thing that [$.fn.live is deprecated as of jQuery 1.7][0]

 [0]: http://api.jquery.com/live/ "$.fn.live"
