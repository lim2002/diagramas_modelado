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
  window.location.href = 'index.html'; // Reemplaza esto con la URL correcta
});

// Capturamos el botón de limpiar
const resetButton = document.getElementById('resetButton');

// Escuchamos el evento 'click' del botón de limpiar
resetButton.addEventListener('click', () => {
  // Vaciar el contenido del cuerpo de la tabla
  resultsTable.innerHTML = '';

  // Reiniciar los valores de los promedios
  avg1.textContent = '';
  avg2.textContent = '';
  avg3.textContent = '';

});



// Escuchamos el evento submit del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenimos el refresco de la página

  // Obtenemos los valores ingresados por el usuario
  const nmd = parseInt(form.nmd.value);
  const s = parseInt(form.s.value);
  const cbod = parseInt(form.cbod.value);
  const cord = parseInt(form.cord.value);
  const cum = parseFloat(form.cum.value);
  const cua = parseFloat(form.cua.value);
  const puv = parseFloat(form.puv.value);


  // Variables para almacenar los totales acumulados
  let cd = 0;
  let invazu=cbod;
  let dind=0;
  let ctm=0;
  let ctadq=cbod *cua;
  let ctord=0;
  let ibru = 0;
  let tent = 0;
  let pazu = 0;
  let dazu = 0;
  let rtent = 0;
  let rdazu = 0;
  let ctot = 0;
  let gn = 0;
  

  let totalgn = 0;
  let totalctot= 0;
  let totaldind = 0;

  // Iniciamos las simulaciones
  for (let j = 0; j < s; j++) {
    cd = 0;
    invazu=cbod;
    dind=0;
    ctm=0;
    ctadq=cbod *cua;
    ctord=0;
    ibru = 0;
    tent = 0;
    pazu = 0;
    dazu = 0;
    rtent = 0;
    rdazu = 0;
    ctot = 0;
    gn = 0;


    for (let cd = 1; cd <= nmd; cd++) {
        
        if(cd % 7 == 0){
            pazu = cbod-invazu;
            ctadq = ctadq + (pazu * cua);
            rtent = Math.random();
            tent = Math.round(1+(3-1)*rtent);
        }else{
            while (tent = 0) {
                tent = tent - 1;
                if(tent = 0){
                    invazu = invazu + pazu;
                    ctord = ctord + cord;
                }
            }
            rdazu = Math.random();
            //dazu = Math.round(50+(150-50)*rdazu);
            dazu = Math.round(-100*Math.log(1-rdazu));
            if(invazu >= dazu){
                ibru = ibru + (dazu*puv);
                invazu = invazu - dazu;
                ctm = ctm + (invazu*cum);
            }else{
                dind = dind + dazu - invazu;
                if(invazu == 0){
                    
                }else{
                    ibru = ibru + (invazu*puv);
                    invazu = 0;
                }
            }
        }

        
    }
    ctot = ctadq+ctm+ctord
    gn = ibru+ctot;


    // Acumulamos los valores para calcular los promedios
    totalgn += gn;
    totalctot += ctot;
    totaldind += dind;


    // Creamos una nueva fila para los resultados
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${j + 1}</td> 
      <td>${gn}</td>
      <td>${ctot}</td>
      <td>${dind}</td>
    `;
    resultsTable.appendChild(row);
  }

  // Calculamos los promedios
  const avggn = totalgn / s;
  const avgctot = totalctot / s;
  const avgdind = totaldind / s;

  // Mostramos los promedios en el HTML
  avg1.textContent = avggn.toFixed(2);
  avg2.textContent = avgctot.toFixed(2);
  avg3.textContent = avgdind.toFixed(2);
  
});
