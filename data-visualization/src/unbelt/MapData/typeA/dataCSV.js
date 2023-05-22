 const dataCSV = [
    {
      County: "Adams",
      alcoholInvolved: 1,
      notAlcoholInvolved: 28,
    },
    {
      County: "Alcorn",
      alcoholInvolved: 0,
      notAlcoholInvolved: 46,
    },
    {
      County: "Amite",
      alcoholInvolved: 0,
      notAlcoholInvolved: 16,
    },
    {
      County: "Attala",
      alcoholInvolved: 0,
      notAlcoholInvolved: 18,
    },
    {
      County: "Benton",
      alcoholInvolved: 0,
      notAlcoholInvolved: 17,
    },
    {
      County: "Bolivar",
      alcoholInvolved: 0,
      notAlcoholInvolved: 41,
    },
    {
      County: "Calhoun",
      alcoholInvolved: 0,
      notAlcoholInvolved: 17,
    },
    {
      County: "Carroll",
      alcoholInvolved: 0,
      notAlcoholInvolved: 14,
    },
    {
      County: "Chickasaw",
      alcoholInvolved: 0,
      notAlcoholInvolved: 17,
    },
    {
      County: "Choctaw",
      alcoholInvolved: 0,
      notAlcoholInvolved: 16,
    },
    {
      County: "Claiborne",
      alcoholInvolved: 0,
      notAlcoholInvolved: 24,
    },
    {
      County: "Clarke",
      alcoholInvolved: 0,
      notAlcoholInvolved: 11,
    },
    {
      County: "Clay",
      alcoholInvolved: 0,
      notAlcoholInvolved: 19,
    },
    {
      County: "Coahoma",
      alcoholInvolved: 1,
      notAlcoholInvolved: 24,
    },
    {
      County: "Copiah",
      alcoholInvolved: 0,
      notAlcoholInvolved: 33,
    },
    {
      County: "Covington",
      alcoholInvolved: 0,
      notAlcoholInvolved: 27,
    },
    {
      County: "DeSoto",
      alcoholInvolved: 2,
      notAlcoholInvolved: 157,
    },
    {
      County: "Forrest",
      alcoholInvolved: 0,
      notAlcoholInvolved: 70,
    },
    {
      County: "Franklin",
      alcoholInvolved: 0,
      notAlcoholInvolved: 9,
    },
    {
      County: "George",
      alcoholInvolved: 0,
      notAlcoholInvolved: 46,
    },
    {
      County: "Greene",
      alcoholInvolved: 0,
      notAlcoholInvolved: 9,
    },
    {
      County: "Grenada",
      alcoholInvolved: 0,
      notAlcoholInvolved: 63,
    },
    {
      County: "Hancock",
      alcoholInvolved: 0,
      notAlcoholInved: 47,
    },
    {
      County: "Harrison",
      alcoholInvolved: 1,
      notAlcoholInvolved: 157,
    },
    {
      County: "Hinds",
      alcoholInvolved: 5,
      notAlcoholInvolved: 267,
    },
    {
      County: "Holmes",
      alcoholInvolved: 0,
      notAlcoholInvolved: 23,
    },
    {
      County: "Humphreys",
      alcoholInvolved: 0,
      notAlcoholInvolved: 9,
    },
    {
      County: "Itawamba",
      alcoholInvolved: 0,
      notAlcoholInvolved: 23,
    },
    {
      County: "Jackson",
      alcoholInvolved: 1,
      notAlcoholInvolved: 137,
    },
    {
      County: "Jasper",
      alcoholInvolved: 0,
      notAlcoholInvolved: 24,
    },
    {
      County: "Jefferson",
      alcoholInvolved: 3,
      notAlcoholInvolved: 13,
    },
    {
      County: "Jefferson Davis",
      alcoholInvolved: 0,
      notAlcoholInvolved: 9,
    },
    {
      County: "Jones",
      alcoholInvolved: 1,
      notAlcoholInvolved: 63,
    },
    {
      County: "Kemper",
      alcoholInvolved: 0,
      notAlcoholInvolved: 15,
    },
    {
      County: "Lafayette",
      alcoholInvolved: 0,
      notAlcoholInvolved: 39,
    },
    {
      County: "Lamar",
      alcoholInvolved: 4,
      notAlcoholInvolved: 39,
    },
    {
      County: "Lauderdale",
      alcoholInvolved: 0,
      notAlcoholInvolved: 62,
    },
    {
      County: "Lawrence",
      alcoholInvolved: 0,
      notAlcoholInvolved: 11,
    },
    {
      County: "Leake",
      alcoholInvolved: 0,
      notAlcoholInvolved: 23,
    },
    {
      County: "Lee",
      alcoholInvolved: 1,
      notAlcoholInvolved: 126,
    },
    {
      County: "Leflore",
      alcoholInvolved: 0,
      notAlcoholInvolved: 22,
    },
    {
      County: "Lincoln",
      alcoholInvolved: 0,
      notAlcoholInvolved: 39,
    },
    {
      County: "Lowndes",
      alcoholInvolved: 1,
      notAlcoholInvolved: 64,
    },
    {
      County: "Madison",
      alcoholInvolved: 0,
      notAlcoholInvolved: 70,
    },
    {
      County: "Marion",
      alcoholInvolved: 0,
      notAlcoholInvolved: 22,
    },
    {
      County: "Marshall",
      alcoholInvolved: 0,
      notAlcoholInvolved: 46,
    },
    {
      County: "Monroe",
      alcoholInvolved: 0,
      notAlcoholInvolved: 52,
    },
    {
      County: "Montgomery",
      alcoholInvolved: 0,
      notAlcoholInvolved: 11,
    },
    {
      County: "Neshoba",
      alcoholInvolved: 0,
      notAlcoholInvolved: 41,
    },
    {
      County: "Newton",
      alcoholInvolved: 0,
      notAlcoholInvolved: 30,
    },
    {
      County: "Noxubee",
      alcoholInvolved: 0,
      notAlcoholInvolved: 50,
    },
    {
      County: "Oktibbeha",
      alcoholInvolved: 2,
      notAlcoholInvolved: 41,
    },
    {
      County: "Panola",
      alcoholInvolved: 1,
      notAlcoholInvolved: 72,
    },
    {
      County: "Pearl River",
      alcoholInvolved: 0,
      notAlcoholInvolved: 60,
    },
    {
      County: "Perry",
      alcoholInvolved: 0,
      notAlcoholInvolved: 13,
    },
    {
      County: "Pike",
      alcoholInvolved: 1,
      notAlcoholInvolved: 59,
    },
    {
      County: "Pontotoc",
      alcoholInvolved: 0,
      notAlcoholInvolved: 42,
    },
    {
      County: "Prentiss",
      alcoholInvolved: 0,
      notAlcoholInvolved: 24,
    },
    {
      County: "Quitman",
      alcoholInvolved: 0,
      notAlcoholInvolved: 3,
    },
    {
      County: "Rankin",
      alcoholInvolved: 0,
      notAlcoholInvolved: 125,
    },
    {
      County: "Scott",
      alcoholInvolved: 0,
      notAlcoholInvolved: 36,
    },
    {
      County: "Sharkey",
      alcoholInvolved: 0,
      notAlcoholInvolved: 5,
    },
    {
      County: "Simpson",
      alcoholInvolved: 0,
      notAlcoholInvolved: 47,
    },
    {
      County: "Smith",
      alcoholInvolved: 0,
      notAlcoholInvolved: 10,
    },
    {
      County: "Stone",
      alcoholInvolved: 0,
      notAlcoholInvolved: 20,
    },
    {
      County: "Sunflower",
      alcoholInvolved: 0,
      notAlcoholInvolved: 34,
    },
    {
      County: "Tallahatchie",
      alcoholInvolved: 0,
      notAlcoholInvolved: 13,
    },
    {
      County: "Tate",
      alcoholInvolved: 0,
      notAlcoholInvolved: 42,
    },
    {
      County: "Tippah",
      alcoholInvolved: 0,
      notAlcoholInvolved: 29,
    },
    {
      County: "Tishomingo",
      alcoholInvolved: 0,
      notAlcoholInvolved: 37,
    },
    {
      County: "Tunica",
      alcoholInvolved: 0,
      notAlcoholInvolved: 25,
    },
    {
      County: "Union",
      alcoholInvolved: 0,
      notAlcoholInvolved: 38,
    },
    {
      County: "Walthall",
      alcoholInvolved: 0,
      notAlcoholInvolved: 7,
    },
    {
      County: "Warren",
      alcoholInvolved: 0,
      notAlcoholInvolved: 36,
    },
    {
      County: "Washington",
      alcoholInvolved: 1,
      notAlcoholInvolved: 35,
    },
    {
      County: "Wayne",
      alcoholInvolved: 0,
      notAlcoholInvolved: 18,
    },
    {
      County: "Webster",
      alcoholInvolved: 0,
      notAlcoholInvolved: 11,
    },
    {
      County: "Wilkinson",
      alcoholInvolved: 0,
      notAlcoholInvolved: 6,
    },
    {
      County: "Winston",
      alcoholInvolved: 0,
      notAlcoholInvolved: 12,
    },
    {
      County: "Yalobusha",
      alcoholInvolved: 0,
      notAlcoholInvolved: 10,
    },
    {
      County: "Yazoo",
      alcoholInvolved: 0,
      notAlcoholInvolved: 40,
    },
  ];


export default dataCSV ; 