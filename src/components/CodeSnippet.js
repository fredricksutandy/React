import React, { useState } from 'react';

const CodeSnippet = () => {
  const [code, setCode] = useState(`
    // Your code goes here
    function myFunction() {
      console.log("Hello World!");
    }
  `);

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div>
      <pre>
        <code>{code}</code>
      </pre>
      <button onClick={copyCodeToClipboard}>Copy</button>
    </div>
  );
};

export default CodeSnippet;
