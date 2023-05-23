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

function count() {
  const counter = document.querySelector('#counter');
  const textarea = document.querySelector('#textarea');
  textarea.addEventListener('keyup', () => {
    counter.innerText = 500 - textarea.value.length;
  });
}

function getSubjects() {
  const subjects = document.querySelectorAll('input[class="subject"]:checked');
  let string = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (index === subjects.length - 1) string += `${subjects[index].value}`;
    else string += `${subjects[index].value}, `;
  }
  return string;
}

function getSummary() {
  const [{ value: firstname }, { value: lastname }] = document
    .querySelector('#field-name').children;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const subjects = getSubjects();
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const comment = document.querySelector('#textarea').value;
  return {
    name: `${firstname} ${lastname}`,
    email,
    house,
    family,
    subjects,
    rate,
    comment,
  };
}

function showSummary() {
  const submit = document.querySelector('#submit-btn');
  const form = document.querySelector('#evaluation-form');
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    const summary = getSummary();
    form.innerHTML = `
      <div>Nome: ${summary.name}<div>
      <div>Email: ${summary.email}<div>
      <div>Casa: ${summary.house}<div>
      <div>Família: ${summary.family}<div>
      <div>Matérias: ${summary.subjects}<div>
      <div>Avaliação: ${summary.rate}<div>
      <div>Observações: ${summary.comment}<div>
    `;
  });
}

function handler() {
  login();
  agreement();
  count();
  showSummary();
}

window.onload = handler;
