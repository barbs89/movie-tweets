export const generateTweet = (title, year, review, score) => {
    return `${title}${year} ${review} ${score}`;
};

export const countChar = str => {
	let count =  str.split('').length;
	return count;
};

export const remainderCount = tweet => countChar(tweet) - 140;

export const truncateStr = (string, limit) => {
    if (string.length > limit) {
      return string.substring(0, limit);
    } else {
      return string;
    };
};

export const updateReview = (tweet, review) => {
	let checkCount = remainderCount(tweet);
	let reviewRevCount = countChar(review);
	let reviewLimit = reviewRevCount - checkCount;
	let updatedReview = truncateStr(review, reviewLimit);
	
	return updatedReview;
}

export const starRating = score => {
    let star = '\u2605';
    let halfSymbol = '\u00BD';
    
    let starTotal = (score / 20);
    let hasRemainder = starTotal % 1 != 0;
    let addInteger = '';
    let addRemainder = '';
  
    if (hasRemainder) {
      addInteger = star.repeat(Math.floor(starTotal));
      addRemainder = starTotal % 1 > 0.5 ? star : halfSymbol;
    } else {
      addInteger = star.repeat(starTotal);
    };
  
    return addInteger + addRemainder;
};