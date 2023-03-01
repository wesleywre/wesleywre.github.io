const copyIcon = document.querySelector(".input-box span");

function gerarCPF() {
    var cpf = gerarNumerosCPF();
    cpf = cpf.toString();
    cpf = cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9, 11);
    document.getElementById("cpf-input").innerHTML = cpf;
  }
  
  function gerarNumerosCPF() {
    var numeros = gerar9NumerosAleatorios();
    var digito1 = calcularDigitoVerificador(numeros);
    numeros += digito1;
    var digito2 = calcularDigitoVerificador(numeros);
    numeros += digito2;
    return numeros;
  }
  
  function gerar9NumerosAleatorios() {
    var numeros = "";
    for (var i = 0; i < 9; i++) {
      numeros += Math.floor(Math.random() * 10);
    }
    return numeros;
  }
  
  function calcularDigitoVerificador(cpf) {
    var soma = 0;
    var pesoInicial = cpf.length + 1;
    for (var i = 0; i < cpf.length; i++) {
      soma += cpf[i] * pesoInicial;
      pesoInicial--;
    }
    var resto = soma % 11;
    var digitoVerificador = 11 - resto;
    if (digitoVerificador > 9) {
      digitoVerificador = 0;
    }
    return digitoVerificador;
  }
  

const copyPassword = () => {
    const cpfInput = document.querySelector("#cpf-input");
    navigator.clipboard.writeText(cpfInput.innerText);

    copyIcon.innerText = "check";
    copyIcon.style.color = "#4285f4";
    
    setTimeout(() => {
    copyIcon.innerText = "copy_all";
    copyIcon.style.color = "#707070";
    }, 1500);
}

copyIcon.addEventListener("click", copyPassword);
    