const { TwitterApi } = require('twitter-api-v2');

const dotenv = require("dotenv")

dotenv.config()

// const BearerToken = process.env.BEARER_TOKEN;

async function getTweet() {
    const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAIZjiwEAAAAApgiQCjVm4qbN62F3ZzV3bw%2BRIXg%3DEpk60DNg1yZdEqfcAeSmxoBLBjIdIFXamCCrMUuPcZMDHzLX8x');
    // const twitterClient = new TwitterApi()
    const tweetId = '1599800145608310784';
    
    const tweet = await twitterClient.v2.singleTweet(tweetId, {
    expansions: [
    'entities.mentions.username',
    'in_reply_to_user_id',
    ],
    });
    const tweetText = tweet.data.text;
    console.log(tweetText);

    return tweetText 
    }
    
    // getTweet();
    
  
    
    
    
    