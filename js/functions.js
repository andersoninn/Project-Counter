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

//SCOPE OF LOGIC
//Create a new variable(var1) that receives the value of section input. -ok

//Use forEach, for each item of the variable and execute the functin addEventListiner('change, (element) =>{}) that will generation the fuction 'element' through the arrow function - ok

//Declarete the new variable (var2) that receive number(element.target.value) - ok

//Do the logical test to see if valur is > 0. -ok

//If Number(element.target.value) > 0, inserted the material icon -ok

//Else alert('Digite um montante válido (maior que zero)')-ok

//Test if the material icon has been inserted, if yes, do nothing. 
//Else, add the material icon. -ok

let individualBills = document.querySelectorAll('.individual-bills input')
// console.log(individualBills)

individualBills.forEach((item) => {
    // console.log(item)
    item.addEventListener('change', (element) => {
        let trueValue = element.target.value
        if (trueValue >= 0) {
            // alert('maior ou igual a zero')
            let span = document.createElement('span')
            span.innerHTML = ` <span class="material-symbols-outlined">
            check </span>`
            // element.target.parentNode.insertBefore(span,  element.target.nextElementSibling)
            
                if(element.target.parentNode.children[1] == undefined){
                    // alert('to adds')
                    element.target.after(span)
                } else{ 
                    // alert('different')
                }
        }else{
            alert('Digite um montate válido (maior que zero)')
        }
    })
}
)
    //BUTTON
    let addNote = document.querySelector('.button').firstElementChild
    // console.log (addNote)

    addNote.addEventListener('click', ()=> {
        // console.log (note)
        let patherSection = document.querySelectorAll('section')
        var newSection = document.createElement('section')
        newSection.setAttribute('class', 'supermarket box')
        newSection.innerHTML += `
        <div>
            <label for="total">Total:</label>
            <input type="number" name="total" id="" style="width:80px">
        </div>
        <div>
            <label for="vitor">Vitor:</label>
                <input type="number" name="vitor" id="" style="width:80px"> </div>
        <div>
            <label for="andYas">And/Yas:</label>
                <input type="number" name="andYas" id="" style="width:80px"></div>
                <div>
                <button>
                    <span class="material-symbols-outlined">
                    delete </span>
                </button>
        </div>`
        patherSection[2].appendChild(newSection)
        evButtom();
    });
    evButtom();
    
    // REMOVE
    function evButtom(){
        
            document.querySelectorAll('.supermarket button').forEach(elemBtn =>{
                elemBtn.addEventListener('click', (e)=>{
                    if(e.target.classList != ''){
                        var btnElement = e.target.parentNode
   
                    } else{
                        var btnElement = e.target
                    }

                    let tamanhoSection = document.querySelectorAll('section button') 
                        if(tamanhoSection.length > 3){
                        
                        btnElement.parentNode.parentNode.remove() 
            
                        } else{
                           document.querySelectorAll('.supermarket input').forEach(input =>{
                            input.value = '0'
                           })
                    }
                })
            })
        }
    

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