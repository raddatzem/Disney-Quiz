const q = document.createElement("p");
const a = document.createElement("p");
q.textContent = "";
a.textContent = "";
document.querySelector("body").appendChild(q);
document.querySelector("body").appendChild(a);

const myList = [["what color are Mickeys shorts", "red"],    //[0][0], [0][1] 
                ["how old is the castle", "50"],             //[1][0], [1][1]
                ["top grossing disney film", "Spiderman"],   //[2][0], [2][1]
                ["what color is cinderellas dress", "blue"]] //[3][0], [3][1]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let button = document.createElement("button")
button.innerHTML = "newQuestion"
button.onclick =()=>{
    let i = getRandomInt(myList.length)
    q.textContent = myList[i][0];
    a.textContent = myList[i][1];
}
document.querySelector("body").appendChild(button)




// createQuestion("what color are Mickeys shorts", "red")
// createQuestion("how old is the castle", "50")
// createQuestion("top grossing disney film", "Spiderman")