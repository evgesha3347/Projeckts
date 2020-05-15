/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//'use strict';

let  promo_adv = document.querySelector('.promo__adv'),
     promo_genre = document.querySelector('.promo__genre'),
     promo_bg = document.querySelector(".promo__bg"),
     promo__interactiveItem = document.querySelector(".promo__interactive-item"),
     moviesLIst = document.querySelector('.promo__interactive-list');
// console.log(promo_content);
// console.log(promo__interactiveItem);
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

    promo_adv.remove();
    promo_genre.innerHTML = ('драма');
    promo_bg.style.backgroundImage = "url('img/bg.jpg')";
    moviesLIst.innerHTML = '';
    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
        moviesLIst.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
                            <div class="delete"></div>
                        </li>
        `;
    })
    