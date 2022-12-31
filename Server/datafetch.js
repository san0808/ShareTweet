async function getTweetDetails(tweetId) {
    // Replace with your own consumer key and secret
    const consumerKey = "DvfkBh0xDQjU9MpyRt0GBSVrv";
    const consumerSecret = "XKWhVuZ2gW7mJcaRjCnqIpZ9LWAWtdmSBjDTq1rx47xZzc4TaT";
  
    // Encode the consumer key and secret to base64
    const credentials = btoa(`${consumerKey}:${consumerSecret}`);
  
    // Make a POST request to the Twitter API to obtain an access token
    const response = await fetch("https://api.twitter.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: `Basic ${credentials}`,
      },
      body: "grant_type=client_credentials",
    });
  
    // Extract the access token from the response
    const data = await response.json();
    const accessToken = data.access_token;
  
    // Make a GET request to the Twitter API to get the details of the tweet
    const tweetResponse = await fetch(
      `https://api.twitter.com/1.1/statuses/show.json?id=${tweetId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    
    // Extract the tweet details from the response
    const tweet = await tweetResponse.json();
    const username = tweet.user.screen_name;
    const time = tweet.created_at;
    const date = tweet.created_at;
    
  //   console.log(tweet)
    console.log(username)
    console.log(time)
    console.log(date)
    // Return the tweet details
    return { username, time, date };
  }
