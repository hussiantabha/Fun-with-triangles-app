console.log("linked")

let subBtn = document.getElementById("subBtn")
subBtn.addEventListener("click", ()=>{
    let angle1 = document.getElementById("angle1").value
    let angle2 = document.getElementById("angle2").value
    let angle3 = document.getElementById("angle3").value
    console.log(typeof angle1,angle2,angle3)
    calSum(angle1,angle2,angle3)
})

function calSum(angle1,angle2,angle3){
    let sum = Number(angle1) + Number(angle2) + Number(angle3)
    console.log(sum)
    if(sum >= 180){
        console.log("Yayy its a Triangle")
        document.getElementById("disp").innerHTML = sum + "Degrees"+ " Yayy its a Triangle"

    }else{
        console.log("It's not a triangle")
        document.getElementById("dispErr").innerHTML = sum + "degrees" +  " It's not a triangle"
    }
}
// let subBtn1 = document.getElementById("subBtn-1")
// subBtn1.addEventListener("click", ()=>{
//     let correct = document.getElementById("correct").value
//     console.log(correct)
// })