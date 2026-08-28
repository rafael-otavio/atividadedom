var resultado = document.getElementById('resultado')

function limparClasse(){
    resultado.classList.remove('valor5')
    resultado.classList.remove('valor10')
    resultado.classList.remove('valorAcima')
}

function calcularDesconto(){
    var preco = document.getElementById('preco')
    var desconto = document.getElementById('desconto')

    var valorDecimal = desconto.value / 100
    var valorDesconto = ( valorDecimal * preco.value)


    limparClasse()
    if(valorDecimal <= 0.05){
        resultado.classList.add('valor5')
    }
    else if(valorDecimal <= 0.1){
        resultado.classList.add('valor10')
    }
    else{
        resultado.classList.add('valorAcima')
    }
    resultado.textContent = valorDesconto
}