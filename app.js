// Navegação entre páginas simuladas via hash
const pages = ['page1', 'page2', 'page3'];

function showPage(id) {
  pages.forEach(pageId => {
    const page = document.getElementById(pageId);
    page.classList.toggle('active', pageId === id);
  });
}

let formData = {};

// Página 1: dados pessoais
document.getElementById('form-page1').addEventListener('submit', (e) => {
  e.preventDefault();

  // pegar valores
  const gender = document.getElementById('gender').value;
  const age = +document.getElementById('age').value;
  const weight = +document.getElementById('weight').value;
  const height = +document.getElementById('height').value;

  if (!gender || !age || !weight || !height) {
    alert('Preencha todos os campos!');
    return;
  }

  formData = { gender, age, weight, height };
  showPage('page2');
});

// Botão voltar da página 2
document.getElementById('back-to-page1').addEventListener('click', () => {
  showPage('page1');
});

// Página 2: atividade e objetivo
document.getElementById('form-page2').addEventListener('submit', (e) => {
  e.preventDefault();

  const activity = +document.getElementById('activity').value;
  const goal = document.getElementById('goal').value;

  if (!activity || !goal) {
    alert('Preencha todos os campos!');
    return;
  }

  formData = { ...formData, activity, goal };
  calcularCalorias(formData);
  showPage('page3');
});

// Botão refazer da página 3
document.getElementById('restart').addEventListener('click', () => {
  formData = {};
  // limpar forms
  document.getElementById('form-page1').reset();
  document.getElementById('form-page2').reset();
  showPage('page1');
});

// Função que faz o cálculo das calorias e macros
function calcularCalorias({ gender, age, weight, height, activity, goal }) {
  let tmb;

  if (gender === 'male') {
    tmb = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
  } else {
    tmb = 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
  }

  let tdee = tmb * activity;

  if (goal === 'lose') {
    tdee -= 500;
  } else if (goal === 'gain') {
    tdee += 500;
  }

  const protein = (tdee * 0.30) / 4;
  const carbs = (tdee * 0.40) / 4;
  const fat = (tdee * 0.30) / 9;

  document.getElementById('calories').textContent = `Calorias diárias necessárias: ${Math.round(tdee)} kcal`;
  document.getElementById('macros').textContent = `Proteínas: ${Math.round(protein)} g | Carboidratos: ${Math.round(carbs)} g | Gorduras: ${Math.round(fat)} g`;
}

// Mostrar página inicial
showPage('page1');

  
