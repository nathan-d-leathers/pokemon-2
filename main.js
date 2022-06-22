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
// async function generatePokemon() {
//     // const rand = Math.floor(Math.random() * (151 - 1) + 1);
//     const rand = getRandomInt(151);
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}/`);
//     const typeUrl = response.data.sprites.front_default;
//     const pokeType = response.data.types[0].type.url;

//     let img = document.createElement('img');
//     img.src = typeUrl;
//     document.getElementById("sec").appendChild(img);

//     for (let i = 0; i<5; i++) {
//         await getPokeFromType(pokeType);
//     }
// }
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// async function getPokeFromType(typePage) {
//     const response = await axios.get(typePage);
//     const pokePage = response.data.pokemon[getRandomInt(response.data.pokemon.length)].pokemon.url;
//     const pokeData = await axios.get(pokePage);
//     let img = document.createElement('img');
//     img.src = pokeData.data.sprites.front_default;
//     document.getElementById("sec").appendChild(img);
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=--==-=-=-=-
// const { default: axios } = require("axios");

// function getNameAndImage (object) {
//     console.log(object)
//     let name=object.data.name
//     let imageURL= object.data.sprites.front_default
//     return [name,imageURL]
// }

// const getMon = async ()=>{
//     const randomPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)   
//     // console.log(randomPokemon)
//     firstPokemonData=getNameAndImage(randomPokemon)
//     console.log(firstPokemonData)
//     let firstName= document.getElementById("firstName")
//     firstName.innerText=firstPokemonData[0]
//     let firstPokemonImage=document.getElementById("firstPokemonImg")
//     firstPokemonImage.src=firstPokemonData[1]
//     pokemonTeamType= await axios.get(randomPokemon.data.types[0].type.url)
//     avaialbleTeammates=pokemonTeamType.data.pokemon
//     //create array with 5 random numbers, then grab the value of each index. -- guarantees won't be duplicats.
//     secondPokemon= await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)    
//     secondPokemonData=getNameAndImage(secondPokemon)

//     thirdPokemon=await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)
//     thirdPokemonData=getNameAndImage(thirdPokemon)

//     fourthPokemon=await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)
//     fourthPokemonData=getNameAndImage(fourthPokemon)

//     fifthPokemon=await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)
//     fifthPokemonData=getNameAndImage(fifthPokemon)
    
//     sixthPokemon=await axios.get(avaialbleTeammates[Math.floor(Math.random()*avaialbleTeammates.length)].pokemon.url)
//     sixthPokemonData=getNameAndImage(sixthPokemon)
//     //we could've had our function create new divs(columns),h2s,images 
//     let secondName= document.getElementById("secondName")
//     secondName.innerText=secondPokemonData[0]
//     let secondPokemonImage=document.getElementById("secondPokemonImg")
//     secondPokemonImage.src=secondPokemonData[1]
//     let thirdName= document.getElementById("thirdName")
//     thirdName.innerText=thirdPokemonData[0]
//     let thirdPokemonImage=document.getElementById("thirdPokemonImg")
//     thirdPokemonImage.src=thirdPokemonData[1]
//     let fourthName= document.getElementById("fourthName")
//     fourthName.innerText=fourthPokemonData[0]
//     let fourthPokemonImage=document.getElementById("fourthPokemonImg")
//     fourthPokemonImage.src=fourthPokemonData[1]
//     let fifthName= document.getElementById("fifthName")
//     fifthName.innerText=fifthPokemonData[0]
//     let fifthPokemonImage=document.getElementById("fifthPokemonImg")
//     fifthPokemonImage.src=fifthPokemonData[1]
//     let sixthName= document.getElementById("sixthName")
//     sixthName.innerText=sixthPokemonData[0]
//     let sixthPokemonImage=document.getElementById("sixthPokemonImg")
//     sixthPokemonImage.src=sixthPokemonData[1]

//     -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



// let typestarter;
// let starter = false
// let team = false
// const getPokeBois = async () => {
//     try {
//         if (!starter) {
//             let response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=0')
//             const pokeNum = response.data.count
//             const randomNum = Math.floor(Math.random() * pokeNum)
//             response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
//             let pokeType = response.data.types[0].type['name']
//             typestarter = pokeType
//             let firstSprite = response.data.sprites.front_default
//             let img = document.createElement('img')
//             img.src = firstSprite
//             document.getElementById("sprites").appendChild(img);
//             starter = true
//         } else {
//             alert("starter already created")
//         }    
//     }
//     catch(e){
//             console.log('NOPE, NICE TRY')
//             console.log(e)
//         }
//     }
    

// const getTeam = async() => {
//     try {
//         if (starter && !team) {
//             team = true
//             response3 = await axios.get(`https://pokeapi.co/api/v2/type/${typestarter}`)
//             let totalType = response3.data.pokemon.length
//             for (let i = 0; i < 5; i++){
//                 let random = Math.floor(Math.random()*totalType)
//                 let randompoke = response3.data.pokemon[random].pokemon.url
//                 response4 = await axios.get(randompoke)
//                 let img = document.createElement("img")
//                 img.src = response4.data.sprites.front_default
//                 document.getElementById("sprites").appendChild(img)
//             }
//         } else {
//             alert("team already created")
//         }
//     } 
//     catch(e) {
//         console.log('NOPE, NICE TRY')
//         console.log(e)
//         }
//     }

