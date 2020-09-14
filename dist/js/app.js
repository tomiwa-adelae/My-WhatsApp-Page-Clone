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
const searchInput = document.querySelector('.search-input input');
const searchBtn = document.querySelector('.search-btn');
const removeSearchInput = document.querySelector('.remove-search-btn');
const messageDeleteOne = document.querySelector('.messages');
const messageDeleteTwo = document.querySelector('.messages');

// EVENTS
userOneForm.addEventListener('submit', userOneFunction);
userTwoForm.addEventListener('submit', userTwoFunction);
headerName.addEventListener('click', showContactFunction);
closeContactBtn.addEventListener('click', showContactFunctionBtn);
searchBtn.addEventListener('click', searchBtnFunction);
searchInput.addEventListener('keyup', searchInputFunction);
removeSearchInput.addEventListener('click', removeSearchInputFunction);
messageDeleteOne.addEventListener('click', deleteMessageOneFunction);
messageDeleteTwo.addEventListener('click', deleteMessageTwoFunction);

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
      // Create a Button for the delete Icon
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn-1');

      // Create an I tag
      const newTag = document.createElement('i');
      newTag.classList.add('fas');
      newTag.classList.add('fa-trash');
      newTag.classList.add('show-tag');
      // Append the I tag to the button
      deleteBtn.appendChild(newTag);
      // Append the text into the new div
      newTextDiv.innerHTML = userOneText;
      // Append the DeleteBtn to the messages div in the html
      newTextDiv.appendChild(deleteBtn);
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
      // Create a Button for the delete Icon
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn-2');
      // Create an I tag
      const newTag = document.createElement('i');
      newTag.classList.add('fas');
      newTag.classList.add('fa-trash');
      newTag.classList.add('show-tag');
      // Append the I tag to the button
      deleteBtn.appendChild(newTag);
      // Append the text into the new div
      newTextDiv.innerHTML = userTwoText;
      // Append the new I tag to the messages div in the html
      newTextDiv.appendChild(deleteBtn);
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

function searchInputFunction(e) {
   // Grab the text being typed in anmd convert to lowercase
   const searchText = e.target.value.toLowerCase();

   // Grab all message div
   const messagesDiv = messages.getElementsByTagName('div');
   // Convert all messageDiv from HTML Collection to an Array
   Array.from(messagesDiv).forEach(function (messageDiv) {
      const message = messageDiv.firstChild.textContent;
      // Compare the message the search value
      if (message.toLowerCase().indexOf(searchText) != -1) {
         messageDiv.style.opacity = 1;
      } else {
         messageDiv.style.opacity = 0.1;
      }
   });
}

function searchBtnFunction(e) {
   const searchInput = document.querySelector('.search-input');
   searchInput.classList.add('show-search-input');
}

function removeSearchInputFunction(e) {
   const searchInput = document.querySelector('.search-input');
   searchInput.classList.remove('show-search-input');
}

function deleteMessageOneFunction(e) {
   const messageOne = e.target;
   if (messageOne.classList[0] === 'delete-btn-1') {
      messageOneDiv = messageOne.parentElement;
      // Animate the message
      messageOneDiv.classList.add('delete-message-1');

      // Now remove the message
      messageOneDiv.addEventListener('transitionend', (e) => {
         messageOneDiv.remove();
      });
   }
}

function deleteMessageTwoFunction(e) {
   const messageTwo = e.target;
   if (messageTwo.classList[0] === 'delete-btn-2') {
      messageTwoDiv = messageTwo.parentElement;
      // Animate the message
      messageTwoDiv.classList.add('delete-message-2');

      // Now remove the message
      messageTwoDiv.addEventListener('transitionend', (e) => {
         messageTwoDiv.remove();
      });
   }
}
