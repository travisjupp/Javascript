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
            console.log('Rating must be between 1 - 5');
        }
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
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
hmBook.toggleCheckOutStatus();
console.log(hmBook.isCheckedOut); // true
console.log(hmBook.title); // Kafka on The Shore
console.log(hmBook.author); // Murakami
hmBook.addRating(5);
hmBook.addRating(4);
console.log(hmBook.ratings); // [ 5, 4 ]
console.log(hmBook.getAverageRating()); // [ 4.5 ]
console.log(hmBook.pages); // 500

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
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
const qtMovie = new Movie('Kill Bill', 'Terantino', 120);
qtMovie.toggleCheckOutStatus();
console.log(qtMovie.isCheckedOut); // true
console.log(qtMovie.title); // Kill Bill
console.log(qtMovie.director); // Terantino
qtMovie.addRating(5);
qtMovie.addRating(5);
qtMovie.addRating(4);
console.log(qtMovie.getAverageRating()); // 4.7

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    // Shuffle songs
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
            if (!shuffledPlaylist.includes(randomSong)){
                shuffledPlaylist.push(randomSong);
            }
        }
        console.log(shuffledPlaylist);
    }
};

// Test CD subclass
const slAlbum = new CD('Emperor Tomato Ketchup', 'Stereolab', [
    'Metronomic Underground',
    'Cybele\'s Reverie',
    'Percolator',
    'Les Yper-Sound',
    'Spark Plug',
    'OLV 26'
]);
slAlbum.toggleCheckOutStatus();
console.log(slAlbum.isCheckedOut); // true
console.log(slAlbum.title); // Emperor Tomato Ketchup
console.log(slAlbum.artist); // Stereolab
console.log(slAlbum.songs); // [ 'Ping Pong', 'Cybele\'s Reverie' ]
slAlbum.shuffle();
slAlbum.addRating(7); // Rating must be between 1 - 5
slAlbum.addRating(4);
slAlbum.addRating(5);
console.log(slAlbum.ratings); // [ 4, 5 ]
console.log(slAlbum.getAverageRating()); // 4.5

// Catalog of all media items

class Catalog {
    constructor(media) {
        this._stack = media;
    }
    get stack() {
        return this._stack;
    }
}

const library = new Catalog([hmBook, qtMovie, slAlbum]);
console.log(library.stack);