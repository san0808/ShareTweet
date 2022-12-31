import React, { useState ,useEffect} from 'react';
import axios from 'axios';

type Props = {
  Url: string;
};

const TweetBox: React.FC<Props> = ({Url}) => {
  const [tweet, setTweet] = useState({
    text: '',
    name: '',
    date: '',
    time: ''
  });

  const tweetUrl = Url;

  const urlParts = tweetUrl.split('/');

  // Get the last element in the array, which should be the tweet ID
  const tweetId = urlParts.pop();

  useEffect(() => {
    const fetchTweet = async () => {
      axios.get(`http://localhost:3000/api/tweet`, 
      {
        // responseType: 'text',
        // transformResponse: [v => v],
        params:{
          tweetId: tweetId
        }
      })
        .then(response => {
          console.log(response.data)
          setTweet( {...tweet,
            text: response.data.tweettext,
            name: response.data.username,
            date: response.data.date,
            time: response.data.time
          });
          console.log(tweet.text)
          console.log(tweet.date)
          console.log(tweet.name)
        })
        .catch(error => {
          // Handle any errors
        })

      
    }

    fetchTweet();
  }, [Url]);

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
