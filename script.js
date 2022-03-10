function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let namesToImageObj = {}

fetch("https://api.disneyapi.dev/characters")
.then(function(response){
return response.json()
})
.then(function(resObject){
  const listOfCharacters = resObject.data

  listOfCharacters.forEach(function(char){
    namesToImageObj[char.name] = char.imageUrl //filling up namesToImageObj with names:images
  }) 
})  
.then(function(){
  const keys = Object.keys(namesToImageObj)
  const answer = getRandomInt(50)
  const opOne = getRandomInt(50)
  const opTwo = getRandomInt(50)
  // console.log(keys[opOne])
  // console.log(keys[opTwo])
  // console.log(keys[answer])
  // console.log(namesToImageObj[keys[answer]])
 
  const placeImage = document.querySelector("#target")
  let imageTarget= document.createElement("img")
  imageTarget.src = namesToImageObj[keys[answer]]
  imageTarget.alt = `disney characters image`
  imageTarget.id = "character" 

  placeImage.append(imageTarget)

  const placeAnswer = document.querySelector(".questions2")
  
  let ans = document.createElement("button")
  ans.textContent = keys[answer]
  ans.classList = "button-52"
  ans.onclick = function(){ans.style.background='#00FF00'}

  
  let ansOpOne = document.createElement("button")
  ansOpOne.textContent = keys[opOne]
  ansOpOne.classList = "button-52"
  ansOpOne.onclick = function(){ansOpOne.style.background='#FF0000'}

  
  let ansOpTwo = document.createElement("button")
  ansOpTwo.textContent = keys[opTwo]
  ansOpTwo.classList = "button-52"
  ansOpTwo.onclick = function(){ansOpTwo.style.background='#FF0000'}
  

  placeAnswer.append(ansOpOne, ans, ansOpTwo)

  const hoverTitle = document.querySelector(".center")
  const theTitle = document.createElement("h2")
  theTitle.textContent = "Welcome to The Disney Character Quiz! "
  theTitle.classList = "center"
 
  const theDirections = document.createElement("h3")
  theDirections.textContent = "Match the characters name to its image below"
  theDirections.classList = "center"

  
  const mouseOverFuntion = function(){
    this.style.color = "#00008B"
  }
  const mouseOutFunction = function(){
    this.style.color = "#fff"
  }
  theTitle.onmouseover = mouseOverFuntion
  theTitle.onmouseout = mouseOutFunction
  theDirections.onmouseover = mouseOverFuntion
  theDirections.onmouseout = mouseOutFunction
  hoverTitle.append(theTitle, theDirections)

  function refreshPage(){
    window.location.reload();
} 
const refreshButton = document.querySelector(".button-51")
refreshButton.textContent = "Next Question"
refreshButton.onclick = refreshPage
refreshButton.classList = "button-51"
})
 