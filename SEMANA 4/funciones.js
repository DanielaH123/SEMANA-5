document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
  
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    
    
    if (usuario && contrasena) {
      alert('Ingresando...');
      
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
  