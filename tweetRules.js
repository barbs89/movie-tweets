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
    }
  
    return addInteger + addRemainder;
};