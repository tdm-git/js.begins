let game = {
    /**
     * Запускает игру.
     */
    run() {
        while (true) {

            quest.takeGame();

            let newGame = prompt('Повторить попытку ?\n(Отмена для выхода, любой символ для продолжения)');
            if (newGame === null) {
                break;
            }
        }
    },
    // Этот метод выполняется при открытии страницы.
    init() {
        // Отображаем нашу игру.
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();