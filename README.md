# 2K2K-website
The website for Minecraft server 2K2K made using GatsbyJS.

# Creating a new announcement on the frontpage
Create a new Markdown (.md) file in ```src/pages/posts```.

Paste the snippet below:

```
---
date: "YYYY-MM-DD"
title: "Your title"
sticky: false //true or false depending if you want the post to be stickied or not
---

Your text goes here. Styling is possible.
```

Save and test with ```gatsby develop``` or jump straight to building for production with ```gatsby build```.