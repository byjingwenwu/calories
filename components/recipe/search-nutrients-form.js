class NutrientForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleNutrientSearch = this.handleNutrientSearch.bind(this);
    this.formElement.addEventListener("submit", this.handleNutrientSearch)
  }

  onSubmit(nutrientSearch) {
    this.nutrientSearch = nutrientSearch;
  }

  handleNutrientSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    var name = formData.get("nutrient-name");
    var min = formData.get("min-nutrient");
    var max = formData.get("max-nutrient");
    if (!name || !min || !max) {
      var modal = document.getElementById("recipeModal")
      modal.classList.add("d-block")
      var errorTitle = document.querySelector("#modal-title")
      errorTitle.textContent = "Error"
      var modalBody = document.querySelector("#modal-body")
      var errorBody = document.createElement("h6")
      errorBody.className = "theme-color col-12 mt-4"
      errorBody.textContent = "Please choose a nutrient and enter valid minimum and maximum values."
      modalBody.append(errorBody)
      var closeButton = document.querySelectorAll("#control-close-modal")
      for (let i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener("click", function () {
          modal.classList.remove("d-block")
          errorBody.innerHTML = "";
          errorTitle.textContent = ""
        })
      }
      event.stopPropagation();
    } else {
      this.nutrientSearch(name, min, max);
      event.target.reset();
    }
  }
}
