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

/**
 * Возвращает результат математической операции
 * @param {Number} arg1 
 * @param {Number} arg2 
 * @param {String} поддерживаемые варианты - "+,-,*,/" 
 * @returns {Number} результат операции
 */
function mathOperation(arg1, arg2, operation) {
	let my_func = null;
	switch (operation) {
		case "+":
			my_func = sum;
			break;
		case "-":
			my_func = dec;
			break;
		case "*":
			my_func = mult;
			break;
		case "/":
			my_func = dev;
			break;
		default:
			return NaN;
	}
	return my_func(arg1, arg2);
}

// объявим переменные которые используем как аргументы для нашей функции
let a = 7;
let b = 5;
// тестовые примеры для отладки
console.log(mathOperation(a, b, "+"));   // 12
console.log(mathOperation(a, b, "-"));   // 2
console.log(mathOperation(a, b, "*"));   // 35
console.log(mathOperation(a, b, "/"));   // 1.4

