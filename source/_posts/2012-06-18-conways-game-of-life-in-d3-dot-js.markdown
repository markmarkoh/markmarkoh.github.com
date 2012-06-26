---
layout: post
title: "Conway's Game of Life in D3.js"
date: 2012-06-18 23:06
comments: true
categories:
published: false
---

[Conway's Game of Life][0] is a classic computer science puzzle, often asked during programming interviews. 

`for` loops, `if` statements, multi-dimensional arrays oh-my. 

What does Conway's Game of Life have to do with UI? _Absolutely nothing_.

This year I helped put together a charity event called [RHoK Austin][1], Random Hacks of Kindness. My job was to put together the event page. 

A few decisions we made:

* Single page, long-form site: √
* Responsive design for mobile use: √
* Twitter integration: √

and finally:

* over-the-top easter egg SVG implementation of Conway's Game of Life in [D3.js][2] that advances the algorithm as you scroll: √

Live demo: [http://rhokaustin.org][1]
-----

{% img [] /images/rhokaustin.png %} 


We put the **Random** in Random Hacks of Kindness. &copy;

Live demo: [http://rhokaustin.org][1]
----

Source code for the entire site [here][3], or jump right to the D3.js portion [here][4]

[0]: http://en.wikipedia.org/wiki/Conway's_Game_of_Life "Conway's Game of Life"
[1]: http://rhokaustin.org "RHoK Austin event page"
[2]: http://d3js.org/ "D3.js"
[3]: https://github.com/markmarkoh/rhok "repo"
[4]: https://github.com/markmarkoh/rhok/blob/master/js/conway.js "D3.js goodness"
