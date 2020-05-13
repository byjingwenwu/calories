class IngredientForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleIngredientSearch = this.handleIngredientSearch.bind(this);
    this.formElement.addEventListener("submit", this.handleIngredientSearch)
  }

  onSubmit(ingredientSearch) {
    this.ingredientSearch = ingredientSearch;
  }

  handleIngredientSearch(event) {
    event.preventDefault();
    var ing = document.getElementById("receipt-ingredient").value;
    this.ingredientSearch(ing);
    event.target.reset();
  }
}
