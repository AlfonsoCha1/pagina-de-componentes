/* ============ SVG DE COMPONENTES SMT ============ */
const SVG = {
  chip2t:(c="#1f2937")=>`<svg viewBox="0 0 120 70"><rect x="8" y="22" width="14" height="26" rx="2" fill="#cbd5e1"/><rect x="98" y="22" width="14" height="26" rx="2" fill="#cbd5e1"/><rect x="20" y="20" width="80" height="30" rx="3" fill="${c}"/><rect x="20" y="20" width="80" height="30" rx="3" fill="none" stroke="#475569"/></svg>`,
  resistor:()=>`<svg viewBox="0 0 120 70"><rect x="8" y="22" width="14" height="26" rx="2" fill="#cbd5e1"/><rect x="98" y="22" width="14" height="26" rx="2" fill="#cbd5e1"/><rect x="20" y="20" width="80" height="30" rx="3" fill="#0f172a"/><text x="60" y="40" fill="#e2e8f0" font-size="13" font-family="monospace" text-anchor="middle">103</text></svg>`,
  shunt:()=>`<svg viewBox="0 0 120 70"><rect x="4" y="20" width="20" height="30" rx="2" fill="#cbd5e1"/><rect x="96" y="20" width="20" height="30" rx="2" fill="#cbd5e1"/><rect x="22" y="22" width="76" height="26" rx="2" fill="#7c2d12"/><text x="60" y="40" fill="#fed7aa" font-size="11" font-family="monospace" text-anchor="middle">R005</text></svg>`,
  mlcc:()=>`<svg viewBox="0 0 120 70"><rect x="10" y="22" width="13" height="26" rx="2" fill="#cbd5e1"/><rect x="97" y="22" width="13" height="26" rx="2" fill="#cbd5e1"/><rect x="21" y="20" width="78" height="30" rx="4" fill="#a16207"/><rect x="21" y="20" width="78" height="30" rx="4" fill="none" stroke="#854d0e"/></svg>`,
  electrolytic:()=>`<svg viewBox="0 0 120 70"><rect x="14" y="6" width="92" height="58" rx="6" fill="#1e293b" stroke="#475569"/><circle cx="60" cy="35" r="23" fill="#0f172a" stroke="#64748b"/><path d="M60 12 A23 23 0 0 1 83 35 L60 35 Z" fill="#111827"/><rect x="34" y="33" width="14" height="4" fill="#f8fafc"/><text x="42" y="55" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">−</text></svg>`,
  tantalum:()=>`<svg viewBox="0 0 120 70"><rect x="6" y="24" width="12" height="22" fill="#cbd5e1"/><rect x="102" y="24" width="12" height="22" fill="#cbd5e1"/><rect x="18" y="18" width="84" height="34" rx="3" fill="#b45309"/><rect x="18" y="18" width="14" height="34" fill="#fde68a"/><text x="65" y="40" fill="#fff7ed" font-size="10" font-family="monospace" text-anchor="middle">+</text></svg>`,
  inductor:()=>`<svg viewBox="0 0 120 70"><rect x="22" y="12" width="76" height="46" rx="8" fill="#334155" stroke="#64748b"/><circle cx="60" cy="35" r="15" fill="none" stroke="#0f172a" stroke-width="6"/><circle cx="60" cy="35" r="6" fill="#0f172a"/></svg>`,
  diode:()=>`<svg viewBox="0 0 120 70"><rect x="8" y="26" width="16" height="18" fill="#cbd5e1"/><rect x="96" y="26" width="16" height="18" fill="#cbd5e1"/><rect x="22" y="20" width="76" height="30" rx="3" fill="#0f172a"/><rect x="84" y="20" width="14" height="30" fill="#e5e7eb"/></svg>`,
  varistor:()=>`<svg viewBox="0 0 120 70"><rect x="40" y="50" width="8" height="14" fill="#cbd5e1"/><rect x="72" y="50" width="8" height="14" fill="#cbd5e1"/><circle cx="60" cy="32" r="24" fill="#1e3a8a" stroke="#3b82f6"/><text x="60" y="37" fill="#bfdbfe" font-size="13" font-family="monospace" text-anchor="middle">~</text></svg>`,
  transistor:()=>`<svg viewBox="0 0 120 70"><rect x="40" y="18" width="40" height="26" rx="3" fill="#111827" stroke="#475569"/><rect x="44" y="44" width="6" height="14" fill="#cbd5e1"/><rect x="70" y="44" width="6" height="14" fill="#cbd5e1"/><rect x="57" y="8" width="6" height="12" fill="#cbd5e1"/></svg>`,
  mosfet:()=>`<svg viewBox="0 0 120 70"><rect x="28" y="10" width="64" height="34" rx="3" fill="#1f2937" stroke="#475569"/><circle cx="60" cy="20" r="3" fill="#0f172a"/><rect x="34" y="44" width="7" height="16" fill="#cbd5e1"/><rect x="56" y="44" width="7" height="16" fill="#cbd5e1"/><rect x="78" y="44" width="7" height="16" fill="#cbd5e1"/></svg>`,
  soic:()=>`<svg viewBox="0 0 120 70"><rect x="34" y="16" width="52" height="38" rx="3" fill="#0f172a" stroke="#475569"/><circle cx="42" cy="24" r="2.4" fill="#475569"/>${[20,30,40,50].map(y=>`<rect x="22" y="${y}" width="12" height="5" fill="#cbd5e1"/><rect x="86" y="${y}" width="12" height="5" fill="#cbd5e1"/>`).join('')}</svg>`,
  qfp:()=>`<svg viewBox="0 0 120 70"><rect x="38" y="14" width="44" height="44" rx="3" fill="#0b1220" stroke="#475569"/><circle cx="45" cy="21" r="2.4" fill="#334155"/>${[20,28,36,44,52].map(y=>`<rect x="26" y="${y}" width="12" height="4" fill="#cbd5e1"/><rect x="82" y="${y}" width="12" height="4" fill="#cbd5e1"/>`).join('')}${[44,52,60,68,76].map(x=>`<rect x="${x}" y="2" width="4" height="12" fill="#cbd5e1"/><rect x="${x}" y="58" width="4" height="12" fill="#cbd5e1"/>`).join('')}</svg>`,
  crystal:()=>`<svg viewBox="0 0 120 70"><rect x="30" y="16" width="60" height="38" rx="14" fill="#94a3b8" stroke="#cbd5e1"/><rect x="30" y="16" width="60" height="38" rx="14" fill="none" stroke="#64748b"/><text x="60" y="40" fill="#1e293b" font-size="11" font-family="monospace" text-anchor="middle">16.0</text></svg>`,
  led:()=>`<svg viewBox="0 0 120 70"><rect x="34" y="16" width="52" height="38" rx="4" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="60" cy="35" r="13" fill="#fde047" stroke="#eab308"/><path d="M86 54 l-8 0 0 -8 z" fill="#0f172a"/></svg>`,
  connector:()=>`<svg viewBox="0 0 120 70"><rect x="16" y="14" width="88" height="42" rx="4" fill="#1e293b" stroke="#64748b"/>${[26,42,58,74,90].map(x=>`<rect x="${x-3}" y="22" width="6" height="26" rx="1" fill="#fbbf24"/>`).join('')}</svg>`,
  motor:()=>`<svg viewBox="0 0 120 70"><circle cx="60" cy="35" r="26" fill="#1e293b" stroke="#64748b"/><circle cx="60" cy="35" r="8" fill="#0f172a"/><rect x="58" y="9" width="4" height="20" fill="#cbd5e1"/></svg>`,
  display:()=>`<svg viewBox="0 0 120 70"><rect x="14" y="10" width="92" height="50" rx="4" fill="#0f172a" stroke="#64748b"/><rect x="22" y="18" width="76" height="34" rx="2" fill="#0e7490"/><text x="60" y="40" fill="#cffafe" font-size="11" font-family="monospace" text-anchor="middle">LCD</text></svg>`,
  buzzer:()=>`<svg viewBox="0 0 120 70"><circle cx="60" cy="34" r="24" fill="#111827" stroke="#475569"/><circle cx="60" cy="34" r="6" fill="#334155"/><circle cx="60" cy="34" r="2" fill="#0f172a"/></svg>`
};

