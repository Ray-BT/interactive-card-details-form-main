const requiredInput = document.querySelectorAll('.required')
const requiredSpan  = document.querySelectorAll('.span-required')
const colorLabel    = document.querySelectorAll('.colorLabel')

function setError(index) {
  requiredInput[index].style.border = 'solid 2px #e63636'
  requiredSpan[index].style.display = 'block'
  colorLabel[index].style.color     = '#e63636'
}

function removeError(index) {
    requiredInput[index].style.border = ''
    requiredSpan[index].style.display = 'none'
    colorLabel[index].style.color     = 'rgb(117, 117, 117)'
}

function icardnumberValidate() {
  if (requiredInput[0].value.length > 16 || requiredInput[0].value.length == '') {
    setError(0)
  } else {
    removeError(0)
  }
}

function imesValidate() {
  if (requiredInput[1].value.length > 2 || requiredInput[1].value.length == '') {
    setError(1)
  } else {
    removeError(1)
  }
}

function ianoValidate() {
  if (requiredInput[2].value.length > 2 || requiredInput[2].value.length == '') {
    setError(2)
  } else {
    removeError(2)
  }
}

function icvcValidate() {
  if (requiredInput[3].value.length > 3 || requiredInput[3].value.length == '') {
    setError(3)
  } else {
    removeError(3)
  }
}

function updateCardInfo() {
    // Atualizar o nome do titular do cartão        
    var cardNameInput         = document.getElementById("icardname");
    var nomePessoaDiv         = document.querySelector(".nomepessoa");
    nomePessoaDiv.textContent = cardNameInput.value;
  
    // Atualizar o número do cartão (formatado como número de cartão de crédito)
    var cardNumberInput         = document.getElementById("icardnumber");
    var numeroCartaoDiv         = document.querySelector(".numerocartao");
    var cardNumberValue         = cardNumberInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    var formattedCardNumber     = formatCardNumber(cardNumberValue);
    numeroCartaoDiv.textContent = formattedCardNumber;
  
    // Atualizar a data de expiração
    var mesInput           = document.getElementById("imes");
    var anoInput           = document.getElementById("iano");
    var mesDataDiv         = document.querySelector(".mesdata");
    mesDataDiv.textContent = mesInput.value + "/" + anoInput.value;
  
    // Atualizar o código CVC
    var cvcInput             = document.getElementById("icvc");
    var codigoCvcDiv         = document.querySelector(".codigocvc");
    codigoCvcDiv.textContent = cvcInput.value;
  }
  
  function formatCardNumber(cardNumber) {
    var formatted = cardNumber.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 '); // Adiciona espaço a cada 4 dígitos
    return formatted.trim(); // Remove espaços em branco no início e no final
  }
  
  // Chamado toda vez que o conteúdo dos campos de entrada é alterado
  document.addEventListener("input", updateCardInfo);

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("iform");
    const formCheck = document.getElementById("iformcheck");
    const submitButton = document.getElementById("isubmit");
  
    submitButton.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      form.style.display = "none";
      formCheck.style.display = "grid";
    });
  });

  