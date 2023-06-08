const reviews = require("./reviews");

const toursReviews = [];

let idReview = 1;
reviews.forEach((review) => {
  if (!toursReviews.find((tour) => tour.tour === review.tour)) {
    toursReviews.push({
      id: idReview,
      tour: review.tour,
    });
    idReview++;
  }
});

module.exports = toursReviews;
