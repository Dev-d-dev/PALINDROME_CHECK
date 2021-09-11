const input = document.getElementById('palinput')
const btn = document.getElementById('mybutton')
let result = document.getElementById('result')

btn.addEventListener('click', palindrome)
input.addEventListener('keyup', enterkey)

function palindrome() {
    let str = input.value
    const givenStr = str.trim().toLowerCase().split(/[\W_]/gi).join("")
    const reverse = str.trim().toLowerCase().split("").filter(item => /[^\W_]/.test(item)).reverse().join("")
    console.log(givenStr)
    console.log(reverse)
    if(givenStr === reverse){
        console.log('Palindrome')
        result.innerText = `${str} is a Palindrome!`
    }else{
        console.log('not a palindrome')
        result.innerText = `${str} is Not a Palindrome!`
    }
    input.value = ""
    input.focus()
  }

  function enterkey(e){
      if(e.keyCode === 13){
          palindrome()
      }
  }