// Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));
const crypto = require('crypto');

// Generate a hash
function genHash() {
  const current_date = (new Date()).valueOf().toString();
  const random = Math.random().toString();
  const hash = crypto.createHash('sha1').update(current_date + random).digest('hex');
  return hash;
};

// This function tweets the created hash in genHash
function tweetHash() {
  const tweet = genHash();
  T.post('statuses/update', { tweet }, (err, data, response) => {
    if (response) {
      console.log('Success! Check your bot, it should have tweeted a hash.');
    }
    // If there was an error with our Twitter call, we print it out here.
    if (err) {
      console.log('There was an error with Twitter:', error);
    }
  });
}

// Try to tweet something as soon as we run the program...
tweetHash();
// ...and then every 30 mins after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 30 = 30 minutes --> 1000 * 60 * 30
setInterval(tweetHodor, 1000 * 60 * 30);