/* ============ DATA ============ */
const components = [
 {pieza:"Capacitor electrolítico",cat:"Pasivo",smt:true,svg:"electrolytic",enc:"SMD V-chip (lata)",ident:"Cilindro con tapa; banda marca el negativo (−). Es de los más altos de la placa.",valor:"10 µF – 470 µF / 25–50 V",desc:"Filtra y estabiliza la línea de 12 V; absorbe variaciones y picos de corriente.",mayor:"Tarda más en cargar, ocupa más espacio o altera la respuesta de la fuente.",menor:"No filtra bien el voltaje; aparece ruido eléctrico.",afecta:"ECU, alimentación, sensores, micro y estabilidad general."},
 {pieza:"Capacitor cerámico MLCC",cat:"Pasivo",smt:true,svg:"mlcc",enc:"0402 / 0603 / 0805 / 1206",ident:"Bloquecito café/beige sin marcas, pegado a chips y reguladores.",valor:"10 nF, 100 nF, 1 µF, 4.7 µF",desc:"Elimina ruido de alta frecuencia cerca de chips, sensores y reguladores.",mayor:"Puede cambiar tiempos de señal o el filtrado en líneas críticas.",menor:"Deja pasar ruido y causa fallas intermitentes.",afecta:"Micro, comunicación CAN/LIN, sensores y señales digitales."},
 {pieza:"Resistencia SMD",cat:"Pasivo",smt:true,svg:"resistor",enc:"0402 / 0603 / 0805",ident:"Bloquecito negro con número impreso (103 = 10 kΩ).",valor:"0 Ω, 10 Ω, 1 kΩ, 4.7 kΩ, 10 kΩ, 47 kΩ",desc:"Limita corriente, hace divisores de voltaje y configura pull-up/pull-down.",mayor:"Reduce demasiado la corriente o cambia el voltaje de la señal.",menor:"Deja pasar demasiada corriente; daña LEDs, entradas o transistores.",afecta:"Sensores, LEDs, entradas del micro y comunicación."},
 {pieza:"Resistencia shunt",cat:"Pasivo",smt:true,svg:"shunt",enc:"2512 (grande, ancha)",ident:"Resistencia ancha con valor muy bajo (R005) cerca de salidas de potencia.",valor:"0.005 Ω – 0.1 Ω / 1–5 W",desc:"Mide corriente por la caída de voltaje en inyectores, bobinas o motores.",mayor:"Más caída de voltaje y más calor.",menor:"La medición de corriente sale débil o inexacta.",afecta:"Inyectores, bobinas, motores, ventiladores y diagnóstico de corriente."},
 {pieza:"Inductor / choke",cat:"Pasivo",smt:true,svg:"inductor",enc:"Blindado SMD",ident:"Cuadro metálico con núcleo visible, cerca de la fuente conmutada.",valor:"4.7 µH, 10 µH, 22 µH, 47 µH",desc:"Almacena energía en fuentes conmutadas y bloquea interferencia (EMI).",mayor:"Hace lenta la respuesta de la fuente o se satura.",menor:"Filtra menos ruido; inestabilidad en reguladores.",afecta:"Fuente, filtros EMI, módulos de potencia y convertidores DC-DC."},
 {pieza:"Termistor NTC/PTC",cat:"Pasivo",smt:true,svg:"chip2t",enc:"0603 / 0805",ident:"Parece resistencia pero su valor cambia con la temperatura.",valor:"NTC 10 kΩ común / PTC según corriente",desc:"El NTC mide temperatura; el PTC protege como fusible rearmable.",mayor:"Temperatura incorrecta o limita corriente antes de tiempo.",menor:"No protege bien o da lectura falsa.",afecta:"Sensores de temperatura, protección y diagnóstico térmico."},
 {pieza:"Varistor MOV",cat:"Protección",smt:true,svg:"varistor",enc:"Disco / SMD",ident:"Disco azul a la entrada de alimentación.",valor:"18 V – 27 V en sistemas de 12 V",desc:"Absorbe picos de voltaje para proteger el circuito.",mayor:"Deja pasar picos peligrosos antes de actuar.",menor:"Se activa muy pronto, se calienta o se daña.",afecta:"Entrada de alimentación, ECU, BCM, tablero y reguladores."},
 {pieza:"Diodo TVS",cat:"Protección",smt:true,svg:"diode",enc:"SOD-123 / SMA",ident:"Diodo pequeño con banda, justo en la entrada de 12 V.",valor:"Ruptura ≈ 22 V – 27 V",desc:"Protege contra transitorios fuertes (picos del alternador, load dump).",mayor:"Protege tarde; puede dejar dañar componentes sensibles.",menor:"Conduce antes de tiempo; consumo excesivo o corto.",afecta:"Alimentación principal, regulador, micro y módulos de control."},
 {pieza:"Diodo rectificador",cat:"Protección",smt:true,svg:"diode",enc:"SMA / SMB",ident:"Diodo con banda (lado del cátodo). Marcas tipo M7, S1M.",valor:"1N4007, S1M, M7 o similares",desc:"Deja pasar corriente en un solo sentido; protege contra polaridad inversa.",mayor:"Si es de más capacidad casi no afecta, pero más grande/lento.",menor:"Se quema por exceso de corriente o voltaje.",afecta:"Protección de entrada, fuente y líneas de carga."},
 {pieza:"Diodo Schottky",cat:"Protección",smt:true,svg:"diode",enc:"SOD-123 / SMA",ident:"Diodo rápido con baja caída de voltaje, en fuentes DC-DC.",valor:"SS14, SS34 o similares",desc:"Diodo rápido de baja caída, usado en fuentes conmutadas y protección.",mayor:"Depende de velocidad, corriente y capacitancia.",menor:"Se calienta, pierde eficiencia o se daña.",afecta:"Fuentes DC-DC, reguladores, protección y potencia."},
 {pieza:"Diodo Zener",cat:"Protección",smt:true,svg:"diode",enc:"SOD-123",ident:"Diodo pequeño que fija un voltaje exacto en una señal.",valor:"5.1 V, 12 V, 15 V, 18 V común",desc:"Limita el voltaje a un valor fijo para proteger entradas o regular señales.",mayor:"Deja pasar más voltaje del permitido.",menor:"Recorta la señal y da lecturas falsas.",afecta:"Entradas de sensores, líneas de señal, micro y protección."},
 {pieza:"MOSFET de potencia",cat:"Activo",smt:true,svg:"mosfet",enc:"DPAK / D2PAK / SOT-23",ident:"Chip con lengüeta metálica de disipación, cerca de inyectores/bobinas.",valor:"40–60 V / 10–100 A",desc:"Interruptor electrónico que activa inyectores, bobinas, relevadores o motores.",mayor:"Si soporta más, funciona, pero deben coincidir compuerta y encapsulado.",menor:"Se quema por sobrecorriente o sobrevoltaje.",afecta:"Inyectores, bobinas de encendido, solenoides, ventiladores y actuadores."},
 {pieza:"Transistor BJT",cat:"Activo",smt:true,svg:"transistor",enc:"SOT-23 (3 patas)",ident:"Componente de 3 patas pequeño, código de 2-3 letras.",valor:"NPN / PNP según circuito",desc:"Amplifica o conmuta señales de baja potencia.",mayor:"Cambia ganancia o respuesta si no es equivalente.",menor:"No activa la carga o se daña por corriente.",afecta:"Relevadores, LEDs, señales de control y actuadores pequeños."},
 {pieza:"Driver Darlington",cat:"Activo",smt:true,svg:"soic",enc:"SOIC-16 / SOIC-18",ident:"Chip mediano marcado ULN2003 / ULN2803.",valor:"ULN2003, ULN2803",desc:"Amplifica señales del micro para mover relevadores o lámparas pequeñas.",mayor:"Si es compatible no afecta, pero debe coincidir el pinout.",menor:"No soporta la carga y se quema.",afecta:"Relevadores, luces, actuadores pequeños y salidas digitales."},
 {pieza:"Regulador de voltaje",cat:"Integrado",smt:true,svg:"soic",enc:"SOT-223 / DPAK / SOIC",ident:"Chip con marca como 7805/LM; suele calentarse, lleva capacitores al lado.",valor:"Salida 5 V o 3.3 V",desc:"Convierte el voltaje variable del carro en uno estable para chips y sensores.",mayor:"Daña micros si entrega más voltaje del permitido.",menor:"Reinicios, fallas de comunicación o lecturas malas.",afecta:"Micro, sensores, memoria, red CAN/LIN y tablero."},
 {pieza:"Microcontrolador MCU",cat:"Integrado",smt:true,svg:"qfp",enc:"QFP / LQFP (patas en 4 lados)",ident:"El chip más grande con patas en los 4 lados; marca NXP/Infineon/Renesas/ST.",valor:"16 o 32 bits — NXP, Infineon, Renesas, ST",desc:"El cerebro del módulo: procesa sensores, controla actuadores y comunica.",mayor:"No es 'valor mayor', sino compatibilidad de programa, pines y arquitectura.",menor:"Un MCU incorrecto no funciona ni corre el software del carro.",afecta:"Todo el módulo: ECU, BCM, ABS, tablero, inmovilizador y comunicación."},
 {pieza:"Memoria EEPROM / Flash",cat:"Integrado",smt:true,svg:"soic",enc:"SOIC-8 / SOIC-16",ident:"Chip pequeño de 8 patas, marca 24Cxx / 93Cxx / 95xxx.",valor:"24Cxx, 93Cxx, 95xxx",desc:"Guarda VIN, kilometraje, configuración, códigos y datos del inmovilizador.",mayor:"Más capacidad puede no ser compatible si cambia el mapa de memoria.",menor:"No guarda toda la información requerida.",afecta:"Arranque, inmovilizador, kilometraje, programación y configuración."},
 {pieza:"Transceptor CAN",cat:"Integrado",smt:true,svg:"soic",enc:"SOIC-8",ident:"Chip de 8 patas marcado TJA1050/1042 o MCP2551, junto al conector.",valor:"TJA1050, TJA1042, MCP2551",desc:"Permite la red CAN entre ECU, tablero, ABS, airbag y otros módulos.",mayor:"Debe ser compatible en velocidad, voltaje y pinout.",menor:"Se pierde comunicación o salen errores en la red.",afecta:"Comunicación CAN, tablero, OBD2, ABS, BCM y ECU."},
 {pieza:"Transceptor LIN",cat:"Integrado",smt:true,svg:"soic",enc:"SOIC-8",ident:"Chip de 8 patas marcado TJA1020/1021, para módulos simples.",valor:"TJA1020, TJA1021 o similares",desc:"Permite la red LIN (puertas, espejos, clima) — más simple que CAN.",mayor:"Debe ser compatible con protocolo y alimentación.",menor:"Falla la comunicación con módulos secundarios.",afecta:"Puertas, espejos, A/C, sensores simples y accesorios."},
 {pieza:"Driver inteligente ASIC",cat:"Integrado",smt:true,svg:"qfp",enc:"QFP / SSOP de potencia",ident:"Chip grande con varias salidas, marca TLE/L93xx (de Infineon/ST).",valor:"TLE6240, TLE8242, L9302, L9352",desc:"Controla varias salidas de potencia y diagnostica cortos o circuitos abiertos.",mayor:"No basta más capacidad; debe ser exactamente compatible.",menor:"No maneja todas las cargas o falla el diagnóstico.",afecta:"Inyectores, válvulas, solenoides, transmisión y actuadores del motor."},
 {pieza:"Cristal oscilador",cat:"Conexión",smt:true,svg:"crystal",enc:"SMD metálico (2/4 pads)",ident:"Latita metálica brillante con la frecuencia impresa, pegada al micro.",valor:"4, 8, 16, 20 MHz",desc:"Genera la frecuencia de reloj para que el micro trabaje bien.",mayor:"El sistema trabaja fuera de tiempo y falla la comunicación.",menor:"El sistema va lento o no sincroniza con CAN/LIN.",afecta:"Micro, comunicación, tiempos de inyección, tablero y diagnóstico."},
 {pieza:"Conector multipin",cat:"Conexión",smt:false,svg:"connector",enc:"Módulo (no SMD): TE/Molex/Delphi/Yazaki",ident:"Pieza grande de plástico con muchos pines; conecta al arnés.",valor:"TE Connectivity, Molex, Delphi, Yazaki",desc:"Une la tarjeta con el arnés del vehículo.",mayor:"Un conector incorrecto no entra o cambia los pines.",menor:"Pines flojos = falsos contactos.",afecta:"Alimentación, sensores, actuadores, comunicación y todo el módulo."},
 {pieza:"Motor paso a paso",cat:"Tablero",smt:false,svg:"motor",enc:"Módulo THT (tablero)",ident:"Motorcito redondo que mueve una aguja del tablero.",valor:"X27.168, VID29-05 o similares",desc:"Mueve las agujas de velocímetro, tacómetro, temperatura o gasolina.",mayor:"Motor incompatible mueve mal la aguja o no calibra.",menor:"No tiene fuerza suficiente o marca mal.",afecta:"Velocímetro, tacómetro, gasolina y temperatura."},
 {pieza:"Pantalla LCD / TFT / OLED",cat:"Tablero",smt:false,svg:"display",enc:"Módulo (no SMD)",ident:"Pantalla con flex/conector; muestra info al conductor.",valor:"Depende del modelo del tablero",desc:"Muestra odómetro, mensajes, consumo, alertas y computadora de viaje.",mayor:"Una pantalla distinta puede no ser compatible con el controlador.",menor:"Falta resolución, pines o iluminación.",afecta:"Odómetro, mensajes, alertas y visualización del conductor."},
 {pieza:"LED SMD",cat:"Tablero",smt:true,svg:"led",enc:"PLCC-2 / PLCC-4 / 0603",ident:"Cuadrito con lente; chaflán o marca indica el cátodo.",valor:"Blanco, rojo, verde, azul, amarillo",desc:"Ilumina el tablero y testigos (check engine, batería, aceite, airbag).",mayor:"Si pide más corriente no enciende bien o daña el driver.",menor:"Se quema o ilumina muy poco si no coincide.",afecta:"Iluminación del tablero, testigos y visibilidad nocturna."},
 {pieza:"Buzzer piezoeléctrico",cat:"Tablero",smt:true,svg:"buzzer",enc:"SMD o THT según modelo",ident:"Pastilla redonda con orificio central; suena en alertas.",valor:"Según voltaje y frecuencia",desc:"Genera sonidos de advertencia: direccionales, cinturón, puerta abierta.",mayor:"Suena más fuerte o no es compatible.",menor:"Suena muy bajo o no se activa.",afecta:"Alertas sonoras, direccionales, cinturón, puertas y avisos."}
];

