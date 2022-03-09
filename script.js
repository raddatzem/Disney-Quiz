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
  const answer = getRandomInt(49)
  const opOne = getRandomInt(49)
  const opTwo = getRandomInt(49)
  console.log(keys[opOne])
  console.log(keys[opTwo])
  console.log(keys[answer])
  console.log(namesToImageObj[keys[answer]])
 
  const placeImage = document.querySelector("#target")
  let imageTarget= document.createElement("img")
  imageTarget.src = namesToImageObj[keys[answer]]
  imageTarget.alt = ``
  imageTarget.id = "castle" 

  placeImage.append(imageTarget)

  const placeAnswer = document.querySelector(".questions")
  let ans = document.createElement("button")
  ans.textContent = keys[answer]
  ans.onclick = function(){ans.style.background='#00FF00'}

  // const placeAnswerOpOne = document.querySelector(".questions")
  let ansOpOne = document.createElement("button")
  ansOpOne.textContent = keys[opOne]
  ansOpOne.onclick = function(){ansOpOne.style.background='#FF0000'}

  // const placeAnswerOpTwo = document.querySelector(".questions")
  let ansOpTwo = document.createElement("button")
  ansOpTwo.textContent = keys[opTwo]
  ansOpTwo.onclick = function(){ansOpTwo.style.background='#FF0000'}
  
  placeAnswer.append(ansOpOne, ans, ansOpTwo)
})
 


  // const characters = arrayOfCharacters.data

  // const placeImage = document.querySelector("#target")
  // imageTarget= document.createElement("img")
  // imageTarget.src = characters[0].imageUrl
  // imageTarget.alt = ``
  // imageTarget.id = "castle" 

 


  // const answerArea = document.querySelector("h2")
  //   answerArea.textContent = 




// const q = document.createElement("p");
// q.textContent = "";
// document.querySelector("body").appendChild(q);

// const a = document.createElement("p");
// a.textContent = "";
// document.querySelector("body").appendChild(a);


// const myList = [
  // [characters[0].imageUrl],    //[0][0], [0][1] 
  // [characters[1].imageUrl],    //[1][0], [1][1]
  // [characters[2].imageUrl],    //[2][0], [2][1]
  // [characters[3].imageUrl]]    //[3][0], [3][1]



                function getRandomInt(max) {
                  return Math.floor(Math.random() * max);
                }

// let button = document.createElement("button")
// button.innerHTML = "Next Question"
// button.classList = "button"
// button.onclick =()=>{
//     let i = getRandomInt(myList.length)
//     q.textContent = myList[i][0];
//     a.textContent = myList[i][1];
// }
// document.querySelector("body").appendChild(button)


  




// createQuestion("what color are Mickeys shorts", "red")
// createQuestion("how old is the castle", "50")
// createQuestion("top grossing disney film", "Spiderman")