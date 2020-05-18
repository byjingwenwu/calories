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
    const formData = new FormData(event.currentTarget);
    var ing = formData.get("ingredient");
    this.ingredientSearch(ing);
    event.target.reset();
  }
}
