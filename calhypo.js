console.log("Hello!!!!!! from JavaScript");

console.log("linked")

let subBtn = document.getElementById("subBtn")
subBtn.addEventListener("click", ()=>{
let side1 = document.getElementById("side-1").value
let side2 = document.getElementById("side-2").value
   if (Number(side1) < 0 || Number(side2 < 0)) {
        alert("Enter Values greater than 0")
    }
    else {
        let result = Math.sqrt(Math.pow(Number(side1), 2) + Math.pow(Number(side2), 2))
        console.log(result)
        document.getElementById("display").innerHTML = "Your Hypo is " + result + " cm"

    }
})

let subBtnArea = document.getElementById("subBtnArea")
subBtnArea.addEventListener("click", ()=>{
    let base = document.getElementById("base").value
    let height = document.getElementById("height").value
    if (Number(base) < 0 || Number(height) < 0) {
        alert("Enter values greater than 0")
    }
    else {
        let calArea = 0.5 * (Number(base) * Number(height))
        console.log(calArea)
        document.getElementById("displayArea").innerHTML = "The Area of the Triangle is " + calArea + " cm"

    }
   
})

