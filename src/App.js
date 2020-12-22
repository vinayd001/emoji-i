import React, { useState } from "react";
import "./styles.css";

const emojiDB = {
  "😀": "Happy Face",
  "😁": "Beaming Face with Smiling Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😋": "Face Savoring Food",
  "🤪": "Zany Face",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face"
};

const emojiDBArray = Object.keys(emojiDB);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function getInput(event) {
    const inputVal = event.target.value;
    if (inputVal in emojiDB) setMeaning(emojiDB[inputVal]);
    else if (inputVal === "") setMeaning("");
    else setMeaning("It's not in our database");
  }

  function printEmoji(emoji) {
    setMeaning(emojiDB[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji World</h1>
      <input type="text" name="input" onChange={getInput} />
      <h3> {meaning} </h3>

      <h2>
        <br></br>
        Our Emoji Database
      </h2>
      {emojiDBArray.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => printEmoji(emoji)}
            style={{ fontSize: "2rem", padding: "0.25rem", cursor: "auto" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
