function createCardInGrid(pokemon) {
  const pokemonName = document.getElementById(`pokemonName${pokemon.id}`);
  pokemonName.innerHTML = `Name: ${pokemon.name}`;

  const pokemonNumber = document.getElementById(`pokemonNumber${pokemon.id}`);
  pokemon.id < 100 && pokemon.id >= 10
    ? (pokemonNumber.textContent = `#0${pokemon.id}`)
    : pokemon.id < 10
    ? (pokemonNumber.textContent = `#00${pokemon.id}`)
    : (pokemonNumber.textContent = `#${pokemon.id}`);

  const pokemonType = document.getElementById(`pokemonType${pokemon.id}`);
  if (pokemon.types.length > 1) {
    pokemonType.innerHTML = `Type: ${pokemon.types[0].type.name}, ${pokemon.types[1].type.name}`;
  } else {
    pokemonType.innerHTML = `Type: ${pokemon.types[0].type.name}`;
  }

  const pokemonImg = document.getElementById(`pokemonImg${pokemon.id}`);
  pokemonImg.src = pokemon.sprites.other.dream_world.front_default;

  const card = document.getElementById(`card${pokemon.id}`);
  card.onclick = function () {
    updateCardInModal(pokemon);
    modal.style.display = "flex";
  };

  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function updateCardInModal(pokemon) {
  const pokemonNameModal = document.getElementById("pokemonNameModal");
  pokemonNameModal.textContent = `Name: ${pokemon.name
    .charAt(0)
    .toUpperCase()}${pokemon.name.slice(1)}`;

  const pokemonNumberModal = document.getElementById("pokemonNumberModal");
  pokemon.id <= 100 && pokemon.id >= 10
    ? (pokemonNumberModal.textContent = `#0${pokemon.id}`)
    : pokemon.id < 10
    ? (pokemonNumberModal.textContent = `#00${pokemon.id}`)
    : (pokemonNumberModal.textContent = `#${pokemon.id}`);

  const pokemonTypeModal = document.getElementById("pokemonTypeModal");
  if (pokemon.types.length > 1) {
    pokemonTypeModal.textContent = `Type: ${pokemon.types[0].type.name
      .charAt(0)
      .toUpperCase()}${pokemon.types[0].type.name.slice(
      1
    )}, ${pokemon.types[1].type.name
      .charAt(0)
      .toUpperCase()}${pokemon.types[1].type.name.slice(1)}`;
  } else {
    pokemonTypeModal.textContent = `Type: ${pokemon.types[0].type.name
      .charAt(0)
      .toUpperCase()}${pokemon.types[0].type.name.slice(1)}`;
  }

  const pokemonHPModal = document.getElementById("pokemonHPModal");
  pokemonHPModal.textContent = `HP: ${pokemon.stats[0]["base_stat"]}`;

  const pokemonXPModal = document.getElementById("pokemonXPModal");
  pokemonXPModal.textContent = `XP: ${pokemon["base_experience"]}`;

  const pokemonImgModal = document.getElementById("pokemonImgModal");
  pokemonImgModal.src = pokemon.sprites.other.dream_world.front_default;
}

async function fetchPokemons(totalNumberToFetch) {
  for (let i = 1; i <= totalNumberToFetch; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();
    createCardInGrid(data);
  }
}

fetchPokemons(9);
