
             //объявление переменных--------------

//переменный в старом формате es5
// var lessonTopic = "Учим джскр";
// console.log(lessonTopic);

//переменные в новом формате ES6
// let userName = "dima";
// console.log(userName);

//переменный let может менять своё значение
// userName = "roma";
// console.log(userName);

//переменный const неможет менять своё значение
//const  birthYear = 1990;
// console.log(birthYear );

                        // строки-------------
// //const userName = "Джон"
// const lessonTopic = "изучаем основы JavaScript";
// console.log("изучаем основы JavaScript");

                        // числа------------------
// const berthYear = 1996;

// //логические true или false
// const isMared = false; // false

                   //Сложение переменных-------------
//let x = 10;
//let y = 5;
//let result = x + y;
//console.log(result);
//console.log(x + y);  //лучше сразу в консоль

                     //сложение строк continuation  ----------- 
//let greeting = 'Привет, '
//let Name = 'Петр'
//let result = greeting + Name;
//console.log(result)
//console.log('Привет, Петр')

                     //continuation строк  --------------- 
//let userName = 'Петр';
//let greeting = 'Привет, ' + userName + '! Как дела';
//console.log(greeting)
   //шаблонные строки современные методы
// let userName = 'Петр';
// let greeting = `Привет, ${userName}! Как дела`;
// console.log(greeting);

                       //условия-----------------------
//if (условия); {
//код который будет выполнять если условие верно
// } else {
//код который будет выполнять если условие не верно
//}

// if (10 < 5) {
//   console.log('Десять > Пяти');
// } else {
//   console.log('Пять не больше Десяти');
// }

// let x = 5;
// let y = 5;
// if (x > y) {
//   console.log('X > Y');
// } else if (x === y) {
//   console.log('X равен Y');
// } else {
//   console.log('X менше Y');
// }

                     //Switch Case редко используется------------
const mark = 5;

switch (mark) {
  case 1:
  console.log('Вы плохо подготовились вам один');
  break;

  case 2:
    console.log('неудовлетворительно');
    break;

  case 3:
    console.log('могли бы лучше');
    break;

  case 4:
    console.log('хорошо постарались');
    break;

  case 5:
    console.log('вы отличник');
    break;
default:
  console.log('какой оценки не существует');
}

                            //массивы------или колекция просто
const fruit1 = 'Яблоко';
const fruit2 = 'Груша';
const fruit3 = 'Слива';
const fruit4 = 'Апельсин';

console.log(fruit1);

/* или прще массивом */
const fruits = ['Яблоко', 'Груша', 'Слива', 'Апельсин'];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[1]);
//-----------------------
const arrayExample = ['Яблоко', 59, 'Груша', false, 'Слива', 55, 'Апельсин'];  //работает всё но надо всё по смыслу
console.log(arrayExample[1]);
console.log(arrayExample[1]);
console.log(arrayExample[4]);

console.log(arrayExample);
