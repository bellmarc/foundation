
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
//Get the data

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        const data = JSON.parse(xhr.responseText)
        const firstGenPokemon = []
        for(let i = 0; i <= 129; i++ ){
            firstGenPokemon.push(data.objects[0].pokemon[i])
    }
    display(firstGenPokemon)
    console.dir(data)
    console.dir(firstGenPokemon)
}
}

//Display the data
function display(arr){
    for(let i =0; i < arr.length; i++){
        const pokemon = document.createElement("div")
        pokemon.textContent = arr[i].name
        document.body.appendChild(pokemon)
    }
}
