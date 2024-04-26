// The second input

const firstNameInput = document.getElementById('firstname');
const displayFirstName = document.getElementById('displayFirstName');

firstNameInput.addEventListener('keyup', function() {
    displayFirstName.textContent = firstNameInput.value;
});

// The second input

const ageInput = document.getElementById('age');
const hardTruthSection = document.getElementById('a-hard-truth');

ageInput.addEventListener('keyup', function() {
    const age = parseInt(ageInput.value);
    if (age < 18) {
        hardTruthSection.style.visibility = 'hidden';
      } else {
        hardTruthSection.style.visibility = 'visible';
      }
});

// Dark mode

const darkMode = document.getElementById('toggle-darkmode');
darkMode.addEventListener('change', function(){
    const mode = darkMode.value;
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });

