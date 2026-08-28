 var resultado = document.getElementById('resultado')

function limparClasse(){
    resultado.classList.remove('aprovado')
    resultado.classList.remove('reprovado')
    resultado.classList.remove('recuperacao')
}

function calcularMedia(){
    var nota1 = Number(document.getElementById('nota1').value)
    var nota2 = Number(document.getElementById('nota2').value)
    var nota3 = Number(document.getElementById('nota3').value)

    var resul = (nota1 + nota2 + nota3) /3

    if(resul >= 7 ){
        resultado.classList.add('aprovado')
    }
    else if(resul > 5 && resul < 6.9){
        resultado.classList.add('recuperacao')
    }
    else{
        resultado.classList.add('reprovado')
    }
    resultado.textContent = resul
}