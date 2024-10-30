// Capturamos el formulario y la tabla
const form = document.getElementById('inputForm');
const resultsTable = document.querySelector('#resultsTable tbody');

// Capturamos los elementos donde mostraremos los promedios
const avg1 = document.getElementById('avg1');
const avg2 = document.getElementById('avg2');
const avg3 = document.getElementById('avg3');
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
});



// Escuchamos el evento submit del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenimos el refresco de la página

  // Obtenemos los valores ingresados por el usuario
  const nmj = parseInt(form.nmj.value);
  const s = parseInt(form.s.value);
  const cus7 = parseInt(form.cus7.value);
  const puj = parseInt(form.puj.value);

  // Variables para almacenar los totales acumulados
  let totalGN = 0;
  let totalNJGC = 0;
  let totalPJGC = 0;
  let cj = 0;
  let gn = 0;
  let njgc = 0;
  let pjgc = 0;
  let rd1 = 0;
  let rd2 = 0;
  let d1 = 0;
  let d2 = 0;
  let sd = 0;

  // Iniciamos las simulaciones
  for (let j = 0; j < s; j++) {
    cj = 0;
    gn = 0;
    njgc = 0;
    pjgc = 0;

    for (cj = 0; cj < nmj; cj++) {
      gn = gn + puj
      rd1 = Math.random();
      d1 = Math.round(1+(6-1)*rd1);
      rd2 = Math.random();
      d2 = Math.round(1+(6-1)*rd2);
      sd = d1 + d2;
      if (sd == 7) {
        gn = gn - cus7;
      }else {
        njgc = njgc + 1;
      }
    }
    pjgc =(njgc/nmj)*100;

    // Acumulamos los valores para calcular los promedios
    totalGN += gn;
    totalNJGC += njgc;
    totalPJGC += pjgc;

    // Creamos una nueva fila para los resultados
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${j+1}</td> 
      <td>${gn}</td>
      <td>${njgc}</td>
      <td>${pjgc}%</td>
    `;
    resultsTable.appendChild(row);
  }

  // Calculamos los promedios
  const avgCapital = totalGN / s;
  const avgInteres = totalNJGC / s;
  const avgItAcumulado = totalPJGC / s;

  // Mostramos los promedios en el HTML
  avg1.textContent = avgCapital.toFixed(2);
  avg2.textContent = avgInteres.toFixed(2);
  avg3.textContent = avgItAcumulado.toFixed(2);
});
