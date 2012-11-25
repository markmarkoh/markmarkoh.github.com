---
layout: post
title: "D3.js animated map visualization"
date: 2012-06-21 18:35
comments: true
categories: 
---
When you walk into [Bazaarvoice][2]'s office in Austin, TX, you can't miss a giant screen in the main lobby displaying some interesting metrics regarding our business. 

{% img [] /images/someword.png %} 

Part of that display is an SVG map of the world using [D3.js][0] (&hearts; d3.geo), and all day long we're watching it connect the people that ask questions on our client's sites to the people that answer them.

The visualization we made takes a series of data, including the time and geolocations of the questioners and answerers. I animate an arc connecting to connect the two points. 

<iframe src="http://player.vimeo.com/video/44433253" width="500" height="231" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

Drawing a world map in D3.js: 

{% gist 2969316 %}

[Grab the world data json data here][1]

__D3.js allows us to use pure latitude/longitude coordinates the entire time. From drawing the map to pinpointing the location of the users, we never have to figure out the X/Y coordinates on the map. Major win.__


######Disclaimer: The views / words expressed in this post are my own and not representative of my employer

[0]: http://d3js.org/ "D3.js"
[1]: https://gist.github.com/2969317 "World Map Data JSON"
[2]: http://www.bazaarvoice.com/ "Bazaarvoice, Inc"
