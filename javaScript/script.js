let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let numbersOfFilm = 2;
let FilmTitleName = {
    maxLength : 50,
    minLength: 1
};

let filmTitleValidation = function(film) {
    if (film.length < FilmTitleName.minLength) {
        console.log("Название фильма не может быть пустым !");
    } else if  (film.length > FilmTitleName.maxLength) {
        console.log(" Название фильма не может быть таким длинным !");
    } else {
        return true;
    }
};

for (let i = 0; i < numbersOfFilm; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?");
    if (filmTitleValidation(lastFilm)){
        personalMovieDB.movies[lastFilm] = prompt("На сколько оцените его?");
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довально мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
}


console.log(personalMovieDB.movies);
