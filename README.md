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

<div display="flex">

<img width="472" alt="CleanShot 2023-01-24 at 14 50 44@2x" src="https://user-images.githubusercontent.com/30869823/214312255-27b2c925-99f9-4e7e-b7a9-4375d37f7757.png">
<img width="463" alt="CleanShot 2023-01-24 at 14 50 29@2x" src="https://user-images.githubusercontent.com/30869823/214312270-3692ae0d-7a92-4eab-939f-015ce78c7a04.png">
<img width="461" alt="CleanShot 2023-01-24 at 14 50 15@2x" src="https://user-images.githubusercontent.com/30869823/214312282-45fb1271-43cb-411a-ac07-b51956407fad.png">


</div>

## About

Came across some tweets by [Shayan](https://twitter.com/imsh4yy?s=21&t=ETlRoiFLQAAJRfdOAWUkEg) about LogSnag. He put up this amazing UI where gradients were formed based on a selected emoji. I scourged the comments for any hint on how he achieved this, found none, so I decided to create mine.

## How does it work

When you pass in an emoji as a string, it gets drawn unto an html canvas. This allows us to get the image back as a base64 encoded image.
From this, we're able to move through the pixels in the image to get all the relevant colors.

## Usage

```ts
// import generatePalette
import { generatePalette } from "emoji-palette";

// Pass your emoji to this method
const palette = generatePalette("👍");
```

The method returns an array of colors, in their order of luminance.
So you can get the median color in the palette if you need one.
```ts
const dominantColor = palette[Math.floor(palette.length / 2)];
```

Colors are returned as `rgb` strings.

You can see a live demo [here](https://anubra266.github.io/emoji-palette/)
Codesandbox example [here](https://codesandbox.io/p/sandbox/confident-silence-l6cbju)

