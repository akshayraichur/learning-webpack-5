console.log(100);

import "./styles/main.scss";
import laughing from "./assets/output.png";

import generateJoke from "./generateJoke";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

document.getElementById("jokeBtn").addEventListener("click", generateJoke);

generateJoke();
