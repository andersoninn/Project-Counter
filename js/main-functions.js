/*************************************
 ** FIXED BILLS - INPUTS AND OUTPUTS **
 *************************************/

var fixedBills = document.querySelectorAll('.fixed-bills input');
// console.log (fixedBills)

fixedBills.forEach((item) => {
  item.addEventListener('change', (element) => {
    let finalValue = Number(element.target.value) / 3;
    element.target.parentNode.nextElementSibling.innerHTML =
      finalValue.toFixed(2);
  });
});

/****************************************
 *** INDIVIDUAL BILLS INPUT AND OUTPUT ***
 ****************************************/

var individualBills = document.querySelectorAll('.individual-bills input');

individualBills.forEach((item) => {
  // console.log(item)
  item.addEventListener('change', (element) => {
    let trueValue = element.target.value;
    if (trueValue >= 0) {
      // alert('maior ou igual a zero')
      let span = document.createElement('span');
      span.innerHTML = ` <span class="material-symbols-outlined">
            check </span>`;
      // element.target.parentNode.insertBefore(span,  element.target.nextElementSibling)

      if (element.target.parentNode.children[1] == undefined) {
        // alert('to adds')
        element.target.after(span);
      } else {
        // alert('different')
      }
    } else {
      alert('Digite um montate válido (maior que zero)');
    }
  });
});

/****************************************
 *********** SUPERMARKET BILLS ***********
 ****************************************/

//BUTTON "ADD-NEW-NOTE"
let addNote = document.querySelector('.button').firstElementChild;
// console.log (addNote)

