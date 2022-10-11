'use strict';
let secretnumber=Math.trunc(Math.random()*20)+1;

let score =20; 
let hei=0;
document.querySelector('.check').addEventListener
('click',function()
{
   const guess= Number (document.querySelector('.guess').value);
   console.log(guess , typeof(guess));
   if(!guess)
   {
    document.querySelector('.message').textContent=
    '🚫 No number!';
   }
   else if(guess===secretnumber)
   {
    document.querySelector('.message').textContent=
    '🎊 Correct Number!';
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').textContent=
    secretnumber;
    document.querySelector('.number').style.width='30rem'
    if(score>hei)
    {
      hei=score;
      document.querySelector('.highscore').textContent=hei;
    }

    
   }
   else if(guess!==secretnumber)
   {
      if(score>1)
      {
    document.querySelector('.message').textContent=guess>secretnumber?
  '📈 Too Heigh':'📉 Too Low';
    score--;
    document.querySelector('.score').textContent=score;
      }
      else
      {
         document.querySelector('.message').textContent=
    '🧨 You lost the game';
    
    document.querySelector('.score').textContent=0;
      }
   }
   
})

document.querySelector('.again').addEventListener('click',
function()
{
   score=20;
   secretnumber=Math.trunc(Math.random()*20)+1;
   
   document.querySelector('.message').textContent='Start guessing...';
   document.querySelector('.score').textContent=score;
   document.querySelector('.number').textContent='?';
   document.querySelector('.guess').value='';
   document.querySelector('body').style.backgroundColor='#222';
   
    document.querySelector('.number').style.width='15rem';
    

})
console.log("Hello");
