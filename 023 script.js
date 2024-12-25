/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','')
    }
}
 start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function showMyDB(obj) {
    if (obj['privat'] == false) {
        return console.log(obj)
    }
}

showMyDB(personalMovieDB);


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt(`Один из последних просмотренных фильмов? ${i+1}`,''),
            b = prompt('На сколько оцените его?','');
        if (a != null && a != "" && b != null && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectetLevelPerson() {
    if (0 <= personalMovieDB.count && personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Ошибка');
    }
}

detectetLevelPerson();

function writeYourGenres(obj) {
    for (let i = 0; i <= 2; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i + 1}`,'')
        if (a != '' && a != null) {
            obj.genres[i] = a;
        } else {
            i--;
        }
    }
}
writeYourGenres(personalMovieDB);