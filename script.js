

new kursor({
    type: 1,
    removeDeafaultCursor:false,
    color: '#476582'
});


const colors = [
    'red', 'blue', 'black', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray',
    'cyan', 'magenta', 'lime', 'teal', 'indigo', 'maroon', 'navy', 'olive', 'silver', 'gold',
    'violet', 'turquoise', 'coral', 'orchid', 'slate', 'plum', 'khaki', 'salmon', 'aquamarine', 'sienna'
  ];
  


const btn = document.getElementById('btn');
const color  = document.querySelector('.color');
const body = document.body;

btn.addEventListener('click',function(){

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}


