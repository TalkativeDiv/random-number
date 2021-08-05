const txtMinNum = document.getElementById('txtMinNum')
const txtMaxNum = document.getElementById('txtMaxNum')
const btnGen = document.getElementById('btnGen');
const lblRandInt = document.getElementById('lblRandInt');
const btnRepo = document.getElementById('btnRepo');
const repo = "https://github.com/TalkativeDiv/random-number"
let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let showRandomInt = (min, max) =>{
  lblRandInt.innerText = "Random Number is: " + getRandomInt(min, max)
} 
btnGen.addEventListener('click', () => showRandomInt(txtMinNum.value,txtMaxNum.value))
//document.addEventListener('DOMContentLoaded', showRandomInt(1,100))
btnRepo.addEventListener('click', (e) =>{
  if(e.ctrlKey){window.open(repo)}
  else{window.location.href = repo}
})