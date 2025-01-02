//Archivo de JavaScript con las funciones básicas para el frontend

// Recibir el nombre del localStorage y almacenarlo en una variable
let usuario = '';
document.addEventListener("DOMContentLoaded", function() {
    usuario = localStorage.getItem('nombreJugador');
});


let mostrar1=false;
let mostrar2=false;
let cant=0;
let contador=0;

// Ahora inicializamos opciones después de obtener el usuario
let opciones = {
    opcion1:{
        imagen: null,
        boton1Texto: 'Nada',
        boton2Texto: 'nada',
        mostrar: null,
        consecuencia1: 'opcion2',
    },
    opcion2: {
        imagen: null,
        boton1Texto: '💭 Hoy a 0.8 ucoins la cerveza en cafete, un buen día.',
        boton2Texto: 'nada',
        mostrar: null,
        consecuencia1: 'opcion3',
        cerveza: true,
    },
    opcion3: {
        imagen: '/Pasillo - Kevin.jpeg',
        boton1Texto: '[Kevin] Me ha escrito Cristian, está aparcando y acaba de ver el camión del RedBuff, ¿vamos a por uno antes de ir a cafete?',
        boton2Texto: 'nada',
        mostrar: false,
        consecuencia1: 'opcion4',
        cubata: true,
    },
    opcion4: {
        imagen: null,
        boton1Texto: 'Me parece bien, no nos vendría mal activarnos un poco.',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion5',
        consecuencia2: 'opcion6',
        cerveza:true,
        },
    opcion5: {
        imagen: '/RedBuff.jpeg',
        boton1Texto: '* Objeto añadido al inventario *',
        boton2Texto: 'nada', 
        mostrar: false,
        mostrar1: true,
        consecuencia1: 'opcion6',
        cerveza:true,
    },
    opcion6: {
        imagen: '/Clara - Cafete.jpeg',
        boton1Texto: '[Clara] Hey! ¿Te has enterado del botellón de esta noche en los toruños? ¿Vamos? Me han dicho que viene García, que he visto que no le has quitado el ojo en clase esta semana...',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion7',
        cerveza:true,
    },
    opcion7: {
        imagen: null,
        boton1Texto: 'Tendré que ir a ducharme entonces, que seguro que se me ha pegado la peste que hay en clase.',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion8',
        cerveza:true,
    },
    opcion8: {
        imagen: '/teléfono.png',
        boton1Texto: '(Sientes vibrar el teléfono en tu bolsillo)',
        boton2Texto: 'nada',
        mostrar: false,
        consecuencia1: 'opcion9',
        cubata:true,
    },
    opcion9: {
        imagen: '/Mamá.png',
        boton1Texto: 'Hola, mamá, ¿qué pasa?',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion10',
    },
    opcion10: {
        imagen: null,
        boton1Texto: '[Mamá] Hola, cariño. Oye, que tu abuela ha venido a casa esta tarde, le encantaría verte. ¿Por qué no te pasas un ratito antes de salir? Sabes cómo se pone si no la visitas...',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion11',
    },
    opcion11: {
        imagen: null,
        boton1Texto: 'Mamá, ya he hecho planes para esta noche. No sé si me dará tiempo.',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion12',
    },
    opcion12: {
        imagen: null,
        boton1Texto: '[Mamá] Solo será un momento. Anda, aunque sea para saludarla.',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion13',
    },
    opcion13: {
        imagen: null,
        boton1Texto: '>> Ir a casa de tu abuela',
        boton2Texto: '>> Quedarse, el botellón empezará pronto', 
        mostrar: true,
        consecuencia1: 'opcion14',
        consecuencia2: 'opcion20',
    },
    opcion14: {
        imagen: '/Camino.png',
        boton1Texto: '(El camino a casa de tu abuela está lleno de recuerdos que te llevan a la infancia.)',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion15',
    },
    opcion15: {
        imagen: '/Abuela.png',
        boton1Texto: '[Abuela] ¡Ay, mi niño! ¡Qué alegría verte! Pasa, pasa, que te preparo un café. Estás muy delgado, ¿eh?',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion16',
    },
    opcion16: {
        imagen: null,
        boton1Texto: 'Abuela, estoy bien. Solo venía a saludarte un rato antes de salir...',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion17',
    },
    opcion17: {
        imagen: null,
        boton1Texto: '[Abuela] ¡Ah! Antes de que te vayas, toma, esto es para ti. Para que te diviertas esta noche. Y no cojas caramelos de nadie.',
        boton2Texto: 'nada',
        cant:15,
        mostrar: false,
        consecuencia1: 'opcion18',
    },
    opcion18: {
        imagen: null,
        boton1Texto: '+15 ucoins',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion19',
        
    },
    opcion19: {
        imagen: '/Mensaje Kevin.png',
        boton1Texto: '(Miras el móvil y ves un mensaje de Kevin: “Cambio de planes, no hay botellón, mejor vamos al casino”)',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion40',
    },
    opcion20: {
        imagen: '/Toruños.png',
        boton1Texto: '(La tarde transcurrió con normalidad. Con el comienzo del atardecer os disponéis a llegar al lugar acordado, de lejos ves a Clara llamándote... no parece nada bueno)',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion21',
    },
    opcion21: {
        imagen: '/Clara - Toruños.jpeg',
        boton1Texto: '[Clara] ¡Por fin habéis llegado! Tengo malas noticias, García no viene al final. Está en la punta en la fiesta de Mamart. Si quieres vamos luego, la entrada solo son 10 ucoins con consumición incluída.',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion22',
    },
    opcion22: {
        imagen: null,
        boton1Texto: 'Me parece una buena idea, esperemos que no se alargue la noche aquí',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion23',
    },
    opcion23: {
        imagen: '/Kevin - Toruños.jpeg',
        boton1Texto: '[Kevin] Todo eso me parece muy bien, pero no tenemos nada para beber, como no le robemos a los de al lado no sé qué pensáis hacer',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion24',
    },
    opcion24: {
        imagen: '/Clara - Toruños.jpeg',
        boton1Texto: '[Clara] ¿Pero qué estás diciendo Kevin?',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion25',
    },
    opcion25: {
        imagen: '/Kevin - Toruños.jpeg',
        boton1Texto: '[Kevin] Lo digo enserio ¿Tú qué opinas? No te quedes en silencio',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion26',
    },
    opcion26: {
        imagen: '/Todos - Toruños.jpeg',
        boton1Texto: '>> No me parece mala idea, total no se van a beber todo eso',
        boton2Texto: '>> No nos metamos en problemas, mejor vamos a preguntarles si quieren compartir', 
        mostrar: true,
        consecuencia1: 'opcion27',
        consecuencia2: 'opcion34',
    },
    opcion27: {
        imagen: '/Toruños.png',
        boton1Texto: '(Robo exitoso)',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion28',
    },
    opcion28: {
        imagen: '/Kevin - Toruños.jpeg',
        boton1Texto: '[Kevin] Podemos echarle el RedBuff que hemos conseguido antes, el cubata con eso alarga la vida',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion29',
    },
    opcion29: {
        imagen: '/Clara - Toruños.jpeg',
        boton1Texto: '[Clara] No le hagas caso al loco este, vais a acabar fatal esta noche',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion30',
    },
    opcion30: {
        imagen: '/Todos - Toruños.jpeg',
        boton1Texto: '>> Con el RedBuff entra más fácil, vida solo hay una.',
        boton2Texto: '>> Eso pega demasiado fuerte, mejor paso.', 
        mostrar: true,
        consecuencia1: 'opcion31',
        consecuencia2: 'opcion33',
    },
    opcion31: {
        imagen: '/Toruños.png',
        boton1Texto: '* Se ha usado RedBuff *',
        boton2Texto: 'nada', 
        mostrar: false,
        mostrar1: false,
        consecuencia1: 'opcion32',
    },
    opcion32: {
        imagen: null,
        boton1Texto: '* Ebriedad: +3, Aceleración: +1 *',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion36',
    },
    opcion33: {
        imagen: null,
        boton1Texto: '* Ebriedad: +3 *',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion36',
    },
    opcion34: {
        imagen: null,
        boton1Texto: '[Extraño] Hoy por ti mañana por mí, por 6 ucoins podéis haceros un cubata cada uno',
        boton2Texto: 'nada', 
        cant:-6,
        mostrar: false,
        consecuencia1: 'opcion35',
    },
    opcion35: {
        imagen: null,
        boton1Texto: '* -6 ucoins *',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion28',
    },
    opcion36: {
       // video: '/Tic tac.mp4',        Quiero poner ahí ese vídeo
        imagen: null,
        boton1Texto: 'Un rato más tarde...',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion37',
    },
    opcion37: {
        imagen: '/Kevin - Toruños.jpeg',
        boton1Texto: '[Kevin] Pues nada, ya se nos ha acabado el alcohol. ¿Nos colamos en cafete a por unas cervezas?',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion38',
    },
    opcion38: {
        imagen: '/Toruños.png',
        boton1Texto: '(La idea de Kevin suena tentadora, Robinho siempre se deja la puerta abierta)',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion39',
    },
    opcion39: {
        imagen: null,
        boton1Texto: '>> Si nos pillan ya nos las apañamos',
        boton2Texto: '>> ¿Qué me estás contando tío?, vámonos ya a Mamart', 
        mostrar: true,
        consecuencia1: 'opcion40',
        consecuencia2: 'opcion40'
    },
    opcion40: {
        imagen: '/Continuará.png',
        boton1Texto: 'nada',
        boton2Texto: 'nada', 
        mostrar: false,
        ocultar: true,
    },
    opcion50: {
        imagen: null,
        boton1Texto: 'Ebriedad: +3',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion33',
    },
    opcion50: {
        imagen: null,
        boton1Texto: 'Ebriedad: +3',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion33',
    },
    opcion50: {
        imagen: null,
        boton1Texto: 'Ebriedad: +3',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion33',
    },
    opcion50: {
        imagen: null,
        boton1Texto: 'Ebriedad: +3',
        boton2Texto: 'nada', 
        mostrar: false,
        consecuencia1: 'opcion33',
    },
    opcion200: {
        imagen: '/Final hospital.jpg',
        boton1Texto: 'FINAL 2 de 8: Te encuentras en el hospital en coma, debido al exceso de alcohol en sangre. (No lo intentéis en casa)',
        boton2Texto: 'nada', 
        mostrar: false,
    }
};

