//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShows {
  constructor(title, genre, rating, numOfEpisodes) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.numOfEpisodes = numOfEpisodes;
  }
  play() {
    console.log("Playing...");
  }
  stop() {
    console.log("Stopping...");
  }
  saveToList() {
    console.log("Saved to list...");
  }
}

let bridgerton = new NetflixShows(
  "Bridgerton",
  "Period Romantic Drama",
  "99%",
  16
);

class AppleTV {
  constructor(title, genre, rating, numOfEpisodes) {
    //   Properties
    this.title = title;
    this.gener = genre;
    this.rating = rating;
    this.numOfEpisodes = numOfEpisodes;
  }
  play() {
    console.log("Playing");
  }
  stop() {
    console.log("stop");
  }
  savingToList() {
    console.log("Save to lise");
  }
}

let severance = new AppleTV("Severance", "drama", "99%", 9);
