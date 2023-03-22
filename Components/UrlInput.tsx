import React, { useState } from 'react';
import TweetBox from './TweetBox';


function UrlInput() {
    const [url, setUrl] = useState('');
     
    return (
      <div className=" my-6 flex flex-col  items-center  ">
        <input
          className="shadow-md w-4/12 p-2  border-slat-300 hover:border-lime-100 rounded-lg placeholder-gray-500 placeholder-opacity-75 "
          type="text"
          placeholder="Enter tweet URL"
          value= {url}
          onChange={e => setUrl(e.target.value)}
        />
        
        <TweetBox Url={url} />
      </div>
    );
  }
  
  export default UrlInput;
