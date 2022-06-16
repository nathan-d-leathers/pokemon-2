console.log('test test test')

axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response)=>{
    typeUrl = response.data.types[0].type.url
    return axios.get(typeUrl)
}).then((typeData)=>{
    console.log(typeData)
}).catch((error)=>{
    console.log('no good: ', error)
})
