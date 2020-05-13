class Receipt {
  constructor(tableElement) {
    this.tableElement = tableElement;

  }

  updateTable(data) {
    document.getElementById("modalOverlay").classList.remove("hidden");
    var titleElement = document.querySelector(".modal-title");
    var createTitle = document.createElement("h5");
    createTitle.textContent = data.recipes[0].title;
    titleElement.appendChild(createTitle);
    var bodyElement = document.querySelector(".modal-body");
    var imgElement = document.createElement("div");
    imgElement.setAttribute("style", "background-image: url(" + data.recipes[0].image + ");");
    imgElement.setAttribute("id", "modalImage");
    imgElement.className = "col-sm-5 modalImage";
    var rightColumn = document.createElement("div");
    rightColumn.className = "rightColumn col-sm-7";
    bodyElement.append(imgElement, rightColumn);

    var cuisineTitle = document.createElement("h6");
    var cusines = data.recipes[0].cuisines;
    var cusinesName = "";
    for (let i = 0; i < cusines.length; i++) {
      cusinesName += cusines[i] + " ";
    }
    if (cusines.length !== 0) {
      cuisineTitle.textContent = "Cuisines: " + cusinesName;
      rightColumn.appendChild(cuisineTitle);
    }

    var summaryTitle = document.createElement("h6");
    summaryTitle.textContent = "Summary";
    var summaryElement = document.createElement("div");
    summaryElement.innerHTML = data.recipes[0].summary;
    var cookingTime = document.createElement("h6");
    cookingTime.textContent = "Ready in Minutes: " + data.recipes[0].readyInMinutes + " min.";
    var serveSize = document.createElement("h6");
    serveSize.textContent = "Servings: " + data.recipes[0].servings;
    rightColumn.append(summaryTitle, summaryElement, cookingTime, serveSize);

    var ingredientsTitle = document.createElement("h6");
    ingredientsTitle.textContent = "Ingresients";
    rightColumn.appendChild(ingredientsTitle);
    var extendedIngredients = data.recipes[0].extendedIngredients;
    for (let i = 0; i < extendedIngredients.length; i++) {
      var ingredients = document.createElement("p");
      ingredients.textContent = extendedIngredients[i].original;
      rightColumn.appendChild(ingredients);
    }

    var instructionTitle = document.createElement("h6");
    instructionTitle.textContent = "Instruction";
    var instructionElement = document.createElement("div");
    instructionElement.innerHTML = data.recipes[0].instructions;
    rightColumn.append(instructionTitle, instructionElement);


    document.querySelector("#closeButton").addEventListener("click", function(){
      document.getElementById("modalOverlay").className += " hidden";
      document.querySelector(".modal-title").innerHTML = "";
      document.querySelector(".modal-body").innerHTML = "";

    })
  }
}
