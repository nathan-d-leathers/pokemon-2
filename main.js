// Random Button Logic
function randomNum(num) { 
    let random = Math.trunc(Math.random() * num);
    return random;
}

let pokeID = randomNum(898)
// console.log(pokeID)
// returns a number between 1-898
const pokeTeam = [];
let randomPoke = await axios.get('https://pokeapi.co/api/v2/pokemon/'+pokeID)
pokeTeam.push(randomPoke.data.name)
console.log(pokeTeam)












// list in order of buttons
const types = ["fire", "water", "electric", "grass", "ice", "ground", "flying", "ghost", "rock", "fighting", "poison", "psychic", "bug", "dark", "steel", "dragon", "fairy"]
// each button will just be a search using types[]












// -====----=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// randomType = types[Math.trunc(Math.random() * types.length)];
// console.log(randomType)