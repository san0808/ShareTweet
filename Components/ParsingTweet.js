import React from 'react'

export const ParsingTweet = ({url}) => {
    const matches = url.match(/twitter\.com\/(.*?)\/status\/(\d+)/);
    if (matches && matches.length >= 3) {
      
      return matches[2];
    }
    
    return null;
}
