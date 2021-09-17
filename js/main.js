
//CASHED ELEMENT REFERENCES
let plusButtonEl = document.getElementById('plusButton')
let inputTextEl = document.getElementById('inputEl')
let minusButtonEl = document.getElementById('minusButton')
let displayValueEl = document.getElementById('displayValueEl')


//AP'S STATE
let outputNum =0;
let inputNum = 1;
let total
render()

//EVENT LISTENERS

inputTextEl.addEventListener('input',function(){
    inputNum = parseInt(inputTextEl.value)
    console.log(inputNum)
})
plusButtonEl.addEventListener('click',function(evnt){

addValue()
render()
})
minusButtonEl.addEventListener('click',function(evnt){

subtract()
render()
})

// FUNCTIONS
function render(){
    
    
    displayValueEl.innerText = outputNum;
    inputTextEl.value = inputNum;
    if(outputNum < 0)displayValueEl.classList.add('negative');
    if(outputNum >= 0) displayValueEl.classList.remove('negative')
    
}


function addValue(){
  outputNum += inputNum;
   console.log(outputNum)
}


function subtract(){
    outputNum -=inputNum
    console.log(outputNum)
}