var myTable = document.getElementById("resultBusinessTable");
var newTable = new Business(myTable);

var myForm = document.getElementById("searchByLocation");
var newSearch = new SearchByLocation(newTable);

newSearch.start();
