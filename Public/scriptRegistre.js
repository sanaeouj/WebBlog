const axios = require('axios');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  axios.post('../Models/database.json', {
    username,
    password,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
});