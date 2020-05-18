class RandomForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleRandomSearch = this.handleRandomSearch.bind(this);
    this.formElement.addEventListener("submit", this.handleRandomSearch)
  }

  onSubmit(randomSearchRecipe) {
    this.randomSearchRecipe = randomSearchRecipe;
  }

  handleRandomSearch(event) {
    event.preventDefault();
    this.randomSearchRecipe();
    event.target.reset();
  }
}
