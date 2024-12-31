/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?','');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?','');
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt(`Один из последних просмотренных фильмов? ${i+1}`,''),
                b = prompt('На сколько оцените его?','');
            if (a != null && a != "" && b != null && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectetLevelPerson: function() {
        if (0 <= personalMovieDB.count && personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Ошибка');
        }
    },
    writeYourGenres: function(obj) {
        for (let i = 0; i <= 2; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if (a != '' && a != null) {
                obj.genres[i] = a;
            } else {
                console.log('Вы ввели некорректные данные')
                i--;
            }
        }
        obj.genres.forEach((genre, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`);
        });
    }
};
