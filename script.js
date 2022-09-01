/* var botao = document.querySelector("button")
botao.addEventListener("click", gerar_cor)


 function gerar_cor() {
let r = parseInt(Math.random() * 255),
    g = parseInt(Math.random() * 255),
    b = parseInt(Math.random() * 255)

   return 'rgb('+r+', '+g+', '+b+')'
}

function alerta(){
    alert(gerar_cor)
}

function cores() {
    let seleciona = document.getElementsByClassName("color");

    for(i = 0; i < seleciona.length; i += 1) {
        let man = seleciona[i];
        man = gerar_cor
    }
}

alerta() */

function back(){
    let r = Math.floor(Math.random()*255),
        g = Math.floor(Math.random()*255),
        b = Math.floor(Math.random()*255);

      let minhasCores = `rgb(${r}, ${g}, ${b})`

      return minhasCores
}

function paleta() {
    const palet = document.getElementsByClassName("color");

     for(let i = 1; i < palet.length; i += 1){
        let recebe = palet[i];

        recebe.style.background = back();

        
    }
 

}

paleta()


   var oBotao = document.getElementById("button-random-color")
    
    oBotao.addEventListener("click", paleta)

















 

 