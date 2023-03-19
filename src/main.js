import './style.css';

// Seletores
const buttonDog = document.getElementById('button-dog');
const buttonCat = document.getElementById('button-cat');
const buttonRandom = document.getElementById('button-surprise');
const img = document.getElementById('img-random');

// Bases URL 
const URL_BASE_DOG = 'https://dog.ceo/api/breeds/image/random';
const URL_BASE_CAT = 'https://aws.random.cat/meow';

// Gera uma imagem aleatoria de dog
buttonDog.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`${URL_BASE_DOG}`).then((res) => res.json()).then((data) => {
    console.log(data);
    img.src = data.message;
  });
});

// Gera uma imagem aleatora de cat
buttonCat.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`${URL_BASE_CAT}`).then((res) => res.json()).then((data) => {
    console.log(data);
    img.src = data.file;
  });
});

// Gera uma imagem aleatoria de cat ou dog
buttonRandom,addEventListener('click', (event) => {
  event.preventDefault();
  Promise.any([
    fetch(`${URL_BASE_DOG}`), fetch(`${URL_BASE_CAT}`)
  ]).then((res) => res.json()).then((data) => {
    console.log(data);
    img.src = data.message || data.file;
  })
});