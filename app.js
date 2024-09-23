
function desplegarMenus() {
    const botones = [...document.querySelectorAll('.botones')]
    
    iniciar();

    function iniciar() {
        botones.forEach((boton, index) =>  {
            boton.addEventListener('click', (event) => agregarTexto(event, index));
        })
    }
}

function agregarTexto(event, index) {
    let contenedorTexto = document.getElementById('contenedor-texto')
    let botonPulsado = event.target;
    let valorBoton = event.target.value;
    let texto = 'Lorem fistrum hasta luego Lucas llevame al sircoo tiene musho peligro quietooor no te digo trigo por no llamarte Rodrigor.'
    let texto2 = 'Pecador diodeno amatomaa ahorarr a peich pupita. Se calle ustée al ataquerl amatomaa amatomaa por la gloria de mi madre por la gloria de mi madre. '
    let texto3 = 'Jarl qué dise usteer ahorarr de la pradera está la cosa muy malar hasta luego Lucas a wan a gramenawer diodenoo qué dise usteer va usté muy cargadoo.'
    console.log(valorBoton)
    
    if (botonPulsado && valorBoton==='Inicio') {
        contenedorTexto.innerHTML = texto;
    }
    if(botonPulsado && valorBoton === 'Servicios'){
        contenedorTexto.innerHTML = texto2;
    }
    if(botonPulsado && valorBoton === 'Contacto'){
        contenedorTexto.innerHTML = texto3;
    }

}