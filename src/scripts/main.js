import '/src/styles/styles.css'
const app = document.getElementById('app');
const appContent =
`
<div class="form">
<input type="number" class="form__input" id = "txtMinNum" placeholder="Enter a small number...">
<input type="number" class="form__input" id = "txtMaxNum" placeholder="Enter a big number...">
<label id = "lblRandInt">Random Number is: 0</label>
<button class="btn btnGen" id = "btnGen"><p>Genarate!</p></button>
<div class="repoContainer"><button type="button" id ="btnRepo" class="button">
<span class="button__text">Source</span>
<span class="button__icon">
<ion-icon name="code-slash-outline"></ion-icon>
</span>
</button></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</div>
`
app.innerHTML = appContent
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

btnGen.addEventListener('click', () =>{
lblRandInt.innerText = "Random Number is: " + getRandomInt(txtMinNum.value, txtMaxNum.value)
})

btnRepo.addEventListener('click', (e) =>{
  if(e.ctrlKey){window.open(repo)}
  else{window.location.href = repo}
})