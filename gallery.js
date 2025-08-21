let foto_corrente = 1;
let prev = document.getElementById('precedente');
let next = document.getElementById('prossimo');
let cont = document.getElementById('contenitore-delle-foto');
//let puzzle = document.getElementById('puzzle');
//let titolo_sfoca = document.getElementsByClassName('titolo_sfoca');

function mostra_foto () {
  let fotos = document.getElementsByClassName('foto');

  for (i = 0; i < fotos.length; i++) {
    fotos[i].style.display = "none";
  }

  cont.style.display = "block";


  if (foto_corrente > fotos.length) foto_corrente = 1;   //RICOMINCIO DALLA PRIMA
  if (foto_corrente < 1) foto_corrente = fotos.length;   //RICOMINCIO DALL'ULTIMA

  fotos[foto_corrente - 1].style.display = "block";

  //puzzle.style.filter = "blur(5px)";

  }


function indietro ()
   {
     foto_corrente = foto_corrente - 1;
     mostra_foto();
   }

function avanti ()
  {
    foto_corrente = foto_corrente + 1;
    mostra_foto();
  }

  function chiudi ()
  {
    cont.style.display = "none";
    //puzzle.style.filter = "blur(0px)";
  }
