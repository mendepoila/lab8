let lab1 = [5]
let lab2 = []
let lab3 = []
let lab4_5 = [10]
let lab6 = [5, 5, 10, 5, 5, 10]
let quiz1 = 26

let sum1 = 0;
for (var i = 0; i < lab1.length; i++) {
    sum1 += lab1[i];
}
let sum2 = 0;
for (var i = 0; i < lab2.length; i++) {
    sum2 += lab2[i];
}
let sum3 = 0;
for (var i = 0; i < lab3.length; i++) {
    sum3 += lab3[i];
}
let sum4_5 = 0;
for (var i = 0; i < lab4_5.length; i++) {
    sum4_5 += lab4_5[i];
}
let sum6 = 0
for (var i = 0; i < lab6.length; i++) {
    sum6 += lab6[i];
}

let sums = [sum1, sum2, sum3, sum4_5, sum6]
let total_sum = sum1 + sum2 + sum3 + sum4_5 + sum6;
const results = {
    lab1: lab1,
    lab2: lab2,
    lab3: lab3,
    lab4_5: lab4_5,
    lab6: lab6,
    quiz1: quiz1,
    sums: sums,
    total_score: (total_sum / 240 * 60) + (quiz1)
}
console.log(results)