/* 
* Classes are templates for objects. 
* Javascript calls a `constructor` method when we create a new instance of a class.
* `Inheritance` is when we create a parent class with properties and methods that we can extend to child classes. 
* We use the `extends` keyword to create a subclass. 
* The `super` keyword calls the `constructor()` of a parent class. 
* Static methods are called on the class, but not on instances of the class.
*/
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    getAverageRating() {
        // get sum of all ratings divide by number of ratings
        let numberOfRatings = this._ratings.length;
        let sumOfRatings = this._ratings.reduce(
            (current, accumulator) => current + accumulator,
            0
        );
        return (sumOfRatings / numberOfRatings).toFixed(1);
    }
    set isCheckedOut(bool) {
        this._isCheckedOut = bool;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating) {
        if (rating > 0 && rating <= 5) {
            this._ratings.push(rating);
        } else {
            console.log("Rating must be between 1 - 5");
        }
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title); // `super` must be called before `this`
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

// Testing Book subclass
const hmBook = new Book("Kafka on The Shore", "Murakami", 500);
console.group("Book");
hmBook.toggleCheckOutStatus();
console.log(hmBook.isCheckedOut); // true
console.log(hmBook.title); // Kafka on The Shore
console.log(hmBook.author); // Murakami
hmBook.addRating(5);
hmBook.addRating(4);
console.log(hmBook.ratings); // [ 5, 4 ]
console.log(hmBook.getAverageRating()); // [ 4.5 ]
console.log(hmBook.pages); // 500
console.groupEnd();

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title); // `super` must be called before `this`
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

// Testing Movie subclass
const qtMovie = new Movie("Kill Bill", "Tarantino", 120);
console.group("Movie");
qtMovie.toggleCheckOutStatus();
console.log(qtMovie.isCheckedOut); // true
console.log(qtMovie.title); // Kill Bill
console.log(qtMovie.director); // Tarantino
qtMovie.addRating(5);
qtMovie.addRating(5);
qtMovie.addRating(4);
console.log(qtMovie.getAverageRating()); // 4.7
console.groupEnd();

class CD extends Media {
    constructor(title, artist, songs) {
        super(title); // `super` must be called before `this`
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    randSong() {
        let randNum = Math.floor(Math.random() * this._songs.length);
        return this._songs[randNum];
    }
    shuffle() {
        let shuffledPlaylist = [];
        // fill shuffledPlaylist arr until same length as songs arr
        while (shuffledPlaylist.length < this._songs.length) {
            // get a random song
            let randomSong = this.randSong();
            // does song exist in array?
            if (!shuffledPlaylist.includes(randomSong)) {
                shuffledPlaylist.push(randomSong);
            }
        }
        console.log(shuffledPlaylist);
        return shuffledPlaylist;
    }
};

// Test CD subclass
const slAlbum = new CD("Emperor Tomato Ketchup", "Stereolab", [
    "Metronomic Underground",
    "Cybele\'s Reverie",
    "Percolator",
    "Les Yper-Sound",
    "Spark Plug",
    "OLV 26"
]);
console.group("CD");
slAlbum.toggleCheckOutStatus();
console.log(slAlbum.isCheckedOut); // true
console.log(slAlbum.title); // Emperor Tomato Ketchup
console.log(slAlbum.artist); // Stereolab
console.log(slAlbum.songs); // ['Metronomic Underground', 'Cybele's Reverie', 'Percolator', 'Les Yper-Sound', 'Spark Plug', 'OLV 26']
slAlbum.shuffle();
slAlbum.addRating(7); // Rating must be between 1 - 5
slAlbum.addRating(4);
slAlbum.addRating(5);
console.log(slAlbum.ratings); // [ 4, 5 ]
console.log(slAlbum.getAverageRating()); // 4.5
console.groupEnd();

// Catalog of all media items
class Catalog {
    constructor(media) {
        this._stack = media;
    }
    get stack() {
        for (const i of this._stack) return i;
        // return this._stack;
    }
}

const library = new Catalog([hmBook, qtMovie, slAlbum]);

// view catalog
console.group("Catalog");
console.log(library.stack);
console.groupEnd();