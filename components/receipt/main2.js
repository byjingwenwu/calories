var myReceiptTable = document.getElementById("modalContent");
var newReceiptTable = new Receipt(myReceiptTable);

var myRandomForm = document.getElementById("getRandomReceipt");
var newRandomForm = new RandomForm(myRandomForm);
var newRandomSearch = new RandomMenu(newReceiptTable, newRandomForm);

newRandomSearch.start();
