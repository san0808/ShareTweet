import React, { useState ,useEffect} from 'react';
const { TwitterApi } = require('twitter-api-v2');

 URL = URL || require('url').URL

const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAIZjiwEAAAAApgiQCjVm4qbN62F3ZzV3bw%2BRIXg%3DEpk60DNg1yZdEqfcAeSmxoBLBjIdIFXamCCrMUuPcZMDHzLX8x');

type Props = {
  Url: string;
};

const TweetBox: React.FC<Props> =( {Url} ) =>{
  console.log("reached")
  console.log(Url);
  const [tweet, setTweet] = useState({
    text: '',
    name: '',
    date: '',
    time: ''
  });

  const tweetUrl = Url;
  const url = new URL(tweetUrl);
  const tweetId = url.pathname.split('/').pop();
  console.log(tweetId);
  useEffect(() => {
    (async () => {
      const tweet = await twitterClient.v2.singleTweet(tweetId, {
        expansions: [
        'entities.mentions.username',
        'in_reply_to_user_id',
        ],
        });
        setTweet({...tweet,text: tweet.data.text})
        console.log(tweet.text);
    }
    
  )}, [Url]);

  return (
    <div className="tweet-box">
      {tweet ? (
        <div>
          <p>{tweet.text}</p>
        </div>
      ) : (
        <p>Loading tweet...</p>
      )}
    </div>
  );
}

export default TweetBox;