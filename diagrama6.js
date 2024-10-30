// Capturamos el formulario y la tabla
const form = document.getElementById('inputForm');
const resultsTable = document.querySelector('#resultsTable tbody');

// Capturamos los elementos donde mostraremos los promedios
const avg1 = document.getElementById('avg1');
const avg2 = document.getElementById('avg2');
const avg3 = document.getElementById('avg3');
const avg4 = document.getElementById('avg4');
const avg5 = document.getElementById('avg5');
const avg6 = document.getElementById('avg6');
// Capturamos el botón para volver al menú
const backToMenuButton = document.getElementById('backToMenu');

// Agregamos el evento click al botón
backToMenuButton.addEventListener('click', () => {
  // Cambia la URL a la página del menú
  window.location.href = '../'; // Reemplaza esto con la URL correcta
});

// Capturamos el botón de limpiar
const resetButton = document.getElementById('resetButton');

// Escuchamos el evento 'click' del botón de limpiar
resetButton.addEventListener('click', () => {
  // Vaciar el contenido del cuerpo de la tabla
  resultsTable.innerHTML = '';

  // Reiniciar los valores de los promedios
  avg1.textContent = '0.00';
  avg2.textContent = '0.00';
  avg3.textContent = '0.00';
  avg4.textContent = '0.00';
  avg5.textContent = '0.00';
  avg6.textContent = '0.00';

});



// Escuchamos el evento submit del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenimos el refresco de la página

  // Obtenemos los valores ingresados por el usuario
  const nmd = parseInt(form.nmd.value);
  const s = parseInt(form.s.value);
  const pvh = parseFloat(form.pvh.value);
  const pvp = parseFloat(form.pvp.value);

  // Variables para almacenar los totales acumulados
  let cd = 0;
  let tchg=0;
  let cth=0;
  let ctpv=0;
  let ctpm=0;
  let rchg=0;
  let chg = 0;
  let reh = 0;
  let rep = 0;
  let gn = 0;
  let gnd = 0;
  let chgp = 0;

  let totalgn = 0;
  let totalctpm = 0;
  let totalctpv = 0;
  let totaltchg = 0;
  let totalchgp = 0;
  let totalgnd = 0;

  // Iniciamos las simulaciones
  for (let j = 0; j < s; j++) {
    cd = 0;
    tchg = 0;
    cth = 0;
    ctpv = 0;
    ctpm = 0;

    while (cd < nmd) {
        cd++;
        rchg = Math.random();
        if (rchg >= 0 && rchg <= 0.37) {
          chg = 0;
        }else if (rchg > 0.37 && rchg <= 0.74) {
            chg = 1;    
        }else if (rchg > 0.74 && rchg <= 0.92) {
            chg = 2;
        }else if (rchg > 0.92 && rchg <= 0.98) {
            chg = 3;
        }else{
            chg = 4;
        }
        tchg += chg;
        while (chg > 0) {
            chg = chg - 1;
            reh = Math.random();
            if (reh >= 0 && reh <= 0.2) {
              
            }else if (reh > 0.2 && reh <= 0.5) {
                rep = Math.random();
                if (rep >= 0 && rep <= 0.2) {
                    ctpm += 1;
                }else{
                    ctpv += 1;
                }
            }

        }
        
    }
    gn = (cth*pvh)+(ctpv*pvp)
    chgp = tchg/nmd;
    gnd = gn/nmd;

    // Acumulamos los valores para calcular los promedios
    totalgn += gn;
    totalctpm += ctpm;
    totalctpv += ctpv;
    totaltchg += tchg;
    totalchgp += chgp;
    totalgnd += gnd;


    // Creamos una nueva fila para los resultados
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${j + 1}</td> 
      <td>${gn}</td>
      <td>${ctpm}</td>
      <td>${ctpv}</td>
      <td>${tchg}</td>
      <td>${chgp}</td>
      <td>${gnd}</td>
    `;
    resultsTable.appendChild(row);
  }

  // Calculamos los promedios
  const avggn = totalgn / s;
  const avgctpm = totalctpm / s;
  const avgctpv = totalctpv/ s;
  const avgtchg = totaltchg / s;
  const avgchgp = totalchgp / s;
  const avggnd = totalgnd / s;

  // Mostramos los promedios en el HTML
  avg1.textContent = avggn.toFixed(2);
  avg2.textContent = avgctpm.toFixed(2);
  avg3.textContent = avgctpv.toFixed(2);
  avg4.textContent = avgtchg.toFixed(2);
  avg5.textContent = avgchgp.toFixed(2);
  avg6.textContent = avggnd.toFixed(2);
});
