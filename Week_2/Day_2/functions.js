function PokemonFunc(name, color, type = 'electro', level = 1){
    this.name = name || 'pikachu';
    this.color = color || 'yellow';
    this.type = type;
    this.level = level;
}

PokemonFunc.prototype.levelUp = function(){
    this.level++
}

function Pikachu(games = [], name = 'Slowpoke', color = 'pink', type = 'psycho', level = 1){
    PokemonFunc.call(this, name, color, type, level)
    this.games = games;
}
Pikachu.prototype = Object.create(PokemonFunc.prototype);
Pikachu.prototype.constructor = Pikachu;

Pikachu.prototype.atack = function(){
    console.log('Бам бам, на тебе !!!!');
}
Pikachu.prototype.hide = function(){
    console.log('Я пас !!');
}
