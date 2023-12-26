// MarkdownRenderer.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language} children={value} />;
};

const MarkdownRenderer = ({ sourcePath, title }) => {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(sourcePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch Markdown: ${response.statusText}`);
        }
        return response.text();
      })
      .then((md) => {
        setMarkdown(md);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sourcePath]);

  const components = {
    code: CodeBlock,
  };

  return (
    <div className="markdown-renderer">
      <h2>{title}</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <ReactMarkdown components={components}>{markdown}</ReactMarkdown>}
    </div>
  );
};

export default MarkdownRenderer;
