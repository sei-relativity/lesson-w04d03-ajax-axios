console.log("I am in")
const img = document.createElement('img');
const btn = document.createElement('button');
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
btn.innerText = 'Random';

const randomPokemon = () => {
    axios({
        url : apiUrl,
        method : 'get',
    })
    .then(res => {
        console.log(res);
        const imgurl = res.data["sprites"].front_shiny;
        img.src = imgurl;
        console.log(imgurl)
        document.body.append(img);
    })
    .catch(err => {
        console.log(err);
    })
}

btn.addEventListener('click', randomPokemon);
document.body.append(btn)