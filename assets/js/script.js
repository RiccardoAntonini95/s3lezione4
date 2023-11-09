const numeri = []


for(let i = 1; i <= 76; i++){
    numeri.push(i)
}

function creaCelle (){
     const container = document.querySelector("#numbersContainer")
    for(let i = 0; i < numeri.length; i++){
        const paragrafo = document.createElement("p")
        const divCelle = document.createElement("div")
        paragrafo.textContent = numeri[i]
        divCelle.classList.add("numTombola")
        container.appendChild(divCelle)
        divCelle.appendChild(paragrafo)
    }
}

function cambiaClasse(e){
    const numeroCasuale = Math.floor(Math.random()*76) + 1
    const testoParagrafi = document.querySelectorAll("p").textContent
    const numeroParagrafi = parseInt(testoParagrafi)
    const divCambiaClasse = document.querySelectorAll(".numTombola")
        if(numeroCasuale === numeroParagrafi){
            divCambiaClasse.classList.remove("numTombola")
            divCambiaClasse.classList.add("checked")
        }
        e.preventDefault()
    }

const buttonEstrai = document.getElementById("cliccaQua")
buttonEstrai.addEventListener("click", cambiaClasse)

creaCelle()


