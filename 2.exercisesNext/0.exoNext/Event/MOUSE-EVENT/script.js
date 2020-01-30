  const TABDIV = Array.from(document.getElementsByClassName("hoverMe"));
  const THERESET = document.getElementById("reset");

  for(let valeur of TABDIV){
    valeur.addEventListener("mouseover", () => {
        valeur.style.display = "none";
        })
  }

  THERESET.addEventListener('click', event => {
    for(let valeur of TABDIV){
      valeur.style.display = "block";
    }
  });