/* ============ RENDER COMPONENTES ============ */
const grid=document.getElementById('grid');
const search=document.getElementById('search');
const catFilter=document.getElementById('catFilter');
const smtFilter=document.getElementById('smtFilter');
const countEl=document.getElementById('count');
document.getElementById('stCount').textContent=components.length;

function render(){
  const q=search.value.toLowerCase().trim();
  const cat=catFilter.value, sm=smtFilter.value;
  const list=components.filter(c=>{
    const t=(c.pieza+c.desc+c.valor+c.enc).toLowerCase();
    const mq=!q||t.includes(q);
    const mc=cat==='todos'||c.cat===cat;
    const ms=sm==='todos'||(sm==='si'?c.smt:!c.smt);
    return mq&&mc&&ms;
  });
  countEl.textContent=list.length+' / '+components.length;
  if(!list.length){grid.innerHTML='<div class="empty">// sin resultados</div>';return;}
  grid.innerHTML=list.map((c,i)=>`
    <div class="comp">
      <div class="vis">${SVG[c.svg]?SVG[c.svg]():''}<span class="smt ${c.smt?'yes':'no'}">${c.smt?'SMT':'NO SMT'}</span></div>
      <div class="body">
        <span class="chip cat-${c.cat}">${c.cat}</span>
        <h3>${c.pieza}</h3>
        <div class="kv"><b>ENC:</b> ${c.enc}</div>
        <div class="kv"><b>VAL:</b> ${c.valor}</div>
        <p class="desc">${c.desc}</p>
        <div class="ident"><b>CÓMO IDENTIFICARLO</b>${c.ident}</div>
        <button class="more" onclick="this.nextElementSibling.classList.toggle('open');this.textContent=this.nextElementSibling.classList.contains('open')?'Ocultar detalles':'Ver más detalles'">Ver más detalles</button>
        <div class="detail">
          <div class="row up"><b>SI EL VALOR ES MAYOR</b>${c.mayor}</div>
          <div class="row down"><b>SI EL VALOR ES MENOR</b>${c.menor}</div>
          <div class="row aff"><b>QUÉ PUEDE AFECTAR</b>${c.afecta}</div>
        </div>
      </div>
    </div>`).join('');
}
search.addEventListener('input',render);
catFilter.addEventListener('change',render);
smtFilter.addEventListener('change',render);
render();

