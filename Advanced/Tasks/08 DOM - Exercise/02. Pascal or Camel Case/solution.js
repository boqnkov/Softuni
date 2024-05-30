function solve() {

  let firstParamRef = document.getElementById("text").value
  let secondParamRef = document.getElementById("naming-convention").value
  let resultRef = document.getElementById("result")


  let convertedText = firstParamRef.toLowerCase()
  let result = ''

  if (secondParamRef == "Camel Case") {

    let words = convertedText.split(' ')
    let curWord = words.shift()
    result += curWord

    while (words) {
      curWord = words.shift();
      let addedWord = curWord[0].toUpperCase() + curWord.slice(1)
      result += addedWord
    }
  } else if (secondParamRef == "Pascal Case") {
    let words = convertedText.split(' ')


    while (words) {
      let curWord = words.shift();
      let addedWord = curWord[0].toUpperCase() + curWord.slice(1)
      result += addedWord
    }
  } else {
    result = "Error!!!"
  }

  resultRef.textContent = result

}
