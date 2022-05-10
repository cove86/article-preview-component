# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

## Dektop
<img src="/images/desktop.JPG" width="1000" height="500">

## Mobile

<img src="/images/mobile.JPG" width="400" height="600">

## Mobile-active

<img src="/images/mobile-active.JPG" width="400" height="600">


### Links

- Solution URL: https://github.com/cove86/article-preview-component
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid

### What I learned

I mainly practiced what I already knew howver for the share modal I needed to add a psuedo class to create the arrow effect, this was not something I had previously done so I managed to look this up and implement it as per the below.


```css
.share::after {
  position: absolute;
  content: '';
  width: 12.5px;
  height: 12.5px;
  top: 100%;
  left: 50%;
  margin-left: -6.25px;
  margin-top: -6.25px;
  transform: rotate(45deg);
  background-color: hsl(217, 19%, 35%);
}
```

### Continued development
I'm going to continue working on these challenges to practice my layout skills as the js side I'm comfortable with.


## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/cove86
- Twitter - https://twitter.com/Cove1986
