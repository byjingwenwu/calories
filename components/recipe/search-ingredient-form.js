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
      var modal = document.getElementById("recipeModal")
      modal.classList.add("d-block")
      var errorTitle = document.querySelector("#modal-title")
      errorTitle.textContent = "Error"
      var modalBody = document.querySelector("#modal-body")
      var errorBody = document.createElement("h6")
      errorBody.className = "theme-color col-12 mt-4"
      errorBody.innerHTML = "Please enter at least one valid ingredient. <br/> For example: chicken, onion, pepper"
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
      this.ingredientSearch(input);
      event.target.reset();
    }
  }
}
