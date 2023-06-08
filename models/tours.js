const getImage = (id) => `https://slate-gray-barnacle-hat.cyclic.app/images/tours/tour${id}.jpg`;

const tours = [
  {
    name: "3 day tour to Song-Kol",
    image: getImage(3),
    term: "3 days",
    people_limit: 10,
    price: "150",
    months: "May - September",
    mainImage: getImage(3),
    images: [getImage(3), getImage("1-2"), getImage(3), getImage("1-2")],
  },
  {
    name: "3 day tour to Song-Kol",
    image: getImage(2),
    term: "3 days",
    people_limit: 10,
    price: "150",
    months: "May - September",
    mainImage: getImage(3),
    images: [getImage(3), getImage("1-2"), getImage(3), getImage("1-2")],
  },
  {
    name: "3 day tour to Song-Kol",
    image: getImage(3),
    term: "3 days",
    people_limit: 10,
    price: "150",
    months: "May - September",
    mainImage: getImage(3),
    images: [getImage(3), getImage("1-2"), getImage(3), getImage("1-2")],
  },
  {
    name: "3 day tour to Song-Kol",
    image: getImage(2),
    term: "3 days",
    people_limit: 10,
    price: "150",
    months: "May - September",
    mainImage: getImage(3),
    images: [getImage(3), getImage("1-2"), getImage(3), getImage("1-2")],
  },
];

tours.forEach((tour, i) => {
  tour["id"] = i + 1;
  tour["minor_photos"] = [
    "https://slate-gray-barnacle-hat.cyclic.app/tour/photo1.jpg",
    "https://slate-gray-barnacle-hat.cyclic.app/tour/photo2.jpg",
    "https://slate-gray-barnacle-hat.cyclic.app/tour/photo3.jpg",
    "https://slate-gray-barnacle-hat.cyclic.app/tour/photo4.jpg",
  ];
  tour["dates"] = [
    "18.03.23 - 28.03.23",
    "18.03.23 - 28.03.23",
    "18.03.23 - 28.03.23",
    "18.03.23 - 28.03.23",
  ];
  tour["reviews"] = {
    count: 2,
    data: [
      {
        name: "Jane Cooper",
        stars: 4,
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page",
        images: [
          "https://slate-gray-barnacle-hat.cyclic.app/tour/review1.jpg",
          "https://slate-gray-barnacle-hat.cyclic.app/tour/review2.jpg",
        ],
        date: {
          month: "July 11",
          year: 2022,
        },
      },
      {
        name: "Alex John",
        stars: 5,
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page",
        images: [
          "https://slate-gray-barnacle-hat.cyclic.app/tour/review1.jpg",
          "https://slate-gray-barnacle-hat.cyclic.app/tour/review2.jpg",
        ],
        date: {
          month: "July 11",
          year: 2022,
        },
      },
    ],
  };
  tour["program"] = [
    {
      day: 1,
      title: "Bishkek - Kyzart - Kilemche",
      route: [
        {
          type: "place",
          option: "start",
          title: "Bishkek",
          descr:
            "Bishkek - Kyzart by taxi or public transport. Travelling time 5-6 hours.",
        },
        {
          type: "riding",
          option: "car",
          title: "5-6 h.",
        },
        {
          type: "place",
          option: "food",
          title: "Kyzart",
          descr:
            "Lunch in Kyzart village. After lunch, horseback ride to the Kilemche yurt camp. On the way you will enjoy the impressive landscape of our beautiful mountains. Upon arrival you will have free time to walk around, explore the area and see the life of local nomads. Kilemche is located 2500 m above sea level. After 3 hours on horseback, arrival at the shepherd’s house where you can will get acquainted with the real life of shepherds. Dinner and overnight stay in the house.",
        },
        {
          type: "riding",
          option: "horse",
          title: "3 - 3.5 h",
        },
        {
          type: "place",
          option: "finish",
          title: "Kilemche",
        },
      ],
    },
    {
      day: 2,
      title: "Bishkek - Kyzart - Kilemche",
      route: [
        {
          type: "place",
          option: "start",
          title: "Bishkek",
          descr:
            "Bishkek - Kyzart by taxi or public transport. Travelling time 5-6 hours.",
        },
        {
          type: "riding",
          option: "car",
          title: "5-6 h.",
        },
        {
          type: "place",
          option: "food",
          title: "Kyzart",
          descr:
            "Lunch in Kyzart village. After lunch, horseback ride to the Kilemche yurt camp. On the way you will enjoy the impressive landscape of our beautiful mountains. Upon arrival you will have free time to walk around, explore the area and see the life of local nomads. Kilemche is located 2500 m above sea level. After 3 hours on horseback, arrival at the shepherd’s house where you can will get acquainted with the real life of shepherds. Dinner and overnight stay in the house.",
        },
        {
          type: "riding",
          option: "horse",
          title: "3 - 3.5 h",
        },
        {
          type: "place",
          option: "finish",
          title: "Kilemche",
        },
      ],
    },
    {
      day: 3,
      title: "Bishkek - Kyzart - Kilemche",
      route: [
        {
          type: "place",
          option: "start",
          title: "Bishkek",
          descr:
            "Bishkek - Kyzart by taxi or public transport. Travelling time 5-6 hours.",
        },
        {
          type: "riding",
          option: "car",
          title: "5-6 h.",
        },
        {
          type: "place",
          option: "food",
          title: "Kyzart",
          descr:
            "Lunch in Kyzart village. After lunch, horseback ride to the Kilemche yurt camp. On the way you will enjoy the impressive landscape of our beautiful mountains. Upon arrival you will have free time to walk around, explore the area and see the life of local nomads. Kilemche is located 2500 m above sea level. After 3 hours on horseback, arrival at the shepherd’s house where you can will get acquainted with the real life of shepherds. Dinner and overnight stay in the house.",
        },
        {
          type: "riding",
          option: "horse",
          title: "3 - 3.5 h",
        },
        {
          type: "place",
          option: "finish",
          title: "Kilemche",
        },
      ],
    },
  ];
  tour["similar"] = [
    {
      id: 1,
      name: "3 day tour to Song-Kol",
      image: getImage(3),
      term: "3 days",
      people_limit: 10,
      price: "150",
      months: "May - September",
      mainImage: getImage(3),
      images: [getImage(3), getImage("1-2"), getImage(3), getImage("1-2")],
    },
    {
      id: 2,
      name: "3 day tour to Song-Kol",
      image: getImage(2),
      term: "3 days",
      people_limit: 10,
      price: "150",
      months: "May - September",
      mainImage: getImage(3),
      images: [getImage(3), getImage("1-2"), getImage(3), getImage("1-2")],
    },
    {
      id: 3,
      name: "3 day tour to Song-Kol",
      image: getImage(3),
      term: "3 days",
      people_limit: 10,
      price: "150",
      months: "May - September",
      mainImage: getImage(3),
      images: [getImage(3), getImage("1-2"), getImage(3), getImage("1-2")],
    },
    {
      id: 4,
      name: "3 day tour to Song-Kol",
      image: getImage(2),
      term: "3 days",
      people_limit: 10,
      price: "150",
      months: "May - September",
      mainImage: getImage(3),
      images: [getImage(3), getImage("1-2"), getImage(3), getImage("1-2")],
    },
  ];
});

module.exports = tours;
