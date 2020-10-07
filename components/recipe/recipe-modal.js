class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
    this.handleGetMoreRandomRecipe = this.handleGetMoreRandomRecipe.bind(this)
  }

  handleCheckRecipe(id) {
    document.querySelector("#modal-body").innerHTML = "";
    document.querySelector("#more-button").parentNode.removeChild(document.querySelector("#more-button"))
    this.getRecipeInfo(id)
  }

  passGetRecipeInfo(getRecipeInfo) {
    this.getRecipeInfo = getRecipeInfo
  }

  handleGetMoreRandomRecipe() {
    document.querySelector("#recipeModalTitle").textContent = ""
    document.querySelector("#modal-body").innerHTML = ""
    document.querySelector("#modal-body").className = "mx-4 mb-4"
    document.querySelector("#more-button").parentNode.removeChild(document.querySelector("#more-button"))
    this.randomSearchRecipe()
  }

  passGetMoreRandomRecipe(randomSearchRecipe) {
    this.randomSearchRecipe = randomSearchRecipe
  }

  shuffleData(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  loadMoreRecipe() {
    var list = document.querySelectorAll(".modal-row.d-none")
    for (let i = 0; i < 5; i++) {
      list[i].classList.remove("d-none")
    }
    var list2 = document.querySelectorAll(".modal-row.d-none")
    if (list2.length <= 5) {
      document.querySelector("#more-button").remove()
    }
  }

  updateByIngredient(data) {
    var bodyElement = document.querySelector("#modal-body");
    var titleElement = document.querySelector("#recipeModalTitle");
    titleElement.textContent = "Search Result"
    var footer = document.querySelector(".modal-footer")
    var newData = this.shuffleData(data);

    if (!data.length) {
      var text = document.createElement("h5");
      text.textContent = "No result found.";
      text.className = "mt-4"
      bodyElement.appendChild(text);
    } else {
      for (let i = 0; i < newData.length; i++) {
        var rowElement = document.createElement("div");
        rowElement.className = "modal-row mt-4";
        if (i >= 5) {
          rowElement.classList.add("d-none")
        }
        bodyElement.appendChild(rowElement);

        var title = document.createElement("div");
        title.className = "recipe-title";
        var createTitle = document.createElement("h5");
        createTitle.textContent = newData[i].title;
        title.appendChild(createTitle);
        rowElement.appendChild(title);

        var content = document.createElement("div");
        content.className = "d-flex justify-content-center align-items-start mt-3";
        rowElement.appendChild(content);

        var leftColumn = document.createElement("div")
        leftColumn.className = "col-5"
        var imgElement = document.createElement("img");
        imgElement.setAttribute("src", newData[i].image);
        imgElement.className = "w-100";
        leftColumn.appendChild(imgElement)
        var rightColumn = document.createElement("div");
        rightColumn.className = "recipt-detail col-7";
        content.append(leftColumn, rightColumn);

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

      if (data.length > 5) {
        var moreButton = document.createElement("button")
        moreButton.setAttribute("type", "button")
        moreButton.setAttribute("id", "more-button")
        moreButton.setAttribute("class", "btn btn-dark btnAdj btnModal")
        moreButton.textContent = "More"
        moreButton.addEventListener("click", this.loadMoreRecipe)
        footer.prepend(moreButton)
      }
    }

    document.querySelector("#close-button").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      titleElement.textContent = ""
      if (document.querySelector("#more-button")) {
        document.querySelector("#more-button").remove()
      }
    })
    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      titleElement.textContent = ""
      if (document.querySelector("#more-button")) {
        document.querySelector("#more-button").remove()
      }
    })
  }

  updateByNutrient(data, name) {
    var bodyElement = document.querySelector("#modal-body");
    var titleElement = document.querySelector("#recipeModalTitle");
    titleElement.textContent = "Search Result"
    var footer = document.querySelector(".modal-footer")
    var newData = this.shuffleData(data);

    if (!data.length) {
      var text = document.createElement("h5");
      text.textContent = "No result found.";
      bodyElement.appendChild(text);
    } else {
      for (let i = 0; i < newData.length; i++) {
        var rowElement = document.createElement("div");
        rowElement.className = "modal-row mt-4";
        if (i >= 5) {
          rowElement.classList.add("d-none")
        }
        bodyElement.appendChild(rowElement);

        var title = document.createElement("div");
        title.className = "recipe-title";
        var createTitle = document.createElement("h5");
        createTitle.textContent = newData[i].title;
        title.appendChild(createTitle);
        rowElement.appendChild(title);

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
      if (data.length > 5) {
        var moreButton = document.createElement("button")
        moreButton.setAttribute("type", "button")
        moreButton.setAttribute("id", "more-button")
        moreButton.setAttribute("class", "btn btn-dark btnAdj btnModal")
        moreButton.textContent = "More"
        moreButton.addEventListener("click", this.loadMoreRecipe)
        footer.prepend(moreButton)
      }
    }
    document.querySelector("#close-button").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      titleElement.textContent = ""
      if (document.querySelector("#more-button")) {
        document.querySelector("#more-button").remove()
      }
    })
    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      titleElement.textContent = ""
      if (document.querySelector("#more-button")) {
        document.querySelector("#more-button").remove()
      }
    })
  }

  updateRandomModal(data) {
    var titleElement = document.querySelector("#recipeModalTitle");
    titleElement.textContent = data.title;

    var bodyElement = document.querySelector("#modal-body");
    bodyElement.className = "mx-4 mb-4 d-flex justify-content-between align-items-start mt-3"
    var leftColumn = document.createElement("div")
    leftColumn.className = "col-5"
    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", data.image);
    imgElement.className = "w-100";

    var likeButton = document.createElement("i")
    likeButton.setAttribute("class", "far fa-heart mt-2 theme-color likeButton")
    likeButton.setAttribute("id", "likeButton")
    likeButton.addEventListener("click", function () {
      var list = event.currentTarget.classList
      list.toggle("fas")
      if (list.contains("fas")) {
        localStorage.setItem(data.title, JSON.stringify(data))
      } else {
        localStorage.removeItem(data.title)
      }
    }, false)
    leftColumn.append(imgElement, likeButton)
    var rightColumn = document.createElement("div");
    rightColumn.className = "recipt-detail col-7";
    bodyElement.append(leftColumn, rightColumn);

    var cuisineTitle = document.createElement("h6");
    cuisineTitle.className = "theme-color"
    var cusinesName = "";
    for (let i = 0; i < data.cuisines.length; i++) {
      cusinesName += data.cuisines[i] + " ";
    }
    if (data.cuisines.length !== 0) {
      cuisineTitle.textContent = "Cuisines: " + cusinesName;
      rightColumn.appendChild(cuisineTitle);
    }

    var summaryTitle = document.createElement("h6");
    summaryTitle.className = "theme-color mt-2"
    summaryTitle.textContent = "Summary:";
    var summaryElement = document.createElement("div");
    summaryElement.innerHTML = data.summary;
    var cookingTime = document.createElement("h6");
    cookingTime.className = "theme-color mt-2"
    cookingTime.textContent = "Ready in Minutes: " + data.prepTime + " min.";
    var serveSize = document.createElement("h6");
    serveSize.className = "theme-color mt-2";
    serveSize.textContent = "Servings: " + data.servings;
    rightColumn.append(summaryTitle, summaryElement, cookingTime, serveSize);

    var ingredientsTitle = document.createElement("h6");
    ingredientsTitle.className = "theme-color mt-2";
    ingredientsTitle.textContent = "Ingresients:";
    var extendedIngredients = document.createElement("ul");
    for (let i = 0; i < data.ingredients.length; i++) {
      var ingredients = document.createElement("li");
      ingredients.textContent = data.ingredients[i].original;
      extendedIngredients.appendChild(ingredients);
    }
    rightColumn.append(ingredientsTitle, extendedIngredients);

    if (data.instruction.length) {
      var instructionTitle = document.createElement("h6")
      instructionTitle.className = "theme-color"
      instructionTitle.textContent = "Instruction:"
      var instructions = document.createElement("ol")
      for (let i = 0; i < data.instruction.length; i++) {
        data.instruction[i].steps.map(x => {
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

    var footer = document.querySelector(".modal-footer")
    var moreButton = document.createElement("button")
    moreButton.setAttribute("type", "button")
    moreButton.setAttribute("id", "more-button")
    moreButton.setAttribute("class", "btn btn-dark btnAdj btnModal")
    moreButton.textContent = "More"
    moreButton.addEventListener("click", this.handleGetMoreRandomRecipe)
    footer.prepend(moreButton)

    document.querySelector("#close-button").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      bodyElement.className = "mx-4 mb-4";
      titleElement.textContent = ""
      moreButton.remove()
    })

    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      bodyElement.className = "mx-4 mb-4";
      titleElement.textContent = ""
      moreButton.remove()
    })
  }

  updateDetail(data) {
    var titleElement = document.querySelector("#recipeModalTitle");
    titleElement.textContent = data.title;

    var bodyElement = document.querySelector("#modal-body");
    var bodyContent = document.createElement("div")
    bodyContent.className = "col-12 mt-4"
    bodyElement.appendChild(bodyContent)

    var picture = document.createElement("img");
    picture.setAttribute("src", data.image)
    picture.className = "w-100"

    var likeButton = document.createElement("i")
    likeButton.setAttribute("class", "far fa-heart mt-3 theme-color likeButton")
    likeButton.setAttribute("id", "likeButton")
    likeButton.addEventListener("click", function () {
      var list = event.currentTarget.classList
      list.toggle("fas")
      if (list.contains("fas")) {
        localStorage.setItem(data.title, JSON.stringify(data))
      } else {
        localStorage.removeItem(data.title)
      }
    }, false)

    var cookingTime = document.createElement("h6");
    cookingTime.className = "theme-color mt-3"
    cookingTime.textContent = "Ready in Minutes: " + data.prepTime + " min.";
    var serveSize = document.createElement("h6");
    serveSize.className = "theme-color mt-3"
    serveSize.textContent = "Servings: " + data.servings;
    var dishType = document.createElement("h6");
    dishType.className = "theme-color mt-3"
    dishType.textContent = "Dish Type: " + data.dishTypes[0];

    var cuisineTitle = document.createElement("h6");
    cuisineTitle.className = "theme-color"
    var cusinesName = "";
    for (let i = 0; i < data.cuisines.length; i++) {
      cusinesName += data.cuisines[i] + " ";
    }
    if (data.cuisines.length !== 0) {
      cuisineTitle.textContent = "Cuisines: " + cusinesName;
      bodyContent.appendChild(cuisineTitle);
    }

    var summaryTitle = document.createElement("h6");
    summaryTitle.className = "theme-color mt-3"
    summaryTitle.textContent = "Summary:";
    var summaryElement = document.createElement("div");
    summaryElement.innerHTML = data.summary;
    var extendedTitle = document.createElement("h6");
    extendedTitle.className = "theme-color mt-3"
    extendedTitle.textContent = "Extend Ingredients:";
    var extendedIngredients = document.createElement("ul");
    for (let i = 0; i < data.ingredients.length; i++) {
      var ingredients = document.createElement("li");
      ingredients.textContent = data.ingredients[i].original;
      extendedIngredients.append(ingredients)
    }

    bodyContent.append(picture, likeButton, cookingTime, serveSize, dishType, summaryTitle, summaryElement,
      extendedTitle, extendedIngredients)

    if (data.instruction.length) {
      var instructionTitle = document.createElement("h6")
      instructionTitle.className = "theme-color mt-3"
      instructionTitle.textContent = "Instruction:"
      var instructions = document.createElement("ol")
      for (let i = 0; i < data.instruction.length; i++) {
        data.instruction[i].steps.map(x => {
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

    // var footer = document.querySelector(".modal-footer")
    // var backButton = document.createElement("button")
    // backButton.setAttribute("type", "button")
    // backButton.setAttribute("id", "back-button")
    // backButton.setAttribute("class", "btn btn-dark btnAdj btnModal")
    // backButton.textContent = "Back"
    // footer.prepend(backButton)

    document.querySelector("#close-button").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      bodyElement.className = "mx-4 mb-4";
      titleElement.textContent = ""
      // backButton.remove()
    })

    document.querySelector(".close").addEventListener("click", function () {
      bodyElement.innerHTML = "";
      bodyElement.className = "mx-4 mb-4";
      titleElement.textContent = ""
      // backButton.remove()
    })
  }
}
