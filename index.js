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

function howMany() {
  const dogValue = $('.js-dogAmount').val();
  console.log(dogValue);

  if (dogValue > 50){
    $('ul').html(`Sorry you can only reach a limit of 50 dog images!`)
  } else {
    for (let i = 0; i < dogValue; i++){
      getDogImage();
      console.log('this loop is running')
    }
  }

}

// extract the retrieved data
function extractData(){
  $('form').submit( function(event) {
    console.log('submit button pressed');
    event.preventDefault();
    $('ul').empty();
    howMany();
  });
}


// Add image to DOM
/* function addDogImages(extractedUrl){
  return 
} */

$(getDogImage);
$(getDogImage);
$(getDogImage);
$(extractData);