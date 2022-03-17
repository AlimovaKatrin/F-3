import { Pokemon as RenamePoke } from './classes.js';
import mockedPokemons from './mockedPokemons.js';

const btn = document.querySelector('#add');
const cardList = document.querySelector('.card-list');
const card = document.querySelector('.card');
const form = document.querySelector('form');

const fillPokemonCard = (pokemon) => {
    const cloneCard = card.cloneNode(true);
    const title = cloneCard.querySelector('h3');
    const image = cloneCard.querySelector('img');
    const propertiesText = cloneCard.querySelector('.properties p');

    const [description] = cloneCard.getElementsByClassName('description');
    title.innerText = pokemon.name;
    image.src = pokemon.image;
    propertiesText.innerText = `Experience ${pokemon.experience}`;
    //  ['<li>wisdom</li>', 'psycho', 'smile']
    // `<li>${el}</li>` ===> '<li>' + el + '</li>'
    description.innerHTML = `
        <h4> Abilities: </h4>
        <ul>
        ${pokemon.abilities.map((el) => `<li>${el}</li>`).join('')}
        </ul>
    `;
    cardList.append(cloneCard);
};

const pokemonsList = mockedPokemons.map((pokemon) => {
    const {
        name,
        abilities,
        base_experience: experience,
        sprites: { front_default: image },
    } = pokemon;
    // const { front_default: image } = sprites;
    // const abilitiesNames = abilities.map(el => el.ability.name);
    const abilitiesNames = abilities.map((el) => {
        const {
            ability: { name },
        } = el;
        return name;
    });
    return new RenamePoke(name, abilitiesNames, experience, image);
});

btn.addEventListener('click', (event) => {
    console.log(pokemonsList);
    fillPokemonCard(pokemonsList[Math.round(Math.random() * 3)]);
});

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = event.target.querySelector('input');
    
    alert(`👉🏼 ${input.value} 👈🏼`);
});
