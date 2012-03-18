--- 
permalink: nodejs-npm-and-executables
layout: post
title: node.js, npm and executables
published: true
categories: []

---

A great feature of node.js & npm is the easy path to create executable, standalone programs.

I'll be using npm (1.0.22) and node (0.4.11), the dependency here is npm > 1.0. All of the source used can be found at

first you want to create a package.json file for npm. This will let us specify executables and automatically install them to a user's PATH.

Example package.json:
{% gist 1106127 %}

Take a look at the "bin" property of that package.json.

The key ("watchjs" in this example) will be the globally accessible name, so pick something custom that doesn't already exist (like "rm" or "shutdown").

The value ("bin/watch.bin.js") is a JS file I created that contains the source of the executable, which is just Javascript.

Here is "bin/watch.bin.js":
{% gist 1106131 %}

My node app's name is "watch" and it lives in the root directory of my repo, and it exports a function named "init" so that I can pass command line arguments into node.js.

Now to test it all out:
```bash
> npm install . -g
#check to see if everything is working
> watchjs
Starting server on... #great
```

A quick note on the "-g" flag, which means "install globally": If the sole purpose of your node.js application is to be run as an executable, it's probably a good idea to use the "-g" flag so that the user can run the executable from anywhere on the file system, as opposed to just in the project directory you are in. 
