const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)]; //0 부터 3 랜덤출력

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`; // = <img src='img/0.jpeg' />

document.body.appendChild(bgImage); //html 바디에 추가해준다
