var modal = document.getElementById("modalContent");
var newModal = new Modal(modal);

var randomForm = document.getElementById("getRandomRecipe");
var newRandomForm = new RandomForm(randomForm);

var ingeredientForm = document.getElementById("ingredientSearch");
var newIngeredientForm = new IngredientForm(ingeredientForm);

var nutrientForm = document.getElementById("nutrientSearch");
var newNutrientForm = new NutrientForm(nutrientForm);

var newApp = new App(newModal, newRandomForm, newIngeredientForm, newNutrientForm);
newApp.start();
