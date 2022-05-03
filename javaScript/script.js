let numberOfFilms;
let show = (text) => console.log(text);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            show(personalMovieDB);
        } else {
            show("База данных скрыта !");
        }
    }
};

let filmCount = 2;
let FilmTitleName = {
    maxLength : 50,
    minLength: 1
};

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
    personalMovieDB.count = numberOfFilms;
}

start();

let filmTitleValidation = function(film) {
    if (film == null) {
        console.log("Название фильма не может быть пустым !");
    } else if  (film.length > FilmTitleName.maxLength) {
        console.log(" Название фильма не может быть таким длинным !");
    } else if (film.length < FilmTitleName.minLength) {
        console.log("Название фильма не может быть пустым !");
    } else {
        return true;
    }
};

function rememberMyFilms() {
    for (let i = 0; i < filmCount; i++) {
        let lastFilm = prompt("Один из последних просмотренных фильмов?");
        if (filmTitleValidation(lastFilm)){
            personalMovieDB.movies[lastFilm] = prompt("На сколько оцените его?");
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        show("Просмотрено довально мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        show("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        show("Вы киноман");
    }
}

detectPersonalLevel();

personalMovieDB.showMyDB();
