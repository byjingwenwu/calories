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
    this.ingredientSearch(input);
    event.target.reset();
  }
}
