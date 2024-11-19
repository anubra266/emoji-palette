import { useState } from "react";
import "./App.css";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { generatePalette } from "emoji-palette";
import { transparentize } from "color2k";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [emoji, setEmoji] = useState<string>("👍");
  const palette: string[] = generatePalette(emoji);
  const dominantColor: string = palette[Math.floor(palette.length / 2)];

  function switchColorMode() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  function copyColorToClipboard(color: string) {
    navigator.clipboard.writeText(color);
    alert(`Color "${color}" copied to clipboard!`);
  }

  return (
    <div className={`main ${theme}`}>
      <div className="app">
        <div className="nav">
          <h1
            style={{
              color: dominantColor,
            }}
          >
            Emoji Palette
          </h1>
          <button onClick={switchColorMode}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
          <a className="btn" target="_blank" href="https://github.com/anubra266/emoji-palette">
            Github
          </a>
        </div>
        <div
          className="emoji-wrapper"
          style={{
            borderColor:
              theme === "light"
                ? undefined
                : transparentize(dominantColor, 0.4),
            background: transparentize(dominantColor, 0.9),
          }}
        >
          <span className="emoji">{emoji}</span>
        </div>
        <Picker
          data={data}
          theme={theme}
          onEmojiSelect={(data: any) => setEmoji(data.native)}
        />
                  <br />

        <span>click to copy the color</span>
          
        <div className="palette">
          {palette.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{
                background: color,
              }}
              onClick={() => copyColorToClipboard(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
