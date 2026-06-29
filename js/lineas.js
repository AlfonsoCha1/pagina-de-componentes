const modules={
  tcu:{mine:true,tag:"TCU · TELEMÁTICA",name:"TCU (Telematics Control Unit)",
    desc:"Conecta el coche con el exterior: GPS, datos por celular, llamada de emergencia y servicios conectados. Es la tarjeta que se prueba en tu área (T5 / SMT).",
    parts:["MCU 32 bits","Memoria Flash/EEPROM","Módem celular","Transceptor CAN","Reguladores","Conector multipin"]},
  ecu:{tag:"MOTOR",name:"ECU / ECM (computadora del motor)",
    desc:"El cerebro del motor: controla inyección, encendido y comunica con los demás módulos.",
    parts:["MCU 32 bits","Driver ASIC","MOSFET de potencia","Resistencia shunt","Cristal oscilador","Reguladores 5V/3.3V"]},
  cluster:{tag:"CABINA",name:"Tablero de instrumentos (clúster)",
    desc:"Muestra velocidad, RPM, temperatura, gasolina y los testigos de advertencia al conductor.",
    parts:["Motores paso a paso","Pantalla LCD/TFT","LED SMD","Microcontrolador","Buzzer","Transceptor CAN"]},
  bcm:{tag:"CABINA",name:"BCM (módulo de carrocería)",
    desc:"Controla luces, seguros, ventanas eléctricas, limpiaparabrisas y funciones de confort.",
    parts:["Drivers de salida","Transceptor LIN","Relevadores","MOSFET","Diodos de protección"]},
  abs:{tag:"FRENOS",name:"ABS (frenos antibloqueo)",
    desc:"Evita que las llantas se bloqueen al frenar fuerte, leyendo la velocidad de cada rueda.",
    parts:["Sensores de rueda","MOSFET de potencia","Microcontrolador","Diodo TVS","Capacitores de filtro"]}
};

const panel=document.getElementById('modPanel');
const hotspots=document.querySelectorAll('.hotspot');

function showModule(key){
  const m=modules[key];
  panel.className='module-panel'+(m.mine?' tcu':'');
  panel.innerHTML=`
    <div class="pt">${m.tag}</div>
    <h3>${m.name}${m.mine?'<span class="mine">TU ÁREA</span>':''}</h3>
    <p>${m.desc}</p>
    <div class="parts">${m.parts.map(p=>`<span>${p}</span>`).join('')}</div>`;
  hotspots.forEach(h=>h.classList.toggle('active',h.dataset.m===key));
}
hotspots.forEach(h=>h.addEventListener('click',()=>showModule(h.dataset.m)));
showModule('tcu'); // arranca mostrando la TCU

document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navlinks').classList.remove('show')));

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}