// Inicializa la opción actual
let opcionActual = 'opcion1';

//Cabecera: function siguiente(option)
//Precondición: las distintas opciones deben estar en el archivo html reflejadas
//Postcondición: Al tomar una decisión en la hsitoria, cambia el texto (y a veces también la imágen/vídeo) para seguir avanzando en la historia
function siguiente(boton) {
    // Obtén la opción actual
    let historia = opciones[opcionActual];

    // Elementos del DOM
    let newImg = document.querySelector('#story-img img');
    let boton1 = document.getElementById('boton1');
    let boton2 = document.getElementById('boton2');

    // Actualiza la imagen solo si hay una nueva imagen
    if (historia.imagen) {
        newImg.src = historia.imagen;
        newImg.alt = "Error al cargar la imagen";
    }

    // Si hay dinero que modificar, llama a la función dinero()
    if (historia.cant) {
        dinero(historia.cant);
    }

    // Actualiza los textos de los botones
    boton1.innerHTML = historia.boton1Texto;
    boton2.innerHTML = historia.boton2Texto;

    // Muestra u oculta el segundo botón según sea necesario
    boton2.style.display = historia.mostrar ? 'block' : 'none';

    // Determina la nueva opción basada en el botón que se ha presionado
    if (boton.dataset.boton === 'boton1') {
        opcionActual = historia.consecuencia1;
    } else if (boton.dataset.boton === 'boton2') {
        opcionActual = historia.consecuencia2;
    }

    //Barra de progreso de ebriedad
    if (historia.cubata) {
        contador += 5;  // Incrementa el contador en 5 
        actualizarBarraEbriedad(); // Actualiza la barra de progreso
    }
    if(historia.cerveza){
        contador += 1; //Incrementa el contador en 1 
        actualizarBarraEbriedad(); // Actualiza la barra de progreso
    }
    // Actualiza la opción actual
    historia = opciones[opcionActual];

    // Actualiza la imagen de nuevo si hay una nueva opción
    if (historia.imagen) {
        newImg.src = historia.imagen;
        newImg.alt = "Error al cargar la imagen";
    } else {
        // Mantiene la imagen actual si la nueva opción no tiene imagen
        newImg.src = newImg.src;
    }

    incrementarNumerador();

    // Actualiza los textos de los botones con la nueva opción
    boton1.innerHTML = historia.boton1Texto;
    boton2.innerHTML = historia.boton2Texto;

    // Ajusta la visibilidad del segundo botón según la nueva opción
    boton2.style.display = historia.mostrar ? 'block' : 'none';

    //Oculata el botón 2 al final de la demo
    boton1.style.display = !historia.ocultar ? 'block' : 'none';

    //OBJETO 1
    // Actualiza el valor de mostrar1 según la opción actual 
    if (historia.mostrar1 !== undefined) { 
        mostrar1 = historia.mostrar1; 
    }
    //Oculta o muestra en función del valor de mostrar1
    let bebida = document.getElementById('bebida'); 
    bebida.style.display = mostrar1 ? 'block' : 'none';

    //OBJETO 2
    // Actualiza el valor de mostrar2 según la opción actual 
    if (historia.mostrar2 !== undefined) { 
        mostrar2 = historia.mostrar2; 
    }
    //Oculta o muestra en función del valor de mostrar2
    let pollo = document.getElementById('pollo'); 
    pollo.style.display = mostrar2 ? 'block' : 'none';
}

