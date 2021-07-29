'use strict'

/**
 * В зависимости от знаков переменных возвращает результат
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} результат функции 
 */
function my_func(a, b) {
    if (a > 0 && b > 0) {
        return a - b;
    } else if (a < 0 && b < 0) {
        return a * b;
    } else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        return a + b;
    } else {
        return 0;
    }
}
// объявим переменные которые используем как аргументы для нашей функции
let a = 7; 
let b = -5;
alert(my_func(a, b));
// тестовые примеры для отладки
console.log(my_func(2, 3));   // -1
console.log(my_func(-2, -3)); // 6
console.log(my_func(-2, 3));  // 1
console.log(my_func(2, -3));  // -1