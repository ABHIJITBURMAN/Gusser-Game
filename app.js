// //selecting all the values

// let  guessLeft = 3;

// const game = document.querySelector('#game'),   
//         minNum = document.querySelector('.min-num'),
//         maxNum = document.querySelector('.max-num'),
//         message = document.querySelector('.message'),
//         guessInput = document.querySelector('#guess-input'),
//         guessBtn = document.querySelector('#guess-btn'),
//         paragrap = document.querySelector('.paragrap');
//         playAgain = document.querySelector('.play-again');
        


//         minNum.textContent = min ;
//         maxNum.textContent = max;


//         //function get nim mum

//         function getMinNum(){
//             if(localStorage.getItem('minNum') === null || localStorage.getItem('minNum')==='')
//             {
//                 minNum.textContent = '[Enter Min Number]';
//             }
//             else{
//                 minNum.textContent = localStorage.getItem('minNum');
//             }
//         }
//         //function to get maxi number

//         function getMaxNum(){
//             if(localStorage.getItem('maxNum') === null || localStorage.getItem('maxNum')===''){
//                 maxNum.textContent = '[Enter Max Number]';
//             }
//             else{
//                 maxNum.textContent = localStorage.getItem('maxNum');
//             }
//         }

//         //function to set min num
//         function setMinNum(e){
//             if(e.type === 'keypress'){
//                 if(e.which === 13 || e.keyCode === 13){
//                     localStorage.setItem('minNum', e.target.innerText);
//                     // minNum.innerText = localStorage.getItem('minNum');
//                     minNum.blur(); 
//                 }
//             }
//             else{
//                 localStorage.setItem('minNum', e.target.innerText);
//             }
//         }

//         //function to set max num

//         function setMaxNum(e){
//             if(e.type === 'keypress'){
//                 if(e.keyCode === 13 || e.which === 13){
//                     localStorage.setItem('maxNum', e.target.innerText);
//                     // maxNum.innerText = localStorage.getItem('maxNum');
//                     maxNum.blur();
//                 }
//             }
//             else{
//                 localStorage.setItem('maxNum', e.target.innerText);
//             }
//         }

//         // set event listerner for min and max number
//         minNum.addEventListener('keypress', setMinNum);
//         maxNum.addEventListener('keypress', setMaxNum);
        

//         getMinNum();
//         getMaxNum();



//         let min = parseInt(minNum.textContent);
//         let max = parseInt(maxNum.textContent);
//         console.log(min);
//         console.log(max);
//         let winNum = randomNum(min,max);
//         // console.log  (winNum);

//         //play again eventlistener
//         game.addEventListener('mousedown', function(e){
//             if(e.target.className === 'play-again')
//             {
//                 guessInput.value = '';
//                 window.location.reload();
//             }
//         })
        
        
        
//         guessBtn.addEventListener('click', function(){

//             guessNum = parseInt(guessInput.value);
//             // console.log(winNum);

//             if(isNaN(guessNum) || guessNum < minNum || guessNum > maxNum){
//                 showMessage(`Please enter a valid number between ${min} and ${max}`, 'red');
//             }
//             else{
//                 if(guessNum === winNum)
//                 {
//                     guessInput.disabled = true;
//                     showMessage('Congratulate, You have given the correct answer!!!!!!', 'green');
//                     guessBtn.value = 'Play Again';
//                     guessBtn.className = 'play-again';
//                     // console.log(playAgain);
//                 }
//                 else
//                 {
//                     guessLeft--;
//                     if(guessLeft == 0)
//                     {
//                         guessInput.disabled = true;
//                         showMessage(`Game Over, You Lost, The correct answer is ${winNum}`,'red');
//                         guessBtn.value = 'Play Again';
//                         guessBtn.className = 'play-again';
//                     }
//                     else{
//                         guessInput.value = '';
//                         showMessage(`Opps ${guessNum} is a Wrong Answer, Try Again, You have ${guessLeft} Guess Left`, 'red');
//                     }  
//                 }
//             }
//         });

//         // showmessage function

//         function showMessage(msg,color){
//             message.textContent = msg;
//             message.style.color = color;
//             guessInput.style.borderColor = color;
//             message.style.fontSize = '24px';
//             message.style.fontFamily = "'Source Sans Pro', sans-serif";
//             paragrap.style.fontSize = '18px';
//             paragrap.style.fontFamily = "'Source Sans Pro', sans-serif";
//         }

//         //create random number

//         function randomNum(min,max){
//             // console.log(Math.floor(Math.random()*(max-min+1)+min));
//             return(Math.floor(Math.random()*(max-min+1)+min));
//         }
        
