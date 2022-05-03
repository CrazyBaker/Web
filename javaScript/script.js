let show = (text) => console.log(text);

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    filmCount: 2,
    filmTitleName: {
        maxLength : 50,
        minLength: 1
    },
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

        while (personalMovieDB.count === "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    },
    filmTitleValidation : function(film) {
        if (film == null) {
            console.log("Название фильма не может быть пустым !");
        } else if  (film.length > personalMovieDB.filmTitleName.maxLength) {
            console.log(" Название фильма не может быть таким длинным !");
        } else if (film.length < personalMovieDB.filmTitleName.minLength) {
            console.log("Название фильма не может быть пустым !");
        } else {
            return true;
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < personalMovieDB.filmCount; i++) {
            let lastFilm = prompt("Один из последних просмотренных фильмов?");
            if (personalMovieDB.filmTitleValidation(lastFilm)){
                personalMovieDB.movies[lastFilm] = prompt("На сколько оцените его?");
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
                show("Просмотрено довально мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
                show("Вы классический зритель");
            } else if (personalMovieDB.count > 30) {
                show("Вы киноман");
            }
    },
    writeYourGenres: function () {
        for (let i = 0; i <= 2; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genre === "" || genre == null) {
                console.log("Вы ввели некорректные данные");
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любиммы жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
      personalMovieDB.privat = !personalMovieDB.privat;
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            show(personalMovieDB);
        } else {
            show("База данных скрыта !");
        }
    }
};

/*
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();*/
