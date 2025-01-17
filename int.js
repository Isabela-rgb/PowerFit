document.getElementById('tmb-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let gender = document.getElementById('gender').value;
    let age = parseInt(document.getElementById('age').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let activity = parseFloat(document.getElementById('activity').value);
    let goal = document.getElementById('goal').value;
  
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
  
    let protein = (tdee * 0.30) / 4;
    let carbs = (tdee * 0.40) / 4;
    let fat = (tdee * 0.30) / 9;
  
    document.getElementById('calories').textContent = `Calorias diárias necessárias: ${Math.round(tdee)} kcal`;
    document.getElementById('macros').textContent = `Proteínas: ${Math.round(protein)} g | Carboidratos: ${Math.round(carbs)} g | Gorduras: ${Math.round(fat)} g`;
  });
  