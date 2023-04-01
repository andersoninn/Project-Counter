// Inicializing
    
    function welcome(){
        window.open("http://127.0.0.1:5500/loading.html")

}

// FIXED BILLS - INPUTS AND OUTPUTS
var rent = document.querySelector('#rent1')

rent.addEventListener('change', ()=>{
    let outputR = rent.value / 3 

    document.querySelector('#output-rent').innerHTML = outputR.toFixed(2)
})

var electricity = document.querySelector('#electricity1')

electricity.addEventListener('change', ()=>{
    let outputE = electricity.value / 3

    document.querySelector('#output-electricity').innerHTML = outputE.toFixed(2)
})

var water = document.querySelector('#water1')

water.addEventListener('change', ()=>{
    let outputW = water.value / 3

    document.querySelector('#output-water').innerHTML = outputW.toFixed(2)
})

var sewage = document.querySelector('#sewage1')

sewage.addEventListener('change', ()=>{
    let outputS = sewage.value / 3

    document.querySelector('#output-sewage').innerHTML = outputS.toFixed(2)
})

// FIXED BILLS INPUT AND OUTPUT
var nos = document.querySelector('#nos1')

nos.addEventListener('change', ()=>{
       alert(nos.value)
 })

var gadgets = document.querySelector('#gadgets1')

 gadgets.addEventListener('change', ()=>{
    alert(gadgets.value)
 })

 var Tand = document.querySelector('#t-and1')

 Tand.addEventListener('change', ()=>{
    alert(Tand.value)
 })