//     -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }

// const pokeList = [
//   "normal",
//   "fire",
//   "water",
//   "grass",
//   "electric",
//   "ice",
//   "fighting",
//   "poison",
//   "ground",
//   "flying",
//   "psychic",
//   "bug",
//   "rock",
//   "ghost",
//   "dragon",
//   "steel",
//   "fairy",
// ];

// document.querySelector(".submission").addEventListener("click", function () {
//   // let input = document.querySelector(".input-type").value;

//   const getMon = async () => {
//     const maxTeam = 6;
//     let randomType = pokeList[Math.trunc(Math.random() * pokeList.length)];
//     for (let i = 1; i <= maxTeam; i++) {
//       let pokeType = "";
//       let pokeType2 = "";
//       do {
//         const pokeIndex = Math.trunc(Math.random() * 898) + 1;
//         // const pokeIndex = i;
//         response = await axios.get(
//           `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`
//         );
//         pokeType = response.data.types[0].type.name;

//         if (response.data.types.length > 1) {
//           pokeType2 = response.data.types[1].type.name;
//         } else {
//           pokeType2 = "";
//         }
//       } while (pokeType !== randomType);

//       console.log(pokeType);
//       const sprite = response.data.sprites["front_default"];
//       //   console.log(sprite);

//       const image = document.createElement("img");
//       image.classList.add(`poker_${i}`);
//       image.src = sprite;
//       image.classList.add("poke");
//       const description = document.createElement("div");
//       description.classList.add("description");

//       if (pokeType2.length > 0) {
//         description.textContent = `${response.data.name} ${pokeType} ${pokeType2}`;
//       } else {
//         description.textContent = `${response.data.name} ${pokeType}`;
//       }

//       let pokemon = document.querySelector(`.poke_${i}`);

//       removeAllChildNodes(pokemon);

//       pokemon.appendChild(image);
//       pokemon.appendChild(description);
//     }
//   };
//   getMon();
// });

// -=-=-===-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-==--


// const axios = require('axios') NOT NEEDED I GUESS

// Button is clicked. 
// Request data for a single random pokemon
// function getPokemonData(){
//     return new Promise((res, rej) =>{
//         getMon(()=>{
//             res(args);
//         })
//         // disable button once all 6 sprites have appeared
//         document.getElementById("request-btn").disabled = true
//     })
// }

// // request data for 5 other pokemon that share a type with the random pokemon.
// // display pictures of all 6 pokemon on the screen
// const getMon = async ()=>{
//     // randomly choose one initial pokemon
//     let typeChoice = Math.floor(Math.random() * 898)
//     //console.log(typeChoice)

//     // get the URL of all the types and choose one
//     const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + typeChoice + "/")
//     //console.log(response)

//     // get first pokemon's name to save it
//     const firstPokeName = response.data.name
//     //console.log(firstPokeName)
    

//     // get the url of the type
//     const typeUrl = response.data.types[0].type.url
// 	//console.log(typeUrl)
//     let pokemonType = response.data.types[0].type.name
//     //console.log(pokemonType)
//     let typePrint = document.createElement("p")
//     typePrint.innerHTML = pokemonType
//     document.getElementById("img-container").appendChild(typePrint)


//     // save the first sprite to the webpage
//     let firstSpriteUrl = response.data.sprites.front_default
//     let newSprite = document.createElement("img")
//     newSprite.src = firstSpriteUrl
//     // append it to the div img-container
//     document.getElementById("img-container").appendChild(newSprite)

	
//     // visit the URL to see ALL pokemon of that type
//     const typeResponse = await axios.get(typeUrl)
//     // console.log(typeUrl)
//     // console.log(typeResponse)
//     const max = typeResponse.data.pokemon.length
//     //console.log("Max: " + max)

//     // save pokemon names of whom sprites have been found
//     let alreadyRequested = [firstPokeName]
//     let randInt = Math.floor(Math.random() * max + 1)
//     // request data for 5 more pokemon
//     for(let i = 0; i < 5; ++i){
//         // get data on a random pokemon
//         let nextPokemon = typeResponse.data.pokemon[randInt].pokemon
//         //console.log(nextPokemon)
//         //console.log(nextPokemon.name)

//         // create a random number
//         while(alreadyRequested.includes(nextPokemon.name)){
//             randInt = Math.floor(Math.random() * max + 1)
//             nextPokemon = typeResponse.data.pokemon[randInt].pokemon
//         }
//         alreadyRequested.push(nextPokemon.name)
        
//         // get the URL to the pokemon's page
//         let pokeUrl = nextPokemon.url
        
//         // get the sprite src URL
//         let spriteResponse = await axios.get(pokeUrl)
//         //console.log(spriteResponse)

//         // get the sprite
//         let spriteSrc = spriteResponse.data.sprites.front_default

//         // create a new image element with src= pokemon sprite
//         let newSprite = document.createElement("img")
//         if(spriteSrc){
//             newSprite.src = spriteSrc
//             // append it to the div img-container
//             document.getElementById("img-container").appendChild(newSprite)
//         }else{
//             // spriteSrc is null for some reason
//             i -= 1
//         }
        
//     }

// }