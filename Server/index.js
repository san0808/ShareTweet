const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const router = express.Router();
const { TwitterApi } = require('twitter-api-v2');
const port = 3000;
const id = '1606964645973348358'

const BearerToken ='AAAAAAAAAAAAAAAAAAAAAIZjiwEAAAAApgiQCjVm4qbN62F3ZzV3bw%2BRIXg%3DEpk60DNg1yZdEqfcAeSmxoBLBjIdIFXamCCrMUuPcZMDHzLX8x'

app.get('/api/tweet',async (req, res) => {
    const twitterClient = new TwitterApi(BearerToken);
    const client = new TwitterApi({
      consumer_key: "DvfkBh0xDQjU9MpyRt0GBSVrv",
      consumer_secret: "XKWhVuZ2gW7mJcaRjCnqIpZ9LWAWtdmSBjDTq1rx47xZzc4TaT",
      access_token_key: "1369836620464066561-YGhaSooTYaOSi9Ix6j6UwZwFgKcxe4",
      access_token_secret: "3hKrREZ5BGLnAKUqr1rW7OEFesOXsTNERyUGeKLyzuZ0d"
      
    });
    let tweetId = req.query.tweetId;
    // const tweetid =
    // let tweetId = '1609044032423968768'
    
    // console.log('tweetId:', req.query.tweetId);
    // res.set('Cache-Control', 'no-cache');
    const tweet = await twitterClient.v2.singleTweet(tweetId, {
              expansions: [
                'entities.mentions.username',
                'in_reply_to_user_id',
              ],
            });
    const axios = require('axios');
          
    // Make a GET request to the Twitter API to get the details of the tweet
    const tweetResponse = await axios.get(
      `https://api.twitter.com/1.1/statuses/show.json?id=${tweetId}`,
      {
        headers: {
          Authorization: `Bearer ${BearerToken}`
        }
      }
    );
    
          
            // Extract the tweet details from the response
            const tweetr = await tweetResponse.data;
            const tweettext = tweetr.text;
            const username = tweetr.user.screen_name;
            const profilepic =tweetr.user.profile_image_url;
            const time = tweetr.created_at;
            const date = tweetr.created_at;
            
          //   console.log(tweet)
            // console.log(username)
            // console.log(time)
            // console.log(date)    
            // console.log(tweettext)
           

    res.json({ 
      username: username,
      tweettext: tweettext,
      date: date,
      time: time,
      
    });
      
})

app.listen(port , ()=>{
    console.log(`Listening on port at http://localhost:${port}`)
})
module.exports = router;
