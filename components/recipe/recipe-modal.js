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
    document.querySelector("#closeModal").addEventListener("click", function () {
      bodyElement.innerHTML = "";
    })
    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
    })
  }

  updateByNutrient(data, name) {
    console.log(data)
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
    document.querySelector("#closeModal").addEventListener("click", function () {
      bodyElement.innerHTML = "";
    })
    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
    })
  }

  updateRandomModal(data) {
    console.log(data)
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
    summaryTitle.textContent = "Summary:";
    var summaryElement = document.createElement("div");
    summaryElement.innerHTML = data.recipes[0].summary;
    var cookingTime = document.createElement("h6");
    cookingTime.textContent = "Ready in Minutes: " + data.recipes[0].readyInMinutes + " min.";
    var serveSize = document.createElement("h6");
    serveSize.textContent = "Servings: " + data.recipes[0].servings;
    rightColumn.append(summaryTitle, summaryElement, cookingTime, serveSize);

    var ingredientsTitle = document.createElement("h6");
    ingredientsTitle.textContent = "Ingresients:";
    var extendedIngredients = document.createElement("ul");
    for (let i = 0; i < data.recipes[0].extendedIngredients.length; i++) {
      var ingredients = document.createElement("li");
      ingredients.textContent = data.recipes[0].extendedIngredients[i].original;
      extendedIngredients.appendChild(ingredients);
    }
    rightColumn.append(ingredientsTitle,extendedIngredients);

    if (data.recipes[0].analyzedInstructions.length) {
      var instructionTitle = document.createElement("h6")
      instructionTitle.textContent = "Instruction:"
      var instructions = document.createElement("ol")
      for (let i = 0; i < data.recipes[0].analyzedInstructions.length; i++) {
        data.recipes[0].analyzedInstructions[i].steps.map(x => {
          var item = document.createElement("li")
          item.textContent = x.step
          instructions.appendChild(item)
        })
      }
      rightColumn.append(instructionTitle, instructions);
    } else {
      var noInstruction = document.createElement("div")
      noInstruction.textContent = "No detailed instruction provided."
      rightColumn.append(noInstruction)
    }

    document.querySelector("#closeModal").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      bodyElement.className = "mx-4 mb-4";
      titleElement.textContent = "Search Result"
    })

    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      bodyElement.className = "mx-4 mb-4";
      titleElement.textContent = "Search Result"
    })
  }

  updateDetail(data) {
    console.log(data)
    document.querySelector("#modal-body").innerHTML = "";

    var titleElement = document.querySelector("#recipeModalTitle");
    titleElement.textContent = data.title;

    var bodyElement = document.querySelector("#modal-body");
    bodyElement.className += " mt-4"
    var picture = document.createElement("img");
    picture.setAttribute("src", data.image)
    var cookingTime = document.createElement("h6");
    cookingTime.textContent = "Ready in Minutes: " + data.readyInMinutes + " min.";
    var serveSize = document.createElement("h6");
    serveSize.textContent = "Servings: " + data.servings;
    var dishType = document.createElement("h6");
    dishType.textContent = "Dish Type: " + data.dishTypes[0];
    var summaryTitle = document.createElement("h6");
    summaryTitle.textContent = "Summary:";
    var summaryElement = document.createElement("div");
    summaryElement.innerHTML = data.summary;
    var extendedTitle = document.createElement("h6");
    extendedTitle.textContent = "Extend Ingredients:";
    var extendedIngredients = document.createElement("ul");
    for (let i = 0; i < data.extendedIngredients.length; i++) {
      var ingredients = document.createElement("li");
      ingredients.textContent = data.extendedIngredients[i].original;
      extendedIngredients.append(ingredients)
    }

    bodyElement.append(picture, cookingTime, serveSize, dishType, summaryTitle, summaryElement,
      extendedTitle, extendedIngredients)

    if (data.analyzedInstructions.length) {
      var instructionTitle = document.createElement("h6")
      instructionTitle.textContent = "Instruction:"
      var instructions = document.createElement("ol")
      for (let i = 0; i < data.analyzedInstructions.length; i++) {
        data.analyzedInstructions[i].steps.map(x => {
          var item = document.createElement("li")
          item.textContent = x.step
          instructions.appendChild(item)
        })
      }
      bodyElement.append(instructionTitle, instructions)
    } else {
      var noInstruction = document.createElement("div")
      noInstruction.textContent = "No detailed instruction provided."
      bodyElement.append(noInstruction)
    }

    document.querySelector("#closeModal").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      bodyElement.className = "mx-4 mb-4";
      titleElement.textContent = "Search Result"
    })

    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      bodyElement.className = "mx-4 mb-4";
      titleElement.textContent = "Search Result"
    })
  }
}
