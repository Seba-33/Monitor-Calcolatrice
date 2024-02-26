function sommaValore() {
    // Ottenere il riferimento all'elemento di input
    var primoNumero = document.getElementById('primo_numero');
    var secondoNumero = document.getElementById('secondo_numero');
  
    // Ottenere il valore dalla casella di testo
    var primo = parseFloat(primoNumero.value);
    var secondo = parseFloat(secondoNumero.value);
    var somma = primo + secondo;
    var sottrazione = primo - secondo;
    var moltiplicazione = primo * secondo;
    var divisione = primo / secondo;
  
    document.getElementById('somma').value = somma;
    document.getElementById('sottrazione').value = sottrazione;
    document.getElementById('moltiplicazione').value = moltiplicazione;
    document.getElementById('divisione').value = divisione;
  }
  let monitorAcceso = false;

  function accendiMonitor() {
      const monitor = document.getElementById('monitor');
      const bottone = document.getElementById('bottone');
      if (monitorAcceso){
      monitor.src = "MonitorSpento.jpg";
      bottone.textContent = 'Accendi monitor';
      monitorAcceso = false
      }
      else{
        monitor.src = "MonitorAcceso.jpg"
        bottone.textContent = 'Spegni monitor';
        monitorAcceso = true;
      }
    }