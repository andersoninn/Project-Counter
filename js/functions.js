// Inicializing
    
//     // function welcome(){
//     //     window.open("http://127.0.0.1:5500/loading.html")

// }

// FIXED BILLS - INPUTS AND OUTPUTS
var fixedBills = document.querySelectorAll('.fixed-bills input')
// console.log (fixedBills)

fixedBills.forEach((item) => {
    
    item.addEventListener('change', (element)=>{
        let finalValue = Number(element.target.value) /3
        element.target.parentNode.nextElementSibling.innerHTML = finalValue.toFixed(2)

       })
});

// INDIVIDUAL BILLS INPUT AND OUTPUT

var individualBills = document.querySelectorAll('.individual-bills input')
// console.log(individualBills)

individualBills.forEach((item) => {
    // console.log(item)
    item.addEventListener('change', (element) => {
        let trueValue = element.target.value
        if (trueValue >= 0) {
            // alert('maior ou igual a zero')
            let span = document.createElement('span')
            span.innerHTML = ' a'
            // element.target.parentNode.insertBefore(span,  element.target.nextElementSibling)
            
                if(element.target.parentNode.children[1] == undefined){
                    // alert('adiciona')
                    element.target.after(span)
                } else{ 
                    // alert('diferente')
                }
        }else{
            alert('Digite um montate válido')
        }
    })
}
)


//SCOPO DA LÓGICA
//Criar uma variável(Var1) que receba os valores da section/input - ok

//Usar o forEach, para cada item da variável, executar a função addEventListner('change',(element) =>{}) que vai gerar a função 'elemento' através da arrow function. - ok

//Declarar uma nova variavel (Var2) que vai receber o numer(element.target.value) - ok

//Fazer o test logico para saber se o valor é > 0. -ok

//If Number(element.target.value) > 0, inserir um material icon -ok

//Else alert('Digite um montante válido (maior que zero)')-ok

//testar se o material icon ja foiu inserido, if sim, nao faz nada. Else, adciona o material icon.


// ************************************************
// ****************    OLD CODE    ****************
// ************************ ***********************    
//FIXED BILLS

// var rent = document.querySelector('#rent1')

//     rent.addEventListener('change', ()=>{
//         var outputR = rent.value / 3 
//         document.querySelector('#output-rent').innerHTML = outputR.toFixed(2)
// })

// var electricity = document.querySelector('#electricity1')

//     electricity.addEventListener('change', ()=>{
//         var outputE = electricity.value / 3
//         document.querySelector('#output-electricity').innerHTML = outputE.toFixed(2)
// })

// var water = document.querySelector('#water1')

//     water.addEventListener('change', ()=>{
//         var outputW = water.value / 3
//         document.querySelector('#output-water').innerHTML = outputW.toFixed(2)
// })

// var sewage = document.querySelector('#sewage1')

//     sewage.addEventListener('change', ()=>{
//         var outputS = sewage.value / 3

//         document.querySelector('#output-sewage').innerHTML = outputS.toFixed(2)
// })

// INDIVIDUAL BILLS INPUT AND OUTPUT
// var nos = document.querySelector('#nos1')
//     nos.addEventListener('change', ()=>{
//         let span = document.createElement('span')
//         span.innerHTML = 'ok'
//         span.setAttribute('class', 'check')
//         let check1 = document.querySelector('#nos1').nextElementSibling

//         if(document.querySelector('#nos1').value==''){ 
//             check1.remove()
//         }
//         alert(check1)
//         if(check1==null){
//             document.querySelector('#nos1').parentNode.appendChild(span)
//         }
//     }

// var gadgets = document.querySelector('#gadgets1')

//         gadgets.addEventListener('change', ()=>{
//             alert(gadgets.value)
//      })

// var Tand = document.querySelector('#t-and1')

//         Tand.addEventListener('change', ()=>{
//              alert(Tand.value)
//      })

// var Tyas = document.querySelector('#t-yas1')
 
//         Tyas.addEventListener('change', ()=>{
//             alert(Tyas.value)
//      })

// var Tvitor = document.querySelector('#t-vitor1')

//     Tvitor.addEventListener('change', ()=>{
//         alert(Tvitor.value)
//     })

// var Tsandra = document.querySelector('#t-sandra1')

//     Tsandra.addEventListener('change', ()=>{
//         alert(Tsandra.value)
        
//     })



    

// function addNote(){
    
// } 