/* ============ FLASHCARDS ============ */
let fcIdx=0,fcFlipped=false,fcOrder=[];
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function loadCard(){
  if(!fcOrder.length)fcOrder=shuffle(components.map((_,i)=>i));
  const c=components[fcOrder[fcIdx]];
  document.getElementById('fcSvg').innerHTML=SVG[c.svg]?SVG[c.svg]():'';
  document.getElementById('fcGuess').textContent='¿Qué es?';
  document.getElementById('fcBack').innerHTML=`<div class="label" style="color:var(--cyan);font-family:var(--mono);font-size:.72rem">${c.cat.toUpperCase()} · ${c.smt?'SMT':'NO SMT'}</div><h3 style="margin:8px 0">${c.pieza}</h3><p>${c.desc}</p><p style="margin-top:8px;font-family:var(--mono);font-size:.74rem;color:var(--copper)">ENC: ${c.enc}</p>`;
  fcFlipped=false;document.getElementById('fcard').classList.remove('flipped');
}
function flipCard(){fcFlipped=!fcFlipped;document.getElementById('fcard').classList.toggle('flipped',fcFlipped);}
function nextCard(){fcIdx=(fcIdx+1)%fcOrder.length;loadCard();}
function prevCard(){fcIdx=(fcIdx-1+fcOrder.length)%fcOrder.length;loadCard();}
loadCard();

