// --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Random Button Logic
// function randomNum(num) { 
//     let random = Math.trunc(Math.random() * num);
//     return random;
// }
// let pokeID = randomNum(898)
// console.log(pokeID)
// returns a number between 1-898
// --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Each elemental Type button
// const types = ["fire", "water", "electric", "grass", "ice", "ground", "flying", "ghost", "rock", "fighting", "poison", "psychic", "bug", "dark", "steel", "dragon", "fairy", "normal"]
// let randomType = types[Math.trunc(Math.random() * types.length)];
// console.log(randomType)
// // returns each type
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const getMon = async () => {
//     const pokemonCaught = []
//     const pokemonURL = 'https://pokeapi.co/api/v2/pokemon'
//     const typesURL = 'https://pokeapi.co/api/v2/type/'



async function generatePokemon() {
    // const rand = Math.floor(Math.random() * (151 - 1) + 1);
    const rand = Math.trunc(Math.random() * 898)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}/`);
    const typeUrl = response.data.sprites.front_default;
    const pokeType = response.data.types[0].type.url;

    let img = document.createElement('img');
    img.src = typeUrl;
    document.getElementById("pokeball").appendChild(img);

    for (let i = 0; i<5; i++) {
        await getPokeFromType(pokeType);
    }

async function getPokeFromType(typePage) {
    const response = await axios.get(typePage);
    const pokePage = response.data.pokemon[getRandomInt(response.data.pokemon.length)].pokemon.url;
    const pokeData = await axios.get(pokePage);
    let img = document.createElement('img');
    img.src = pokeData.data.sprites.front_default;
    document.getElementById("sec").appendChild(img);
}















// const pokeTeam = [];
// let randomPoke = await axios.get('https://pokeapi.co/api/v2/pokemon/'+pokeID)
// pokeTeam.push(randomPoke.data.name)
// console.log(pokeTeam)


// const getMon = async ()=>{
//         const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+pokeID)
//     	const typeUrl = response.data.types[0].type.url
//     	console.log(typeUrl)
//         const typeResponse = await axios.get(typeUrl)
//         console.log(typeResponse)
//     }
    
// onclick="getMon()"


// list in order of buttons
// const types = ["fire", "water", "electric", "grass", "ice", "ground", "flying", "ghost", "rock", "fighting", "poison", "psychic", "bug", "dark", "steel", "dragon", "fairy", "normal"]
// each button will just be a search using types[]

