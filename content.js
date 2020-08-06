
function activeChangeBgColorAndText(buttonId){
    document.getElementById(buttonId).style.backgroundColor = "#06D755";
    document.getElementById(buttonId).style.color = "white"
}

function inactiveChangeBgColorAndText(buttonId){
    document.getElementById(buttonId).style.backgroundColor = "transparent";
    document.getElementById(buttonId).style.color = "gray"
}

const intervalo = setInterval(() =>{
    const headerWhatsapp = document.querySelector("._1QUKR")
    if(headerWhatsapp){        
        clearInterval(intervalo)
        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.id = "btn"
        button.title = "velocidade audio 2x"
        button.classList.add("twoTimeSpeedButton")
        headerWhatsapp.appendChild(button)

        let contador = 0

        //handler click button
        button.addEventListener("click", ()=>{
            contador += 1
            /* document.querySelector("audio").autofocus */
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio) => {
                
                if(contador == 1){
                    activeChangeBgColorAndText("btn")
                    audio.playbackRate = 2.5
                    
                }else{        
                    /* document.getElementById("btn").style.backgroundColor = "gray"; */
                    inactiveChangeBgColorAndText("btn")
                    contador = 0
                    audio.playbackRate = 1
                }
                
            })
            
        })
    }

    

}, 1000)
