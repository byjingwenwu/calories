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
      var title = document.querySelector("#recipeModalTitle")
      title.textContent = "Error"
      var body = document.querySelector("#modal-body")
      var error = document.createElement("h6")
      error.className = "theme-color col-12 mt-4"
      error.textContent = "Please choose a nutrient and enter valid minimum and maximum values."
      body.append(error)
      document.querySelector("#close-button").addEventListener("click", function () {
        body.innerHTML = "";
        title.textContent = ""
      })
      document.querySelector(".close").addEventListener("click", function () {
        body.innerHTML = "";
        title.textContent = ""
      })
      event.stopPropagation();
    } else {
      this.nutrientSearch(name, min, max);
      event.target.reset();
    }
  }
}