/* ============ BANCO DE PREGUNTAS ============ */
const bank=[
 {q:"¿Cuál es la función principal de un capacitor electrolítico en la entrada de la ECU?",o:["Filtrar y estabilizar la alimentación de 12 V","Mover las agujas del tablero","Guardar el kilometraje","Comunicar por red CAN"],c:0},
 {q:"¿Qué componente protege contra picos fuertes de voltaje (load dump del alternador)?",o:["Diodo TVS","Motor paso a paso","Pantalla LCD","EEPROM"],c:0},
 {q:"¿Qué pieza se usa para MEDIR corriente en inyectores o motores?",o:["Resistencia shunt","LED SMD","Cristal oscilador","Conector multipin"],c:0},
 {q:"¿Cuál es el cerebro principal de una ECU?",o:["Microcontrolador MCU","Capacitor cerámico","Buzzer","Varistor"],c:0},
 {q:"¿Qué chip permite la comunicación entre módulos por red CAN?",o:["Transceptor CAN","Diodo Zener","Resistencia de potencia","Motor paso a paso"],c:0},
 {q:"¿Para qué sirve un regulador de voltaje automotriz?",o:["Convertir el voltaje del carro a 5 V o 3.3 V estables","Aumentar el ruido eléctrico","Mover el velocímetro","Guardar el VIN"],c:0},
 {q:"¿Qué componente mueve las agujas del tablero?",o:["Motor paso a paso","Diodo Schottky","MOSFET","Transceptor LIN"],c:0},
 {q:"¿Qué memoria guarda VIN, kilometraje e inmovilizador?",o:["EEPROM o Flash","Capacitor MLCC","Inductor","LED SMD"],c:0},
 {q:"Si una resistencia limitadora tiene un valor DEMASIADO BAJO, ¿qué pasa?",o:["Puede pasar demasiada corriente y dañar componentes","La pantalla mejora su resolución","El CAN se vuelve inalámbrico","El capacitor se vuelve fusible"],c:0},
 {q:"¿Cuál es una función común del MOSFET de potencia?",o:["Activar inyectores, bobinas o motores","Mostrar el odómetro","Guardar códigos de llave","Sonar las direccionales"],c:0},
 {q:"¿Qué significa que un componente sea 'SMT'?",o:["Se suelda sobre la superficie de la placa, sin patas que la crucen","Que es de alto voltaje","Que sirve solo para tablero","Que es un sensor de temperatura"],c:0},
 {q:"En la marca '103' de una resistencia SMD, ¿cuánto vale?",o:["10 kΩ","103 Ω","1.03 Ω","103 kΩ"],c:0},
 {q:"¿Qué encapsulado es típico de un MCU con patas en los 4 lados?",o:["QFP / LQFP","SOT-23","0805","SMA"],c:0},
 {q:"¿Qué genera la frecuencia de reloj del microcontrolador?",o:["Cristal oscilador","Varistor","Buzzer","Diodo rectificador"],c:0},
 {q:"¿Qué hace un diodo rectificador en la entrada de alimentación?",o:["Protege contra polaridad inversa (batería al revés)","Mide temperatura","Comunica por LIN","Ilumina el tablero"],c:0},
 {q:"¿Cuál de estos NO es un componente de montaje superficial (SMT)?",o:["Conector multipin del arnés","Capacitor MLCC","Resistencia 0805","Transceptor CAN SOIC-8"],c:0},
 {q:"El capacitor cerámico MLCC cerca de un chip sirve sobre todo para…",o:["Eliminar ruido de alta frecuencia","Mover agujas","Guardar el firmware","Medir corriente"],c:0},
 {q:"¿Qué componente limita un voltaje a un valor fijo (ej. 5.1 V) en una señal?",o:["Diodo Zener","Inductor","Conector","Buzzer"],c:0},
 {q:"¿Qué red de comunicación es más simple y se usa en puertas, espejos y clima?",o:["LIN","CAN de alta velocidad","Ethernet automotriz","USB"],c:0},
 {q:"¿Qué encapsulado es típico de un transistor BJT pequeño de 3 patas?",o:["SOT-23","QFP","DPAK","BGA"],c:0},
 {q:"¿Qué pieza amplifica las señales del micro para mover relevadores o lámparas?",o:["Driver Darlington (ULN2003/2803)","Cristal oscilador","Resistencia shunt","Varistor MOV"],c:0},
 {q:"¿Cuál es la PRIMERA etapa que conviene revisar en una tarjeta automotriz?",o:["Alimentación y protección de 12 V","La pantalla del tablero","La red LIN","El buzzer"],c:0},
 {q:"¿En qué orden general viaja la señal en la tarjeta?",o:["Alimentación → procesamiento → memoria → salida → comunicación","Memoria → buzzer → batería → tablero","Salida → entrada → pantalla → fin","Todo al mismo tiempo sin orden"],c:0},
 {q:"¿Qué función tiene el inductor / choke en la fuente?",o:["Almacenar energía y bloquear interferencia (EMI)","Mostrar mensajes","Comunicar por CAN","Mover una aguja"],c:0},
 {q:"En un capacitor electrolítico, ¿qué indica la banda marcada?",o:["La terminal negativa (−)","Su capacitancia exacta","El año de fabricación","Que es resistencia"],c:0},
 {q:"¿Qué pasa si el regulador de voltaje entrega MÁS voltaje del permitido?",o:["Puede dañar el microcontrolador","Mejora la comunicación","Apaga el buzzer","Calibra las agujas"],c:0},
 {q:"¿Qué chip inteligente controla varias salidas y diagnostica cortos/abiertos?",o:["Driver ASIC (TLE/L93xx)","Resistencia 0 Ω","Diodo Schottky","LED PLCC"],c:0},
 {q:"En la estación ICT/FCT, ¿qué se está verificando?",o:["Que la placa funcione eléctrica y funcionalmente después de soldar","Que la pasta se aplicó bien","Que el horno esté caliente","El color del PCB"],c:0},
 {q:"¿Qué protege a los transistores de los picos al apagar bobinas/solenoides?",o:["Protección contra picos inductivos (diodo de recirculación)","La pantalla LCD","El conector","La EEPROM"],c:0},
 {q:"¿Qué componente protege contra descargas electrostáticas (ESD) del arnés?",o:["Diodos/arreglos de protección ESD","Motor paso a paso","Cristal oscilador","Capacitor electrolítico"],c:0}
];
document.getElementById('stQ').textContent=bank.length;

