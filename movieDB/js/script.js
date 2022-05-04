/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

document.addEventListener("DOMContentLoaded", () =>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    let advBlock = document.querySelector(".promo__adv"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        checkBox = addForm.querySelector("[type='checkbox']");

    addForm.addEventListener("submit", (event)=>{
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkBox.checked;

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);

        event.target.reset();
    });

    const deleteAdv = (arr) =>{
        while (arr.length > 1) {
            arr[0].remove();
        }
    };

    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">
                    ${i + 1}. ${film}
                    <div class="delete"></div>
                </li>     
            `;
        });
    }

    sortArr(movieDB.movies);
    makeChanges();
    deleteAdv(advBlock.childNodes);
    createMovieList(movieDB.movies, movieList);

});








