var myRecipeTable = document.getElementById("modalContent");
var newRecipeTable = new Recipe(myRecipeTable);

var myRandomForm = document.getElementById("getRandomRecipe");
var newRandomForm = new RandomForm(myRandomForm);

var myIngeredientForm = document.getElementById("ingredientSearch");
var newIngeredientForm = new IngredientForm(myIngeredientForm);

var myNutrientForm = document.getElementById("nutrientSearch");
var newNutrientForm = new NutrientForm(myNutrientForm);

var newSearch = new Information(newRecipeTable, newRandomForm, newIngeredientForm, newNutrientForm);
newSearch.start();
