/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

function chooseRandomGenre() {
  // Deliverable 1: Your code here 👇
  let randomNum = getRandomNumber(0, 2);

  if (randomNum === 0) {
    return "drama";
  } else if (randomNum === 1) {
    return "fantasy";
  } else if (randomNum === 2) {
    return "comedy";
  }
}

function displayRandomShow(genre) {
  //   // Deliverable 2: Your code here 👇
  if (genre === "random") {
    genre = chooseRandomGenre();
    // displayShow(genre);
  }

  let show;
  if (genre === "drama") {
    const randomIndex = getRandomNumber(0, dramaShows.length - 1);
    const randomShow = dramaShows[randomIndex];
    displayShow(randomShow);
  } else if (genre === "fantasy") {
    const randomIndex = getRandomNumber(0, fantasyShows.length - 1);
    const randomShow = fantasyShows[randomIndex];
    displayShow(randomShow);
  } else if (genre === "comedy") {
    const randomIndex = getRandomNumber(0, comedyShows.length - 1);
    const randomShow = comedyShows[randomIndex];
    displayShow(randomShow);
  }

  // displayShow(show);
}
// console.log(chooseRandomGenre(getRandomNumber));

// function displayRandomShow(genre) {

//   let genre = chooseRandomGenre();

//   if (genre == "random") {
//     genre = chooseRandomGenre();
//   }

//   let show;
//   if (genre === "drama") {
//     return dramaShows;
//   } else if (genre === "comedy") {
//     return comedyShows;
//   } else if (genre === "fantasy") {
//     return fantasyShows;
//   }
//   displayShow(show);
// }

// console.log(displayRandomShow(genre));
