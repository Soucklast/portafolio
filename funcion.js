  const VALID_EMAIL = 'arloma49@gmail.com';
  const VALID_PASSWORD = 'contraseñaSegura';

  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (username !== VALID_EMAIL || password !== VALID_PASSWORD) {
      alert('Usuario o contraseña incorrectos');
      return;
    }

    window.location.href = 'C:/xampp/htdocs/portafolio/index.html';  
  });