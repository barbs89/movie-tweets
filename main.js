import { argv } from 'process';
import { readFileSync } from 'fs';
import { starRating } from './tweetRules.js';

const reviews = argv[2];
const movies = argv[3];

const loadFile = file => {
    let data = readFileSync(file);
    let obj = JSON.parse(data);
    return obj;
};

const main = () => {
    const reviewData = loadFile(reviews);
    const movieData = loadFile(movies);
		
		for (const reviewObj of reviewData) {
			let reviewTitle = reviewObj.title;
			let reviewRev = reviewObj.review;
			let reviewScore = starRating(reviewObj.score);

			console.log(reviewTitle, reviewRev, reviewScore)
		}
}
main();