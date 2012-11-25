--- 
permalink: tuftes-slope-graphs-in-svg-using-d3js
layout: post
title: "Tufte's slope graphs in SVG using D3.js"
published: true
categories: []

---

There was recently some buzz regarding a graph invented by one of the godfathers of visualizations, Edward Tufte, in the iconic 1983 book '[The Visual Display of Quantitative Information][1]' (p. 158).


You can see a [scanned copy of the graph here][2], along with an interesting discussion regarding the chart, it's history and different versions of it.


I decided to recreate the graph dynamically for the browser using an SVG, which is something you'll need a semi-advanced browser to see. With a library named [D3.js][3], I came up with this:
<div style="text-align:center;"><iframe scrolling="no" src="http://markdimarco.com/slope/index.html" frameborder="0" border="0" height="800" width="400"><a href="http://markdimarco.com/slope.html">http://markdimarco.com/slope.html</a></iframe></div>


If you can't see the iframe above, [click here][4] for standalone version.


As long as you are using a browser that supports SVG, you should see a nicely rendered version of Tufte's original slope graph.


In the future I'll make a library version of this on top of D3.js to create custom slope graphs that retain Tufte's original design. 


One of the coolest things about the original design, as noted by [Charlie Park][5], is that there is *"absolutely zero non-data ink"*.

 [1]: http://www.edwardtufte.com/tufte/books_vdqi "visual display of quantitative information"
 [2]: http://charliepark.org/slopegraphs/#the_tablegraphic "charlie park's slope graphs"
 [3]: http://mbostock.github.com/d3/ "d3.js svg javascript library"
 [4]: http://markdimarco.com/slope/index.html
 [5]: http://charliepark.org/slopegraphs/#the_tablegraphic "charlie park" 
