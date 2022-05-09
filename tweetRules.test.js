import { expect } from 'chai';
import { countChar, starRating, generateTweet, truncateStr, remainderCount, updateReview } from './tweetRules.js';

describe('Tweet Rules', () => {
    describe('countChar()', () => {
        it('should return the number of characters of a tweet', () => {
            let tweet = 'test';
            let count = countChar(tweet);

            expect(count).to.equal(4);
        });
    });

    describe('starRating()', () => {
        it('should convert the review score to a star rating', () => {
            let score = 77;
            let star = starRating(score);
                
            expect(star).to.equal('★★★★');
        });
    });

    describe('generateTweet()', () => {
        it('should return a tweet string', () => {
            let title = 'Star Wars';
            let year = ` (${1977}):`; 
            let review = 'Great, this film was'; 
            let score = starRating(77);
            let tweet = generateTweet(title, year, review, score);

            expect(tweet).to.equal('Star Wars (1977): Great, this film was ★★★★');
        });
    });

    describe('truncateStr()', () => {
        it('should trim the string according to remainder limit', () => {
            let review = 'Star Wars The Force Awakens';
            let limit = 25;
            let tweet = truncateStr(review, limit);

            expect(tweet).to.equal('Star Wars The Force Awake');
        });
    });

    describe('remainderCount()', () => {
        it('should return the difference between the tweet count and tweet character limit', () => {
            let tweet = 'Star Wars The Force Awakens (2015): A long time ago in a galaxy far far away someone made the best sci-fi film of all time. Then some chap came along and basically made the same movie again ★★½';
            let hasRemainder = remainderCount(tweet);

            expect(hasRemainder).to.equal(53);
        });
    });

    describe('updateReview()', () => {
        it('should return a new review string', () => {
            let tweet = 'Star Wars The Force Awake (2015): A long time ago in a galaxy far far away someone made the best sci-fi film of all time. Then some chap came along and basically made the same movie again ★★½';
            let review = 'A long time ago in a galaxy far far away someone made the best sci-fi film of all time. Then some chap came along and basically made the same movie again';
            let updated = updateReview(tweet, review);

            expect(updated).to.equal('A long time ago in a galaxy far far away someone made the best sci-fi film of all time. Then some chap');
        });
    });
});