/* ============ LÓGICA DEL EXAMEN ============ */
const elSetup=document.getElementById('examSetup');
const elLive=document.getElementById('examLive');
const elResult=document.getElementById('examResult');
const elQ=document.getElementById('questions');
const elTimer=document.getElementById('timer');
const elAnsCount=document.getElementById('answeredCount');
const elTitle=document.getElementById('examTitle');

let exam=null, timerId=null, examActive=false;

function startExam(){
  const n=Math.min(parseInt(document.getElementById('numQ').value),bank.length);
  const mins=parseInt(document.getElementById('minQ').value);
  const picked=shuffle(bank.map((_,i)=>i)).slice(0,n).map(i=>{
    const base=bank[i];
    const order=shuffle(base.o.map((_,k)=>k));        // baraja opciones
    return {q:base.q, opts:order.map(k=>base.o[k]), correct:order.indexOf(base.c), sel:null};
  });
  exam={items:picked, total:n, timeLeft:mins*60, cheated:false};
  examActive=true;

  elSetup.style.display='none';
  elResult.style.display='none';
  elLive.style.display='block';
  document.getElementById('cheatBanner').style.display='none';
  elTitle.textContent=`Examen · ${n} preguntas · ${mins} min`;
  renderQuestions(false);
  updateAnsCount();
  tick(); // pinta tiempo inicial
  timerId=setInterval(()=>{exam.timeLeft--;tick();if(exam.timeLeft<=0)submitExam(true);},1000);
  document.getElementById('examen').scrollIntoView({behavior:'smooth'});
}

