---
layout: post
title: "WIP URL managed, state-based single page applications with Ember.js & Director."
date: 2012-04-08 23:11
comments: true
categories: 
---

###Update: This is soon-to-be deprecated due to Ember.Router!


[Check out the sample application][0], and [source on github][3]. 

 One of the drawbacks of single paged apps is when you no longer depend on distinct URLs for each of the pages - URLs get dropped in favor of hosting the entire app under one root URL ( http://example.com/app ). 

 Outlined here is an architecture to maintain distinct URLs with Ember.js applications. 
 
Director
--------

[Director][1], part of Nodejitsu's Flatiron framework, is a URL routing library that is capable of running in the browser. It uses hashChange ( and soon, pushState ) to change URLs and execute the appropriate Javascript. Perfect for single paged apps. 

If you've used Django (urls.py), Sinatra, Rails, Express for Node - this should look familiar. Keep in mind it's running in the browser. 

{% gist 2341574 %}


Ember
------

[Ember.js][2] is a project run by Tom Dale and Yehuda Katz. It's a client-side MVC framework - the benefits of using Ember.js (or Backbone.js) go beyond the scope of this article.

One of Ember.js's most useful, yet least documented features, is Ember.StateManager.

Ember.StateManager is easy to use - you need a rootElement (defaults to `body`) and a few distinct `Ember.ViewStates`, which at their simplest - just need a `Ember.View`.

Switching between states will remove the `currentState` view, and insert the new state's view, and run appropriate `enter`/`exit` events if you wanted. 

`Ember.StateManager.goToState ( strStateName )` if enough to switch the state. Pretty easy. 

{% gist 2341576 %}

Hijack
-----

Hijacker takes a jQuery Anchor tag selector (e.g. `.container a[href]`), and "hijacks" click events to push the new URL into Director instead of allowing a page jump. 

This let's us keep our markup semantically pure - we don't have to add click handlers everywhere, just classic `<a href="/product/10101/">Product 10101</a>`. Perfect for porting an existing application. 


All together
------

A user clicks a link - Director changes the URL and runs a callback that updates Ember's current state.

Now that user can refresh the page, or share the link, and the app **follows the same path as it did when somebody clicked a link**.

Effectively, URLs are controlling the state of our application, not click events.

[Check out the sample application][0], and [source on github][3]. 


_Notes: I used Director instead of an user contributed addon, SproutCore Routes, because I wanted to keep my URL routing and application decoupled. Checkout Sproutcore Routes if you'd rather use that._


 [0]: /app/#/ "demo application"
 [1]: http://flatironjs.org/ "flatiron"
 [2]: http://emberjs.com "ember js"
 [3]: https://github.com/markmarkoh/single_page_demo "single page demo repo"

