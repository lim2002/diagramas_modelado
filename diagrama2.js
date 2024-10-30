// Capturamos el formulario y la tabla
const form = document.getElementById('inputForm');
const resultsTable = document.querySelector('#resultsTable tbody');

// Botón para volver al menú
const backToMenuButton = document.getElementById('backToMenu');

// Redirige al menú principal
backToMenuButton.addEventListener('click', () => {
  window.location.href = '../'; // Ajusta la URL según corresponda
});

// Capturamos el botón de limpiar
const resetButton = document.getElementById('resetButton');

// Escuchamos el evento 'click' del botón de limpiar
resetButton.addEventListener('click', () => {
  // Vaciar el contenido del cuerpo de la tabla
  resultsTable.innerHTML = '';


});


// Escuchar el evento de envío del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue

  // Obtener los valores ingresados por el usuario
  const ct = parseInt(form.ct.value);
  const t = parseInt(form.t.value);
  let pb = parseInt(form.pb.value);
  const tn = parseFloat(form.tn.value);
  const tm = parseFloat(form.tm.value);

  // Verificación básica de valores
  if (isNaN(ct) || isNaN(t) || isNaN(pb) || isNaN(tn) || isNaN(tm)) {
    alert('Por favor, completa todos los campos correctamente.');
    return;
  }

  // Limpiar la tabla antes de mostrar nuevos resultados
  resultsTable.innerHTML = '';

  // Iniciar la simulación año por año
  for (let j = ct; j < t; j++) {
    const nac = Math.round(pb * tn);
    const mue = Math.round(pb * tm);
    pb = pb + nac - mue;

    // Crear una nueva fila con los resultados
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${j+1}</td>
      <td>${pb}</td>
      <td>${nac}</td>
      <td>${mue}</td>
    `;
    resultsTable.appendChild(row);
  }
});
