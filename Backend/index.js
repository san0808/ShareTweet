const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const router = express.Router();
const { TwitterApi } = require('twitter-api-v2');
const port = 3000;
const id = '1605915174996561920'



app.get('/api/tweet',async (req, res) => {
    const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAIZjiwEAAAAApgiQCjVm4qbN62F3ZzV3bw%2BRIXg%3DEpk60DNg1yZdEqfcAeSmxoBLBjIdIFXamCCrMUuPcZMDHzLX8x');
    let tweetId = req.query.tweetId;
    // const tweetid =
    console.log('tweetId:', req.query.tweetId);
    // res.set('Cache-Control', 'no-cache');
    const tweet = await twitterClient.v2.singleTweet(tweetId, {
              expansions: [
                'entities.mentions.username',
                'in_reply_to_user_id',
              ],
            });
            
            res.json({ tweet: tweet.data });
        console.log(tweet)
})

app.listen(port , ()=>{
    console.log(`Listening on port at http://localhost:${port}`)
})
module.exports = router;
