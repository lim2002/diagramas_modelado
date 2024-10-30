// Capturamos el formulario y la tabla
const form = document.getElementById('inputForm');
const resultsTable = document.querySelector('#resultsTable tbody');

// Capturamos los elementos donde mostraremos los promedios
const avg1 = document.getElementById('avg1');
const avg2 = document.getElementById('avg2');
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
  avg1.textContent = '0.00';
  avg2.textContent = '0.00';
});



// Escuchamos el evento submit del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenimos el refresco de la página

  // Obtenemos los valores ingresados por el usuario
  const nmh = parseInt(form.nmh.value);
  const s = parseInt(form.s.value);
  const cua = parseInt(form.cua.value);
  const pvu = parseInt(form.pvu.value);
  const cfd = parseInt(form.cfd.value);

  // Variables para almacenar los totales acumulados
  let chr = 0;
  let tartv=0;
  let rllecli=0;
  let llecli=0;
  let rartv=0;
  let artv=0;
  
  let totalgn = 0;
  let totaltartv = 0;

  // Iniciamos las simulaciones
  for (let j = 0; j < s; j++) {
    chr = 0;
    tartv = 0;
    gn = 0;
    
    for (chr = 0; chr < nmh; chr++) {
        rllecli = Math.random();
        llecli=Math.round(4*rllecli);
        if (llecli == 0) {
          continue;
        }
        while(llecli > 0) {
          rartv = Math.random();
          if (rartv >= 0 && rartv <= 0.2) {
            artv = 1;
          }else if (rartv > 0.2 && rartv <= 0.5) {
            artv = 2;
            }else if (rartv > 0.5 && rartv <= 0.9) {
            artv = 3;
            }
            tartv += artv;
            llecli--;
        }
    }
    gn = tartv*(pvu-cua)-cfd;
    // Acumulamos los valores para calcular los promedios
    totalgn += gn;
    totaltartv += tartv;

    // Creamos una nueva fila para los resultados
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${j+1}</td> 
      <td>${gn}</td>
      <td>${tartv}</td>
    `;
    resultsTable.appendChild(row);
  }

  // Calculamos los promedios
  const avgCapital = totalgn / s;
  const avgInteres = totaltartv / s;

  // Mostramos los promedios en el HTML
  avg1.textContent = avgCapital.toFixed(2);
  avg2.textContent = avgInteres.toFixed(2);
});
