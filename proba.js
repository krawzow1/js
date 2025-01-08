;
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
// //alert('FDFD');
// const question = confirm('Ты гей?') // форма с ответом Да/Нет, который можно сохранить
// alert(question)
// console.log(question)

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


// // Пытаюсь создать объект и перебрать его ключи и значения
// const obj = {
//     name: 'Ilya',
//     age: 26,
//     others: {
//         width: 60,
//         height: 173
//     },
//     f: function() {
//         console.log('Metod')
//     }
// }

// for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//         for (let i in obj[key]) {
//             console.log(`${i}: ${obj[key][i]}`)
//         } 
//     } else {
//         console.log(`${key}: ${obj[key]}`)
//     }
// }
// obj.f()
// console.log(Object.keys(obj).length)

// //деструктуризация
// const {widt,heigh} = obj.others //переменный должны также называться, как в объекте
// console.log(widt,heigh)








// const arr = ['a','a','b','c']

// const set = new Set(arr)

// set.forEach((v, va, i) => {
//     console.log(v,va, i)  
// })

// console.log(null == false)
// console.log(null == true)
// console.log(typeof NaN)
// console.log(NaN == true)
// console.log(null == undefined)

// start 29 lesson


// const obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         e: 4
//     }
// }
// const duble = obj
// duble.a = 111
// console.log(obj)
// console.log(duble) //скопировалось все по ссылке, поэтому изменились сразу два объекта

// function cloneObj(x) {
//     let key
//     const obj2 = {}
//     for (key in x) {
//         obj2[key] = x[key]
//     }
//     return obj2
// }

// const obj3 = cloneObj(obj)
// obj3['a'] = 333 //здесь мы напрямю скопировали весь объект, поэтому это уже не ссылка на исходный объект
// console.log(obj3)

// const obj4 = Object.assign({},obj3) //происходит также поверхностная копия объекта (копируются только свойства на первом уровне (как и в способах выше))
// obj4['a'] = 444
// console.log(obj4)

// //const obj5 = obj4.slice() //хз поч не работает!!!

// //console.log(obj5)

// const obj6 = {...obj4, ...obj3}
// obj6['b'] = 666
// console.log('qqq',obj6)

// end 29 lesson

// start 30 lesson
//  const oop = { //создали объект
//     a: 100,
//     b: 300,
//     c: function () {
//         return 'Hello'
//     }
//  }
//  console.log(oop.c())

//  const oopNasled = Object.create(oop) //этот объект копирует все свойства объекта оор, делать это можно
//  // даже если oopNasled до этого не существовал
//  console.log(oopNasled.c())

//  const oopN = {
//     xp: 1000
//  }

//  Object.setPrototypeOf(oopN,oopNasled) //устанавливает прототип тогда, когда уже oopN существовал!!!!
//  console.log(oopN.c())

//  end lesson 30



//  start 36 lesson
// const query = document.querySelectorAll('div')
// console.log(query)

// start lesson 39
// const btn = document.querySelector('.second')
// btn.addEventListener('click', () => {
//     console.log('Click')
// })
// btn.addEventListener('mouseenter', (e) => {
//     console.log('Навели мышку',e.target) //e - это событие, у него есть различные св-ва
//     // напр. target возвращает сам объект, на котором произошло событие
//     // e.target.remove() //удаляет этот объект
// })

// btn.removeEventListener('click', call-back) //удаляет слушатель по клику

// const link = document.querySelector('a')
// link.addEventListener('click', e => {
//     e.preventDefault()
// })


// start lesson 40
// const element = document.head;
// const children = element.children;;
// console.log(children)


// start 41 lesson
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'John1',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'John2',
            progress: 20
        }, {
            name: 'John3',
            progress: 18
        }],

        pro: [{
            name: 'John4',
            progress: 10
        }]
    }
}

// function getTotalProgressByIteration(data) {
//     let total = 0
//     let students = 0 

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length
//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress
//             }
//         } else {
//             for (let el of Object.values(course)) {
//                 if (Array.isArray(el)) {
//                     students += el.length
//                     for (let i = 0; i < el.length; i++) {
//                         total += el[i].progress
//                     }
//                 }
//             }
//         }
//     }
//     return total/students
// }

// const a = getTotalProgressByIteration(students)
// console.log(a)


// пробую переписать в рекурсию
function getTotalProgressByRecursion(data) {
    let total = 0
    let students = 0 

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length
            for (let i = 0; i < course.length; i++) {
                total += course[i].progress
            }
        } else {
            getTotalProgressByRecursion(course)
            }
           
    }
    return [total,students]
}
const b = getTotalProgressByRecursion(students)
console.log(b)
    
