class Receipt {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateRandomModal(data) {
    document.getElementById("modalOverlay").classList.remove("hidden");
    document.getElementById("save-more-button").textContent = "Save";
    var titleElement = document.querySelector(".modal-title");
    var createTitle = document.createElement("h5");
    createTitle.textContent = data.recipes[0].title;
    titleElement.appendChild(createTitle);
    var bodyElement = document.querySelector("#modal-body");
    bodyElement.className = "random-modal-body";
    var imgElement = document.createElement("div");
    imgElement.setAttribute("style", "background-image: url(" + data.recipes[0].image + ");");
    imgElement.setAttribute("id", "modalImage");
    imgElement.className = "col-4 modalImage";
    var rightColumn = document.createElement("div");
    rightColumn.className = "rightColumn col-7";
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


    document.querySelector("#closeButton").addEventListener("click", function () {
      document.getElementById("modalOverlay").className += " hidden";
      document.querySelector(".modal-title").innerHTML = "";
      document.querySelector("#modal-body").innerHTML = "";
    })
  }

  updateByIngredient(data) {
    document.getElementById("modalOverlay").classList.remove("hidden");
    document.getElementById("save-more-button").textContent = "More";
    for (let i = 0; i < data.length; i++) {
      var bodyElement = document.querySelector("#modal-body");
      bodyElement.className = "modal-body"
      var rowElement = document.createElement("div");
      rowElement.className = "modal-row";
      bodyElement.appendChild(rowElement);

      var titleElement = document.createElement("div");
      titleElement.className = "modal-title";
      var createTitle = document.createElement("h5");
      createTitle.textContent = data[i].title;
      titleElement.appendChild(createTitle);
      rowElement.appendChild(titleElement);

      var content = document.createElement("div");
      content.className = "modal-result";
      rowElement.appendChild(content);

      var imgElement = document.createElement("div");
      imgElement.setAttribute("style", "background-image: url(" + data[i].image + ");");
      imgElement.setAttribute("id", "modalImage");
      imgElement.className = "col-4 modalImage";
      var rightColumn = document.createElement("div");
      rightColumn.className = "rightColumn col-5";
      content.append(imgElement, rightColumn);

      var usedTitle = document.createElement("h6");
      usedTitle.textContent = "Essencial Ingredients";
      rightColumn.appendChild(usedTitle);
      var useArry = data[i].usedIngredients;
      if (useArry.length === 0) {
        var none = document.createElement("p");
        none.textContent = "None";
        rightColumn.appendChild(none);
      } else {
        for (let n = 0; n < useArry.length; n++) {
          var ingredients = document.createElement("p");
          ingredients.textContent = useArry[n].originalString;
          rightColumn.appendChild(ingredients);
        }
      }

      var missingTitle = document.createElement("h6");
      missingTitle.textContent = "Additional Ingredients Needed";
      rightColumn.appendChild(missingTitle);
      var ingArry = data[i].missedIngredients;
      for (let n = 0; n < ingArry.length; n++) {
        var ingredients = document.createElement("p");
        ingredients.textContent = ingArry[n].originalString;
        rightColumn.appendChild(ingredients);
      }

      var goToReceipt = document.createElement("button");
      goToReceipt.setAttribute("type", "button");
      goToReceipt.className = "btn btn-link btn-link-2";
      goToReceipt.innerHTML = 'Check Receipt<i class="fa fa-angle-double-right">';
      rightColumn.appendChild(goToReceipt);

      if (data.length === 0) {
        var noResult = document.createElement("h4");
        noResult.textContent = "No Receipt Found, Please"
        titleElement.appendChild(createTitle);
        rowElement.appendChild(titleElement);
      }
    }
    document.querySelector("#closeButton").addEventListener("click", function () {
      document.getElementById("modalOverlay").className += " hidden";
      document.querySelector(".modal-title").innerHTML = "";
      document.querySelector("#modal-body").innerHTML = "";
    })
  }

  updateByNutrient(data, name) {
    document.getElementById("modalOverlay").classList.remove("hidden");
    document.getElementById("save-more-button").textContent = "More";
    for (let i = 0; i < data.length; i++) {
      var bodyElement = document.querySelector("#modal-body");
      bodyElement.className = "modal-body"
      var rowElement = document.createElement("div");
      rowElement.className = "modal-row";
      bodyElement.appendChild(rowElement);

      var titleElement = document.createElement("div");
      titleElement.className = "modal-title";
      var createTitle = document.createElement("h5");
      createTitle.textContent = data[i].title;
      titleElement.appendChild(createTitle);
      rowElement.appendChild(titleElement);

      var content = document.createElement("div");
      content.className = "modal-result";
      rowElement.appendChild(content);

      var imgElement = document.createElement("div");
      imgElement.setAttribute("style", "background-image: url(" + data[i].image + ");");
      imgElement.setAttribute("id", "modalImage");
      imgElement.className = "col-4 modalImage";
      var rightColumn = document.createElement("div");
      rightColumn.className = "rightColumn col-5";
      content.append(imgElement, rightColumn);

      var nutTitle = document.createElement("h6");
      nutTitle.textContent = "Nutrition Facts";
      rightColumn.appendChild(nutTitle);
      for (var value in data[i]) {
        if (value.toLowerCase() == name.toLowerCase()) {
          var input = document.createElement("div");
          input.textContent = name + ": " + data[i][value];
        }
      }
      var calories = document.createElement("div");
      calories.textContent = "Calories: " + data[i].calories
      var carbs = document.createElement("div");
      carbs.textContent = "Carbs: " + data[i].carbs;
      var fat = document.createElement("div");
      fat.textContent = "Fat: " + data[i].fat;
      var protein = document.createElement("div");
      protein.textContent = "Protein: " + data[i].protein;

      var goToReceipt = document.createElement("button");
      goToReceipt.setAttribute("type", "button");
      goToReceipt.className = "btn btn-link btn-link-2";
      goToReceipt.innerHTML = 'Check Receipt<i class="fa fa-angle-double-right">';

      rightColumn.append(input, calories, carbs, fat, protein, goToReceipt)
    }
    document.querySelector("#closeButton").addEventListener("click", function () {
      document.getElementById("modalOverlay").className += " hidden";
      document.querySelector(".modal-title").innerHTML = "";
      document.querySelector("#modal-body").innerHTML = "";
    })
  }
}
