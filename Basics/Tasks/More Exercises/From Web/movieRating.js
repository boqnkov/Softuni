function movieRating(input) {

    let moviesCount = Number(input[0]);

    let highestRatingMovie = '';
    let lowestRatingMovie = '';
    let highestRating = 0
    let lowestRating = 10

    let ratingCounter = 0;
    for (let i = 1; i < input.length; i++) {
        let movieName = input[i]
        i++
        let ratingMovie = Number(input[i]);

        ratingCounter += ratingMovie
        if (ratingMovie > highestRating) {
            highestRatingMovie = movieName
            highestRating = ratingMovie
        } else {
            lowestRatingMovie = movieName
            lowestRating = ratingMovie
        }
    }
    let avgRate = ratingCounter / moviesCount
    console.log(`${highestRatingMovie}   ${highestRating}`);
    console.log(`${lowestRatingMovie}  ${lowestRating}`);
    console.log(avgRate);

}
movieRating(['5',
    'A star is Born',
    '7.8',
    'Creed 2',
    '7.3',
    'Mery',
    '7.2',
    'Vice',
    '7.2',
    'Capitan Marvel',
    '7.1',
])