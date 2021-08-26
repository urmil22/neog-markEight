import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Happy Face",
  "😉": "Winking Face",
  "😛": "Face with Tongue",
  "🤐": "Zipper-Mouth Face",
  "🤗": "Hugging Face",
  "🤩": "Star-Struck",
  "🙃": "Upside-Down Face",
  "😂": " Face with Tears of Joy",
  "😋": "Face Savoring Food",
  "😒": "Unamused Face",
  "😴": "Sleeping Face",
  "😎": "Smiling Face with Sunglasses",
  "😕": "Confused Face",
  "👽": "Alien",
  "🤡": "Clown Face",
  "😭": "Crying Face",
  "🥱": "Yawning Face",
  "😨": "Fearful Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! We can't find this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Know your emotions</h1>
      <h2 style={{ color: "green" }}>Emoji Interpreter</h2>
      <input
        placeholder="Search your emoji to get their meaning"
        onChange={emojiInputHandler}
        style={{ width: "80%", height: "7vh" }}
      ></input>
      <h3 style={{ color: "brown" }}>{meaning}</h3>
      <h2 style={{ color: "GrayText" }}>Emojis in our dictionary</h2>
      <div>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "1.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
