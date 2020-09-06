// SELEcTORS
const userOneForm = document.querySelector('.user-1-form');
const userTwoForm = document.querySelector('.user-2-form');
const messages = document.querySelector('.messages');
const userOneInput = document.querySelector('.user-1');
const userTwoInput = document.querySelector('.user-2');
const sendBtn = document.querySelector('.user-1-btn');

// EVENTS
userOneForm.addEventListener('submit', userOneFunction);
userTwoForm.addEventListener('submit', userTwoFunction);

// FUNCTIONS
function userOneFunction(e) {
   e.preventDefault();

   if (userOneInput.value === '') {
      console.log('Empty Message');
   } else {
      // Grab the text in the input
      const userOneText = userOneInput.value;
      // Create a new div for the text
      const newTextDiv = document.createElement('div');
      newTextDiv.classList.add('message-1');
      // Append the text into the new div
      newTextDiv.innerHTML = userOneText;
      // Append the new div to the messages div in the html
      messages.appendChild(newTextDiv);

      // Clear the field
      userOneInput.value = '';
   }
}

function userTwoFunction(e) {
   e.preventDefault();

   if (userTwoInput.value === '') {
      console.log('Empty Message');
   } else {
      // Grab the text in the input
      const userTwoText = userTwoInput.value;
      // Create a new div for the text
      const newTextDiv = document.createElement('div');
      newTextDiv.classList.add('message-2');
      // Append the text into the new div
      newTextDiv.innerHTML = userTwoText;
      // Append the new div to the messages div in the html
      messages.appendChild(newTextDiv);

      // Clear the field
      userTwoInput.value = '';
   }
}
