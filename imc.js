function calcularimc(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let valorIMC = peso / (altura * altura)
    
    document.getElementById("imc").textContent = "Valor do IMC = " + valorIMC;
    if(valorIMC < 18.5){
        let classificacao = "Abaixo do peso."
        document.getElementById("resultado").textContent = "Classificação = " + classificacao
    }
    else if(valorIMC >= 18.5 && valorIMC <= 24.9){
        let classificacao = "Peso ideal."
        document.getElementById("resultado").textContent = "Classificação = " + classificacao
    }
    else if(valorIMC >= 25 && valorIMC <= 29.9){
        let classificacao = "Sobrepeso."
        document.getElementById("resultado").textContent = "Classificação = " + classificacao
    }
    else if(valorIMC >= 30 && valorIMC <= 34.9){
        let classificacao = "Obesidade grau 1"
        document.getElementById("resultado").textContent = "Classificação = " + classificacao
    }
    else if(valorIMC >= 35 && valorIMC <= 39.9){
        let classificacao = "Obesidade grau 2."
        document.getElementById("resultado").textContent = "Classificação = " + classificacao
    }
    else{
        let classificacao = "Obesidade extrema."
        document.getElementById("resultado").textContent = "Classificação = " + classificacao
    }
}