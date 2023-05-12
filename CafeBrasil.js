var btn = document.getElementById('btn-div');
var container = document.querySelector('.container');

btn.addEventListener('click', function() {
    
  if(container.style.display === 'block') {
      container.style.display = 'none';
      document.getElementById('btn-div').innerText='Saiba mais';
  } else {
      container.style.display = 'block';
      document.getElementById('btn-div').innerText='Ocultar';
  }
});