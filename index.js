const express = require("express");
const tours = require("./models/tours");
const reviews = require("./models/reviews");
const app = express();
const cors = require("cors");
const toursReviews = require("./models/reviewsOption");
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.send("It's son-kol");
});

app.get("/tours", (req, res) => {
  res.send(
    tours.map((tour) => {
      return {
        id: tour.id,
        name: tour.name,
        image: tour.image,
        term: tour.term,
        people_limit: tour.people_limit,
        price: tour.price,
        months: tour.months,
        images: tour.images,
      };
    })
  );
});

app.get("/tour/:id", (req, res) => {
  res.send(tours.find((tour) => tour.id === +req.params.id));
});

app.get("/reviews", (req, res) => {
  const { sortBy, tour, offset = 0, limit = 6 } = req.query;
  let customized = [...reviews];

  if (sortBy === "-date")
    customized = customized
      .sort((a, b) => (a["date"].day < b["date"].day ? 1 : -1))
      .sort((a, b) => (a["date"].month > b["date"].month ? 1 : -1))
      .sort((a, b) => (a["date"].year < b["date"].year ? 1 : -1));
  else if (sortBy === "date")
    customized = customized
      .sort((a, b) => (a["date"].day > b["date"].day ? 1 : -1))
      .sort((a, b) => (a["date"].month < b["date"].month ? 1 : -1))
      .sort((a, b) => (a["date"].year > b["date"].year ? 1 : -1));
  else if (sortBy) {
    customized =
      sortBy[0] === "-"
        ? customized.sort((a, b) =>
            a[sortBy.slice(1)] < b[sortBy.slice(1)] ? 1 : -1
          )
        : customized.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1));
  }

  if (tour)
    customized = customized.filter((review) => review.tour === tour).length
      ? customized.filter((review) => review.tour === tour)
      : customized;

  const count = customized.length;
  customized = customized.slice(+offset, +limit);

  res.send({
    count,
    results: customized,
  });
});

app.post("/review", (req, res) => {
  const { name, stars, description, images, tour } = req.body;

  const date = new Date();
  console.log(tour)

  reviews.push({
    id: reviews.length + 1,
    name,
    stars,
    description,
    images,
    tour,
    date: {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    },
  });

  res.send("Отзыв успешно оставлен!");
});

app.get("/tours-reviews", (req, res) => {
  res.send(toursReviews);
});

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
