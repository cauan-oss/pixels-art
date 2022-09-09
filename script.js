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

const palet = document.getElementsByClassName("nome");


 function coresPaleta(){
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
            recebe.style.background = coresPaleta();
        
            /* recebe.addEventListener("select", function() {
                let pegaCor = document.getElementsByClassName("color nome");
                for(let i = 0; i < pegaCor.length; i += 1) {
               pegaCor[i]
            }
                } ) */
            }

            //localStorage.setItem("colorPalette")
        }

        function botao() {
            var oBotao = document.getElementById("button-random-color");
            oBotao.addEventListener("click", paleta);

           // localStorage.setItem("colorPalette")
            
        }
        botao() 
    
        function salveLocal() {
            let vazio = []
            for(let i = 0; i < palet.length; i += 1) {
                vazio.push(palet[i].style.backgroundColor)
              //  console.log(palet[i].style.backgroundColor)
            }
            let abc = JSON.stringify(vazio)
            // console.log(JSON.stringify(vazio))
             localStorage.setItem("colorPalette", abc)
            }
           
            function verificaStorage() {
                if(localStorage.length === 0) {
                    return true
                }
                return false
               }
             //  console.log(verificaStorage())
               if(verificaStorage()) {
                paleta() 
                salveLocal()
               }
               else {
                let recupera = JSON.parse(localStorage.getItem("colorPalette"))
                console.log(recupera)
                 for(let i = 0; i < palet.length; i += 1) {
                    console.log(palet[i], recupera[i])
                    palet[i].style.backgroundColor = recupera[i]
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
                   //let color = document.querySelectorAll(".color");
               // console.log(color)
                    for(let i = 0; i < color.length; i += 1) {
                       color[i].classList.remove("selected");
                       //event.target.classList.add("selected");
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
                   // let asPalet = document.querySelector("#color-palette");
                    //let guardaCor = document.querySelector(".selected")
                    for(let i = 0; i < meusPixeis.length; i += 1) {
                     meusPixeis[i].addEventListener("click", function(event) {
                        let guardaCor = document.querySelector(".selected")
                        console.log(guardaCor.style.backgroundColor);
                       event.target.style.backgroundColor = guardaCor.style.backgroundColor
                      /*   for(let i = 0; i < asPalet.length; i += 1) {
                            if(asPalet[i].style.backgroundColor === guardaCor.style.backgroundColor) {
                                meusPixeis[i].style.backgroundColor = guardaCor.style.backgroundColor
                            }
                        } */
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
                    

                }

                


                   
                  
             
 //queRemove(chamaClass);  

adPixel(); 
colorPixel();
clear();

           
            
           
    


 
     
        
    

       
       
    
       



        
    
 

    

    
    


 





  
  


    
        
        


    




    




        
 





  


















 

 