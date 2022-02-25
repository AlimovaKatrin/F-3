//
// ─── STRING ─────────────────────────────────────────────────────────────────────
//

let welcome = 'Hello';
// myStr += ' Katrin';
// myStr[0] = 'OLA ' иммутабельность 
// console.log(myStr)

const name = 'SlowPoke'

const welcomeSlowpoke = ` ${welcome}, dear ${name}  ` // интерполяция
console.log(welcomeSlowpoke )

// trim 
console.log(welcomeSlowpoke.trim())

// toLowerCase / toUpperCase
console.log(welcome.toLowerCase());
console.log(welcome.toUpperCase());

// chartAt , indexOf
// console.log(welcome.indexOf('l'))
// console.log(welcome.charAt(2));
//  unar +
const one = '1';
// console.log(1+'1')
// split 
// console.log(welcome.split(''))
const updString = welcomeSlowpoke.trim();
const strArray = updString.split(',');
console.log(welcomeSlowpoke.trim().split(','));
// slice 
console.log(welcomeSlowpoke.slice(13))
// includes
// console.log(welcomeSlowpoke.includes('$$'))


