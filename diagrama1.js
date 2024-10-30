// Capturamos el formulario y la tabla
const form = document.getElementById('inputForm');
const resultsTable = document.querySelector('#resultsTable tbody');

// Capturamos los elementos donde mostraremos los promedios
const avgK = document.getElementById('avgK');
const avgI = document.getElementById('avgI');
const avgIT = document.getElementById('avgIT');
// Capturamos el botón para volver al menú
const backToMenuButton = document.getElementById('backToMenu');

// Agregamos el evento click al botón
backToMenuButton.addEventListener('click', () => {
  // Cambia la URL a la página del menú
  window.location.href = 'index.html'; // Reemplaza esto con la URL correcta
});

// Capturamos el botón de limpiar
const resetButton = document.getElementById('resetButton');

// Escuchamos el evento 'click' del botón de limpiar
resetButton.addEventListener('click', () => {
  // Vaciar el contenido del cuerpo de la tabla
  resultsTable.innerHTML = '';

  // Reiniciar los valores de los promedios
  avgK.textContent = '0.00';
  avgI.textContent = '0.00';
  avgIT.textContent = '0.00';
});



// Escuchamos el evento submit del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenimos el refresco de la página

  // Obtenemos los valores ingresados por el usuario
  const t = parseInt(form.t.value);
  const s = parseInt(form.s.value);
  let kInicial = parseFloat(form.k.value); // Guardamos el valor inicial para cada simulación

  // Variables para almacenar los totales acumulados
  let totalK = 0;
  let totalI = 0;
  let totalIT = 0;
  let interes = 0;
  let k = kInicial; // Reiniciamos K al valor inicial

  // Iniciamos las simulaciones
  for (let j = 0; j < s; j++) {
    let i = 0;
    let it = 0; // Reiniciamos IT para cada simulación
    interes = 0; // Reiniciamos el interés para cada simulación

    // Asignamos el valor de i según el valor de k
    if (k > 0 && k <= 10000) {
      i = 0.035;
    } else if (k > 10000 && k <= 50000) {
      i = 0.037;
    } else if (k > 50000) {
      i = 0.04;
    }

    // Bucle para cada tiempo de depósito (T)
    for (let j1 = 0; j1 < t; j1++) {
      interes = k * i; // Calculamos el interés
      it += interes; // Acumulamos en IT
      k += interes; // Actualizamos el capital
    }

    // Acumulamos los valores para calcular los promedios
    totalK += k;
    totalI += interes;
    totalIT += it;

    // Creamos una nueva fila para los resultados
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${j + 1}</td> 
      <td>${k.toFixed(2)}</td>
      <td>${interes.toFixed(2)}</td>
      <td>${it.toFixed(2)}</td>
    `;
    resultsTable.appendChild(row);
  }

  // Calculamos los promedios
  const avgCapital = totalK / s;
  const avgInteres = totalI / s;
  const avgItAcumulado = totalIT / s;

  // Mostramos los promedios en el HTML
  avgK.textContent = avgCapital.toFixed(2);
  avgI.textContent = avgInteres.toFixed(2);
  avgIT.textContent = avgItAcumulado.toFixed(2);
});
