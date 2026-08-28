var resultado = document.getElementById('resultado')

function limparClasse(){
    resultado.classList.remove('abaixoPeso')
    resultado.classList.remove('pesoNormal')
    resultado.classList.remove('sobrePeso')
    resultado.classList.remove('obeso1')
    resultado.classList.remove('obeso2')
    resultado.classList.remove('obeso3')
}


function calcularIMC(){
    var altura = Number(document.getElementById('altura').value)
    var peso = Number(document.getElementById('peso').value)

    var imc = peso / (altura * altura)


    limparClasse()
    if(imc < 18.5){
        resultado.textContent = 'Abaixo Do Peso'
        resultado.classList.add('abaixoPeso')
    }
    else if(imc >= 18.5 && imc <= 24.9){
        resultado.textContent = 'Peso Normal'
        resultado.classList.add('pesoNormal')
    }
    else if(imc >= 25 && imc <= 29.9){
        resultado.textContent = 'Sobrepeso'
        resultado.classList.add('sobrePeso')
    }
    else if(imc >= 30 && imc <= 34.9){
        resultado.textContent = 'Obesidade Grau I'
        resultado.classList.add('obeso1')
    }
    else if(imc >= 35 && imc <= 39.9){
        resultado.textContent = 'Obesidade Grau II'
        resultado.classList.add('obeso2')
    }
    else{
        resultado.textContent = 'Obesidade Grau III'
        resultado.classList.add('obeso3')
    }
}