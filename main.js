//init values
let totalAttempts=5;
let countAttemts=0;
let won=0;
let lost=0;
//finding elements
const form=document.querySelector('form');
const cardBody=document.querySelector(".card");
const guessingNumber=document.querySelector("#gassingNumber");
const checkButton=document.querySelector('.btn');
const result=document.querySelector('.result');
const attempts=document.querySelector('.attempts');
const masssage=document.createElement("p");
//ends of finding elements
form.addEventListener('submit',function(e){
    e.preventDefault();
    countAttemts++;
    if (countAttemts>5) {
        guessingNumber.disabled=true; 
        randomNumber.disabled=true; 
    } else {
            checkResult(guessingNumber.value);
            attempts.innerHTML=`remain attempts: ${totalAttempts-countAttemts}`

    }
});
//input number catching
function checkResult(value){
    let randomNumber=getRandomNumber(5);
    if (value==randomNumber) {
        result.innerHTML=`you have won=${randomNumber}`
won++;
        
    } else {
        result.innerHTML=`you have Lost=${value}:random number 
        was:${randomNumber}`
        lost++;
    }
masssage.innerHTML=`Won=${won},lost${lost}`;
masssage.classList.add("learge")
cardBody.appendChild(masssage)
}
//function for get rendom number
function getRandomNumber(limit){
return Math.floor(Math.random()*limit)+1;
}