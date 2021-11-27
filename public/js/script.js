let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let style = getComputedStyle(document.body);
let mode;
let colorModes = {
    mainColor: style.getPropertyValue('--mainColor'),
    darkerMainColor: style.getPropertyValue('--darkerMainColor'),
    secondColor: style.getPropertyValue('--secondColor'),
    darkerSecondColor: style.getPropertyValue('--darkerSecondColor'),
    whiteColor: style.getPropertyValue('--whiteColor'),
    blackColor: style.getPropertyValue('--blackColor')
};

// Caso não exista, setando o localStorage com os modos respectivos
if(!localStorage.getItem('theme')){
    localStorage.setItem('theme', '--dMode');
} else {
    mode = localStorage.getItem('theme');
};

//Verificação do último modo colocado e adicionando a classe active (block)
setTimeout(()=>{
    if(localStorage.getItem('theme') === '--dMode'){
        moon.classList.add('active');
        dayMode();
    }else if(localStorage.getItem('theme') === '--nMode'){
        nightMode();
        sun.classList.add('active');
    }
},100);

//Eventos do Modo Noturno e colocando a classe pelo clique
moon.addEventListener('click', ()=>{
    if(moon.classList.contains('active') ){
        moon.classList.remove('active');
        sun.classList.add('active');
        nightMode();
    }
});
sun.addEventListener('click', ()=>{
    if(sun.classList.contains('active')){
        sun.classList.remove('active');
        moon.classList.add('active');
        dayMode();
    }
});

// Funcões que realizam a troca
const nightMode = ()=>{
    document.documentElement.style.removeProperty('--dMode', 'c');
    document.documentElement.style.setProperty('--nMode', 'c');
    document.documentElement.style.setProperty('--mainColor', `${colorModes.secondColor}`);
    document.documentElement.style.setProperty('--darkerMainColor', `${colorModes.darkerSecondColor}`);
    document.documentElement.style.setProperty('--whiteColor', `${colorModes.blackColor}`);
    document.documentElement.style.setProperty('--secondColor', `${colorModes.mainColor}`);
    document.documentElement.style.setProperty('--blackColor', `${colorModes.whiteColor}`);
    moon.children[0].classList.remove('filter');
    sun.children[0].classList.add('filter');
    localStorage.setItem('theme', '--nMode');
}

const dayMode = ()=>{
    document.documentElement.style.removeProperty('--nMode', 'c');
    document.documentElement.style.setProperty('--dMode', 'c');
    document.documentElement.style.setProperty('--mainColor', `${colorModes.mainColor}`);
    document.documentElement.style.setProperty('--darkerMainColor', `${colorModes.darkerMainColor}`);
    document.documentElement.style.setProperty('--whiteColor', `${colorModes.whiteColor}`);
    document.documentElement.style.setProperty('--secondColor', `${colorModes.secondColor}`);
    document.documentElement.style.setProperty('--blackColor', `${colorModes.blackColor}`);
    localStorage.setItem('theme', '--dMode');
}


