'use strict'

/**
 * Возвращает падеж рублей в зависимости от числа
 * @param {Number} x 
 * @returns - падеж слова рубль
 */
function curName(x) {
	switch (x) {
		case 1:
			return "рубль";
		case 2:
		case 3:
		case 4:
			return "рубля";
		case 0:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			return "рублей";
	}
}

let my_sum = parseInt(prompt(""));
if (!isNaN(my_sum)) {
	// у нас была подобная задача на курсе питона, поэтому решил использовать остаток от деления на 10 т.е. последнее число
	alert(`Ваша сумма в ${my_sum} ${curName(my_sum % 10)} успешно зачислена `);
}


