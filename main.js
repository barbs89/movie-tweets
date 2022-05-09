import { argv } from 'process';
import { readFileSync } from 'fs';
import { starRating, countChar, remainderCount, generateTweet, truncateStr } from './tweetRules.js';

const reviews = argv[2];
const movies = argv[3];

const loadFile = file => {
    let data = readFileSync(file);
    let obj = JSON.parse(data);
    return obj;
};

const main = () => {
	let tweet = '';
    const reviewData = loadFile(reviews);
    const movieData = loadFile(movies);
		
		for (const reviewObj of reviewData) {
			let reviewTitle = reviewObj.title;
			let reviewDescription = reviewObj.review;
			let reviewScore = starRating(reviewObj.score);

			let movie = movieData.find( ({ title }) => title === reviewTitle );
				movie != null ? movieYear = ` (${movie.year}):` : movieYear = ':';
		
				tweet = generateTweet(reviewTitle, movieYear, reviewDescription, reviewScore);
				
			let tweetCount = countChar(tweet);
			let hasRemainder = remainderCount(tweetCount); 

			if (hasRemainder > 0) {
				reviewTitle = truncateStr(reviewTitle, 25);
				tweet = generateTweet(reviewTitle, movieYear, reviewDescription, reviewScore);

				console.log(tweet)

			} else {
				console.log(tweet);
			};
		}
}
main();