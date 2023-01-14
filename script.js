let palet = document.querySelectorAll('.color');
const paletBlack = document.querySelector('.color-black');
const button = document.querySelector('#button-random-color');
const pixelFrame = document.createElement('div');

const randomColors = () => {
    let r = Math.floor(Math.random() * 255),
        g = Math.floor(Math.random() * 255),
        b = Math.floor(Math.random() * 255)
    let random = `rgb(${r}, ${g}, ${b})`
    return random
}


const buttonGenerateColors = () => {
    let recebeCores;
    for (let i = 1; i <= palet.length; i += 1){
     // recebeCores = palet[i].style.background = randomColors();
 }
    return recebeCores
};

const functionLocal = () => {
    let array = [];
    for (let i = 0; i <= palet.length; i += 1) {
     
    }
}


//const guarda = console.log(objetos)

/* eventos de click */
button.addEventListener('click', objetos)

/*funcoes*/

buttonGenerateColors();
//salveLocal()
functionLocal()



















/* const palet = document.getElementsByClassName("nome");


 function coresPaleta(){
    let r = Math.floor(Math.random()*255),
        g = Math.floor(Math.random()*255),
        b = Math.floor(Math.random()*255);
        var minhasCores = `rgb(${r}, ${g}, ${b})`
        return minhasCores
 }

    function paleta() {
        const palet = document.getElementsByClassName("color");
        let arrayVazio = [];
        for(let i = 1; i < palet.length; i += 1){
            let recebe = palet[i];
            //let arrayVazio = [];
            const x = coresPaleta();
            recebe.style.background = x;
            arrayVazio.push(x);
            //localStorage.setItem("colorPalette", JSON.stringify(arrayVazio))
        }

        localStorage.setItem("colorPalette", JSON.stringify(arrayVazio))

        //localStorage.setItem("colorPalette", JSON.stringify(arrayVazio))
        
         
       // let receb
    }
    
      
    

           
    function botao() {
        var oBotao = document.getElementById("button-random-color");
        oBotao.addEventListener("click", paleta);
        
        }

    botao() 

    function salveLocal() {
        let vazio = []
        for(let i = 0; i < palet.length; i += 1) {
            vazio.push(palet[i].style.backgroundColor)
          
        }
        let abc = JSON.stringify(vazio)
         localStorage.setItem("colorPalette", abc)
        }
       
        function verificaStorage() {
            var meuLocal = JSON.parse(localStorage.getItem("colorPalette"))
            console.log(meuLocal)
            if(meuLocal === null) {
                return true
            }
            return false
           }

           window.onload = function queVerifica() {
            if(verificaStorage()) {
                console.log("entrei")
                paleta() 
                salveLocal()
               }
               else {
                let recupera = JSON.parse(localStorage.getItem("colorPalette"))
                //console.log(recupera)
                 for(let i = 0; i < palet.length; i += 1) {
                    console.log(palet[i], recupera[i])
                    palet[i].style.backgroundColor = recupera[i]
                 }
               }
           }
        

           function seleciona() {
               let minhasCores = document.querySelectorAll(".color nome")
               for(let i = 0; i < minhasCores.length; i += 1) {
                   minhasCores[i].addEventListener("mousedown", function(){
                       document.style.backgroundColor = paleta[i]
                   })
               }
           }
         
           let chamaClass = document.querySelector(".selected");
           let color = document.querySelectorAll(".color");

           function queRemove(event)  {
               
                for(let i = 0; i < color.length; i += 1) {
                   color[i].classList.remove("selected");
                   
                }
                event.target.classList.add("selected");

                }
            function adPixel() {
               let pegaPixel = document.querySelectorAll(".color")
                for(let i = 0; i < pegaPixel.length; i += 1) {
                    pegaPixel[i].addEventListener("click", queRemove)
                }

            }

            function colorPixel() {
                let meusPixeis = document.querySelectorAll(".pixel");
                for(let i = 0; i < meusPixeis.length; i += 1) {
                 meusPixeis[i].addEventListener("click", function(event) {
                    let guardaCor = document.querySelector(".selected")
                    console.log(guardaCor.style.backgroundColor);
                   event.target.style.backgroundColor = guardaCor.style.backgroundColor
                  
                 })
                }

            }

            function clear() {
                let meusPixeis = document.querySelectorAll(".pixel");
                let botaoLimpa = document.querySelector("#clear-board");

                botaoLimpa.addEventListener("click", function() {
                    for(let i = 0; i < meusPixeis.length; i += 1){
                        meusPixeis[i].style.backgroundColor = "white";
                    }
                })
                

            } */

             /*  function salvaDesenhoPaleta() {
                let meusPixeis = document.querySelectorAll(".pixel");
                let vazio = []; 
                 meusPixeis.addEventListener("click", function() { 
                     for(let i = 0; i < meusPixeis.length; i += 1) {
                        vazio.push(meusPixeis[i].style.backgroundColor)
                    }
                    let reVazio = JSON.stringify(vazio);
                    localStorage.setItem("pixelBoard", reVazio);
                })

            } */
 
               /*  function verificaStoragePixel(){
                    if(localStorage.length === nu) {
                       return true 
                    }
                    return false
                }

                let meusPixeis = document.querySelectorAll(".pixel")

                    if(verificaStoragePixel()) {
                        salvaDesenhoPaleta()
                    }
                    else {
                        let recupera = JSON.parse(localStorage.getItem(".pixel"));
                        console.log(recupera);
                        for(let i = 0; i < meusPixeis.length; i += 1) {
                            console.log(meusPixeis[i], recupera[i]);
                            meusPixeis[i].style.backgroundColor = recupera[i];
                        }
                    }

 */

                    
                    


                


                   
                  
             
 //queRemove(chamaClass);  

/* adPixel(); 
colorPixel();
clear(); */
//salvaDesenhoPaleta();
//queVerifica();


           
            
           
    


 
     
        
    

       
       
    
       



        
    
 

    

    
    


 





  
  


    
        
        


    




    




        
 





  


















 

 