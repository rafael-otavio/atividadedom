var resultado = document.getElementById('resultado')

function limparClasse(){
    resultado.classList.remove('apto')
    resultado.classList.remove('naoApto')
}

function calcularTempo(){
     var tempoInput = document.getElementById('tempoInput')

    limparClasse()

    if(tempoInput.value < 14){
        resultado.textContent = "Apto"
        resultado.classList.add("apto")
    }
    else{
        resultado.textContent = "Nao Apto"
        resultado.classList.add('naoApto')
    }
}