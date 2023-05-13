// Botão - Saiba Mais

var btn = document.getElementById('btnSaibaMais');
var container = document.querySelector('.container');

btn.addEventListener('click', function() {  
  if(container.style.display === 'block') {
      container.style.display = 'none';
      btn.innerText='Saiba mais';
  } else {
      container.style.display = 'block';
      btn.innerText='Ocultar';
  }
});

// var nome = prompt('Informe o seu nome: ')

// localStorage.setItem('nomeDaVariavel', nome);