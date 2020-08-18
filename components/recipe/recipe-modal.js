class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
  }

  handleCheckRecipe(id) {
    this.getRecipeInfo(id)
  }

  passGetRecipeInfo(getRecipeInfo) {
    this.getRecipeInfo = getRecipeInfo
  }

  updateByIngredient(data) {
    document.querySelector(".close").addEventListener("click", function () {
      document.querySelector("#modal-body").innerHTML = "";
    })

    document.querySelector("#closeModal").addEventListener("click", function () {
      document.querySelector("#modal-body").innerHTML = "";
    })

    if (!data.length) {
      var bodyElement = document.querySelector("#modal-body");
      var text = document.createElement("h5");
      text.textContent = "No result found.";
      text.className = "mt-4"
      bodyElement.appendChild(text);
      return;
    }

    for (let i = 0; i < data.length; i++) {
      var bodyElement = document.querySelector("#modal-body");
      var rowElement = document.createElement("div");
      rowElement.className = "modal-row mt-4";
      bodyElement.appendChild(rowElement);

      var titleElement = document.createElement("div");
      titleElement.className = "recipe-title";
      var createTitle = document.createElement("h5");
      createTitle.textContent = data[i].title;
      titleElement.appendChild(createTitle);
      rowElement.appendChild(titleElement);

      var content = document.createElement("div");
      content.className = "d-flex justify-content-center align-items-start mt-3";
      rowElement.appendChild(content);

      var imgElement = document.createElement("img");
      imgElement.setAttribute("src", data[i].image);
      imgElement.className = "col-5 recipe-img";
      var rightColumn = document.createElement("div");
      rightColumn.className = "recipt-detail col-7";
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

      var goToRecipe = document.createElement("button");
      var id = data[i].id;
      goToRecipe.setAttribute("type", "button");
      goToRecipe.className = "btn btn-link btn-link-2";
      goToRecipe.innerHTML = 'Check Recipe<i class="fa fa-angle-double-right">';
      goToRecipe.addEventListener("click", this.handleCheckRecipe.bind(this, id))
      rightColumn.appendChild(goToRecipe);
    }
  }

  updateByNutrient(data, name) {
    document.querySelector(".close").addEventListener("click", function () {
      document.querySelector("#modal-body").innerHTML = "";
    })

    document.querySelector("#closeModal").addEventListener("click", function () {
      document.querySelector("#modal-body").innerHTML = "";
    })

    if (!data.length) {
      var bodyElement = document.querySelector("#modal-body");
      var text = document.createElement("h5");
      text.textContent = "No result found.";
      bodyElement.appendChild(text);
      return;
    }

    for (let i = 0; i < data.length; i++) {
      var bodyElement = document.querySelector("#modal-body");
      var rowElement = document.createElement("div");
      rowElement.className = "modal-row mt-4";
      bodyElement.appendChild(rowElement);

      var titleElement = document.createElement("div");
      titleElement.className = "recipe-title";
      var createTitle = document.createElement("h5");
      createTitle.textContent = data[i].title;
      titleElement.appendChild(createTitle);
      rowElement.appendChild(titleElement);

      var content = document.createElement("div");
      content.className = "d-flex justify-content-center align-items-start mt-3";
      rowElement.appendChild(content);

      var imgElement = document.createElement("img");
      imgElement.setAttribute("src", data[i].image);
      imgElement.className = "col-5 recipe-img";
      var rightColumn = document.createElement("div");
      rightColumn.className = "recipt-detail col-7";
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

      var goToRecipe = document.createElement("button");
      var id = data[i].id;
      goToRecipe.setAttribute("type", "button");
      goToRecipe.className = "btn btn-link btn-link-2";
      goToRecipe.innerHTML = 'Check Recipe<i class="fa fa-angle-double-right">';
      goToRecipe.addEventListener("click", this.handleCheckRecipe.bind(this, id))
      rightColumn.append(input, calories, carbs, fat, protein, goToRecipe)
    }
  }

  updateRandomModal(data) {
    document.querySelector(".close").addEventListener("click", function () {
      document.querySelector("#modal-body").innerHTML = "";
      document.querySelector("#recipeModalTitle").textContent = "Search Result"
      document.querySelector("#modal-body").className = "mx-4 mb-4"
    })

    document.querySelector("#closeModal").addEventListener("click", function () {
      document.querySelector("#modal-body").innerHTML = "";
      document.querySelector("#recipeModalTitle").textContent = "Search Result"
      document.querySelector("#modal-body").className = "mx-4 mb-4"
    })

    var titleElement = document.querySelector("#recipeModalTitle");
    titleElement.textContent = data.recipes[0].title;

    var bodyElement = document.querySelector("#modal-body");
    bodyElement.className += " d-flex justify-content-between align-items-start mt-3"
    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", data.recipes[0].image);
    imgElement.className = "col-5 recipe-img";
    var rightColumn = document.createElement("div");
    rightColumn.className = "recipt-detail col-7";
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
  }

  updateDetail(data) {
    console.log("success:", data)
  }
}
