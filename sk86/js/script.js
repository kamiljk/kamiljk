const images = [
    "sk86_bg_1.png",
    "sk86_bg_2.png",
    "sk86_bg_3.png",
    "sk86_bg_4.png"
];

const randomIndex = Math.floor(Math.random() * images.length);

const randomImage = images[randomIndex];

document.getElementById("random-image").setAttribute("src", "/img/bg/" + randomImage);