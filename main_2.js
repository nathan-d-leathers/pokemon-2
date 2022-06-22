function getMon() {
const pokeID = Math.floor((Math.random()*898) +1)
axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`).then(json => {
    type = json.data.types[0].type.url;
    axios.get(type).then(json2 => {
        let pokeList = json2.data.pokemon;
        const pokemon_containers = document.querySelectorAll("#pokemon_container")
        for (const container of pokemon_containers) {
            const pokemon_name = container.querySelector(".poke_name")
            const pokemon_image = container.querySelector("#pokeball")
            random_poke = Math.floor(Math.random() * pokeList.length)
            pokemon_name.innerHTML = pokeList[random_poke].pokemon.name;
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeList[random_poke].pokemon.name}/`).then(response => {
                pokemon_image.src = response.data.sprites.front_default
            })
        }
    })
}).catch(error => {
    console.error("error in request", error)
    pokemon_name.innerHTML = "an error has occupied"
    pokemon_image.src = ""
})

}