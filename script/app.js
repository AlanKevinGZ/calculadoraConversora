
let fomulario=document.querySelector('.fomulario');
let segundosText=document.querySelector('#segundos');

fomulario.addEventListener('submit',(e)=>{
e.preventDefault();

let resSegundos=parseInt(segundosText.value);

calcularHoras(resSegundos);
calcularMinutos(resSegundos);
 calcularSegundos(resSegundos); 
})

function calcularHoras(segundos) {
    let hora=document.querySelector('#hora');
    let hour = Math.round(segundos / 3600);
    hora.value=hour;
    
    
}

function calcularMinutos(segundos) {
    let minutos=document.querySelector('#minutos');
    let minute = Math.round((segundos / 60) % 60);
    minutos.value=minute;
    
    
}

function calcularSegundos(segundos) {
    let segundoss=document.querySelector('#segundosR');
    let second = segundos % 60;
    segundoss.value=second;
    
    
}