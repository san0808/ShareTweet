import React, { useState } from 'react';
import TweetBox from './TweetBox';

function UrlInput() {
  const [url, setUrl] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <div className="my-4 md:my-8 flex flex-col items-center">
      <label htmlFor="tweet-url" className="sr-only">
        Enter tweet URL
      </label>
      <input
        id="tweet-url"
        className="shadow-md w-full max-w-md p-2 border-slate-300 hover:border-lime-100 rounded-lg flex-grow"
        type="text"
        placeholder="Enter tweet URL"
        value={url}
        onChange={handleInputChange}
      />
      <TweetBox Url={url} />
    </div>
  );
}

export default UrlInput;
