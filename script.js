function verificar(){
  
  var altura = Number(document.getElementById('altura').value);
  var peso = Number(document.getElementById('peso').value);
  var resultado = document.getElementById('resultado');
  var nome = document.getElementById('nome').value;

  var imc = peso/(altura*altura)

  if(imc < 18.5){
    resultado.innerText = `Resultado : ${nome}, seu IMC é de ${imc.toFixed(2)}, você está abaixo do peso ideal.`;
  }else if(imc >= 18.5 && imc < 25){
    resultado.innerText = `Resultado : ${nome}, seu IMC é de ${imc.toFixed(2)}, você está com o peso ideal.`;
  }else if(imc >= 25 && imc <= 29.9){
    resultado.innerText = `Resultado : ${nome}, seu IMC é de ${imc.toFixed(2)}, você está com sobre peso.`;
  }else if( imc >= 30 && imc < 34.9){
    resultado.innerText = `Resultado : ${nome}, seu IMC é de ${imc.toFixed(2)}, você está com obesidade grau I.`;
  }else if( imc >= 35 && imc < 39.9){
    resultado.innerText = `Resultado : ${nome}, seu IMC é de ${imc.toFixed(2)}, você está com obesidade grau II(severa).`;
  }else if( imc >= 40){
    resultado.innerText = `Resultado : ${nome}, seu IMC é de ${imc.toFixed(2)}, você está com obesidade grau III(mórbida).`;
  }
  
}

