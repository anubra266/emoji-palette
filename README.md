<div align="center">

  <h1>
    <br/>
    🏇
    <br />
    emoji-palette
    <br />
    <br />
  </h1>
  <sup>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/emoji-palette?style=for-the-badge">
       <img src="https://img.shields.io/npm/v/emoji-palette.svg?style=for-the-badge" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/emoji-palette?style=for-the-badge">
      <img src="https://img.shields.io/npm/dw/emoji-palette.svg?style=for-the-badge" alt="npm  downloads" />
    </a>
<a>
    <img alt="NPM" src="https://img.shields.io/npm/l/emoji-palette?style=for-the-badge">
</a>

<a><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/anubra266/emoji-palette?logo=github&style=for-the-badge">

</a>
    <br />
   Get color palettes for emojis.
    
  </sup>
  <br />
  <br />
  <br />
  <br />
  <pre>npm i <a href="https://www.npmjs.com/package/emoji-palette">emoji-palette</a></pre>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

## Install

```bash
npm i --save emoji-palette
#or
yarn add emoji-palette
#or
pnpm add emoji-palette
```

## About

Came across some tweets by [Shayan](https://twitter.com/imsh4yy?s=21&t=ETlRoiFLQAAJRfdOAWUkEg) about LogSnag. He put up this amazing UI where gradients were formed based on a selected emoji. I scourged the comments for any hint on how he achieved this, found none, so I decided to create mine.

## How does it work

When you pass in an emoji as a string, it gets drawn unto an html canvas. This allows us to get the image back as a base64 encoded image.
From this, we're able to move through the pixels in the image to get all the relevant colors.

## Usage

```ts
// import generatePalette
import { generatePalette } from "emoji-palette";

// Pass your emoji to this methos
const palette = generatePalette("👍");
```

The method returns an array of colors, in their order of luminance.
So you can get the median color in the palette if you need one.
```ts
const dominantColor = palette[Math.floor(palette.length / 2)];
```

Colors are returned as `rgb` strings.

You can see a live demo [here](https://anubra266.github.io/emoji-palette/)
