# Movie Tweets🎬

## Overview
---
This is a Node.js command line application  that reads in movie reviews and then composes "tweets" for readers to share.

## Requirements
---
Before the application can be run, ensure **Node.js** has been installed on your computer by running the following command on your terminal:
```
$ node -v
```
*Output example:*
```
$ v14.16.1
```

If **Node** is not installed on your computer, you can follow the instructions outlined [here](https://nodejs.dev/learn/how-to-install-nodejs).

## Instructions
---
Once **Node** is installed on your computer, navigate to the home directory of the folder downloaded:

*Example:*
```
user-mbp $ ls
movie-tweets
user-mbp $ cd moview-tweets
user-mbp > moview-tweets $
```

You'll need to run the following command in your terminal to install the necessary node packages the application depends on:
```
$ npm install
```
To run the application, you'll need to pass two positional arguments; `reviews.json` and `movies.json`:
```
$ node main.js reviews.json movies.json
```
*Expected output:*
```
Star Wars (1977): Great, this film was ★★★★
Star Wars The Force Awake (2015): A long time ago in a galaxy far far away someone made the best sci-fi film of all time. Then some chap ★★½
Metropolis: Another movie about a robot. Very strong futuristic look. But also very very old. Hard to understand what was happening becaus ★
Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb (1964): Hilarious Kubrick satire ★★★★★
Plan 9 from outer space (1959): So bad it's bad ½
```
## Testing
---
This application uses two testing libraries; [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/). It contains one test file, `tweetRules.test.js`, which tests the functions in the `tweetRules.js` file.

Before running the test, please ensure your "scripts" in `package.json` looks like the example below:
```
"scripts": {
    "test": "mocha '*.test.js' --recursive"
  }
```
To begin testing, run the following command on your terminal:
```
$ npm test
```
*Expected output:*
```
> movie-tweets@1.0.0 test
> mocha '*.test.js' --recursive

  Tweet Rules
    countChar()
      ✔ should return the number of characters of a tweet
    starRating()
      ✔ should convert the review score to a star rating
    generateTweet()
      ✔ should return a tweet string
    truncateStr()
      ✔ should trim the string according to remainder limit
    remainderCount()
      ✔ should return the difference between the tweet count and tweet character limit
    updateReview()
      ✔ should return a new review string


  6 passing (48ms)
```

