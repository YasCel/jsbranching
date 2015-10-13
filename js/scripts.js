$(document).ready(function(){
  var chooseAnimal = prompt("What animal would you like to learn about? Turtle, Snakes or Insects").toUpperCase();

  if (chooseAnimal === "TURTLE") {
    $('#turtle').show();
  } else if (chooseAnimal === "SNAKES") {
    $('#snakes').show();
  } else if (chooseAnimal === "INSECTS") {
    $('#insects').show();
  } else {
    prompt("Please choose an animal!");
  }

});
