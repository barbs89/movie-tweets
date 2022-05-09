import { argv } from 'process';
import { readFileSync } from 'fs';

const reviews = argv[2],
      movies = argv[3];

const loadFile = file => {
  let data = readFileSync(file), 
      obj = JSON.parse(data);
  return obj;
};

const main = () => {
    const reviewData = loadFile(reviews),
        	movieData = loadFile(movies);
					console.log(reviewData);
					console.log(movieData);
}

main();