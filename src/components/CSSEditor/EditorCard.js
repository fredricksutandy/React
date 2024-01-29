// EditorCard.js
import React, { useState } from 'react';

const EditorCard = ({ onSelectStyle }) => {
  const [fontSize, setFontSize] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');

  const handleSubmit = () => {
    const styleOptions = {};

    if (fontSize.trim() !== '') {
      styleOptions.fontSize = parseInt(fontSize, 10);
    }

    if (backgroundColor.trim() !== '') {
      styleOptions.backgroundColor = backgroundColor;
    }

    if (textColor.trim() !== '') {
      styleOptions.color = textColor;
    }

    onSelectStyle(styleOptions);
  };

  return (
    <div className="bg-white w-full">
      <p>Font size</p>
      <input
        className="font-size-editor"
        type="text"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />

      <p>Background size</p>
      <input
        className="background-size-editor"
        type="text"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />

      <p>Text color</p>
      <input
        className="text-color-editor"
        type="text"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EditorCard;
