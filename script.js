function updateCardInfo() {
    // Atualizar o nome do titular do cartão
    var cardNameInput = document.getElementById("icardname");
    var nomePessoaDiv = document.querySelector(".nomepessoa");
    nomePessoaDiv.textContent = cardNameInput.value;
  
    // Atualizar o número do cartão (formatado como número de cartão de crédito)
    var cardNumberInput = document.getElementById("icardnumber");
    var numeroCartaoDiv = document.querySelector(".numerocartao");
    var cardNumberValue = cardNumberInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    var formattedCardNumber = formatCardNumber(cardNumberValue);
    numeroCartaoDiv.textContent = formattedCardNumber;
  
    // Atualizar a data de expiração
    var mesInput = document.getElementById("imes");
    var anoInput = document.getElementById("iano");
    var mesDataDiv = document.querySelector(".mesdata");
    mesDataDiv.textContent = mesInput.value + "/" + anoInput.value;
  
    // Atualizar o código CVC
    var cvcInput = document.getElementById("icvc");
    var codigoCvcDiv = document.querySelector(".codigocvc");
    codigoCvcDiv.textContent = cvcInput.value;
  }
  
  function formatCardNumber(cardNumber) {
    var formatted = cardNumber.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 '); // Adiciona espaço a cada 4 dígitos
    return formatted.trim(); // Remove espaços em branco no início e no final
  }
  
  // Chamado toda vez que o conteúdo dos campos de entrada é alterado
  document.addEventListener("input", updateCardInfo);