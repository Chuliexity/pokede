const pokemonGrid = document.getElementById("cardsGrid");

/* class Pokemon {
  constructor(id, name, type, xp, hp) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.xp = xp;
    this.hp = hp;
  }
}
const allPokemon = [];

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => createCard(data));
} */

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => createCard(data));
}

function fetchPokemons(totalNumberToFetch) {
  for (let i = 1; i <= totalNumberToFetch; i++) {
    fetchPokemon(i);
  }
}

function createCard(pokemon) {
  function createCardInGrid() {
    const card = document.createElement("div");
    card.classList.add("card");

    const pokemonInfo = document.createElement("div");
    pokemonInfo.classList.add("pokemonInfo");

    const pokemonName = document.createElement("p");
    pokemonName.classList.add("pokemonName");
    pokemonName.innerHTML = `Name:<br>${pokemon.name}`;

    const pokemonNumber = document.createElement("p");
    pokemonNumber.classList.add("pokemonNumber");
    pokemonNumber.textContent = `#${pokemon.id}`;

    const pokemonType = document.createElement("p");
    pokemonType.classList.add("pokemonType");
    if (pokemon.types.length > 1) {
      pokemonType.innerHTML = `Type:<br>${pokemon.types[0].type.name}, ${pokemon.types[1].type.name}`;
    } else {
      pokemonType.innerHTML = `Type:<br>${pokemon.types[0].type.name}`;
    }

    const pokemonImg = document.createElement("img");
    pokemonImg.classList.add("pokemonImg");
    pokemonImg.src = pokemon.sprites.other.dream_world.front_default;

    card.appendChild(pokemonInfo);
    card.appendChild(pokemonImg);
    pokemonInfo.appendChild(pokemonName);
    pokemonInfo.appendChild(pokemonNumber);
    pokemonInfo.appendChild(pokemonType);

    pokemonGrid.appendChild(card);
  

  card.onclick = function () {
    console.log(card);
    modal.style.display = "block";
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
  function createCardInModal() {
    const container = document.getElementById("container");
    const pokemonInfoModal = document.createElement("div");
    pokemonInfoModal.classList.add("pokemonInfoModal");

    const pokemonNameModal = document.createElement("p");
    pokemonNameModal.classList.add("pokemonNameModal");
    pokemonNameModal.innerHTML = `Name:<br>${this.name}`;

    const pokemonNumberModal = document.createElement("p");
    pokemonNumberModal.classList.add("pokemonNumberModal");
    pokemonNumberModal.textContent = `#${pokemon.id}`;

    const pokemonTypeModal = document.createElement("p");
    pokemonTypeModal.classList.add("pokemonTypeModal");
    if (pokemon.types.length > 1) {
      pokemonTypeModal.innerHTML = `Type:<br>${pokemon.types[0].type.name}, ${pokemon.types[1].type.name}`;
    } else {
      pokemonTypeModal.innerHTML = `Type:<br>${pokemon.types[0].type.name}`;
    }

    const pokemonImgModal = document.createElement("img");
    pokemonImgModal.classList.add("pokemonImgModal");
    pokemonImgModal.src = pokemon.sprites.other.dream_world.front_default;

    container.appendChild(pokemonInfoModal);
    container.appendChild(pokemonImgModal);
    pokemonInfoModal.appendChild(pokemonNameModal);
    pokemonInfoModal.appendChild(pokemonNumberModal);
    pokemonInfoModal.appendChild(pokemonTypeModal);
    console.log(container);
  }
  createCardInGrid()
  createCardInModal()
}

fetchPokemons(9);

