var myTable = document.getElementById("resultBusinessTable");
var newTable = new Business(myTable);

var myForm = document.getElementById("searchByLocation");
var newForm = new SearchForm(myForm);
var newSearch = new SearchByLocation(newTable, newForm);

newSearch.start();
