--- 
permalink: the-poor-mans-market-development
layout: post
title: "The Poor Man's Market Development "
published: true
categories: []

---

Generating leads and discovering market size while bootstrapping your startup can be a difficult and long-winded task. Discussed here is a lean, automated, and hopefully new technique to return actionable metrics.

The first place I went to look for potential customers were companies and websites that were using one of my competitors products.<sup>1</sup>

While the technique I used to generate a list of these websites might only be specific to a small subset of web startups, you might be able to find some use out of it. 

In this case, my product was a javascript library that runs client side A/B tests, and my goal was to automate the creation of a list of all of my competitor’s clients. 

I started by finding a single client of each competitor. These can usually be found through case studies or testimonials on the competitor’s website. Upon visiting a client’s website, there is nothing too telling about their use of a javascript library. Certainly no text you can use in a Google query. 

Examining the source code is a different story. My competitors leave a certain signature inside the source of each of their clients web pages. 

Let’s take a look at the source of a client of Visual Website Optimizer named White Fence.  
{% img  /images/visualwebsite.png %}
  
The HTML comment tells me what I need to know to automate the process of discovering more clients:
`<!-- Start Top Visual Website Optimizer Code -->`  

Each of my competitors have a similar signature: SiteSpect, Google Website Optimizer, VWO, & more.

Most search engines won’t let you search the internet by HTML comments, so I used a service called [80legs.com][1] and created my own search engine.
80legs let’s you create web crawlers and process the results. The crawler works the same way Google’s and Yahoo’s does, traversing web page to web page by following HREFs based off of a seed list(an initial set of pages). 

I created a crawler and chose to analyze results by Regular Expressions. This will run RegEx on the source code returned by the crawler, not just the content meant for human.

{% img [] /images/80legsregex.png %}
  
The RegEx searches each page for one of the HTML comment signatures used by my competitors. The results? A list of thousands of websites per competitor, all guaranteed to be actively using a competitors product.  
  
This technique can be used by some as a poor man’s market development. A free way to gauge the size of a market, reach of a competitor and possibly some cold-call sales.

<sup>1</sup>I'm not insinuating that this is the best type of potential customer.

 [1]: http://80legs.com  
