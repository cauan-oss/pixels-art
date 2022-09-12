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
        
        }
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
            if(localStorage.length === 0) {
                return true
            }
            return false
           }
        
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
                

            }

            function salvaDesenhoPaleta() {
                let meusPixeis = document.querySelectorAll(".pixel");
                let vazio = []; 

                /* meusPixeis.addEventListener("click", function() { */
                    for(let i = 0; i < meusPixeis.length; i += 1) {
                        vazio.push(meusPixeis[i].style.backgroundColor)
                    }

                    let reVazio = JSON.stringify(vazio);
                    localStorage.setItem("pixelBoard", reVazio)
                    
                    
                }//)
           // }
            
            
            /*  if(meusPixeis[i] === guardaCor.style.backgroundColor) {
                 meusPixeis[i] = localStorage.setItem("pixelBoard",meusPixeis[i] )
             } else {
                 localStorage.getItem("pixeBoard")
             } */


                


                   
                  
             
 //queRemove(chamaClass);  

adPixel(); 
colorPixel();
clear();
salvaDesenhoPaleta();

           
            
           
    


 
     
        
    

       
       
    
       



        
    
 

    

    
    


 





  
  


    
        
        


    




    




        
 





  


















 

 