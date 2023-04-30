

// SetTimeout and SetInterval
var main = document.querySelector('main')


//START
setTimeout(function(){
    let start = document.createElement('p')
    start.setAttribute('id', 'start')
    start.innerHTML = '.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp'

    main.appendChild(start)
},1000);

setTimeout(function(){
    let start = main.lastChild
    let startP = document.createElement('p')
    startP.innerHTML = '.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp'

    start.style = 'display: none';
    main.appendChild(startP)
},5000);

//VITOR
setTimeout(function (){
    let vitor = document.createElement('p');
    vitor.setAttribute('id', 'start');
    vitor.innerHTML = 'Oferencendo carne ao Vitor &nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp';
    
    main.appendChild(vitor);
},5000);

setTimeout(function (){
    let vitor = main.lastChild;
    let vitorP = document.createElement('p');
    vitorP.innerHTML = 'Oferencendo carne ao Vitor &nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.';

    vitor.style = 'display: none';
    main.appendChild(vitorP);
},9000);

//YASMIM
setTimeout(function (){
    let yasmim = document.createElement('p');
    yasmim.setAttribute('id', 'start');
    yasmim.innerHTML = 'Arrumando as bagunças da Yasmim &nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.';
    
    main.appendChild(yasmim);
},9000);

setTimeout(function (){
    let yasmim = main.lastChild;
    let yasmimP = document.createElement('p');
    yasmimP.innerHTML = 'Arrumando as bagunças da Yasmim &nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.';

    yasmim.style = 'display: none';
    main.appendChild(yasmimP);
},13000);

// YASMIM2
setTimeout(function (){
    let yasmim = document.createElement('p');
    yasmim.setAttribute('id', 'start');
    yasmim.innerHTML = '.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp';
    
    main.appendChild(yasmim);
},13000);

setTimeout(function (){
    let yasmim2 = main.lastChild;
    let yasmim2P = document.createElement('p');
    yasmim2P.innerHTML = '.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp';

    yasmim2.style = 'display: none';
    main.appendChild(yasmim2P);
},17000);

//CHIRIBA
setTimeout(function (){
    let chiriba = document.createElement('p');
    chiriba.setAttribute('id', 'start');
    chiriba.innerHTML = 'Fazendo carinho na Chiriba &nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.';
    
    main.appendChild(chiriba);
},17000);

setTimeout(function (){
    let chiriba2 = main.lastChild;
    let chiriba2P = document.createElement('p');
    chiriba2P.innerHTML = 'Fazendo carinho na Chiriba &nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.&nbsp&nbsp.';

    chiriba2.style = 'display: none';
    main.appendChild(chiriba2P);
},21000);

//READY
setTimeout(function (){
    let ready = document.createElement('p');
    // ready.setAttribute('id');
    ready.innerHTML = 'Tudo pronto! Seu programa já pode iniciar!';
    ready.style = 'font-size: bold;'
    main.appendChild(ready);
},22000);

setTimeout(function (){
    window.open("main.html","_self");
},24000);