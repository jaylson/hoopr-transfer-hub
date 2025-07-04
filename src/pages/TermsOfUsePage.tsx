import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const TermsOfUsePage = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/hoopr_terms_of_use.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="min-h-screen bg-hoopr-dark text-white py-16 px-4 md:px-0">
      <div className="max-w-3xl mx-auto bg-black/80 rounded-xl shadow-lg p-8 border border-white/10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms of Use</h1>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
