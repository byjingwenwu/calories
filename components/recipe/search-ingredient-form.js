class IngredientForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSearch = this.handleSearch.bind(this);
    this.formElement.addEventListener("submit", this.handleSearch)
  }

  onSubmit(ingredientSearch) {
    this.ingredientSearch = ingredientSearch;
  }

  handleSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    var input = formData.get("ingredient");
    if (!input) {
      var title = document.querySelector("#recipeModalTitle")
      title.textContent = "Error"
      var body = document.querySelector("#modal-body")
      var error = document.createElement("h6")
      error.className = "theme-color col-12 mt-4"
      error.innerHTML = "Please enter at least one valid ingredient. <br/> For example: chicken, onion, pepper"
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
      this.ingredientSearch(input);
      event.target.reset();
    }
  }
}
