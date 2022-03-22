import { fillPokemonCard, getPokemonByNameOrId, readLS, writeLS } from './const.js';

const btn = document.querySelector('#add');

const previousPokemons = readLS('pokemons');
previousPokemons?.length && previousPokemons.forEach((el) => fillPokemonCard(el))

btn.addEventListener('click', async (event) => {
    const randomId = Math.floor(Math.random() * 100);
    try {
        const pokemon = await getPokemonByNameOrId(randomId);
        fillPokemonCard(pokemon);
        writeLS('pokemons' ,pokemon )
    } catch (error) {
        alert(error.message);
    }

    // fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    //     .then((response) => response.json())
    //     .then((result) => {
    //         const {
    //             name,
    //             base_experience: experience,
    //             // abilities,
    //             abilities: rawAbilities,
    //             sprites: { front_default: image },
    //             // sprites: { front_default },
    //         } = result;
    //         const serailizedAbilities = rawAbilities.map((el) => {
    //             const {
    //                 ability: { name },
    //             } = el;
    //             return name;
    //         });
    //         const pokemon = new Poke(name, serailizedAbilities, experience, image);
    //         fillPokemonCard(pokemon);
    //     });
});
