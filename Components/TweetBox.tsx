import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import TweetCard from './TweetCard';

type Props = {
  Url: string;
};

const TweetBox: React.FC<Props> = ({Url}) => {
  const [tweet, setTweet] = useState({
    text: 'Testing this tweet out',
    name: 'Sanket Bhat',
    username: 'Sanketbhat11',
    date: '10:03 PM · Jan 3, 2023',
    imageurl: 'https://pbs.twimg.com/profile_images/1521352958713413632/GD88rHP4_400x400.jpg',
    pic: " "
  });

  const tweetUrl = Url;

  const urlParts = tweetUrl.split('/');

  // Get the last element in the array, which should be the tweet ID
  const tweetId = urlParts.pop();

  useEffect(() => {
    const fetchTweet = async () => {
      axios.get(`https://sharetweetbackend-1.onrender.com/api/tweet`, //http://localhost:3001/api/tweet
       
      {
        params:{
          tweetId: tweetId
        }
      })
        .then(response => {
          console.log(response.data)
          setTweet( {...tweet,
            text: response.data.tweettext,
            name: response.data.name,
            username: response.data.username,
            date: response.data.date,
            imageurl: response.data.profilepic,
            pic: response.data.pic
            
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
      <TweetCard 
        text={tweet.text}
        name={tweet.name}
        username={tweet.username}
        date={tweet.date}
        imageurl={tweet.imageurl}
        pic={tweet.pic}
      />
    </div>
  );
}

export default TweetBox;
