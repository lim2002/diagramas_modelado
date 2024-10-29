// Capturamos el formulario y la tabla
const form = document.getElementById('inputForm');
const resultsTable = document.querySelector('#resultsTable tbody');

// Capturamos los elementos donde mostraremos los promedios
const avg1 = document.getElementById('avg1');
const avg2 = document.getElementById('avg2');
const avg3 = document.getElementById('avg3');
const avg4 = document.getElementById('avg4');
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
});



// Escuchamos el evento submit del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenimos el refresco de la página

  // Obtenemos los valores ingresados por el usuario
  const nmi = parseInt(form.nmi.value);
  const s = parseInt(form.s.value);

  // Variables para almacenar los totales acumulados
  let cit = 0;
  let z=0;
  let x1=0;
  let x2=0;
  let x3=0;
  let rx1c=0;
  let rx2c = 0;
  let rx3c = 0;
  let x1c = 0;
  let x2c = 0;
  let x3c = 0;
  let zc = 0;
  let totalz = 0;
  let totalx1 = 0;
  let totalx2 = 0;
  let totalx3 = 0;

  // Iniciamos las simulaciones
  for (let j = 0; j < s; j++) {
    z = 0;
    x1 = 0;
    x2 = 0;
    x3 = 0;
    cit = 0;

    while (cit < nmi) {
        cit++;
        rx1c = Math.random();
        x1c = 0+(10-0)*rx1c;
        rx2c = Math.random();
        x2c = Math.round((0+(100-0))*rx2c);
        if ((x1c+x2c) <= 20) {
          rx3c = Math.random();
          x3c = 1+(2-1)*rx3c;
          zc = (2*x1c + 3*x2c - x3c);
          if (zc > z) {
            z = zc;
            x1 = x1c;
            x2 = x2c;
            x3 = x3c;
          }
        }
    }


    // Acumulamos los valores para calcular los promedios
    totalz += z;
    totalx1 += x1;
    totalx2 += x2;
    totalx3 += x3;

    // Creamos una nueva fila para los resultados
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${j+1}</td> 
      <td>${z}</td>
      <td>${x1}</td>
      <td>${x2}</td>
      <td>${x3}</td>
    `;
    resultsTable.appendChild(row);
  }

  // Calculamos los promedios
  const avgCapital = totalz / s;
  const avgInteres = totalx1 / s;
  const avgItAcumulado = totalx2 / s;
  const avgX3 = totalx3 / s;

  // Mostramos los promedios en el HTML
  avg1.textContent = avgCapital.toFixed(2);
  avg2.textContent = avgInteres.toFixed(2);
  avg3.textContent = avgItAcumulado.toFixed(2);
  avg4.textContent = avgX3.toFixed(2);
});