// Asigna la función a la ventana para que sea accesible globalmente
window.siguiente = siguiente;

//Función para controlar el dinero (ucoins) que posee el usuario en juego
function dinero(cant) {
    // Obtén el elemento HTML
    let actual = document.getElementById('cantidad');

    // Obtén el valor numérico actual
    let cantidadActual = Number(actual.textContent);

    // Suma la cantidad proporcionada
    cantidadActual += cant;

    // Actualiza el contenido del elemento con la nueva cantidad
    actual.textContent = cantidadActual;

    //Reiniciar el contador 'cant' para poder seguir usándolo
    cant=0;
}



function actualizarBarraEbriedad() {
    const maxEbriedad=12; // El máximo nivel de ebriedad antes de "drogado"
    let porcentaje = Math.min(100, Math.round((contador / maxEbriedad) * 100));

    const barraProgreso = document.getElementById("progresoEbriedad");
    const textoPorcentaje = document.getElementById("porcentajeEbriedad");
    const estado = document.getElementById("estado");
    
    barraProgreso.style.width = porcentaje + "%";
    textoPorcentaje.textContent = `${porcentaje}%`;

    // Cambiar el color de la barra según el nivel de ebriedad
    if (porcentaje<=25) {
        barraProgreso.style.backgroundColor = "#4CAF50"; // Verde
    } else if (porcentaje<=50) {
        barraProgreso.style.backgroundColor = "#FFA500"; // Naranja
    } else if (porcentaje<=75) {
        barraProgreso.style.backgroundColor = "#FF4500"; // Rojo-naranja
    } else if(porcentaje<=99){
        barraProgreso.style.backgroundColor = "#FF0000"; // Rojo
    }else{
        barraProgreso.style.backgroundColor = "#FF006F"
    }

    // Cambiar el estado según el porcentaje
    if (porcentaje>0 && porcentaje <= 25) {
        estado.textContent = "Estado: chill";
    } else if (porcentaje>25 && porcentaje <= 50) {
        estado.textContent = "Estado: illo esto sube";
    } else if (porcentaje>50 && porcentaje <= 75) {
        estado.textContent = "Estado: puedo volar?";
    } else if (porcentaje>75 && porcentaje<100) {
        estado.textContent = "Estado: trifásico";
    }else if (porcentaje===100 ){
        estado.textContent = "Estado: coma etílico"
    } else {
        estado.textContent = "Estado: sobrio"; // Cuando el porcentaje es 0
    }

    // Ajustar el color del texto para que sea visible
    textoPorcentaje.style.color = porcentaje > 50 ? "white" : "black";

    if (porcentaje === 100) {
        opcionActual = 'opcion200'; // Cambia la opción actual
        mostrarHistoria(); // Llama a la función que actualiza el contenido de la historia
    }
}
function mostrarHistoria() {                  //Saltar al final correspondiente
    const historia = opciones[opcionActual]; // Obtén la historia correspondiente

    // Actualiza el contenido según la historia (texto, imágenes, videos, etc.)
    document.getElementById('boton1').textContent = historia.texto;
    if (historia.imagen) {
        document.querySelector('#story-img img').src = historia.imagen;
    }
}
// Asegúrate de que el DOM esté completamente cargado antes de ejecutar tu script 
document.addEventListener("DOMContentLoaded", function(){ 
    // Simulación de un clic para incrementar la ebriedad y actualizar la barra 
    opciones.opcion2.actualizarContador(); 
});

function incrementarNumerador() {               //Función para incrementar el numerador de Pasos
    const num = document.getElementById("numerador");

    // Incrementa el numerador
    num.textContent = Number(num.textContent) + 1; // Suma 1 directamente al valor existente
}