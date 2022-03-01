class Pokemon {
    constructor(name, color, type = 'electro', level = 1) {
        this.name = name || 'pikachu';
        this.color = color || 'yellow';
        this.type = type;
        this.level = level;
    }
    levelUp() {
        this.level++;
    }
}

class Slowpoke extends Pokemon {
    constructor(games = [], name = 'Slowpoke', color = 'pink', type = 'psycho', level = 1) {
        super(name, color, type, level);
        this.games = games;
    }

    atack() {
        console.log('Бам бам, на тебе !!!!');
    }

    hide() {
        console.log('Я пас !!');
    }
}
