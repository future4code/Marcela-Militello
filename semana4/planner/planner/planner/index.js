function adicionarItem() {
    const inputTarefa = document.getElementById("tarefa")
    let valor = inputTarefa.value
    const diaSemana = document.getElementById("dias-semana").value
    
    inputTarefa.value = ""
        
    switch(diaSemana) {
        case "domingo":
            const domingo = document.getElementById("domingo")
            domingo.innerHTML += `<li>${valor}</li>`
            break

        case "segunda":
            const segunda = document.getElementById("segunda")
            segunda.innerHTML += `<li>${valor}</li>`
            break

        case "terca":
            const terca = document.getElementById("terca")
            terca.innerHTML += `<li>${valor}</li>`
            break

        case "quarta":
            const quarta = document.getElementById("quarta")
            quarta.innerHTML += `<li>${valor}</li>`
            break

        case "quinta":
            const quinta = document.getElementById("quinta")
            quinta.innerHTML += `<li>${valor}</li>`
            break

        case "sexta":
            const sexta = document.getElementById("sexta")
            sexta.innerHTML += `<li>${valor}</li>`
            break

        case "sabado":
            const sabado = document.getElementById("sabado")
            sabado.innerHTML += `<li>${valor}</li>`
            break
        
        }
    }
