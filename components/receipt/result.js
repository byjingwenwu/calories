class Information {
  constructor(randomReciptTable, randomSearchForm, searchByIngredientForm) {
    this.randomReciptTable = randomReciptTable;
    this.randomSearchForm = randomSearchForm;
    this.searchByIngredientForm = searchByIngredientForm;
    this.randomSearchReceipt = this.randomSearchReceipt.bind(this);
    this.handleRandomSearchSuccess = this.handleRandomSearchSuccess.bind(this);
    this.handleRandomSearchError = this.handleRandomSearchError.bind(this);
    this.ingredientSearch = this.ingredientSearch.bind(this);
    this.ingredientSearchSuccess = this.ingredientSearchSuccess.bind(this);
    this.ingredientSearchError = this.ingredientSearchError.bind(this);
  }

  handleRandomSearchSuccess(data) {
    this.randomReciptTable.updateTable(data);
    console.log(data);
  }

  handleRandomSearchError(error) {
    console.log(error)
  }

  randomSearchReceipt() {
    $.ajax({
      method: "GET",
      url: "https://api.spoonacular.com/recipes/random?" + spoonacularApiKey + "&number=1",
      success: this.handleRandomSearchSuccess,
      error: this.handleRandomSearchError
    })
  }

  ingredientSearchSuccess(data) {
    this.randomReciptTable.updateByIngredient(data);
    console.log(data)
  }

  ingredientSearchError(error) {
    console.log(error);
  }

  ingredientSearch(ing) {
    $.ajax({
      method: "GET",
      url: "https://api.spoonacular.com/recipes/findByIngredients?" + spoonacularApiKey + "&ingredients=" + ing + "&number=5",
      success: this.ingredientSearchSuccess,
      error: this.ingredientSearchError
    })
  }

  start() {
    this.randomSearchForm.onSubmit(this.randomSearchReceipt);
    this.searchByIngredientForm.onSubmit(this.ingredientSearch);
  }
}
