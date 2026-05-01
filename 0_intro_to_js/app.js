console.log("Javascript is added")


const numList = document.getElementById("numList")
// loop form 1 = 10 and add child elemets to ul 

for (let i = 1; i <= 60; i++) {
    console.log(i)
    const li = document.createElement("li")
    li.textContent = i
    numList.appendChild(li)
}