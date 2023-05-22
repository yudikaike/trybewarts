function login() {
  const [email, password, submit] = document.querySelector('.trybewarts-login').children;
  submit.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') alert('Olá, Tryber!');
    else alert('Email ou senha inválidos.');
    email.value = '';
    password.value = '';
  });
}

function handler() {
  login();
}

window.onload = handler;
