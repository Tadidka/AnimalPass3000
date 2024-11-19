const characters = [
    "albatross", "ant", "badger", "bear", "beaver", "bison", "cat", "chameleon",
    "dolphin", "eagle", "elephant", "emu", "flamingo", "fox", "frog", "giraffe",
    "goat", "gorilla", "hedgehog", "hippo", "iguana", "jackal", "jellyfish", "kangaroo",
    "koala", "kookaburra", "lemur", "lion", "lynx", "mole", "monkey", "moose",
    "numbat", "newt", "nutria", "ocelot", "octopus", "panda", "penguin", "puffin",
    "quail", "quokka", "rabbit", "seal", "snake", "tiger", "umbrella bird", "urchin",
    "vole", "vulture", "whale", "wolf", "xenops", "yak", "zebra", "antelope",
    "armadillo", "beetle", "buffalo", "coyote", "crab", "dingo", "duck", "elk",
    "flamingo", "gerbil", "gibbon", "goose", "guinea pig", "heron", "hyena",
    "jaguarundi", "lizard", "manatee", "meerkat", "mink", "okapi", "opossum",
    "orangutan", "platypus", "puma", "quoll", "raccoon", "rat", "reindeer",
    "sandpiper", "sea lion", "shark", "skunk", "sloth", "tarsier", "toucan",
    "viper", "wallaby", "wolverine", "zebu"
]

let firstPassword = document.getElementById("first-opt");
let secondPassword = document.getElementById("second-opt");
let lengthEl = document.getElementById("length-el");
let generateBtn = document.getElementById("gen-btn");
let copyFirstBtn = document.getElementById("copy-first");
let copySecondBtn = document.getElementById("copy-second");

function reset(){
    firstPassword.textContent = "";
    secondPassword.textContent = "";   
}

function generateRandomPassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function generatePasswords() {
    let length = parseInt(lengthEl.value)
    if (length < 2 || length > 10) {
        alert("Please enter a password length between 2 and 10")
        firstPassword.textContent = "";
        secondPassword.textContent = "";
        }
    firstPassword.textContent = generateRandomPassword(length);
    secondPassword.textContent = generateRandomPassword(length)
    }
    
generateBtn.addEventListener('click', generatePasswords);

/*function copy(){
}*/

/*copyFirstBtn.addEventListener('click', copy(firstPassword));
copySecondBtn.addEventListener('click', copy(secondPassword));*/
