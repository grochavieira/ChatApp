import React from "react";

import "./Input.css";

export default function Input({ message, setMessage, sendMessage }) {
  return (
    <div className="form">
      <input
        className="input"
        value={message}
        placeholder="Type a message..."
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
        type="text"
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </div>
  );
}
