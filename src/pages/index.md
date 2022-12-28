---
title: Hello
layout: page.html
permalink: /
---

==**My name is Jon**== and I write for the web as a ==**technical and UX writer**==. I am also interested in ==**web development**==, ==**web design**==, and ==**accessibility**==.

This site is not tracking you, but you can subscribe to the [RSS](/feed/feed.xml/) feed if would like to track it.

{% assign postslist = collections.posts | slice: 0, 3 %} {% include
'postslist.html' %}
