// function speak(text) {
//     const message = new SpeechSynthesisUtterance();
//     message.lang = "ru-RU";
//     message.text = text;
//     window.speechSynthesis.speak(message);
// }

// const btnSpeak = document.querySelector("#speak");
// const txtMessage = document.querySelector("#message");

// btnSpeak.addEventListener("click", () => {
//     speak(txtMessage.value);
// });

// function potatoes(p0, w0, p1) {
//     let dry = 100 - p0;
//     let dryAfter = 100 - p1;
//     let res = dry / (dryAfter / w0);
//     console.log(Math.trunc(res));
// } 

// potatoes(82, 127, 80);

// const reverseSeq = n => {
//     let res = [];
//     for (let i = n; i > 0; i--) {
//       res.push(i);
//     }
//     return res;
//   };

//   console.log(reverseSeq(5));

// function sumTwoSmallestNumbers(numbers) {  
//     // let firstMin = Math.min(...numbers);
//     // let indexOfFirstMin = numbers.indexOf(firstMin);
//     // numbers.splice(indexOfFirstMin, 1);
//     // let secondMin = Math.min(...numbers);
//     // return firstMin + secondMin;
//     numbers = numbers.sort(function(a, b){
//         console.log(a, b);
//         return a - b;  
        
//     });
//     console.log(numbers[0] + numbers[1]);
    
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 3, 22]));

// function nbYear(p0, percent, aug, p) {
//     percent /= 100;
//     let res = p0;
//     let year = 0;
//     while (res < p) {
//         res = res + (res * percent) + aug;
//         res = Math.floor(res);
//         console.log(res);
//         year++;
//     }
//     console.log(year);
    
// }

// nbYear(1500, 5, 100, 5000);

// function testWhile(a) {
//     var x=0;
//     while (a) {
//         if (a % 2 == 0) {
//             x += a;
//         }
//         a--;
//     }
//     return x;
// }
// console.log(testWhile(3));

// function testCycle(n) {
//     var x = 1;
//     for (let i = 1; i < n; i++) {
//         x += i;
//     }
//     return x;
// }

// console.log(testCycle(3));

// function testStr(a, b) {
//     return a.length + b.length;
// }

// console.log(testStr('23', '12'));



// function testStr(a, b) {
//     let x = ''.concat(a.toUpperCase(),b.toLowerCase());
//     return x;
// }

// console.log(testStr('Hello', 'World!'));


// function testArray(a, b) {
//     let res = [];
//     let aAndB = a + b;
//     for (let i of aAndB) {
//         res.push(i);
//     }
//     res.reverse();
//     res.push('Иванов');

//     return res.join('');
// }
//console.log(testArray('4326', '297515'));

//let date = new Date();
//console.log(date);
// let date1 = new Date();
// date1.setFullYear(2016, 8, 22);
// console.log(date1);
// date1.setDate(date1.getDate() + 10);
// console.log(date1);

// var currentDate = new Date();             // Объявляем переменную для текущей даты
// var nextNewYear = new Date();             // Объявляем переменную для даты Нового Года
// nextNewYear.setFullYear(2022, 4, 15);        // Записываем значение даты для Нового Года - 1 января 2018
// console.log(nextNewYear);
// if (+currentDate == +nextNewYear) {
//   console.log("Поздравляем с Новым, 2018-м Годом! Ура!!!");
// }

// function testDateTime(a, b) {
//     let dateA = new Date(a);
//     let dateB = new Date(b);
//     if (dateA > dateB) {
//         switch (dateA.getDay()) {
//             case 0: return 'Воскресенье';
//             case 1: return 'Понедельник';
//             case 2: return 'Вторник';
//             case 3: return 'Среда';
//             case 4: return 'Четверг';
//             case 5: return 'Пятница';
//             case 6: return 'Суббота';
//         }
//     } else {
//         switch (dateB.getDay()) {
//             case 0: return 'Воскресенье';
//             case 1: return 'Понедельник';
//             case 2: return 'Вторник';
//             case 3: return 'Среда';
//             case 4: return 'Четверг';
//             case 5: return 'Пятница';
//             case 6: return 'Суббота';
//         }
//     }
    
// }

//console.log(testDateTime('19 October 1909 10:27', '28 March 1909 00:59'));

// function testMath(a) {
//     return Math.sin(a * Math.PI / 180);
// }

// console.log(testMath(348));


// function testMath(a, b, c) {
//     return 1/2 * a * b * Math.sin(c * Math.PI / 180)
// }

// console.log(testMath(2, 10, 16));

// function testMath(a, b, c, d) {
//     return Math.abs(Math.floor(Math.max(a, b, c , d) / Math.min(a,b,c,d)));    
// }
// console.log(testMath(2, 4, 13, 8));


// function testErrorFunc(a, func) {         

//     try {
//         func(a);
//     }
//     catch(e) {
//         return e.name;
//     }
// }

// console.log(testErrorFunc(9));















