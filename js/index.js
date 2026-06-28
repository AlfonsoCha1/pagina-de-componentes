const components = [
    {
        pieza: "Capacitor electrolítico",
        categoria: "Pasivo",
        valor: "10 µF a 470 µF / 25 V a 50 V",
        descripcion: "Filtra y estabiliza la línea principal de alimentación de 12 V. Ayuda a absorber variaciones y picos de corriente.",
        mayor: "Puede tardar más en cargarse, ocupar más espacio o alterar la respuesta de la fuente.",
        menor: "No filtra correctamente el voltaje y puede aparecer ruido eléctrico.",
        afecta: "ECU, alimentación, sensores, microcontrolador y estabilidad general del módulo."
    },
    {
        pieza: "Capacitor cerámico MLCC",
        categoria: "Pasivo",
        valor: "10 nF, 100 nF, 1 µF, 4.7 µF",
        descripcion: "Elimina ruido de alta frecuencia cerca de microchips, sensores y reguladores.",
        mayor: "Puede modificar tiempos de señal o filtrado si se usa en líneas críticas.",
        menor: "Puede dejar pasar ruido eléctrico y causar fallas intermitentes.",
        afecta: "Microcontrolador, comunicación CAN/LIN, sensores y señales digitales."
    },
    {
        pieza: "Resistencia SMD",
        categoria: "Pasivo",
        valor: "0 Ω, 10 Ω, 100 Ω, 1 kΩ, 4.7 kΩ, 10 kΩ, 47 kΩ",
        descripcion: "Limita corriente, forma divisores de voltaje y configura entradas pull-up o pull-down.",
        mayor: "Puede reducir demasiado la corriente o cambiar el voltaje de una señal.",
        menor: "Puede permitir demasiada corriente y dañar LEDs, entradas o transistores.",
        afecta: "Sensores, LEDs, entradas del microcontrolador y líneas de comunicación."
    },
    {
        pieza: "Resistencia shunt",
        categoria: "Pasivo",
        valor: "0.005 Ω a 0.1 Ω / 1 W a 5 W",
        descripcion: "Sirve para medir corriente mediante caída de voltaje en actuadores como inyectores o motores.",
        mayor: "Produce mayor caída de voltaje y puede calentar más.",
        menor: "La medición de corriente puede ser débil o inexacta.",
        afecta: "Inyectores, bobinas, motores eléctricos, ventiladores y diagnóstico de corriente."
    },
    {
        pieza: "Inductor o bobina choke",
        categoria: "Pasivo",
        valor: "4.7 µH, 10 µH, 22 µH, 47 µH",
        descripcion: "Almacena energía en fuentes conmutadas y bloquea interferencias electromagnéticas.",
        mayor: "Puede hacer más lenta la respuesta de la fuente o saturarse si no es adecuado.",
        menor: "Filtra menos ruido y puede causar inestabilidad en reguladores.",
        afecta: "Fuente de alimentación, filtros EMI, módulos de potencia y convertidores DC-DC."
    },
    {
        pieza: "Termistor NTC/PTC",
        categoria: "Pasivo",
        valor: "NTC 10 kΩ común / PTC según corriente",
        descripcion: "El NTC mide temperatura. El PTC puede proteger contra sobrecorriente actuando como fusible rearmable.",
        mayor: "Puede indicar temperatura incorrecta o limitar corriente antes de tiempo.",
        menor: "Puede no proteger correctamente o enviar lectura falsa.",
        afecta: "Sensores de temperatura, protección de circuitos y diagnóstico térmico."
    },
    {
        pieza: "Varistor MOV",
        categoria: "Protección",
        valor: "18 V a 27 V común en sistemas de 12 V",
        descripcion: "Absorbe picos de voltaje para proteger el circuito.",
        mayor: "Puede dejar pasar picos peligrosos antes de actuar.",
        menor: "Puede activarse demasiado pronto y calentarse o dañarse.",
        afecta: "Entrada de alimentación, ECU, BCM, tablero y reguladores."
    },
    {
        pieza: "Diodo TVS",
        categoria: "Protección",
        valor: "Ruptura aproximada 22 V a 27 V",
        descripcion: "Protege contra transitorios fuertes como picos del alternador o load dump.",
        mayor: "Protege tarde y puede permitir daño a componentes sensibles.",
        menor: "Puede conducir antes de tiempo y provocar consumo excesivo o corto.",
        afecta: "Alimentación principal, regulador, microcontrolador y módulos de control."
    },
    {
        pieza: "Diodo rectificador",
        categoria: "Protección",
        valor: "1N4007, S1M, M7 o similares",
        descripcion: "Permite el paso de corriente en un solo sentido. Protege contra polaridad inversa.",
        mayor: "Si es de mayor capacidad normalmente no afecta, pero puede ser más grande o lento.",
        menor: "Puede quemarse por exceso de corriente o voltaje.",
        afecta: "Protección de entrada, fuente de alimentación y líneas de carga."
    },
    {
        pieza: "Diodo Schottky",
        categoria: "Protección",
        valor: "SS14, SS34 o similares",
        descripcion: "Diodo rápido con baja caída de voltaje, usado en fuentes conmutadas y protección.",
        mayor: "Puede funcionar, pero depende de velocidad, corriente y capacitancia.",
        menor: "Puede calentarse, perder eficiencia o dañarse.",
        afecta: "Fuentes DC-DC, reguladores, protección y circuitos de potencia."
    },
    {
        pieza: "Diodo Zener",
        categoria: "Protección",
        valor: "5.1 V, 12 V, 15 V, 18 V común",
        descripcion: "Limita voltaje a un valor específico para proteger entradas o regular señales pequeñas.",
        mayor: "Puede dejar pasar más voltaje del permitido.",
        menor: "Puede recortar la señal y causar lecturas falsas.",
        afecta: "Entradas de sensores, líneas de señal, microcontrolador y protección."
    },
    {
        pieza: "MOSFET de potencia",
        categoria: "Activo",
        valor: "40 V a 60 V / 10 A a 100 A",
        descripcion: "Funciona como interruptor electrónico para activar inyectores, bobinas, relevadores o motores.",
        mayor: "Si soporta más corriente/voltaje puede funcionar, pero debe coincidir compuerta y encapsulado.",
        menor: "Puede quemarse por sobrecorriente o sobrevoltaje.",
        afecta: "Inyectores, bobinas de encendido, solenoides, ventiladores y actuadores."
    },
    {
        pieza: "Transistor BJT",
        categoria: "Activo",
        valor: "NPN/PNP según circuito",
        descripcion: "Amplifica o conmuta señales de baja potencia.",
        mayor: "Puede cambiar ganancia o respuesta si no es equivalente.",
        menor: "Puede no activar la carga o dañarse por corriente.",
        afecta: "Relevadores, LEDs, señales de control y pequeños actuadores."
    },
    {
        pieza: "Driver Darlington",
        categoria: "Activo",
        valor: "ULN2003, ULN2803",
        descripcion: "Amplifica señales del microcontrolador para manejar cargas como relevadores o lámparas pequeñas.",
        mayor: "Puede no afectar si es compatible, pero debe coincidir el pinout.",
        menor: "Puede no soportar la carga y quemarse.",
        afecta: "Relevadores, luces, actuadores pequeños y salidas digitales."
    },
    {
        pieza: "Regulador de voltaje automotriz",
        categoria: "Integrado",
        valor: "Salida 5 V o 3.3 V",
        descripcion: "Convierte el voltaje variable del vehículo en un voltaje estable para chips y sensores.",
        mayor: "Puede dañar microcontroladores si entrega más voltaje del permitido.",
        menor: "Puede causar reinicios, fallas de comunicación o lecturas incorrectas.",
        afecta: "Microcontrolador, sensores, memoria, red CAN/LIN y tablero."
    },
    {
        pieza: "Microcontrolador MCU",
        categoria: "Integrado",
        valor: "16 bits o 32 bits, familias NXP, Infineon, Renesas, ST",
        descripcion: "Es el cerebro del módulo. Procesa sensores, controla actuadores y comunica con otros módulos.",
        mayor: "No se habla de valor mayor, sino de compatibilidad de programa, pines y arquitectura.",
        menor: "Un MCU incorrecto no funcionará o no podrá ejecutar el software del vehículo.",
        afecta: "Todo el módulo: ECU, BCM, ABS, tablero, inmovilizador y comunicación."
    },
    {
        pieza: "Memoria EEPROM / Flash",
        categoria: "Integrado",
        valor: "24Cxx, 93Cxx, 95xxx",
        descripcion: "Guarda datos como VIN, kilometraje, configuración, códigos y datos del inmovilizador.",
        mayor: "Más capacidad puede no ser compatible si el protocolo o mapa de memoria cambia.",
        menor: "Puede no guardar toda la información requerida.",
        afecta: "Arranque, inmovilizador, kilometraje, programación y configuración del módulo."
    },
    {
        pieza: "Transceptor CAN",
        categoria: "Integrado",
        valor: "TJA1050, TJA1042, MCP2551",
        descripcion: "Permite comunicación por red CAN entre ECU, tablero, ABS, airbag y otros módulos.",
        mayor: "Debe ser compatible en velocidad, voltaje y pinout.",
        menor: "Puede perder comunicación o generar errores en la red.",
        afecta: "Comunicación CAN, tablero, diagnóstico OBD2, ABS, BCM y ECU."
    },
    {
        pieza: "Transceptor LIN",
        categoria: "Integrado",
        valor: "TJA1020, TJA1021 o similares",
        descripcion: "Permite comunicación LIN, usada en sistemas simples como puertas, espejos o clima.",
        mayor: "Debe ser compatible con el protocolo y alimentación.",
        menor: "Puede fallar la comunicación con módulos secundarios.",
        afecta: "Puertas, espejos, aire acondicionado, sensores simples y accesorios."
    },
    {
        pieza: "Driver inteligente ASIC",
        categoria: "Integrado",
        valor: "TLE6240, TLE8242, L9302, L9352",
        descripcion: "Controla múltiples salidas de potencia y puede diagnosticar cortos o circuitos abiertos.",
        mayor: "No basta con mayor capacidad; debe ser exactamente compatible.",
        menor: "Puede no manejar todas las cargas o fallar en diagnóstico.",
        afecta: "Inyectores, válvulas, solenoides, transmisión y actuadores del motor."
    },
    {
        pieza: "Cristal oscilador",
        categoria: "Conexión",
        valor: "4 MHz, 8 MHz, 16 MHz, 20 MHz",
        descripcion: "Genera la frecuencia de reloj para que el microcontrolador trabaje correctamente.",
        mayor: "El sistema puede trabajar fuera de tiempo y fallar la comunicación.",
        menor: "El sistema puede ir lento o no sincronizar con redes CAN/LIN.",
        afecta: "Microcontrolador, comunicación, tiempos de inyección, tablero y diagnóstico."
    },
    {
        pieza: "Conector multipin automotriz",
        categoria: "Conexión",
        valor: "TE Connectivity, Molex, Delphi, Yazaki",
        descripcion: "Conecta la tarjeta electrónica con el arnés del vehículo.",
        mayor: "No aplica como valor, pero un conector incorrecto puede no entrar o cambiar pines.",
        menor: "Pines débiles o flojos causan falsos contactos.",
        afecta: "Alimentación, sensores, actuadores, comunicación y funcionamiento general."
    },
    {
        pieza: "Motor paso a paso",
        categoria: "Tablero",
        valor: "X27.168, VID29-05 o similares",
        descripcion: "Mueve las agujas del velocímetro, tacómetro, temperatura o gasolina.",
        mayor: "Un motor incompatible puede mover mal la aguja o no calibrar.",
        menor: "Puede no tener fuerza suficiente o marcar incorrectamente.",
        afecta: "Velocímetro, tacómetro, indicador de gasolina y temperatura."
    },
    {
        pieza: "Pantalla LCD / TFT / OLED",
        categoria: "Tablero",
        valor: "Depende del modelo del tablero",
        descripcion: "Muestra odómetro, mensajes, consumo, alertas y computadora de viaje.",
        mayor: "Una pantalla diferente puede no ser compatible con el controlador.",
        menor: "Puede faltar resolución, pines o iluminación.",
        afecta: "Odómetro, mensajes del tablero, alertas y visualización del conductor."
    },
    {
        pieza: "LED SMD",
        categoria: "Tablero",
        valor: "Blanco, rojo, verde, azul, amarillo / PLCC-2, PLCC-4",
        descripcion: "Ilumina el tablero y testigos como check engine, batería, aceite o bolsas de aire.",
        mayor: "Si requiere más corriente puede no encender bien o dañar el driver.",
        menor: "Puede quemarse o iluminar muy poco si no coincide.",
        afecta: "Iluminación del tablero, indicadores de advertencia y visibilidad nocturna."
    },
    {
        pieza: "Buzzer piezoeléctrico",
        categoria: "Tablero",
        valor: "Según voltaje y frecuencia",
        descripcion: "Genera sonidos de advertencia, direccionales, cinturón o puerta abierta.",
        mayor: "Puede sonar más fuerte o no ser compatible.",
        menor: "Puede sonar muy bajo o no activarse.",
        afecta: "Alertas sonoras, direccionales, cinturón, puertas y avisos del tablero."
    }
];

