let celicusinput= document.querySelector('#celcius > input')
let fahrenheitinput= document.querySelector('#fahrenheit > input')
let kelvininput= document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundnumber(number){
return Math.round(number*100)/100
}

celicusinput.addEventListener('input',function(){
    let ctemp= parseFloat(celicusinput.value)
    let ftemp=(ctemp*(9/5)) + 32
    let ktemp = ctemp + 273.15

    fahrenheitinput.value = roundnumber(ftemp)
    kelvininput.value = roundnumber(ktemp)
})

fahrenheitinput.addEventListener('input',function(){
    let ftemp= parseFloat(fahrenheitinput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp =(ftemp-32)*(5/9)+ 273.15

    celicusinput.value = roundnumber(ctemp)
    kelvininput.value = roundnumber(ktemp)
})

kelvininput.addEventListener('input',function(){
    let ktemp= parseFloat(kelvininput.value)
    let ftemp=(ktemp -273.15) *(9/5) +32
    let ctemp =ktemp - 273.15

    celicusinput.value = roundnumber(ctemp)
    fahrenheitinput.value = roundnumber(ftemp)
})

btn.addEventListener('click' , ()=>{
    celicusinput.value=""
    fahrenheitinput.value=""
    kelvininput.value=""
})
