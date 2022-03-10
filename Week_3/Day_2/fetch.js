// https://pokeapi.co/api/v2/pokemon/ditto

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((res) => {
//         console.log(res);
//         return res;
//     })
//     .then((res) => (document.body.innerHTML = `<img src=${res.sprites.front_default}>`))
//     .catch((err) => {
//         throw Error('OPS');
//     });

const getDittoIMG = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const result = await response.json();
    const spriteLink = Object.values(result.sprites).filter(el => typeof el === 'string');
    document.body.innerHTML = spriteLink.map((link) => `<img src=${link}>`).join('');
};

getDittoIMG();
