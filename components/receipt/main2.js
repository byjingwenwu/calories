var myReceiptTable = document.getElementById("modalContent");
var newReceiptTable = new Receipt(myReceiptTable);

var myRandomForm = document.getElementById("getRandomReceipt");
var newRandomForm = new RandomForm(myRandomForm);

var myIngeredientForm = document.getElementById("ingredientSearch");
var newIngeredientForm = new IngredientForm(myIngeredientForm);

var newSearch = new Information(newReceiptTable, newRandomForm, newIngeredientForm);
newSearch.start();
