let listaDespesas = []

function cadastrar() {
    const campoValor = document.getElementById("valor")
    const campoTipo = document.getElementById("tipo-da-despesa")
    const campoDescricao = document.getElementById("descricao")

    if (campoValor.value !=="" && campoTipo.value !=="" && campoDescricao.value !=="") {
        const despesas = {
            valor: parseInt(campoValor.value),
            tipo: campoTipo.value,
            descricao: campoDescricao.value
        }
        console.log(despesas)

    listaDespesas.push(despesas)
    console.log(listaDespesas)

    campoValor.value = ""
    campoTipo.value = ""
    campoDescricao.value = ""

    } else {
    alert("Todos os campos são de preenchimento obrigatório!")
    }
}
