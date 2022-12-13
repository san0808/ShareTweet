import React, { useState } from 'react';
import TweetBox from './TweetBox';

function UrlInput() {
    const [url, setUrl] = useState(' ');
    
    const onClickHandler = ()=> {
      <TweetBox Url={url} />
      

    }
    return (
      <div className="url-input">
        <input
          type="text"
          placeholder="Enter tweet URL"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        
        <button onClick={() => { onClickHandler() }}>Show tweet</button>
        
      </div>
    );
  }
  
  export default UrlInput;
  // <TweetBox Url={url} />