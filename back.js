const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

function randumNumber() {
  return Math.floor(Math.random() * IMAGE_NUMBER);
}

function init() {
  const number = randumNumber();
  const image = document.createElement("img");

  image.src = `img/${number + 1}.jpg`;
  body.style.background = `url("${image.src}") center/cover no-repeat`;
}
init();
