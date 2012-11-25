--- 
permalink: say-no-to-javascript-alert
layout: post
title: Say 'No' to Javascript alert()
published: true
categories: []

---

I see too many people use `alert()` when smoke testing a web application when they should be using `console.log()` instead.


Why should you prefer `console.log()` over the unmistakably obvious `alert()`?


For starters, it doesn't block the javascript thread, so your page will continue to load normally. It's common to discover timing bugs when you've been relying on `alert()` in testing, and removing the call later on.


Secondly, `console.log()` outputs to the consoles of many of the popular browsers, especially Chrome & Firefox. (Tip: press CTRL+SHIFT+J in Chrome or use Firebug's console in Firefox).


The only gotchya when it comes to console.log if you're not curently running the console, `window` has no property `console` and your script will error out. This is easily remedied by adding this line to the begining of your javascript heavy pages:

```javascript
window.console = window.console || {log: function(m) {}, info: function(m) {}};
```

This will use a console if available, if not it will do nothing(more importantly, no errors). 
