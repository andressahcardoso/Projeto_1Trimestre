var modal = document.getElementById("modal");
var okButton = document.getElementById("ok-button");


// Exibe a caixa de diálogo
modal.style.display = "block";

// Quando o botão OK é clicado, fecha a caixa de diálogo e mostra o valor do campo de entrada
okButton.onclick = function() {
  var input = document.querySelector("#name");
  var nome = input.value;
  
  localStorage.setItem('nomeDaVariavel', nome);

  console.log(nome);
  modal.style.display = 'none';
}