addNote.addEventListener('click', () => {
  // console.log (note)
  let patherSection = document.querySelectorAll('section');
  var newSection = document.createElement('section');
  newSection.setAttribute('class', 'supermarket box');
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
        </div>`;
  patherSection[2].appendChild(newSection);
  evButtom();
});
evButtom();

// BUTTON-REMOVE
function evButtom() {
  document.querySelectorAll('.supermarket button').forEach((elemBtn) => {
    elemBtn.addEventListener('click', (e) => {
      if (e.target.classList != '') {
        var btnElement = e.target.parentNode;
      } else {
        var btnElement = e.target;
      }

      let tamanhoSection = document.querySelectorAll('section button');
      if (tamanhoSection.length > 3) {
        btnElement.parentNode.parentNode.remove();
      } else {
        document.querySelectorAll('.supermarket input').forEach((input) => {
          input.value = '0';
        });
      }
    });
  });
}

// SUBMIT-BUTTON - CALCULATION FUNCTION
document.querySelector('[type=submit]').addEventListener('click', () => {
  var andIndBills = 0;
  var yasIndBills = 0;
  var vitorIndBills = 0;

  //FIXED-BILLS
  let finalValue1 = 0;
  fixedBills.forEach((element) => {
    finalValue1 += parseFloat(element.value) / 3;
  });

  //INDIVIDUAL-BILLS
  let gadgets = Number(individualBills[0].value) / 2;
  let telAnd = Number(individualBills[1].value);
  let telYas = Number(individualBills[2].value);
  let telVitor = Number(individualBills[3].value);
  let telSandra = Number(individualBills[4].value) / 2;
  let Spotify = 2;

  andIndBills = gadgets + telAnd + telSandra + Spotify;
  yasIndBills = gadgets + telYas + telSandra + Spotify;
  vitorIndBills = telVitor + Spotify;
  // console.log(andFinal);
  // console.log(yasFinal);
  // console.log(vitorFinal);

  //SUPERMARKET-BILLS

  let supMTotal = document.querySelectorAll('[name=total]');
  supMTotalValue = 0;
  supMTotal.forEach((note) => {
    supMTotalValue += Number(note.value);
  });
  // console.log(`o valor  total é ${supMTotalValue}`);

  let supMVitor = document.querySelectorAll('[name=vitor]');
  supMVitorValue = 0;
  supMVitor.forEach((note) => {
    supMVitorValue += Number(note.value);
  });
  // console.log(`o valor do Vitor é ${supMVitorValue}`);

  let supMAndYas = document.querySelectorAll('[name=andYas]');
  supMAndYasValue = 0;
  supMAndYas.forEach((note) => {
    supMAndYasValue += Number(note.value);
  });
  // console.log(`o valor And/Yas é ${supMAndYasValue}`);

  var vitorSupMFinal =
    (supMTotalValue - supMVitorValue - supMAndYasValue) / 3 + supMVitorValue;
  //  console.log(`O valor do Vitor é ${vitorSupMFinal.toFixed(2)}`);

  var AndYasSupMFinal =
    ((supMTotalValue - supMAndYasValue - supMVitorValue) / 3) * 2 +
    supMAndYasValue;
  // console.log(`o valor And/Yas é ${AndYasSupMFinal.toFixed(2)}`);

  var finalAndYas =
    finalValue1 * 2 + andIndBills + yasIndBills + AndYasSupMFinal;
  // console.log(finalAndYas.toFixed(2))

  var finalVitor = finalValue1 + vitorIndBills + vitorSupMFinal;
  // console.log(finalVitor.toFixed(2))

  //     alert(`
  // OS VALORES TOTAIS SÃO:
  //     Anderson e Yasmim: ${finalAndYas.toFixed(2)}
  //     Vitor: ${finalVitor.toFixed(2)}

  // SEGUE A BAIXO A BASE DE CÁLCULOS:
  // CONTAS COMUNS:
  //     Anderson:  ${finalValue1.toFixed(2)}
  //     Yasmim: ${finalValue1.toFixed(2)}
  //     Vitor: ${finalValue1.toFixed(2)}

  // CONTAS INDIVIDUAIS:
  //     Anderson: ${andIndBills.toFixed(2)}
  //     Yasmim: ${yasIndBills.toFixed(2)}
  //     Vitor: ${vitorIndBills.toFixed(2)}

  // MERCADO
  //     Anderson e Yasmim: ${AndYasSupMFinal.toFixed(2)}
  //     Vitor: ${vitorSupMFinal.toFixed(2)}
  //     `);

  let main = document.querySelector('main');
  let newPopUP = document.createElement('section');
  newPopUP.innerHTML = `
    <section id="pop-up">
        <div>
            <p>OS VALORES TOTAIS SÃO: </p>
            <ul>
                <li>Anderson e Yasmim: <strong> ${finalAndYas.toFixed(
                  2
                )} </strong></li>
                <li>Vitor: <strong> ${finalVitor.toFixed(2)} </strong> </li>
            </ul>
            <p>SEGUE A BAIXO A BASE DE CÁLCULOS</p>
            <p>CONTAS COMUNS:</p>
            <ul>
                <li>Anderson:  <strong> ${finalValue1.toFixed(2)} </strong></li>
                <li>Yasmim:  <strong> ${finalValue1.toFixed(2)} </strong></li>
                <li>Vitor:  <strong> ${finalValue1.toFixed(2)} </strong></li>
            </ul>
            <p>CONTAS INDIVIDUAIS: </p>
            <ul>
                <li>Anderson:  <strong> ${andIndBills.toFixed(2)} </strong></li>
                <li>Yasmim:  <strong> ${yasIndBills.toFixed(2)} </strong></li>
                <li>Vitor:  <strong> ${vitorIndBills.toFixed(2)} </strong></li>
            </ul>
            <p>MERCADO</p>
            <ul>
                <li>Anderson e Yasmim:  <strong> ${AndYasSupMFinal.toFixed(
                  2
                )} </strong></li>
                <li>Vitor:  <strong> ${vitorSupMFinal.toFixed(2)} </strong></li>
            </ul>
            <p></p>
        </div>
    </section>`;

  main.appendChild(newPopUP);
});
