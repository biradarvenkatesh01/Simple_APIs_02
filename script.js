const search = document.getElementById("button");
const galat = document.getElementById("galat");
const card = document.getElementById("pokemonKiInfo");
const photo = document.getElementById("pokemonKiPhoto");
const nicheKaNaam = document.getElementById("pokemonKaname");
const stats = document.getElementById("pokemonKeStats");

search.addEventListener("click", () => {
    pokemon();
});

async function pokemon() {
    try {
        const naam = document.getElementById("PokemonKaNaam").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${naam}`);

        if (!response.ok) {
            galat.innerText = "Aisa Koi Pokemon Nahi Hota | Correct Naam Dalo";
            card.style.display = "none";
            return;
        }

        const data = await response.json();
        galat.innerText = "";

        photo.src = data.sprites.front_default;
        nicheKaNaam.innerText = data.name.toUpperCase();

        stats.innerHTML = "";
        data.stats.forEach(stat => {
            const li = document.createElement("li");
            li.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
            stats.appendChild(li);
        });

        card.style.display = "block";

    } catch (err) {
        console.error(err);
        galat.innerText = "Kuch Galat Ho Gaya. Baad Mein Try Karo";
        card.style.display = "none";
    }
}
