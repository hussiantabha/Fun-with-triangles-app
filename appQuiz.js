// javascript

console.log("linked")
let form = document.getElementById("questions")
let correctAns = ["6cm", "right", "ans", "2.5cm", "30cm"]
function scoreCal(e){
    e.preventDefault();
    let score = 0
    let index = 0
    let formValue = new FormData(form)
    for(let value of formValue.values()){
        //console.log(value)
        if(value === correctAns[index]){
            //  console.log("Yayyy")
            score = score + 1
            //console.log(score)
        }
        
        else{
            //console.log("You are dumb")
        }
        index = index + 1
        console.log(score)
    }

    document.getElementById("dispScore").innerHTML = "Your Total Score is " + score
}

let subBtn1 = document.getElementById("subBtn-1")
subBtn1.addEventListener("click", scoreCal)
