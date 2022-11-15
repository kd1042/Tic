const boxes = document.querySelectorAll('[data-index]');
let circleturn ;
let isWinner = true;
let i = 0
const X_class = 'x';
const circle_class= 'o';
const win = [                            //winning combinations
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  //horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
      [0, 4, 8], [2, 4, 6]            //diagonal
]

const mebox = document.querySelector('.message');

boxes.forEach(box => {
   box.addEventListener('click', handleClick, {once: true}) 
})

function handleClick(event){
     const box = event.target;
     const currentClass = circleturn ? circle_class : X_class;
     Play(box, currentClass);

     //check for winner
     if(checkWin(currentClass)){
       console.log('winner');
       mebox.innerText = `${currentClass} Wins`
       mebox.style.display = 'block';
       isWinner = true;
     }
     else{
         i ++;
         isWinner = false;
     }

     if(i === 9 && isWinner === false){
       mebox.innerText = `DRAW`
       mebox.style.display = 'block';
     }

     //change turn
     turn()
}

function Play(box, currentClass){
      box.classList.add(currentClass);
}

function turn(){
      circleturn = !circleturn;
}

function checkWin(currentClass){
      return win.some(combinations => {
         return combinations.every(index => {
            return boxes[index].classList.contains(currentClass);
         })   
      })
}

//reset button
const reset = document.getElementById('resetbt');
reset.addEventListener('click', () => {
      location.reload();
})