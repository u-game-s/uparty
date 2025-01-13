null//Archivo de JavaScript con las funciones básicas para el frontend


let mostrar1=false;     //Para mostrar el redbuff en el inventario
let mostrar2=false;     //Para mostrar el pollo en el inventario
let mostrar3=false;     //Para mostrar el botellín en el inventario
let mostrar4=false;     //Para mostrar la consumición en el inventario
let mostrar5=false;     //Para mostrar el MDMA en el inventario
let mostrar6=false;     //Para mostrar la tarjeta de crédito en el inventario
let cant=0;
let contador=0;

// Ahora inicializamos opciones después de obtener el usuario
let opciones = {
    opcion1:{
        consecuencia1: 'opcion2',
    },
    opcion2: {
        boton1Texto: '💭 Hoy a 0.8 ucoins la cerveza en cafete, un buen día.',
        consecuencia1: 'opcion3',
    },
    opcion3: {
        imagen: 'Pasillo - Kevin.jpeg',
        boton1Texto: '[Kevin] Me ha escrito Cristian, está aparcando y acaba de ver el camión del RedBuff, ¿vamos a por uno antes de ir a cafete?',
        consecuencia1: 'opcion4',
    },
    opcion4: {
        boton1Texto: 'Me parece bien, no nos vendría mal activarnos un poco.',
        consecuencia1: 'opcion5',
        },
    opcion5: {
        imagen: 'RedBuff.jpeg',
        boton1Texto: '* Objeto añadido al inventario *',
        mostrar1: true,
        consecuencia1: 'opcion6',
    },
    opcion6: {
        imagen: 'Clara - Cafete.jpeg',
        boton1Texto: '[Clara] Hey! ¿Te has enterado del botellón de esta noche en los toruños? ¿Vamos? Me han dicho que viene García, que he visto que no le has quitado el ojo en clase esta semana...',
        consecuencia1: 'opcion7',
    },
    opcion7: {
        boton1Texto: 'Tendré que ir a ducharme entonces, que seguro que se me ha pegado la peste que hay en clase.',
        consecuencia1: 'opcion8',
    },
    opcion8: {
        imagen: 'teléfono.png',
        boton1Texto: '(Sientes vibrar el teléfono en tu bolsillo)',
        consecuencia1: 'opcion9',
    },
    opcion9: {
        imagen: 'Mamá.png',
        boton1Texto: 'Hola, mamá, ¿qué pasa?',
        consecuencia1: 'opcion10',
    },
    opcion10: {
        boton1Texto: '[Mamá] Hola, cariño. Oye, que tu abuela ha venido a casa esta tarde, le encantaría verte. ¿Por qué no te pasas un ratito antes de salir? Sabes cómo se pone si no la visitas...',
        consecuencia1: 'opcion11',
    },
    opcion11: {
        boton1Texto: 'Mamá, ya he hecho planes para esta noche. No sé si me dará tiempo.',
        consecuencia1: 'opcion12',
    },
    opcion12: {
        boton1Texto: '[Mamá] Solo será un momento. Anda, aunque sea para saludarla.',
        consecuencia1: 'opcion13',
    },
    opcion13: {
        boton1Texto: '>> Ir a casa de tu abuela',
        boton2Texto: '>> Quedarse, el botellón empezará pronto', 
        bot2: true,
        consecuencia1: 'opcion14',
        consecuencia2: 'opcion20',
    },
    opcion14: {
        imagen: 'Camino.png',
        boton1Texto: '(El camino a casa de tu abuela está lleno de recuerdos que te llevan a la infancia.)', 
        bot2:false,
        consecuencia1: 'opcion15',
    },
    opcion15: {
        imagen: 'Abuela.png',
        boton1Texto: '[Abuela] ¡Ay, mi niño! ¡Qué alegría verte! Pasa, pasa, que te preparo un café. Estás muy delgado, ¿eh?',
        consecuencia1: 'opcion16',
    },
    opcion16: {
        boton1Texto: 'Abuela, estoy bien. Solo venía a saludarte un rato antes de salir...',
        consecuencia1: 'opcion17',
    },
    opcion17: {
        boton1Texto: '[Abuela] ¡Ah! Antes de que te vayas, toma, esto es para ti. Para que te diviertas esta noche. Y no cojas caramelos de nadie.',
        cant:15,
        consecuencia1: 'opcion18',
    },
    opcion18: {
        boton1Texto: '+15 ucoins',
        consecuencia1: 'opcion19',
        
    },
    opcion19: {
        imagen: 'Mensaje Kevin.png',
        boton1Texto: '(Miras el móvil y ves un mensaje de Kevin: “Cambio de planes, olvídate del botellón en los toruños, mejor vamos a Mamart)', 
        consecuencia1: 'opcion56',
    },
    opcion20: {
        imagen: 'Toruños.png',
        boton1Texto: '(La tarde transcurrió con normalidad. Con el comienzo del atardecer os disponéis a llegar al lugar acordado, de lejos ves a Clara llamándote... no parece nada bueno)',
        consecuencia1: 'opcion21',
    },
    opcion21: {
        imagen: 'Clara - Toruños.jpeg',
        boton1Texto: '[Clara] ¡Por fin habéis llegado! Tengo malas noticias, García no viene al final. Está en la punta en la fiesta de Mamart. Si quieres vamos luego, la entrada solo son 10 ucoins con consumición incluída.',
        consecuencia1: 'opcion22',
    },
    opcion22: {
        boton1Texto: 'Me parece una buena idea, esperemos que no se alargue la noche aquí',
        consecuencia1: 'opcion23',
    },
    opcion23: {
        imagen: 'Kevin - Toruños.jpeg',
        boton1Texto: '[Kevin] Todo eso me parece muy bien, pero no tenemos nada para beber, como no le robemos a los de al lado no sé qué pensáis hacer', 
        consecuencia1: 'opcion24',
    },
    opcion24: {
        imagen: '/Clara - Toruños.jpeg',
        boton1Texto: '[Clara] ¿Pero qué estás diciendo Kevin?',
        consecuencia1: 'opcion25',
    },
    opcion25: {
        imagen: 'Kevin - Toruños.jpeg',
        boton1Texto: '[Kevin] Lo digo enserio ¿Tú qué opinas? No te quedes en silencio',
        consecuencia1: 'opcion26',
    },
    opcion26: {
        imagen: 'Todos - Toruños.jpeg',
        boton1Texto: '>> No me parece mala idea, total no se van a beber todo eso',
        boton2Texto: '>> No nos metamos en problemas, mejor vamos a preguntarles si quieren compartir', 
        bot2: true,
        consecuencia1: 'opcion27',
        consecuencia2: 'opcion34',
    },
    opcion27: {
        imagen: 'Toruños.png',
        boton1Texto: '(Robo exitoso) * Objeto añadido al inventario *',
        mostrar3: true,
        bot2: false,
        consecuencia1: 'opcion28',
    },
    opcion28: {
        imagen: 'Kevin - Toruños.jpeg',
        boton1Texto: '[Kevin] Podemos echarle el RedBuff que hemos conseguido antes, el cubata con eso alarga la vida',
        consecuencia1: 'opcion29',
    },
    opcion29: {
        imagen: 'Clara - Toruños.jpeg',
        boton1Texto: '[Clara] No le hagas caso al loco este, vais a acabar fatal esta noche',
        consecuencia1: 'opcion30',
    },
    opcion30: {
        imagen: 'Todos - Toruños.jpeg',
        boton1Texto: '>> Con el RedBuff entra más fácil, vida solo hay una.',
        boton2Texto: '>> Eso pega demasiado fuerte, mejor paso.', 
        bot2: true,
        consecuencia1: 'opcion31',
        consecuencia2: 'opcion33',
        cubata: true,
    },
    opcion31: {
        imagen: 'Toruños.png',
        boton1Texto: '* Se ha usado RedBuff *',
        bot2: false,
        mostrar1: false,
        redbuff: true,
        consecuencia1: 'opcion32',
    },
    opcion32: {
        boton1Texto: '* Ebriedad: +3, Aceleración: +1 *',
        consecuencia1: 'opcion36',
    },
    opcion33: {
        boton1Texto: '* Ebriedad: +2,5 *',
        consecuencia1: 'opcion36',
    },
    opcion34: {
        boton1Texto: '[Extraño] Hoy por ti mañana por mí, por 6 ucoins podéis haceros un cubata cada uno', 
        cant:-6,
        consecuencia1: 'opcion35',
    },
    opcion35: {
        boton1Texto: ' -6 ucoins ',
        consecuencia1: 'opcion28',
    },
    opcion36: {
        boton1Texto: 'Un rato más tarde...',
        consecuencia1: 'opcion37',
    },
    opcion37: {
        imagen: 'Kevin - Toruños.jpeg',
        boton1Texto: '[Kevin] Pues nada, ya se nos ha acabado el alcohol. ¿Nos colamos en cafete a por unas cervezas?',
        consecuencia1: 'opcion38',
    },
    opcion38: {
        imagen: 'Toruños.png',
        boton1Texto: '(La idea de Kevin suena tentadora, Robinho siempre se deja la puerta abierta)',
        consecuencia1: 'opcion39',
    },
    opcion39: {
        boton1Texto: '>> Si nos pillan ya nos las apañamos',
        boton2Texto: '>> ¿Qué me estás contando tío?, vámonos ya a Mamart', 
        bot2: true,
        consecuencia1: 'opcion40',
        consecuencia2: 'opcion56',
    },
    opcion40: {
        boton1Texto: '(En vuestro intento de saltar la valla os pasa factura el llevar toda la semana jugando al LoL en el pasillo, caes estrepitosamente al suelo, al levantar la vista ves a un gallo durmiendo)',
        bot2: false,
        consecuencia1: 'opcion41',
    },
    opcion41: {
        boton1Texto: '>> (Coger el gallo) ',
        boton2Texto: '>> Tanto despertar a cacareos ahora me toca a mí',
        boton3Texto: '>> (Dejar al gallo e ir rumbo a cafete)',
        bot3: true,
        consecuencia1: 'opcion43',
        consecuencia2: 'opcion42',
        consecuencia3: 'opcion47'
    },
    opcion42: {
        boton1Texto: ' FINAL 1 de 22: El gallo empieza a despertarse y con un cacareo llama a toda una horda de gallos y gallinas de la ESI... lo último que recuerdas es ver tu cuerpo agujereado mientras Kevin espantaba a la horda.',
        bot2: false,
        bot3: false,
    },
    opcion43: {
        boton1Texto: '(Por algún motivo has decidido coger al gallo y guardarlo en la mochila, con él no vas a poder robar nada)',
        bot2: false,
        bot3: false,
        consecuencia1: 'opcion44',
    },
    opcion44: {
        boton1Texto: '* Objeto añadido al inventario *', 
        mostrar2:true,
        consecuencia1: 'opcion45',
    },
    opcion45: {
        boton1Texto: '[Kevin] ¿Qué cojones haces con el gallo?',
        consecuencia1: 'opcion46',
    },
    opcion46: {
        boton1Texto: 'Uno más para la fiesta',
        consecuencia1: 'opcion56',
    },
    opcion47: {
        boton1Texto: '(Al dirigiros a la puerta trasera de cafetería os dais cuenta de que, efectivamente, teneís el acceso libre, “Cualquiera podría haber entrado” os decís mutuamente mientras os dirigís al interior)',
        bot2: false,
        bot3: false,
        consecuencia1: 'opcion48',
    },
    opcion48: {
        boton1Texto: '[Kevin] ¿Y si nos dejamos de robar botellines y vamos a lo grande abriendo la caja?', 
        consecuencia1: 'opcion49',
    },
    opcion49: {
        boton1Texto: '>> Suficiente tenemos con colarnos a robar cerveza, como diría mi abuela, la avaricia rompe el saco.',
        boton2Texto: '>> Ya que estamos, con eso nos sale gratis la noche, Simeon se habrá dejado aquí una pasta.', 
        boton3Texto: '>> (Tu espíritu más alcohólico se despierta al ver el grifo de la barra) “Ve a por los botellines Kevin, tengo que hacer algo antes”',
        bot2: true,
        bot3: true,
        consecuencia1: 'opcion50',
        consecuencia2: 'opcion52',
        consecuencia3: 'opcion54',
    },
    opcion50: {
        boton1Texto: '* Ebriedad: +1,2 *',
        consecuencia1: 'opcion51',
        cerveza: true,
        bot2: false,
        bot3: false,
    },
    opcion51: {
        boton1Texto: '(Tras beberos unos botellines comienza a sonar la alarma y huís rumbo a Mamart)',
        consecuencia1: 'opcion56',
    },
    opcion52: {
        boton1Texto: '(Tras abrir la caja a golpes, veis que han dejado 100 Ucoins, 50 para cada uno, lo siguiente que sabéis es que las alarmas suenan y salís corriendo de allí)',
        consecuencia1: 'opcion53',
        cant:+50,
        bot2: false,
        bot3: false,
    },
    opcion53: {
        boton1Texto: '+50 Ucoins',
        consecuencia1: 'opcion56',
    },
    opcion54: {
        boton1Texto: '(Te acercas al grifo y comienzas a beber)',
        consecuencia1: 'opcion55',
        bot2: false,
        bot3: false,
    },
    opcion55: {
        boton1Texto: ' FINAL 2 de 22: Intoxicación por cerveza. Al final tu abuela tenía razón y la avaricia acabó rompiendo el saco',
    },
    opcion56: {
        boton1Texto: 'Después de un largo paseo por la ciudad, llegáis finalmente a la discoteca Mamart. La fila es larga, y el sonido de la música desde dentro te llena de emoción. ',
        consecuencia1: 'opcion57',
    },
    opcion57: {
        boton1Texto: '[Portero 1] 10 Ucoins la entrada, y los documentos',
        consecuencia1: 'opcion58',
        cant: -10,
    },
    opcion58: {
        boton1Texto: '-10 ucoins',
        consecuencia1: 'opcion59',
    },
    opcion59: {
        boton1Texto: ' (El portero os sella el brazo, os entrega una consumición y entráis)',
        consecuencia1: 'opcion60',
    },
    opcion60: {
        boton1Texto: '* Objeto añadido al inventario *',
        consecuencia1: 'opcion61',
        mostrar4: true,
    },
    opcion61: {
        boton1Texto: '(Kevin parece más emocionado que nunca. La música retumba, las luces parpadean y un aroma a fiesta envuelve todo el lugar.)',
        consecuencia1: 'opcion62',
    },
    opcion62: {
        boton1Texto: '[Kevin] ¡Ey! Mira quién llegó ya al reservado.',
        consecuencia1: 'opcion63',
    },
    opcion63: {
        boton1Texto: '(Giras para ver dónde está señalando Kevin, de pronto te fijas en la persona por la que has venido.)',
        consecuencia1: 'opcion64',
    },
    opcion64: {
        boton1Texto: '>> Te quedas con la mirada posada en él, recordando por qué te llamó la atención desde el principio.',
        boton2Texto: '>> Tus ojos se posan en ella, y de inmediato sientes esa conexión especial que siempre has tenido.',
        bot2: true,
        consecuencia1: 'opcion65',
        consecuencia2: 'opcion66',
    },
    opcion65: {
        boton1Texto: '[kevin] Bueno deberíamos empezar con un chupito ¡Esta noche es nuestra!',
        boton2Texto: 'Deséame suerte...',
        consecuencia1: 'opcion67',
        consecuencia2: 'opcion112',
    },
    opcion66: {
        boton1Texto: '[kevin] Bueno deberíamos empezar con un chupito ¡Esta noche es nuestra!',
        boton2Texto: 'Deséame suerte...',
        consecuencia1: 'opcion67',
        consecuencia2: 'opcion112',
    },
    opcion67: {
        boton1Texto: '>> (Aceptar el chupito) Toma mi consumición, pídeme uno',
        boton2Texto: '>> (Rechazarlo) Paso, voy a ver cómo entro en el reservado. ',
        bot2: true,
        consecuencia1: 'opcion68',
        consecuencia2: 'opcion112'
    },
    opcion68: {
        boton1Texto: '* Se ha usado Consumición *',
        bot2: false,
        consecuencia1: 'opcion69',
        mostrar4: false,
    },
    opcion69: {
        boton1Texto: '(Notas cómo el liquido transparente te recorre la garganta, quemándolo todo a su paso)',
        consecuencia1: 'opcion70',
        chupito: true,
    },
    opcion70: {
        boton1Texto: '* Ebriedad: +1,6 *',
        consecuencia1: 'opcion71',
    },
    opcion71: {
        boton1Texto: '[kevin] Woow, estoy a tope, ¿qué pedimos ahora?',
        consecuencia1: 'opcion72',
    },
    opcion72: {
        boton1Texto: '>> Cerveza (3 ucoins)',
        boton2Texto: '>> Chupito (2 ucoins)',
        boton3Texto: '>> Cubata (6 ucoins)',
        boton4Texto: '>> Paso, estoy bien tal y como estoy',
        bot2: true,
        bot3: true,
        bot4: true,
        consecuencia1: 'opcion73',
        consecuencia2: 'opcion74',
        consecuencia3: 'opcion75',
        consecuencia4: 'opcion85',
    },
    opcion73: {
        boton1Texto: '[kevin] Pff, tan aburrido como siempre colega',
        consecuencia1: 'opcion76',
        cant:-3,
        bot2: false,
        bot3: false,
        bot4: false,
    },
    opcion74: {
        boton1Texto: '[kevin] Tú si le sabes eeeh',
        consecuencia1: 'opcion77',
        cant:-2,
        bot2: false,
        bot3: false,
        bot4: false,
    },
    opcion75: {
        boton1Texto: '[kevin] El ron-cola nunca falla',
        consecuencia1: 'opcion78',
        cant:-6,
        bot2: false,
        bot3: false,
        bot4: false,
    },
    opcion76: {
        boton1Texto: '-3 ucoins',
        consecuencia1: 'opcion79',
    },
    opcion77: {
        boton1Texto: '-2 ucoins',
        consecuencia1: 'opcion79',
    },
    opcion78: {
        boton1Texto: '-6 ucoins',
        consecuencia1: 'opcion81',
    },
    opcion79: {
        boton1Texto: '(Sientes como se te destensa el cuerpo con cada segundo que pasa)',
        consecuencia1: 'opcion80',
        cerveza: true,
    },
    opcion80: {
        boton1Texto: '*Ebriedad: +1,2 *',
        consecuencia1: 'opcion71',
    },
    opcion81: {
        boton1Texto: '(Con una irritante lentitud, sientes cómo se abrasa todo tu conducto digestivo)',
        consecuencia1: 'opcion82',
        chupito: true,
    },
    opcion82: {
        boton1Texto: '* Ebriedad: +1,6 *',
        consecuencia1: 'opcion71',
    },
    opcion83: {
        boton1Texto: '(Cada sorbo aumenta tu sensación de mareo y a su vez te acerca a un estado de plenitud y dudosa confianza)',
        consecuencia1: 'opcion84',
        cubata: true,
    },
    opcion84: {
        boton1Texto: '* Ebriedad: +2,5 *',
        consecuencia1: 'opcion71',
    },
    opcion85: {
        boton1Texto: '[Kevin] No sé tú, pero yo ya me estoy meando, ¿te vienes al baño?',
        consecuencia1: 'opcion86',
        bot2: false,
        bot3: false,
        bot4: false,
        cerveza: false,
        chupito: false,
        cubata: false,    
    },
    opcion86: {
        boton1Texto: '>> (Ir al baño con Kevin) Yo igual, vamos.',
        boton2Texto: '>> (Rechazarlo) Paso, voy a ver cómo se puede entrar en el reservado. ',
        bot2: true,
        consecuencia1: 'opcion87',
        consecuencia2: 'opcion112',
    },
    opcion87: {
        boton1Texto: '(Al entrar al baño te encuentras al primo de Kevin, Cristian. Está apoyado en la pared, con un sonrisa pícara en el rostro. Al verte, te enseña algo que no puedes ignorar)',
        consecuencia1: 'opcion88',
    },
    opcion88: {
        boton1Texto: '[Cristian] ¿Quieres animar la noche? Tengo de todo, lo que quieras: marihuana, cocaína, MDMA, o algo nuevo que estoy probando',
        consecuencia1: 'opcion89',
    },
    opcion89: {
        boton1Texto: '¡ADVERTENCIA AL JUGADOR!',
        consecuencia1: 'opcion90',
    },
    opcion90: {
        boton1Texto: '¡ADVERTENCIA AL JUGADOR!',
        consecuencia1: 'opcion91',
    },
    opcion91: {
        boton1Texto: '¡ADVERTENCIA AL JUGADOR!',
        consecuencia1: 'opcion92',
    },
    opcion92: {
        boton1Texto: '¡ADVERTENCIA AL JUGADOR!',
        consecuencia1: 'opcion93',
    },
    opcion93: {
        boton1Texto: '>> Marihuana',
        boton2Texto: '>> Cocaína',
        boton3Texto: '>> MDMA',
        boton4Texto: '>> Píldora misteriosa',
        boton5Texto: '>>  (Rechazar todo) Déjate de líos. Voy a ver cómo entro en el reservado',
        bot2: true,
        bot3: true,
        bot4: true,
        bot5: true,
        consecuencia1: 'opcion94',
        consecuencia2: 'opcion96',
        consecuencia3: 'opcion102',
        consecuencia4: 'opcion110',
        consecuencia5: 'opcion112',
    },
    opcion94: {
        boton1Texto: '(Decides fumar marihuana, y al principio te sientes tranquilo y relajado. La música suena de fondo, y las luces parecen bailar en cámara lenta. Sin embargo, poco a poco, el efecto de la marihuana se apodera de ti, haciéndote sentir más y más somnoliento',
        bot2: false,
        bot3: false,
        bot4: false,
        bot5: false,
        consecuencia1: 'opcion95',
    },
    opcion95: {
        boton1Texto: 'FINAL 4 de 22: Solo y fumado. Te despiertan los camareros por la mañana, la noche ya ha pasado',
    },
    opcion96: {
        boton1Texto: '(Has tomado cocaína, y aunque te sientes con energía desbordante, tus movimientos son erráticos y tus reacciones son exageradas)',
        consecuencia1: 'opcion97',
        bot2: false,
        bot3: false,
        bot4: false,
        bot5: false,
    },
    opcion97: {
        boton1Texto: '(Te acercas al reservado y García te ve desde lejos. Al llegar, tu mandíbula se mueve incontrolablemente y tus ojos están completamente desorbitados) ',
        consecuencia1: 'opcion98',
    },
    opcion98: {
        boton1Texto: '[García] ¿Qué te pasa? Estás actuando un poco raro...',
        consecuencia1: 'opcion99',
    },
    opcion99: {
        boton1Texto: '(De repente uno de los porteros que también ha notado tu comportamiento se acerca)',
        consecuencia1: 'opcion100',
    },
    opcion100: {
        boton1Texto: '[Portero 2] Vamos, amigo, no puedes estar así por aquí. Es hora de que te vayas',
        consecuencia1: 'opcion101',
    },
    opcion101: {
        boton1Texto: ' FINAL 5 de 22: Expulsado y drogado. Terminas solo en la entrada de la discoteca, con el corazón acelerado y la mandíbula tensa, sabiendo que has perdido tu oportunidad con García. La noche acaba para ti de la peor forma posible',
    },
    opcion102: {
        boton1Texto: '💭¿Qué debería hacer con esta pastilla?',
        boton2Texto: 'Lo siento amigo, pero no cumples los requisitos para esta',
        consecuencia1: 'opcion103',
        consecuencia2: 'opcion93',
        bot2: true,
        bot3: false,
        bot4: false,
        bot5: false,
    },
    opcion103: {
        boton1Texto: '>> (Guardar la pastilla)',
        boton2Texto: '>> (Consumir la pastilla)',
        bot2: true,
        consecuencia1: 'opcion186',
        consecuencia2: 'opcion105',
    },
    opcion104: {
        boton1Texto: '* Objeto añadido al inventario *',
        consecuencia1: 'opcion187',
        mostrar5: true,
    },
    opcion105: {
        boton1Texto: '(Decides tomar lo que te ofreció el primo de Kevin. Los efectos son rápidos: sientes un calor suave expandiéndose por tu cuerpo, una ola de felicidad incontrolable y una sensación de conexión profunda con todo lo que te rodea)',
        consecuencia1: 'opcion106',
    },
    opcion106: {
        boton1Texto: '(Te diriges al reservado, sintiéndote imparable. Cuando llegas, García te recibe con una sonrisa)',
        consecuencia1: 'opcion107',
    },
    opcion107: {
        boton1Texto: '¡Ey! ¡Estás a tope! Se te ve increíblemente feliz, ¿qué te has tomado?',
        consecuencia1: 'opcion108',
    },
    opcion108: {
        boton1Texto: '(Te ríes, con una sensación de euforia imparable. La conversación con García fluye con facilidad, a medida que el efecto se intensifica, te acuerdas de algo… ¡El lunes tienes examen!)',
        consecuencia1: 'opcion109',
    },
    opcion109: {
        boton1Texto: 'FINAL 6 de 22: Noche interrumpida por la realidad. La adrenalina te acompaña mientras llegas a casa, pero cuando te sientas a estudiar, el efecto de la droga te impide concentrarte. Pasas la noche sin aprender nada, y el lunes te presentas al examen agotado y sin respuestas',
    },
    opcion110: {
        boton1Texto: '(Tras tomar la píldora empiezas a notar que tus sentidos se distorsionan, tu vista empieza a nublarse y el ruido de la fiesta se escucha cada vez más lejano)',
        bot2: false,
        bot3: false,
        bot4: false,
        bot5: false,
        consecuencia1: 'opcion111',
    },
    opcion111: {
        boton1Texto: 'FINAL 7 de 22: Cuando despiertas estás perdido en un mundo que no es el tuyo. ¿Cómo regresarás a casa? ',
    },
    opcion112: {
        boton1Texto: '(No tienes el dinero para entrar ¿Habrá alguna forma de colarte?)',
        boton2Texto: '(Te acercas tranquilamente al portero que hay situado en el reservado. Tienes dinero suficiente como para entrar en la zona VIP)',
        consecuencia1: 'opcion113',
        consecuencia2: 'opcion183',

    },
    opcion113: {
        boton1Texto: '(Al caminar, ves en mitad de la pista de baile una tarjeta dorada, ¿deberías quedártela?)',
        boton2Texto: '>> (Al caminar, ves en mitad de la pista de baile una tarjeta dorada, ¿deberías quedártela?)',
        boton3Texto: '>> (Empiezan a llegarte ideas de cómo poder colarte, cuando de pronto recuerdas que aún tienes a la gallina)',
        consecuencia1: 'opcion188',
        consecuencia2: 'opcion188',
        consecuencia3: 'opcion114',
    },
    opcion114: {
        boton1Texto: ' (Le das la pastilla de MDMA a la gallina)',
        consecuencia1: 'opcion115',
    },
    opcion115: {
        boton1Texto: '* Objetos MDMA y Gallina han sido usados *',
        consecuencia1: 'opcion116',
        mostrar2: false,
        mostrar5: false,
    },
    opcion116: {
        boton1Texto: '(La pobre gallina empieza a actuar de forma errática, en cuestión de minutos, causa un caos absoluto en la discoteca, derribando mesas, atacando a la gente y huyendo de los porteros)',
        consecuencia1: 'opcion117',
    },
    opcion117: {
        boton1Texto: '>> (Calmar a la gallina)',
        boton2Texto: '>> (Colarte en el reservado)',
        bot2: true,
        consecuencia1: 'opcion118',
        consecuencia2: 'opcion119',
    },
    opcion118: {
        boton1Texto: ' FINAL 8 de 21: Persigues a la gallina intentado tener una conversación. El ave comienza a atacarte y los porteros te acaban echando.  Es una gallina ¿Qué esperabas conseguir?',
    },
    opcion119: {
        boton1Texto: ' (Te mueves rápido entre la multitud, aprovechando el alboroto para colarte en el reservado donde está García. Justo cuando te sientas a su lado...) ',
        consecuencia1: 'opcion120',
    },
    opcion120: {
        boton1Texto: '[García] ¡Vaya entrada, menuda forma de llamar la atención! ¿Te encuentras bien?',
        consecuencia1: 'opcion121',
    },
    opcion121: {
        boton1Texto: '>> (Ser honesto y contarle todo lo que ha pasado)',
        boton2Texto: '>> (Fingir que todo estaba planeado)',
        bot2: true,
        consecuencia1: 'opcion122',
        consecuencia2: 'opcion141',
    },
    opcion122: {
        boton1Texto: '(Decides ser sincero. Entre risas nerviosas, le cuentas a García todo el caos que has provocado accidentalmente con la gallina y la MDMA)',
        consecuencia1: 'opcion123',
        bot2: false,
    },
    opcion123: {
        boton1Texto: '[García] ¡No puedo creerlo! ¿Le diste MDMA a una gallina? ¿Estás mal de la cabeza? Jajaja',
        consecuencia1: 'opcion124',
    },
    opcion124: {
        boton1Texto: '>> Sí, supongo que fue una locura... Pero bueno, no todos los días se ve esto',
        boton2Texto: '>> (Decides cambiar de conversación)',
        bot2: true,
        consecuencia1: 'opcion125',
        consecuencia2: 'opcion130',
    },
    opcion125: {
        boton1Texto: '(Aprovechas la buena vibra, te lanzas y le pides que baile contigo. García acepta con una sonrisa traviesa)',
        consecuencia1: 'opcion126',
        boton2Texto: '(Aprovechas la buena vibra, te lanzas y le pides que baile contigo. García acepta con una sonrisa traviesa)',
        consecuencia2: 'opcion127',
    },
    opcion126: {
        boton1Texto: 'FINAL 9 de 21: La noche perfecta. Ambos disfrutáis del momento, y la química entre vosotros es innegable. La música fluye, las luces parecen brillar a vuestro favor, y antes de darte cuenta, García se acerca, te susurra algo al oído, y la noche termina con un apasionado beso bajo las luces de la discoteca',
    },
    opcion127: {
        boton1Texto: '(Sin embargo, con la adrenalina y las copas de más, tus pies no coordinan bien. Mientras intentas una vuelta elegante, tropiezas y caes al suelo... justo en un charco pegajoso de lo que parece ser alguna bebida derramada. Todos se ríen, aunque de forma amistosa.)',
        consecuencia1: 'opcion128',
    },
    opcion128: {
        boton1Texto: '[García] ¡Vaya, menuda caída! No pasa nada, todos tenemos noches así',
        consecuencia1: 'opcion129',
    },
    opcion129: {
        boton1Texto: ' FINAL 10 de 21: Amistad, pero sin chispa. A pesar del momento embarazoso, la situación se calma. García te ayuda a levantarte, pero la química ya no es la misma, y la noche termina con un amistoso "hasta luego" y una palmada en la espalda',
    },
    opcion130: {
        boton1Texto: '(Decides aprovechar la oportunidad para conocer mejor a García. Le preguntas sobre su vida, sus intereses, y os sentáis en el sofá a charlar mientras la música suena de fondo. Las risas van y vienen, y todo parece ir bien... hasta que unos tipos de una mesa cercana comienzan a mirarte de manera extraña.)',
        consecuencia1: 'opcion131',
    },
    opcion131: {
        boton1Texto: '[Portero agresivo 1] Tú eres el de la gallina, lárgate ahora mismo',
        consecuencia1: 'opcion132',
    },
    opcion132: {
        boton1Texto: '(Ignorarlos)',
        consecuencia1: 'opcion133',
    },
    opcion133: {
        boton1Texto: '(Decides ignorar a los tipos y centrarte en García. Sin embargo, la tensión en la mesa aumenta, y uno de los tipos se pone en pie.)',
        consecuencia1: 'opcion134',
    },
    opcion134: {
        boton1Texto: '[Portero agresivo 2] Te estamos hablando, colega. No me gusta que me ignoren',
        consecuencia1: 'opcion135',
    },
    opcion135:{
        boton1Texto: '(De repente, la situación escala rápidamente, y uno de ellos te empuja. García se levanta, intentando calmar la situación.)',
        consecuencia1: 'opcion136',
    },
    opcion136:{
        boton1Texto: '[García] ¡Ey, calma! No es para tanto.',
        consecuencia1: 'opcion137',
    },
    opcion137:{
        boton1Texto: '>> (Contestarles)',
        boton2Texto: '>> (Defenderme)',
        boton3Texto: '>> (Alejarme con García para evitar problemas)',
        bot3: true,
        consecuencia1: 'opcion138',
        consecuencia2: 'opcion139',
        consecuencia3: 'opcion140',
    },
    opcion138:{
        boton1Texto: 'FINAL 12 de 22: Golpeado y humillado. No puedes evitar sentirte provocado, así que te levantas y le lanzas una respuesta sarcástica al tipo. En cuestión de segundos, los dos estáis envueltos en una pelea física. A pesar de tus esfuerzos, te noquean con un solo puñetazo y despiertas en el suelo de la discoteca mientras te arrastran fuera',
    },
    opcion139:{
        boton1Texto: 'FINAL 11 de 22: A espera de juicio. Despiertas en el calabozo con un gran dolor en todo el cuerpo. Lo último que recuerdas es la paliza que te dieron y que apuñalaste a un portero con un botellín roto. Ahora tienes cargos en tu contra y varias costillas rotas. ',
    },
    opcion140:{
        boton1Texto: ' FINAL 13 de 22: Conexión romántica.(Tomas a García de la mano y os alejáis de la mesa, encontrando un rincón más tranquilo en la discoteca. El resto de la noche transcurre sin problemas, y terminas acompañando a García a su casa. La noche finaliza con un beso en la puerta y una promesa de veros pronto',
    },
    opcion141:{
        boton1Texto: '(Decides fingir que todo el caos fue parte de un plan maestro para colarte en el resevado)',
        consecuencia1: 'opcion142',
    },
    opcion142:{
        boton1Texto: '[García] ¿Me estás diciendo que organizaste todo esto? ¡Qué ridículo!',
        consecuencia1: 'opcion143',
    },
    opcion143:{
        boton1Texto: ' FINAL 14 de 22: Sigues insistiendo en que todo estaba planeado. Sin embargo, cuanto más hablas, más absurda se vuelve la historia, y García finalmente te ve como un fantasma, se ríe, pero no de forma amable, y te da una palmada en la espalda antes de alejarse con sus amigos',
    },
    opcion144:{
        boton1Texto: '* Objeto añadido al inventario *',
        consecuencia1: 'opcion145',
        mostrar6: true,
    },
    opcion145:{
        boton1Texto: '(Te acercas al reservado y ves cómo están apostados dos porteros en la entrada, no parece que vaya a ser tarea fácil entrar.)',
        consecuencia1: 'opcion146',
    },
    opcion146:{
        boton1Texto: '>> (Intentar usar la tarjeta dorada) ',
        boton2Texto: '>>  (Pretender ser un trabajador)',
        bot2: true,
        consecuencia1: 'opcion147',
        consecuencia2: 'opcion175'
    },
    opcion147:{
        boton1Texto: '[Portero 2] Hmmmmmmm',
        consecuencia1: 'opcion148',
    },
    opcion148:{
        boton1Texto: '(El portero tras su gran demostración del dominio del lenguaje te hace una seña para pasar)',
        consecuencia1: 'opcion149',
    },
    opcion149:{
        boton1Texto: '(Por fin logras llegar hasta garcía)',
        consecuencia1: 'opcion150',
    },
    opcion150:{
        boton1Texto: '(Llevas más tiempo del que creías en la conversación con García. Te mira con una sonrisa, y parece que todo va bien. Ambos habéis compartido algunas risas y momentos agradables.)',
        consecuencia1: 'opcion151',
    },
    opcion151:{
        boton1Texto: '[García] Bueno, no esperaba encontrar a alguien con quien conectar esta noche...',
        consecuencia1: 'opcion152',
    },
    opcion152:{
        boton1Texto: '(Sientes que la conversación ha llegado a un punto crucial y sabes que la siguiente decisión podría cambiar el rumbo de la noche.)',
        consecuencia1: 'opcion153',
    },
    opcion153:{
        boton1Texto: '>>  ¿Qué te parece si nos alejamos un poco de todo este ruido? Me gustaría seguir hablando, pero en un sitio más tranquilo.',
        boton2Texto: '>> La música está genial esta noche. ¿Qué te parece si volvemos a la pista y te enseño mis pasos de baile?',
        bot2: true,
        consecuencia1: 'opcion154',
        consecuencia2: 'opcion168',
    },
    opcion154:{
        boton1Texto: '[García] Suena bien. A veces la música puede ser demasiado. Vamos.',
        bot2: false,
        consecuencia1: 'opcion155',
    },
    opcion155:{
        boton1Texto: '(Ambos salís y camináis por las calles iluminadas de la ciudad. A mitad del paseo, García te pregunta algo personal.) ',
        consecuencia1: 'opcion156',
    },
    opcion156:{
        boton1Texto: '[García] ¿Qué te trae a estos lugares? Siempre hay una historia detrás',
        consecuencia1: 'opcion157',
    },
    opcion157:{
        boton1Texto: '>> La verdad, solo quería pasar un buen rato. Necesitaba salir de la rutina',
        boton2Texto: '>> (Decir que venías buscando algo más profundo)',
        bot2: true,
        consecuencia1: 'opcion158',
        consecuencia2: 'opcion167'
    },
    opcion158:{
        boton1Texto: '[García sonriente] Eso está bien. A veces es bueno dejarse llevar por la diversión. Supongo que yo también vine por lo mismo',
        consecuencia1: 'opcion159',
    },
    opcion159:{
        boton1Texto: '(La conversación sigue siendo ligera, sin profundizar demasiado.)',
        consecuencia1: 'opcion160',
    },
    opcion160:{
        boton1Texto: '[García] Bueno, al menos no estás solo esta noche, ¿verdad?',
        consecuencia1: 'opcion161',
    },
    opcion161:{
        boton1Texto: '>> (Decirle que estás feliz de estar con él/ella)',
        boton2Texto: '>> (Mantener la conversación más neutral y seguir charlando sobre otros temas)',
        bot2: true,
        consecuencia1: 'opcion162',
        consecuencia2: 'opcion166'
    },
    opcion162:{
        boton1Texto: 'No solo vine por diversión. Estaba buscando algo más... A ti en realidad, porque desde el primer...',
        consecuencia1: 'opcion163',
    },
    opcion163:{
        boton1Texto: '(No puedes acabar porque García te interrumpe en mitad de la frase)',
        consecuencia1: 'opcion164',
    },
    opcion164:{
        boton1Texto: '[García] Eso es... interesante. Yo realmente quería hablar contigo para preguntarte sobre tu amigo, con el que has venido...',
        consecuencia1: 'opcion165',
    },
    opcion165:{
        boton1Texto: 'FINAL 16 de 22: De aquí no se llega a ningún lado. La noche termina con una charla sobre Kevin, para finalmente despedirte de tu primer amor no correspondido. Faltan pañuelitos en el mudno para los que necesitarás.',
    },
    opcion166:{
        boton1Texto: 'FINAL 17 de 21: La charla se desvía hacia temas más banales y cuando llegáis al final del paseo, García te da las gracias por la compañía.  Que noche más cutre ¿no? ',
    },
    opcion167:{
        boton1Texto: 'FINAL 18 de 22: Déjate de rollos. García te mira con la cara con la que mirarías a una persona lunática, intentaste llevar la conversación por un tema demasiado raro sobre las conexiones y el destino. Cuando te das cuenta, llevabas un rato hablando solo',
    },
    opcion168:{
        boton1Texto: '[García sonriente] ¡Me parece perfecto!',
        consecuencia1: 'opcion169',
    },
    opcion169:{
        boton1Texto: '(Las luces, la música y la energía de la discoteca os envuelven mientras ambos bailáis juntos. Tras un rato, García te pregunta algo con curiosidad)',
        consecuencia1: 'opcion170',
    },
    opcion170:{
        boton1Texto: '[García] ¿Siempre has sido bueno bailando, o es algo que acabas de improvisar?',
        consecuencia1: 'opcion171',
    },
    opcion171:{
        boton1Texto: '>> (Bromear sobre lo malo que eres)',
        boton2Texto: '>> Me encanta bailar, es como un don',
        bot2: true,
        consecuencia1: 'opcion172',
        consecuencia2: 'opcion174'
    },
    opcion172:{
        boton1Texto: '¿Bailar bien? Apenas sé lo que estoy haciendo. Estoy improvisando todo esto, jajaja',
        consecuencia1: 'opcion173',
    },
    opcion173:{
        boton1Texto: ' FINAL 19 de 22 : No te crees ni tú lo que ha pasado. Terminas besando a la persona que te gusta bajo las luces de la discoteca, sellando una noche inolvidable',
    },
    opcion174:{
        boton1Texto: ' FINAL 20 de 22 : Desde luego que no se olvida de ti. Le comentas a García que te encanta bailar y que, de hecho, has tomado clases hace tiempo. Sin embargo, el haber bebido tanto hace que te caigas encima de tu pareja de baile. La noche termina en el hospital acompañando a García por su brazo roto',
        boton2Texto: ' FINAL 21 de 22: Ridículo en la pista. Tú mismo te motivas con tu propia frase, empiezas a bailar sintiendo que estás dando tus mejores pasos, no podrías estar más equivocado',
    },
    opcion175: {
        boton1Texto: ' "Eh, chicos, soy el nuevo. Me han mandado a revisar algo, tengo que entrar rápido',
        consecuencia1: 'opcion176',
    },
    opcion176: {
        boton1Texto: '[Portero 2] ¿Nuevo? No me han mencionado nada...',
        consecuencia1: 'opcion177',
    },
    opcion177: {
        boton1Texto: '>> (Insistir con una historia convincente)',
        boton2Texto: '>> (Hacer una broma para romper la tensión)',
        bot2: true,
        consecuencia1: 'opcion178',
        consecuencia2: 'opcion181',
    },
    opcion178: {
        boton1Texto: 'Sí, soy el nuevo. Trabajo de noche y cubro algunos turnos. Me dijeron que había un problema con las luces. Si no me crees, puedes preguntarle al jefe',
        consecuencia1: 'opcion179',
    },
    opcion179: {
        boton1Texto: '[Portero 2] Hmmm... vale, pasa rápido. Pero si te veo causando problemas, será tu última noche',
        consecuencia1: 'opcion180',
    },
    opcion180: {
        boton1Texto: '(Parece que el cuento ha funcionado)',
        consecuencia1: 'opcion149',
    },
    opcion181: {
        boton1Texto: 'Si te dejo ganar a piedra, papel o tijera tres veces seguidas, me dejas pasar. Lo digo para que sea justo...',
        consecuencia1: 'opcion182',
    },
    opcion182: {
        boton1Texto: 'FINAL 15 de 22: Por gracioso. Al portero no le hizo gracia tu comentarios y menos sobre su intelecto, a pesar de haber sido acertados, te vetan del local y pasas la noche en un kebab solo',
    },
    opcion183: {
        boton1Texto: '💭 Gracias, Robinho',
        consecuencia1: 'opcion184',
        cant: -50,
    },
    opcion184: {
        boton1Texto: '-50 ucoins',
        consecuencia1: 'opcion185',
    },
    opcion185: {
        boton1Texto: '(Te acercas directamente a García)',
        consecuencia1: 'opcion150',
    },
    opcion186: {
        boton1Texto: '(Realmente no sabes qué hacer con ella, así que la guardas de momento)',
        consecuencia1: 'opcion104',
    },
    opcion187: {
        boton1Texto: '(Te diriges al reservado)',
        consecuencia1: 'opcion112',
    },
    opcion188: {
        boton1Texto: '>> Coger la tarjeta, vida solo hay una y ansías llegar hasta García',
        boton2Texto: '>> Solo pensar en quedártela te llena de remordimientos, así que decides preguntarle a la persona que se encontraba más cerca',
        consecuencia1: 'opcion144',
        consecuencia2: 'opcion189',
    },
    opcion189: {
        boton1Texto: '(Justo en el momento en que se da la vuelta, ¡reconoces al profesor del examen del lunes que viene!)',
        consecuencia1: 'opcion190',
    },
    opcion190: {
        boton1Texto: '[Profesor] ¡Oh vaya! ¿En qué momento se me habrá caído?',
        consecuencia1: 'opcion191',
    },
    opcion191: {
        boton1Texto: '* Objeto Tarjeta ha sido usado *',
        consecuencia1: 'opcion192',
    },
    opcion192: {
        boton1Texto: '[Profesor] Me has salvado, así que no te preocupes demasiado por el lunes...',
        consecuencia1: 'opcion193',
    },
    opcion193: {
        boton1Texto: 'FINAL 3 de 22: Chantaje inesperado. Sin quererlo ni beberlo, acabas de asegurarte el aprobado del examen que ni sabías que tenías. Termina siendo una noche fructífera, pero sigues sin estar en la mira de Cupido',
    },
    opcion200: {
        imagen: '/Final hospital.jpg',
        boton1Texto: 'FINAL 22 de 22: Te encuentras en el hospital en coma, debido al exceso de alcohol en sangre. (No lo intentéis en casa)',
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
    let boton3 = document.getElementById('boton3');
    let boton4 = document.getElementById('boton4');
    let boton5 = document.getElementById('boton5');

    // Si hay dinero que modificar, llama a la función dinero()
    if (historia.cant) {
        dinero(historia.cant);
    }

    // Determina la nueva opción basada en el botón que se ha presionado
    if (boton.dataset.boton === 'boton1') {
        opcionActual = historia.consecuencia1;
    } else if (boton.dataset.boton === 'boton2') {
        opcionActual = historia.consecuencia2;
    } else if (boton.dataset.boton === 'boton3') {
        opcionActual = historia.consecuencia3;
    } else if (boton.dataset.boton === 'boton4') {
        opcionActual = historia.consecuencia4;
    } else if (boton.dataset.boton === 'boton5') {
        opcionActual = historia.consecuencia5;
    }

    //Decisión de imágenes en función del sexo de García
    if (opcionActual === 'opcion64'){
        opciones.opcion64.imagen='/';
        opciones.opcion66.imagen='/';
    }
    if (opcionActual === 'opcion65'){
        opciones.opcion65.imagen='/';
        opciones.opcion66.imagen='/';
    }

    //Barra de progreso de ebriedad
    if (historia.cubata) {
        contador += 25;  // Incrementa el contador en 25
        actualizarBarraEbriedad(); // Actualiza la barra de progreso
    }
    if (historia.chupito) {
        contador += 16;  // Incrementa el contador en 16
        actualizarBarraEbriedad(); // Actualiza la barra de progreso
    }
    if(historia.cerveza){
        contador += 12; //Incrementa el contador en 12 
        actualizarBarraEbriedad(); // Actualiza la barra de progreso
    }
    if (historia.redbuff) {
        contador += 5;  // Incrementa el contador en 5
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
    boton3.innerHTML = historia.boton3Texto;
    boton4.innerHTML = historia.boton4Texto;
    boton5.innerHTML = historia.boton5Texto;


    // Ajusta la visibilidad del quinto botón según la nueva opción
    boton5.style.display = historia.bot5 ? 'block' : 'none';

    // Ajusta la visibilidad del cuarto botón según la nueva opción
    boton4.style.display = historia.bot4 ? 'block' : 'none'; 

    // Ajusta la visibilidad del tercer botón según la nueva opción
    boton3.style.display = historia.bot3 ? 'block' : 'none'; 

    // Ajusta la visibilidad del segundo botón según la nueva opción
    boton2.style.display = historia.bot2 ? 'block' : 'none';

    //Oculata el botón 1 al llegar alguno de los 22 finales
    boton1.style.display = !historia.ocultar ? 'block' : 'none';

    //Las decisiones de opcion65 dependen del dinero
    if (opcionActual === 'opcion65' || opcionActual === 'opcion66') {
        // Acceder al objeto correcto dentro de 'opciones'
        let opcion = opciones[opcionActual];
        let actual = document.getElementById('cantidad');
        // Obtén el valor numérico actual
        let cantidadActual = Number(actual.textContent);
        if (cantidadActual<50) {
            // Mostrar solo bot1
            opcion.bot2 = false;  // Deshabilitar bot2
            opcion.ocultar = false; // Habilitar bot1
        } else {
        // Mostrar solo bot2
            opcion.bot2 = true; // Habilitar bot2
            opcion.ocultar = true; // Deshabilitar bot1 
        }
        // Actualizar la interfaz de usuario según el estado de los botones 
        document.getElementById('boton2').style.display = opcion.bot2 ? 'block' : 'none'; 
        document.getElementById('boton1').style.display = !opcion.ocultar ? 'block' : 'none';
    } 

    //Las decisiones de opcion102 dependen del item2 (pollo)
    if (opcionActual === 'opcion102') {
        // Acceder al objeto correcto dentro de 'opciones'
        let opcion = opciones[opcionActual];
        // Verificar que el objeto de la opción existe
        if (opcion) {
            if (mostrar2) {
                // Cuando mostrar2 es true, ocultar bot2, y mostrar bot1
                opcion.bot2 = false;  // Deshabilitar bot2
                opcion.ocultar = false; // Habilitar bot1
            } else {
                // Cuando mostrar2 es false, mostrar solo bot2
                opcion.bot2 = true; // Habilitar bot2
                opcion.ocultar = true; // Ocultar bot1
            }
            // Actualizar la interfaz de usuario según el estado de los botones 
            document.getElementById('boton2').style.display = opcion.bot2 ? 'block' : 'none'; 
            document.getElementById('boton1').style.display = !opcion.ocultar ? 'block' : 'none';
        } 
    }

    //Las decisiones de opcion112 dependen del dinero
    if (opcionActual === 'opcion112') {
        // Acceder al objeto correcto dentro de 'opciones'
        let opcion = opciones[opcionActual];
        let actual = document.getElementById('cantidad');
        // Obtén el valor numérico actual
        let cantidadActual = Number(actual.textContent);
        if (cantidadActual<50) {
            // Mostrar solo bot1
            opcion.bot2 = false;  // Deshabilitar bot2
            opcion.ocultar = false; // Habilitar bot1
        } else {
        // Mostrar solo bot2
            opcion.bot2 = true; // Habilitar bot2
            opcion.ocultar = true; // Deshabilitar bot1 
        }
        // Actualizar la interfaz de usuario según el estado de los botones 
        document.getElementById('boton2').style.display = opcion.bot2 ? 'block' : 'none'; 
        document.getElementById('boton1').style.display = !opcion.ocultar ? 'block' : 'none';
    } 

    //Las decisiones de opcion113 dependen del item2 (pollo)
    if (opcionActual === 'opcion113') {
        // Acceder al objeto correcto dentro de 'opciones'
        let opcion = opciones[opcionActual];
        // Verificar que el objeto de la opción existe
        if (opcion) {
            if (mostrar2) {
                // Cuando mostrar2 es true, ocultar bot1
                opcion.bot2 = true;  // Habilitar bot2
                opcion.ocultar = true; // Deshabilitar bot1
                if (mostrar5){
                    opcion.bot3 = true;  // Habilitar bot3
                }
            } else {
                // Cuando mostrar2 es false, mostrar solo bot1
                opcion.bot2 = false; // Deshabilitar bot2
                opcion.bot3 = false; // Deshabilitar bot3
                opcion.ocultar = false; // Habilitar bot1 
            }
            // Actualizar la interfaz de usuario según el estado de los botones 
            document.getElementById('boton3').style.display = opcion.bot3 ? 'block' : 'none'; 
            document.getElementById('boton2').style.display = opcion.bot2 ? 'block' : 'none'; 
            document.getElementById('boton1').style.display = !opcion.ocultar ? 'block' : 'none';
        } 
    }

    //Las decisiones de opcion137 dependen del item3 (botellín)
    if (opcionActual === 'opcion137') {
        // Acceder al objeto correcto dentro de 'opciones'
        let opcion = opciones[opcionActual];
        // Verificar que el objeto de la opción existe
        if (botellín) {
            // Mostrar bot2
            opcion.bot2 = true;  // Habilitar bot2
        } else {
            // Ocultar bot2
            opcion.bot2 = false; // Deshabilitar bot2
        }
        // Actualizar la interfaz de usuario según el estado de los botones 
        document.getElementById('boton2').style.display = opcion.bot2 ? 'block' : 'none'; 
    }

    //Las decisiones de opcion174 dependen del item2 (pollo)
    if (opcionActual === 'opcion174') {
        // Acceder al objeto correcto dentro de 'opciones'
        let opcion = opciones[opcionActual];
        // Verificar que el objeto de la opción existe
        if (contador>80) {
            // Mostrar bot1
            opcion.bot2 = false;  // Deshabilitar bot2
            opcion.ocultar = false; // Habilitar bot1
        } else {
            // Mostrar bot2
            opcion.bot2 = true; // Habilitar bot2
            opcion.ocultar = true; // Deshabilitar bot1 
        }
        // Actualizar la interfaz de usuario según el estado de los botones 
        document.getElementById('boton3').style.display = opcion.bot3 ? 'block' : 'none'; 
        document.getElementById('boton2').style.display = opcion.bot2 ? 'block' : 'none'; 
        document.getElementById('boton1').style.display = !opcion.ocultar ? 'block' : 'none';
    }

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

    //OBJETO 3
    // Actualiza el valor de mostrar3 según la opción actual 
    if (historia.mostrar3 !== undefined) { 
        mostrar3 = historia.mostrar3; 
    }
    //Oculta o muestra en función del valor de mostrar3
    let botellín = document.getElementById('botellín'); 
    botellín.style.display = mostrar3 ? 'block' : 'none';

    //OBJETO 4
    // Actualiza el valor de mostrar4 según la opción actual 
    if (historia.mostrar4 !== undefined) { 
        mostrar4 = historia.mostrar4; 
    }
    //Oculta o muestra en función del valor de mostrar4
    let consumición = document.getElementById('consumición'); 
    consumición.style.display = mostrar4 ? 'block' : 'none';

    //OBJETO 5
    // Actualiza el valor de mostrar5 según la opción actual 
    if (historia.mostrar5 !== undefined) { 
        mostrar5 = historia.mostrar5; 
    }
    //Oculta o muestra en función del valor de mostrar5
    let mdma = document.getElementById('mdma'); 
    mdma.style.display = mostrar5 ? 'block' : 'none';

    //OBJETO 6
    // Actualiza el valor de mostrar6 según la opción actual 
    if (historia.mostrar6 !== undefined) { 
        mostrar6 = historia.mostrar6; 
    }
    //Oculta o muestra en función del valor de mostrar6
    let tarjeta = document.getElementById('tarjeta'); 
    tarjeta.style.display = mostrar6 ? 'block' : 'none';

    

    //Cambiar los denominadores de PASOS en función de qué final ha elegido el usuario con sus decisioness
    if (opcionActual === 'opcion54'){                          //Final 1 de 22
        let fin1= document.getElementById("denominador");
        if(contador === 30){
            fin1.textContent = 37;                             //Es uno  más ya que si el contador es 30 anteriormente hubo una interfaz extra (debido al redbuff)
        } else{
            fin1.textContent = 36;
        }
    }
    if (opcionActual === 'opcion42'){
        let fin2 = document.getElementById("denominador");      //Final 2 de 22
        fin2.textContent = 33;
    }
    if (opcionActual === 'opcion189'){
        let fin3 = document.getElementById("denominador");      //Final 3 de 22
        let num = document.getElementById("numerador");
        fin3.textContent = Number(num.textContent) + 4;
    }
    if (opcionActual === 'opcion94'){
        let fin4 = document.getElementById("denominador");      //Final 4 de 22
        let num = document.getElementById("numerador");
        fin4.textContent = Number(num.textContent) + 1;
    }
    if (opcionActual === 'opcion96'){
        let fin5 = document.getElementById("denominador");      //Final 5 de 22
        let num = document.getElementById("numerador");
        fin5.textContent = Number(num.textContent) + 5;
    }
    if (opcionActual === 'opcion105'){
        let fin6 = document.getElementById("denominador");      //Final 6 de 22
        let num = document.getElementById("numerador");
        fin6.textContent = Number(num.textContent) + 4;
    }
    if (opcionActual === 'opcion110'){
        let fin7 = document.getElementById("denominador");      //Final 7 de 22
        let num = document.getElementById("numerador");
        fin7.textContent = Number(num.textContent) + 1;
    }
    if (opcionActual === 'opcion116'){
        let fin8 = document.getElementById("denominador");      //Final 8 de 22
        let num = document.getElementById("numerador");
        fin8.textContent = Number(num.textContent);
    }
    if (opcionActual === 'opcion126'){
        let fin9 = document.getElementById("denominador");      //Final 9 de 22
        let num = document.getElementById("numerador");
        fin9.textContent = Number(num.textContent);
    }
    if (opcionActual === 'opcion127'){
        let fin10 = document.getElementById("denominador");      //Final 10 de 22
        let num = document.getElementById("numerador");
        fin10.textContent = Number(num.textContent) + 3;
    }
    if (opcionActual === 'opcion139'){
        let fin11 = document.getElementById("denominador");      //Final 11 de 22
        let num = document.getElementById("numerador");
        fin11.textContent = Number(num.textContent);
    }
    if (opcionActual === 'opcion138'){
        let fin12 = document.getElementById("denominador");      //Final 12 de 22
        let num = document.getElementById("numerador");
        fin12.textContent = Number(num.textContent);
    }
    if (opcionActual === 'opcion140'){
        let fin13 = document.getElementById("denominador");      //Final 13 de 22
        let num = document.getElementById("numerador");
        fin13.textContent = Number(num.textContent);
    }
    if (opcionActual === 'opcion141'){
        let fin14 = document.getElementById("denominador");      //Final 14 de 22
        let num = document.getElementById("numerador");
        fin14.textContent = Number(num.textContent) + 2;
    }
    if (opcionActual === 'opcion181'){
        let fin15 = document.getElementById("denominador");      //Final 15 de 22
        let num = document.getElementById("numerador");
        fin15.textContent = Number(num.textContent) + 1;
    }
    if (opcionActual === 'opcion162'){
        let fin16 = document.getElementById("denominador");      //Final 16 de 22
        let num = document.getElementById("numerador");
        fin16.textContent = Number(num.textContent) + 3;
    }
    if (opcionActual === 'opcion166'){
        let fin17 = document.getElementById("denominador");      //Final 17 de 22
        let num = document.getElementById("numerador");
        fin17.textContent = Number(num.textContent);
    }
    if (opcionActual === 'opcion167'){
        let fin18 = document.getElementById("denominador");      //Final 18 de 22
        let num = document.getElementById("numerador");
        fin18.textContent = Number(num.textContent);
    }
    if (opcionActual === 'opcion172'){
        let fin19 = document.getElementById("denominador");      //Final 19 de 22
        let num = document.getElementById("numerador");
        fin19.textContent = Number(num.textContent) + 1;
    }
    if (opcionActual === 'opcion174'){
        let fin20 = document.getElementById("denominador");      //Final 20 y 21 de 22
        let num = document.getElementById("numerador");
        fin20.textContent = Number(num.textContent);
    }
    if (opcionActual === 'opcion200'){                          //El único final que puede ocurrir en cualquier momento
        let fin200 = document.getElementById("denominador");
        fin200.textContent = num.textContent;
        let num = document.getElementById("numerador");
        contador=100;
        actualizarBarraEbriedad(); // Actualiza la barra de progreso
    }

    //Desencadenar final 1 si así se ha elegido
    if (opcionActual === 'opcion55'){
        contador=1000;
        actualizarBarraEbriedad(); // Actualiza la barra de progreso
    }
    //Mostrar evento oculto si se ha elegido mezclar redbuff con cubata
    if (contador === 30){
        opciones.opcion41.bot2 = true;
    }

    // Obtén el elemento HTML
    let actual = document.getElementById('cantidad');
    // Obtén el valor numérico actual
    let cantidadActual = Number(actual.textContent);
    opciones.opcion72.bot3 = cantidadActual >= 6; // Cubata solo aparece si contador >= 6
    opciones.opcion72.bot4 = true;          // Siempre se puede elegir "Paso"
    opciones.opcion72.ocultar = cantidadActual < 3; // Cerveza solo aparece si contador >= 3
    opciones.opcion72.bot2 = cantidadActual >= 2; // Chupito solo aparece si contador >= 2
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
    let porcentaje = contador;

    const barraProgreso = document.getElementById("progresoEbriedad");
    const textoPorcentaje = document.getElementById("porcentajeEbriedad");
    const estado = document.getElementById("estado");
    
    barraProgreso.style.width = porcentaje + "%";
    textoPorcentaje.textContent = `${porcentaje}%`;

    if (porcentaje===1000){
        barraProgreso.style.backgroundImage = "linear-gradient(45deg, #a6c8ff 25%, #82cfff 50%, #b3d9ff 75%, #b9e4f5 100%)";
    } else if(porcentaje<=25) {
        barraProgreso.style.backgroundColor = "#4CAF50"; // Verde
    } else if (porcentaje<=50) {
        barraProgreso.style.backgroundColor = "#FFA500"; // Naranja
    }else if (porcentaje<=75) {
        barraProgreso.style.backgroundColor = "#FF4500"; // Rojo-naranja
    } else if(porcentaje<=99){
        barraProgreso.style.backgroundColor = "#FF0000"; // Rojo
    }else{
        barraProgreso.style.backgroundColor = "#FF006F"; // Rosa
    }

    // Cambiar el estado según el porcentaje
    if (porcentaje===1000) {
        estado.textContent = "Estado: intoxicado";
    } else if(porcentaje>0 && porcentaje <= 25) {
        estado.textContent = "Estado: chill";
    } else if (porcentaje>25 && porcentaje <= 50) {
        estado.textContent = "Estado: illo esto sube";
    } else if (porcentaje>50 && porcentaje <= 75) {
        estado.textContent = "Estado: puedo volar?";
    } else if (porcentaje>75 && porcentaje<100) {
        estado.textContent = "Estado: trifásico";
    }else if (porcentaje<=100 ){
        estado.textContent = "Estado: coma etílico"
    } else {
        estado.textContent = "Estado: sobrio"; // Cuando el porcentaje es 0
    }

    // Ajustar el color del texto para que sea visible
    textoPorcentaje.style.color = porcentaje > 50 ? "white" : "black";
    if (porcentaje === 1000){
        textoPorcentaje.style.color = "black";
    }
    

    if (porcentaje >= 100) {
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

function incrementarNumerador() {               //Función para incrementar el numerador de Pasos
    const num = document.getElementById("numerador");

    // Incrementa el numerador
    num.textContent = Number(num.textContent) + 1; // Suma 1 directamente al valor existente
}

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('musica');
    const volumeSlider = document.getElementById('volume-slider');

     // Función para actualizar los colores de la parte activa/inactiva
        const updateSliderBackground = () => {
        const value = volumeSlider.value * 100; // Convierte a porcentaje
        volumeSlider.style.background = `linear-gradient(to right, #a22626 ${value}%, #a1a1a1 ${value}%)`;
    };

    // Inicializa el fondo al cargar la página
    updateSliderBackground();

    // Actualiza el fondo al mover el slider
    volumeSlider.addEventListener('input', updateSliderBackground);

    // Ajusta el volumen inicial (sin exponencial por defecto)
    audioElement.volume = parseFloat(volumeSlider.value);

    // Escucha los cambios en el control deslizante
    volumeSlider.addEventListener('input', () => {
        const linearVolume = parseFloat(volumeSlider.value);
        // Aplica una curva exponencial para un cambio más perceptible
        const adjustedVolume = Math.pow(linearVolume, 2); 
        audioElement.volume = adjustedVolume;

        console.log(`Volumen slider: ${linearVolume}, Volumen ajustado: ${adjustedVolume}`);
    });


    //Si el usuario le da a la flecha de retrocesod e página sin querer no le funcionará, ya que para retroceder deberá darle 2 veces
    history.pushState(null, null, location.href); // Inicializa el estado en el historial

    window.addEventListener('popstate', function(event) {
        // Cada vez que se intenta retroceder, volvemos a empujar la página actual al historial
        history.pushState(null, null, location.href);
    });
    
});
