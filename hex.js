
new kursor({
    type: 1,
    removeDeafaultCursor:false,
    color: '#476582'
});
//Array of the numbers and hex character    

// Hex color = # + f + 12 + 20 + 4 = #f12204    
let hex = [

    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",
];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.body;

function colorGeneretor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {  
        hexColor += hex[getRandomNumber()]; //Assignment oprator to adding the index of 0 from the array hex
    };

    color.textContent = hexColor;
    body.style.backgroundColor = hexColor;
}


btn.addEventListener('click', colorGeneretor);


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}