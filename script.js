function login() {
  const [email, password, submit] = document.querySelector('.trybewarts-login').children;
  submit.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') alert('Olá, Tryber!');
    else alert('Email ou senha inválidos.');
    email.value = '';
    password.value = '';
  });
}

function agreement() {
  const checkbox = document.querySelector('#agreement');
  const submit = document.querySelector('#submit-btn');
  checkbox.addEventListener('click', () => {
    submit.disabled = !submit.disabled;
  });
}

function handler() {
  login();
  agreement();
}

window.onload = handler;
