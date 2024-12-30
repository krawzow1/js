// let a = 5;
// console.log(a);

// //создание объекта
// const obj  = {
//     name: 'Ilya',
//     age: '26',
//     country: 'Russia'
// };
// //доступ к элементу объекта
// console.log(obj.name);
// //или
// console.log(obj["country"]);

// const arr = [1,2,3]; //массив
// const obj1 = {a: 1, b: 2}; //объект
// obj1.c = 'ky'; //создание нового свой-ва объекта
// console.log(obj1['c']);
// console.log(obj1.c);

// arr[10] = '23344'; //в массив, состоящий из 3-х элементов
// // добавляю сразу 10-й эл. Это приводит к тому, что 
// // с 3 ро 9-й индекс будут undefined элементы
// console.log(arr);
///alert('FDFD');
//const question = confirm('Ты гей?') // форма с ответом Да/Нет, который можно сохранить
//alert(question)
//console.log(question)

// const answer = prompt('То, что введешь сейчас - будет строкой','123')
// const answerint = +prompt('То, что введешь сейчас - будет числом','321')
// console.log(typeof(answer), typeof(answerint))

// //Интерполяция
// console.log(`Привет, вот число ${a}`)
// const a = true
// const b = true
// if (a && b) {
//     console.log('ew')
// }


//Пытаюсь создать объект и перебрать его ключи и значения
const obj = {
    name: 'Ilya',
    age: 26,
    others: {
        width: 60,
        height: 173
    },
    f: function() {
        console.log('Metod')
    }
}

for (let key in obj) {
    if (typeof obj[key] === 'object') {
        for (let i in obj[key]) {
            console.log(`${i}: ${obj[key][i]}`)
        } 
    } else {
        console.log(`${key}: ${obj[key]}`)
    }
}
obj.f()
console.log(Object.keys(obj).length)

//деструктуризация
const {widt,heigh} = obj.others //переменный должны также называться, как в объекте
console.log(widt,heigh)git