function tick(){
  const m=Math.floor(exam.timeLeft/60), s=exam.timeLeft%60;
  elTimer.textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  elTimer.className='timer'+(exam.timeLeft<=30?' danger':exam.timeLeft<=60?' warn':'');
}

function renderQuestions(reveal){
  elQ.innerHTML=exam.items.map((it,qi)=>`
    <div class="q${reveal&&it.sel===null?' unanswered':''}" id="q${qi}">
      <div class="qn">PREGUNTA ${qi+1} / ${exam.total} ${reveal&&it.sel===null?'· <span class="miss">NO CONTESTADA</span>':''}</div>
      <h4>${it.q}</h4>
      ${it.opts.map((op,oi)=>{
        let cls='opt';
        if(!reveal&&it.sel===oi)cls+=' sel';
        if(reveal){
          if(oi===it.correct)cls+=' correct';
          else if(it.sel===oi)cls+=' wrong';
        }
        let tag='';
        if(reveal&&oi===it.correct)tag='<span class="tagr">CORRECTA</span>';
        else if(reveal&&it.sel===oi&&oi!==it.correct)tag='<span class="tagr">TU RESPUESTA</span>';
        const mk=String.fromCharCode(65+oi);
        return `<label class="${cls}" ${reveal?'':`onclick="pick(${qi},${oi})"`}><span class="mk">${mk}.</span>${op}${tag}</label>`;
      }).join('')}
    </div>`).join('');
}

