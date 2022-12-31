import React, { useState } from 'react';
import TweetBox from './TweetBox';


function UrlInput() {
    const [url, setUrl] = useState(' ');
    
    const onClickhandler =()=>{
      <TweetBox Url = {url} />
         
    }

    
   
    return (
      <div className="url-input">
        <input
          
          type="text"
          placeholder="Enter tweet URL"
          value= {url}
          onChange={e => setUrl(e.target.value)}
        />
        
        {/* <button onClick={ onClickhandler}>Show tweet</button> */}
        <TweetBox Url={url} />
      </div>
    );
  }
  
  export default UrlInput;
  // <TweetBox Url={url} />