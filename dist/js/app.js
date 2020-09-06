// SELECTORS
const userOneForm = document.querySelector('.user-1-form');
const userTwoForm = document.querySelector('.user-2-form');
const userOneInput = document.querySelector('.user-1 input');
const userTwoInput = document.querySelector('.user-2 input');
const messageOne = document.querySelector('.messages-1');
const messageTwo = document.querySelector('.messages-2');

// EVENTS
userOneForm.addEventListener('submit', userOneFormFunction);
userTwoForm.addEventListener('submit', userTwoFormFunction);

// FUNCTIONS
function userOneFormFunction(e) {
   e.preventDefault();
   // get the input text
   const userOneText = userOneInput.value;
   // create a div for the new text
   const newTextDiv = document.createElement('div');
   newTextDiv.innerHTML = userOneText;
   newTextDiv.classList.add('message-1');

   // APPEND THE NEW DIV TO THE MESSAGE CLASS IN THE HTML
   messageOne.appendChild(newTextDiv);

   console.log(newTextDiv);
}

function userTwoFormFunction(e) {
   e.preventDefault();
   // get the input text
   const userTwoText = userTwoInput.value;
   const newTextDiv = document.createElement('div');
   newTextDiv.classList.add('message-2');
   newTextDiv.innerHTML = userTwoText;

   // APPEND THE NEW DIV TO THE MESSAGE CLASS IN THE HTML
   messageTwo.appendChild(newTextDiv);

   console.log(newTextDiv);
}
