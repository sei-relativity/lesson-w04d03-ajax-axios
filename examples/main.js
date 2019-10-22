// We loaded axios library in our html file
// Lets make an ajax call with axios

// method: get
// url: https://cataas.com/cat

const img = document.createElement('img');
const btn = document.createElement('button');
const apiUrl = 'https://api.thecatapi.com/v1/images/search';
btn.innerText = 'Random';

const getRandomCat = () => {
    axios({
        url: apiUrl,
        method: 'get',
        headers: {
            'x-api-key': '193b792a-0d51-4e4c-b6ad-5f84cca28e49'
        }
    })
        .then(res => {
            console.log(res);
            const imgurl = res.data[0].url
            img.src = imgurl
            document.body.append(img);
        })
        .catch(err => {
            console.log(err);
        })
}

btn.addEventListener('click', getRandomCat);
document.body.append(btn);