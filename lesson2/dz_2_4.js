'use strict'

/**
 * Возвращает сумму параметров функции 
 */
function sum(x, y) {
    return x + y;
}

/**
 * Возвращает произведение параметров функции 
 */
function mult(x, y) {
    return x * y;
}

/**
 * Возвращает разницу параметров функции 
 */
function dec(x, y) {
    return x - y;
}

/**
 * Возвращает результат деления параметров функции 
 */
function dev(x, y) {
    return x / y;
}

// объявим переменные которые используем как аргументы для нашей функции
let a = 7;
let b = 5;
// тестовые примеры для отладки
console.log(sum(a, b));   // 12
console.log(mult(a, b));  // 35
console.log(dec(a, b));   // 2
console.log(dev(a, b));   // 1.4
