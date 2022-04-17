# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Stats preview card component solution](#frontend-mentor---stats-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
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

- View the optimal layout depending on their device's screen size

### Screenshot

![Desktop Screenshot](./screenshots/screenshot-desktop.png)

### Links

- Solution URL: [Right here!](https://www.frontendmentor.io/solutions/fully-responsive-stats-preview-card-built-with-svelte-and-windicss-rkEGyRF4q)
- Live Site URL: [Deployed on Vercel](https://stats-preview-card-component-seven-virid.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Svelte
- Flexbox & Grid
- WindiCSS
- Vite

### What I learned

I had trouble adding the color overlay to the image, but after a little bit of googling I found the mix-blend-multiply className.

```html
<picture class="block order-2 bg-violet">
  <source srcset="{imageHeaderDesktop}" media="(min-width: 640px)" />
  <source srcset="{imageHeaderMobile}" media="(max-width: 640px)" />
  <img
    class="opacity-70 mix-blend-multiply"
    src="{imageHeaderDesktop}"
    alt="team working in an office"
    width="540"
    height="466"
  />
</picture>
```

### Useful resources

- [Two ways to achieve an image color overlay](https://dev.to/ellen_dev/two-ways-to-achieve-an-image-colour-overlay-with-css-eio) - This helped me with the image color overlay.

## Author

- Frontend Mentor - [@Shawn Lee](https://www.frontendmentor.io/profile/OGShawnLee)
