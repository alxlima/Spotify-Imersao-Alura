/*console.log('Testes Script.js - Sucesso Funcionou!-Alex')*/
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

//função que busco por nome like dos artists na Api.json
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

//Mostro os resultados na pág. apois valor do imput busca informado, retorno nome e imagem, resultado Api.
function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

//Faço a manipulação de eventos,ao digitar campo imput carregar lista de registro por nome em requestApi(searchTerm) 
document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})

// Comando Terminal- p/Iniciar JsonServer
//  npx json-server --watch api-artists/artists.json --port 3000