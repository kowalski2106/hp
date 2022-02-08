"use strcit";

function countToTen() {
    for (let i = 0; i <= 10; i++) {
        document.getElementById("theCount").innerHTML += i + "<hr>";
    }
}

// let num1 = Number(prompt("введите первое число", ));
// let num2 = Number(prompt("введите второе число"));
// let result = alert(num1 + num2);

let dig1 = 1, dob1 = 1.2;
console.log(typeof(dig1), typeof(dob1));
console.log(dob1);

console.log(12 + "12");
console.log("12" + 12);
console.log("12" * 2);

let str1 = "Игорь!";
console.log(str1.charAt(5));

let str2 = "Hello";
console.log(str2.concat(' World'));

let str3 = "Привет мир!";
console.log(str3.indexOf("мир"));

let str4 = "Игорь привет!";
console.log(str4.split("и"), str4.split("И"));
console.log(typeof(str4.split("и")));
console.log(str4.split("и").indexOf('р')); //почему -1 хз

let str5 = "Привет босс";
console.log(str5.substring(2,6));

let str6 = "Тутут";
console.log(str6.toLowerCase(), str6.toUpperCase());

let checkBool1 = Boolean(NaN);
let checkBool2 = Boolean(undefined);
let checkBool3 = Boolean(0);
let checkBool4 = Boolean(-0);
let checkBool5 = Boolean("");
let checkBool6 = Boolean(false);
console.log(checkBool1, checkBool2, checkBool3, checkBool4, checkBool5, checkBool6);

let myArr = ["h", "e", "l", "l", "o"];
console.log(myArr[0] + myArr[1]);
console.log("array length = " + myArr.length);

let myArr1 = [];
myArr1[5] = 1;
console.log(myArr1.length);

let arrInFor = [];
for (let i = 0; i <= 4; i++) {
    arrInFor[i] = i;
}
arrInFor[6] = "bob";
console.log(arrInFor, "array length = " + arrInFor.length);

//смотерть в браузере
let bigArray = [];
let numOfChapters = Number(prompt("введите кол-во глав"));
let numOfSubChapters = Number(prompt("введите кол-во подглав"));
for (let i = 0; i < numOfChapters; i++) {
    bigArray.push([]);
}
for (let i  = 0; i < numOfChapters; i++) {
    bigArray[i][0] = "Глава " + (i + 1);
    for (let j = 1; j <= numOfSubChapters; j++) {
        bigArray[i][j] = "Подглава " + j;
    }
}
console.log(bigArray);
