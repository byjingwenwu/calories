var myRecipeModal = document.getElementById("modalContent");
var newRecipeModal = new Modal(myRecipeModal);

var myRandomForm = document.getElementById("getRandomRecipe");
var newRandomForm = new RandomForm(myRandomForm);

var myIngeredientForm = document.getElementById("ingredientSearch");
var newIngeredientForm = new IngredientForm(myIngeredientForm);

var myNutrientForm = document.getElementById("nutrientSearch");
var newNutrientForm = new NutrientForm(myNutrientForm);

var newSearch = new App(newRecipeModal, newRandomForm, newIngeredientForm, newNutrientForm);
newSearch.start();
