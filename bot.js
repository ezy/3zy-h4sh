// Our Twitter library
const Twit = require('twit');
const crypto = require('crypto');
const l33t = require('leet');
const faker = require('faker');
const T = new Twit(require('./config.js'));

// // Generate a hash
// function genHash() {
//   const current_date = (new Date()).valueOf().toString();
//   const random = Math.random().toString();
//   const hash = crypto.createHash('sha1').update(current_date + random).digest('hex');
//   return hash;
// };

// This function tweets the created hash in genHash
function tweetHash() {
  const phrase = faker.hacker.phrase();
  const tweet = l33t.convert(phrase);

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
setInterval(tweetHash, 1000 * 60 * 30);
