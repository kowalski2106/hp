//a
    let x = 16;
    let k = 40;
    x = 5 * x - 15 * k + 19;
    k = (x + 5 * k) - (x - 13 * k);
    console.log("k= " + k);
    console.log("x= " + x);
//Ответ: k = 720, x = -501

//b
let r = 22;
let y = 12;
if (y <= 26) {
    r = r -3;
    y = y - r + 2;
} else {
   return 0;
}
console.log("r= " + r);
console.log("y= " + y);
//Ответ: r = 19, y = -5

//c
let p = 23;
let q = 40;
if ((p - q) > 53) {
    return 0;
} else {
    p = p + 3;
    q = 6 - q;
}
console.log("p= " + p);
console.log("q= " + q);
//Ответ: p = 26, q = -34

//d
let u = 68;
let v = -9;
let i = 0;
while (u > v) {
    u = u + v;
    i = i + 1;
} u = u * u;
console.log("u= " + u);
console.log("i= " + i);
//Ответ: u = 169, i = 9

//e
let t = -5;
let w = 3;
if ((t + w) > 1) {
    t = w;
    w = 2 * t + 3;
} else if ((t - w) < 0) {
    t = t - 7;
    w = 1;
} else t = 0;
console.log("t= " + t);
console.log("w= " + w);
//Ответ: t = -12, w = 1


//f
let a = 60, b = 2, k = 20;
k = k - 3, a = Math.abs(a - b);
if (k < 0) {
    b = a + k;
} else {
    k = k - 3, a = Math.abs(a - b);
}
console.log("a= " + a);
console.log("b= " + b);
//Ответ: a = 56, b = 2

//a2
function a2(x, y) {
    if (x > y) {
        a = x;
        b = y;
    } else {
        a = y;
        b = x;
    }
    k = a;
    while ((k % b) != 0) {
        k = k + a;
    } d = (a * b) / k; 
    return "k= " + k + " d= " + d;
}
console.log(a2(105,135));
//Ответ: k = 945, d = 15

//b2
function b2(m, n) {
    i = 0;
    s = 0;
    p = 1;
    while (i < n) {
        i = i + 1;
        m = m + i;
        s = s + m;
        p = s % m;
    }
    return "s= " + s + " p= " + p;
}
console.log(b2(12,10));
//Ответ: s = 340, p = 5

//c3
function c3(a, b, c) {
    if (((a * a) - (b * b)) > 0) {
        c = (a * a) - (b * c);
    } else {
        c = (b * b) - (a * c);
    }
    if (c > 0) {
        a = b * c;
    } else {
        b = a * c;
    }
    t = a + b + c;
    r = a * b;
    return "t= " + t + " r= " + r;
}
console.log(c3(-19,-9,6));
//Ответ: t = -3329, r = 33615

