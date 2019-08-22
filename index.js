'use strict';

// Retrieve image data
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => displayImage(responseJson));
}

function displayImage(responseJSON) {
  $('.dogImage').append(`
  <img src='${responseJSON.message}' id='dogImage'>
  `);
}

// extract the retrieved data
function extractData(){
  $('form').on('submit', '.submitButton', function(event) {
    event.preventDefault();
    howMany();
    getDogImage();
  });
}

function howMany() {
  const dogValue = $('.js-dogAmount').val();
  console.log(dogValue);
}


// Add image to DOM
/* function addDogImages(extractedUrl){
  return 
} */

$(getDogImage);