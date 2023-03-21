function formatarCEP(cep) {
    cep = cep.replace(/\D/g, ""); // Remove todos os caracteres que não são dígitos
    cep = cep.substring(0, 5) + "-" + cep.substring(5); // Insere o hífen após a quinta posição
    return cep;
  }
  
  function gerarCEP() {
    var cep = document.getElementById("cep").value;
    cep = cep.replace(/\D/g, ""); // Remove todos os caracteres que não são dígitos
    cep = cep.substring(0, 5) + "-" + cep.substring(5); // Insere o hífen após a quinta posição
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML =
          "CEP: " + data.cep + "<br>" +
          "Rua: " + data.logradouro + "<br>" +
          "Complemento: " + data.complemento + "<br>" +
          "Bairro: " + data.bairro + "<br>" +
          "Localidade: " + data.localidade + "<br>" +
          "UF: " + data.uf + "<br>" +
          "DDD: " + data.ddd
      })
      .catch(error => {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Erro ao buscar CEP";
      });
  }
  
  var inputCEP = document.getElementById("cep");
  inputCEP.addEventListener("input", function(event) {
    var cep = event.target.value;
    if (cep.length === 5) {
      cep += "-";
    } else if (cep.length > 9) {
      cep = cep.substring(0, 9);
    }
    event.target.value = cep;
  });
  