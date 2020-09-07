// SELEcTORS
const userOneForm = document.querySelector('.user-1-form');
const userTwoForm = document.querySelector('.user-2-form');
const messages = document.querySelector('.messages');
const userOneInput = document.querySelector('.user-1');
const userTwoInput = document.querySelector('.user-2');
const sendOneBtn = document.querySelector('.user-1-btn');
const sendTwoBtn = document.querySelector('.user-2-btn');
const headerName = document.querySelector('.header-name');
const contactSection = document.querySelector('.contact-section');
const closeContactBtn = document.querySelector('.info-burger');
const searchBtn = document.querySelector('.search-btn');

// EVENTS
userOneForm.addEventListener('submit', userOneFunction);
userTwoForm.addEventListener('submit', userTwoFunction);
headerName.addEventListener('click', showContactFunction);
closeContactBtn.addEventListener('click', showContactFunctionBtn);
searchBtn.addEventListener('click', searchBtnFunction);

// FUNCTIONS
function userOneFunction(e) {
   e.preventDefault();

   if (userOneInput.value === '') {
   } else {
      // Grab the text in the input
      const userOneText = userOneInput.value;
      // Create a new div for the text
      const newTextDiv = document.createElement('div');
      newTextDiv.classList.add('message-1');
      // Create an I tag
      const newTag = document.createElement('i');
      newTag.classList.add('fas');
      newTag.classList.add('fa-angle-down');
      newTag.classList.add('show-tag');
      // Append the text into the new div
      newTextDiv.innerHTML = userOneText;
      // Append the new I tag to the messages div in the html
      newTextDiv.appendChild(newTag);
      // Append the new div to the messages div in the html
      messages.appendChild(newTextDiv);

      // Clear the field
      userOneInput.value = '';
   }
}

function userTwoFunction(e) {
   e.preventDefault();

   if (userTwoInput.value === '') {
   } else {
      // Grab the text in the input
      const userTwoText = userTwoInput.value;
      // Create a new div for the text
      const newTextDiv = document.createElement('div');
      newTextDiv.classList.add('message-2');
      // Create an I tag
      const newTag = document.createElement('i');
      newTag.classList.add('fas');
      newTag.classList.add('fa-angle-down');
      newTag.classList.add('show-tag');
      // Append the text into the new div
      newTextDiv.innerHTML = userTwoText;
      // Append the new I tag to the messages div in the html
      newTextDiv.appendChild(newTag);
      // Append the new div to the messages div in the html
      messages.appendChild(newTextDiv);

      // Clear the field
      userTwoInput.value = '';
   }
}

function showContactFunction(e) {
   // Add the class of show contact section
   contactSection.classList.toggle('show-contact-section');
}

function showContactFunctionBtn(e) {
   contactSection.classList.toggle('show-contact-section');
}

function searchBtnFunction(e) {
   const searchInput = document.querySelector('.search-input');
   searchInput.classList.toggle('show-search-input');
}
