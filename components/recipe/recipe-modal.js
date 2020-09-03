class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
    this.handleGetMoreRandomRecipe =this.handleGetMoreRandomRecipe.bind(this)
  }

  handleCheckRecipe(id) {
    this.getRecipeInfo(id)
  }

  passGetRecipeInfo(getRecipeInfo) {
    this.getRecipeInfo = getRecipeInfo
  }

  handleGetMoreRandomRecipe() {
    document.querySelector("#modal-body").innerHTML = ""
    document.querySelector("#modal-body").className = "mx-4 mb-4"
    this.randomSearchRecipe()
  }

  passGetMoreRandomRecipe(randomSearchRecipe) {
    this.randomSearchRecipe = randomSearchRecipe
  }

  shuffleData(array) {
    for (let i = array.length - 1; i >0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  loadMoreRecipe(array) {

  }

  updateByIngredient(data) {
    var bodyElement = document.querySelector("#modal-body");
    document.querySelector("#closeModal").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      document.querySelector("#moreButton").classList.remove("d-none")
    })
    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      document.querySelector("#moreButton").classList.remove("d-none")
    })

    if (!data.length) {
      var text = document.createElement("h5");
      text.textContent = "No result found.";
      text.className = "mt-4"
      bodyElement.appendChild(text);
      return;
    }

    if (data.length <= 5) {
      document.querySelector("#moreButton").classList.add("d-none")
    }

    var newData = this.shuffleData(data).slice(0, 5);
    for (let i = 0; i < newData.length; i++) {
      var rowElement = document.createElement("div");
      rowElement.className = "modal-row mt-4";
      bodyElement.appendChild(rowElement);

      var titleElement = document.createElement("div");
      titleElement.className = "recipe-title";
      var createTitle = document.createElement("h5");
      createTitle.textContent = newData[i].title;
      titleElement.appendChild(createTitle);
      rowElement.appendChild(titleElement);

      var content = document.createElement("div");
      content.className = "d-flex justify-content-center align-items-start mt-3";
      rowElement.appendChild(content);

      var imgElement = document.createElement("img");
      imgElement.setAttribute("src", newData[i].image);
      imgElement.className = "col-5 recipe-img";
      var rightColumn = document.createElement("div");
      rightColumn.className = "recipt-detail col-7";
      content.append(imgElement, rightColumn);

      var usedTitle = document.createElement("h6");
      usedTitle.textContent = "Essencial Ingredients";
      rightColumn.appendChild(usedTitle);
      var useArry = newData[i].usedIngredients;
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
      var ingArry = newData[i].missedIngredients;
      for (let n = 0; n < ingArry.length; n++) {
        var ingredients = document.createElement("p");
        ingredients.textContent = ingArry[n].originalString;
        rightColumn.appendChild(ingredients);
      }

      var goToRecipe = document.createElement("button");
      var id = newData[i].id;
      goToRecipe.setAttribute("type", "button");
      goToRecipe.className = "btn btn-link btn-link-2";
      goToRecipe.innerHTML = 'Check Recipe<i class="fa fa-angle-double-right">';
      goToRecipe.addEventListener("click", this.handleCheckRecipe.bind(this, id))
      rightColumn.appendChild(goToRecipe);
    }
  }

  updateByNutrient(data, name) {
    var bodyElement = document.querySelector("#modal-body");
    document.querySelector("#closeModal").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      document.querySelector("#moreButton").classList.remove("d-none")
    })
    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      document.querySelector("#moreButton").classList.remove("d-none")
    })

    if (!data.length) {
      var text = document.createElement("h5");
      text.textContent = "No result found.";
      bodyElement.appendChild(text);
      return;
    }

    if (data.length <= 5) {
      document.querySelector("#moreButton").classList.add("d-none")
    }

    var newData = this.shuffleData(data).slice(0, 5);
    for (let i = 0; i < newData.length; i++) {
      var rowElement = document.createElement("div");
      rowElement.className = "modal-row mt-4";
      bodyElement.appendChild(rowElement);

      var titleElement = document.createElement("div");
      titleElement.className = "recipe-title";
      var createTitle = document.createElement("h5");
      createTitle.textContent = newData[i].title;
      titleElement.appendChild(createTitle);
      rowElement.appendChild(titleElement);

      var content = document.createElement("div");
      content.className = "d-flex justify-content-center align-items-start mt-3";
      rowElement.appendChild(content);

      var imgElement = document.createElement("img");
      imgElement.setAttribute("src", newData[i].image);
      imgElement.className = "col-5 recipe-img";
      var rightColumn = document.createElement("div");
      rightColumn.className = "recipt-detail col-7";
      content.append(imgElement, rightColumn);

      var nutTitle = document.createElement("h6");
      nutTitle.textContent = "Nutrition Facts";
      rightColumn.appendChild(nutTitle);
      for (var value in newData[i]) {
        if (value.toLowerCase() == name.toLowerCase()) {
          var input = document.createElement("div");
          input.textContent = name + ": " + newData[i][value];
        }
      }
      var calories = document.createElement("div");
      calories.textContent = "Calories: " + newData[i].calories
      var carbs = document.createElement("div");
      carbs.textContent = "Carbs: " + newData[i].carbs;
      var fat = document.createElement("div");
      fat.textContent = "Fat: " + newData[i].fat;
      var protein = document.createElement("div");
      protein.textContent = "Protein: " + newData[i].protein;

      var goToRecipe = document.createElement("button");
      var id = newData[i].id;
      goToRecipe.setAttribute("type", "button");
      goToRecipe.className = "btn btn-link btn-link-2";
      goToRecipe.innerHTML = 'Check Recipe<i class="fa fa-angle-double-right">';
      goToRecipe.addEventListener("click", this.handleCheckRecipe.bind(this, id))
      rightColumn.append(input, calories, carbs, fat, protein, goToRecipe)
    }
  }

  updateRandomModal(data) {
    var titleElement = document.querySelector("#recipeModalTitle");
    titleElement.textContent = data.recipes[0].title;

    var bodyElement = document.querySelector("#modal-body");
    bodyElement.className = "mx-4 mb-4 d-flex justify-content-between align-items-start mt-3"
    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", data.recipes[0].image);
    imgElement.className = "col-5 recipe-img";
    var rightColumn = document.createElement("div");
    rightColumn.className = "recipt-detail col-7";
    bodyElement.append(imgElement, rightColumn);

    var cuisineTitle = document.createElement("h6");
    cuisineTitle.className = "theme-color"
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
    summaryTitle.className = "theme-color mt-2"
    summaryTitle.textContent = "Summary:";
    var summaryElement = document.createElement("div");
    summaryElement.innerHTML = data.recipes[0].summary;
    var cookingTime = document.createElement("h6");
    cookingTime.className = "theme-color mt-2"
    cookingTime.textContent = "Ready in Minutes: " + data.recipes[0].readyInMinutes + " min.";
    var serveSize = document.createElement("h6");
    serveSize.className = "theme-color mt-2";
    serveSize.textContent = "Servings: " + data.recipes[0].servings;
    rightColumn.append(summaryTitle, summaryElement, cookingTime, serveSize);

    var ingredientsTitle = document.createElement("h6");
    ingredientsTitle.className = "theme-color mt-2";
    ingredientsTitle.textContent = "Ingresients:";
    var extendedIngredients = document.createElement("ul");
    for (let i = 0; i < data.recipes[0].extendedIngredients.length; i++) {
      var ingredients = document.createElement("li");
      ingredients.textContent = data.recipes[0].extendedIngredients[i].original;
      extendedIngredients.appendChild(ingredients);
    }
    rightColumn.append(ingredientsTitle, extendedIngredients);

    if (data.recipes[0].analyzedInstructions.length) {
      var instructionTitle = document.createElement("h6")
      instructionTitle.className = "theme-color"
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

    document.querySelector("#moreButton").addEventListener("click", this.handleGetMoreRandomRecipe)

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
    document.querySelector("#modal-body").innerHTML = "";

    var titleElement = document.querySelector("#recipeModalTitle");
    titleElement.textContent = data.title;

    var bodyElement = document.querySelector("#modal-body");
    var bodyContent = document.createElement("div")
    bodyContent.className ="col-12 mt-4"
    bodyElement.appendChild(bodyContent)

    var picture = document.createElement("img");
    picture.setAttribute("src", data.image)
    var cookingTime = document.createElement("h6");
    cookingTime.className = "theme-color mt-3"
    cookingTime.textContent = "Ready in Minutes: " + data.readyInMinutes + " min.";
    var serveSize = document.createElement("h6");
    serveSize.className = "theme-color mt-3"
    serveSize.textContent = "Servings: " + data.servings;
    var dishType = document.createElement("h6");
    dishType.className = "theme-color mt-3"
    dishType.textContent = "Dish Type: " + data.dishTypes[0];
    var summaryTitle = document.createElement("h6");
    summaryTitle.className = "theme-color mt-3"
    summaryTitle.textContent = "Summary:";
    var summaryElement = document.createElement("div");
    summaryElement.innerHTML = data.summary;
    var extendedTitle = document.createElement("h6");
    extendedTitle.className = "theme-color mt-3"
    extendedTitle.textContent = "Extend Ingredients:";
    var extendedIngredients = document.createElement("ul");
    for (let i = 0; i < data.extendedIngredients.length; i++) {
      var ingredients = document.createElement("li");
      ingredients.textContent = data.extendedIngredients[i].original;
      extendedIngredients.append(ingredients)
    }

    bodyContent.append(picture, cookingTime, serveSize, dishType, summaryTitle, summaryElement,
      extendedTitle, extendedIngredients)

    if (data.analyzedInstructions.length) {
      var instructionTitle = document.createElement("h6")
      instructionTitle.className = "theme-color mt-3"
      instructionTitle.textContent = "Instruction:"
      var instructions = document.createElement("ol")
      for (let i = 0; i < data.analyzedInstructions.length; i++) {
        data.analyzedInstructions[i].steps.map(x => {
          var item = document.createElement("li")
          item.textContent = x.step
          instructions.appendChild(item)
        })
      }
      bodyContent.append(instructionTitle, instructions)
    } else {
      var noInstruction = document.createElement("div")
      noInstruction.textContent = "No detailed instruction provided."
      bodyContent.append(noInstruction)
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