const tableBody = document.getElementById("componentsTable");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderComponents() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    tableBody.innerHTML = "";

    const filteredComponents = components.filter(component => {
        const matchesSearch =
            component.pieza.toLowerCase().includes(searchText) ||
            component.descripcion.toLowerCase().includes(searchText) ||
            component.valor.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "todos" || component.categoria === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    if (filteredComponents.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7">No se encontraron componentes.</td>
            </tr>
        `;
        return;
    }

    filteredComponents.forEach(component => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><strong>${component.pieza}</strong></td>
            <td><span class="category ${component.categoria}">${component.categoria}</span></td>
            <td>${component.valor}</td>
            <td>${component.descripcion}</td>
            <td>${component.mayor}</td>
            <td>${component.menor}</td>
            <td>${component.afecta}</td>
        `;

        tableBody.appendChild(row);
    });
}

searchInput.addEventListener("input", renderComponents);
categoryFilter.addEventListener("change", renderComponents);

renderComponents();

/* EXAMEN */

const quizQuestions = [
    {
        question: "¿Cuál es la función principal de un capacitor electrolítico en una ECU?",
        answers: [
            "Mover las agujas del tablero",
            "Filtrar y estabilizar la alimentación",
            "Guardar el kilometraje",
            "Comunicar por red CAN"
        ],
        correct: 1
    },
    {
        question: "¿Qué componente protege contra picos fuertes de voltaje como load dump?",
        answers: [
            "Diodo TVS",
            "Motor paso a paso",
            "Pantalla LCD",
            "EEPROM"
        ],
        correct: 0
    },
    {
        question: "¿Qué componente se usa para medir corriente en inyectores o motores?",
        answers: [
            "Resistencia shunt",
            "LED SMD",
            "Cristal oscilador",
            "Conector multipin"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el cerebro principal de una ECU?",
        answers: [
            "Capacitor cerámico",
            "Microcontrolador MCU",
            "Buzzer",
            "Varistor"
        ],
        correct: 1
    },
    {
        question: "¿Qué componente permite la comunicación entre módulos por red CAN?",
        answers: [
            "Transceptor CAN",
            "Diodo Zener",
            "Resistencia de potencia",
            "Motor paso a paso"
        ],
        correct: 0
    },
    {
        question: "¿Para qué sirve un regulador de voltaje automotriz?",
        answers: [
            "Para aumentar el ruido eléctrico",
            "Para convertir el voltaje del vehículo a 5 V o 3.3 V estables",
            "Para mover el velocímetro",
            "Para guardar el VIN"
        ],
        correct: 1
    },
    {
        question: "¿Qué componente mueve las agujas del tablero?",
        answers: [
            "Motor paso a paso",
            "Diodo Schottky",
            "MOSFET",
            "Transceptor LIN"
        ],
        correct: 0
    },
    {
        question: "¿Qué memoria puede guardar datos como VIN, kilometraje o inmovilizador?",
        answers: [
            "EEPROM o Flash",
            "Capacitor MLCC",
            "Inductor",
            "LED"
        ],
        correct: 0
    },
    {
        question: "¿Qué pasa si una resistencia limitadora tiene un valor demasiado bajo?",
        answers: [
            "Puede pasar demasiada corriente",
            "La pantalla mejora su resolución",
            "El CAN se vuelve inalámbrico",
            "El capacitor se convierte en fusible"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es una función común del MOSFET de potencia?",
        answers: [
            "Activar inyectores, bobinas o motores",
            "Mostrar el odómetro",
            "Guardar códigos de llave",
            "Dar sonido de direccionales"
        ],
        correct: 0
    }
];

const startQuizBtn = document.getElementById("startQuizBtn");
const quizContainer = document.getElementById("quizContainer");
const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const nextBtn = document.getElementById("nextBtn");
const resultContainer = document.getElementById("resultContainer");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

startQuizBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    nextBtn.classList.add("hidden");

    showQuestion();
}

function showQuestion() {
    answered = false;
    answersContainer.innerHTML = "";
    nextBtn.classList.add("hidden");

    const currentQuestion = quizQuestions[currentQuestionIndex];  
}