function pick(qi,oi){
  if(!examActive)return;
  exam.items[qi].sel=oi;
  renderQuestions(false);
  updateAnsCount();
}
function updateAnsCount(){
  const a=exam.items.filter(i=>i.sel!==null).length;
  elAnsCount.textContent=a+' / '+exam.total+' contestadas';
}

function submitExam(byTime, byCheat){
  if(!examActive)return;
  examActive=false;
  clearInterval(timerId);

  let score=0;
  exam.items.forEach(it=>{if(it.sel===it.correct)score++;});
  if(byCheat){exam.cheated=true;score=0;}

  const pct=Math.round((score/exam.total)*100);
  elLive.style.display='none';
  elResult.style.display='block';

  const scoreNum=document.getElementById('scoreNum');
  const pass=pct>=70 && !byCheat;
  scoreNum.textContent=pct+'%';
  scoreNum.className='score '+(pass?'pass':'fail');

  const cheatBox=document.getElementById('resultCheat');
  if(byCheat){
    cheatBox.style.display='block';
    cheatBox.innerHTML='🚫 <b>Trampa detectada:</b> saliste de la pestaña / minimizaste durante el examen. Calificación = 0.';
    document.getElementById('scoreMsg').textContent='Examen anulado.';
  }else{
    cheatBox.style.display='none';
    document.getElementById('scoreMsg').textContent=pass?'¡Aprobado! Buen trabajo.':'Reprobado — repasa y vuelve a intentar.';
  }
  const unanswered=exam.items.filter(i=>i.sel===null).length;
  document.getElementById('scoreDetail').textContent=
    `${score} de ${exam.total} correctas${byTime?' · ⏱ se acabó el tiempo':''}${unanswered?` · ${unanswered} sin contestar`:''}`;

  // deja listas las respuestas para "Ver respuestas"
  exam._reveal=true;
}

function reviewExam(){
  elResult.style.display='none';
  elLive.style.display='block';
  document.getElementById('cheatBanner').style.display=exam.cheated?'block':'none';
  if(exam.cheated)document.getElementById('cheatBanner').innerHTML='🚫 Examen anulado por trampa. Aquí están las respuestas correctas para que estudies.';
  elTimer.textContent='—';elTimer.className='timer';
  elAnsCount.textContent='revisión';
  // ocultar botón entregar en revisión
  document.querySelector('.exam-foot').style.display='none';
  renderQuestions(true);
  document.getElementById('examen').scrollIntoView({behavior:'smooth'});
}

function resetExam(){
  examActive=false;clearInterval(timerId);
  elResult.style.display='none';elLive.style.display='none';
  elSetup.style.display='block';
  document.querySelector('.exam-foot').style.display='flex';
  document.getElementById('examen').scrollIntoView({behavior:'smooth'});
}

/* ANTITRAMPAS: salir de pestaña / minimizar = 0 */
document.addEventListener('visibilitychange',()=>{
  if(examActive && document.hidden) submitExam(false,true);
});
window.addEventListener('blur',()=>{
  if(examActive) submitExam(false,true);
});
/* bloquear copiar / menú contextual durante el examen */
document.addEventListener('contextmenu',e=>{if(examActive)e.preventDefault();});
document.addEventListener('copy',e=>{if(examActive)e.preventDefault();});

/* cerrar menú móvil al tocar un link */
document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navlinks').classList.remove('show')));

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}
