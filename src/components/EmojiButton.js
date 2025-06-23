import React, { useState } from "react";

const EmojiButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      className={`emoji-button favorite ${isLiked ? "active" : null}`}
      onClick={() => setIsLiked(!isLiked)}
    >
      {isLiked ? "★" : "☆"}
    </button>
  );
};

export default EmojiButton;
