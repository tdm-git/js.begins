/**
 * Объект запускающий раунд игры и возвращающий результат.
 */
let quest = {

    takeGame() {
        let rightAnswer = 0;
        let userAnswer = "";

        alert('Начинаем игру!\n Вам будут заданы - ' + questionsList.length + ' вопросов.');
        for (let i = 0; i < questionsList.length; i++) {
            userAnswer = prompt(questionsList[i].text + '\n (или "Отмена" для выхода)');
            if (userAnswer === null) {
                break;
            }
            if (userAnswer === questionsList[i].answer) {
                alert('Поздравляем !!!\n Верный ответ.');
                rightAnswer++;
            } else {
                alert('Неверный ответ.\n Правильный вариант -' + questionsList[i].answer);
            }
        }
        alert('Игра окончена!\n Вы верно ответили - ' + rightAnswer);

    }

}