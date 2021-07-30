import '/src/styles/style.css'
const app = document.getElementById('app');
const appContent =
`
<div class="form">
<input type="text" class="form__input" id = "txtMinNum" placeholder="Enter a small number...">
<input type="text" class="form__input" id = "txtMaxNum" placeholder="Enter a big number...">
<label id = "lblRandInt">Random Number is: 0</label>
<button class="btn btn__primary" id = "btnGen"><p>Genarate!</p></button>
</div>
`
app.innerHTML = appContent
const txtMinNum = document.getElementById('txtMinNum')
const txtMaxNum = document.getElementById('txtMaxNum')
const btnGen = document.getElementById('btnGen');
const lblRandInt = document.getElementById('lblRandInt');

let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnGen.addEventListener('click', () =>{
lblRandInt.innerText = "Random Number is: " + getRandomInt(txtMinNum.value, txtMaxNum.value)
})