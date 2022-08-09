const pokemonGrid = document.querySelector("#cardsGrid")


function fetchPokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => createGrid(data))
}

function fetchPokemons(number){
  for (let i = 1; i<=number; i++){
    fetchPokemon(i)
  }
}

function createGrid(pokemon){
  const card = document.createElement('div')
  card.classList.add('card')

  const pokemonInfo = document.createElement('div')
  pokemonInfo.classList.add('pokemonInfo')

  const pokemonName = document.createElement('p')
  pokemonName.classList.add('pokemonName')
  pokemonName.innerHTML= `Name:<br>${pokemon.name}`

  const pokemonNumber = document.createElement('p')
  pokemonNumber.classList.add('pokemonNumber')
  pokemonNumber.textContent = `#${pokemon.id}`

  const pokemonType = document.createElement('p')
  pokemonType.classList.add('pokemonType')
  if ((pokemon.types).length >1){
    pokemonType.innerHTML= `Type:<br>${pokemon.types[0].type.name}, ${pokemon.types[1].type.name}`
  } else {pokemonType.innerHTML= `Type:<br>${pokemon.types[0].type.name}`}

  const pokemonImg = document.createElement('img')
  pokemonImg.classList.add('pokemonImg')
  pokemonImg.src = pokemon.sprites.other.dream_world.front_default

  card.appendChild(pokemonInfo)
  card.appendChild(pokemonImg)
  pokemonInfo.appendChild(pokemonName)
  pokemonInfo.appendChild(pokemonNumber)
  pokemonInfo.appendChild(pokemonType)

  pokemonGrid.appendChild(card)
}

fetchPokemons(9)