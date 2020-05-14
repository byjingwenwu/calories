class Information {
  constructor(randomReciptTable, randomSearchForm, searchByIngredientForm, searchByNutrientForm) {
    this.randomReciptTable = randomReciptTable;
    this.randomSearchForm = randomSearchForm;
    this.searchByIngredientForm = searchByIngredientForm;
    this.searchByNutrientForm = searchByNutrientForm;

    this.randomSearchReceipt = this.randomSearchReceipt.bind(this);
    this.handleRandomSearchSuccess = this.handleRandomSearchSuccess.bind(this);
    this.handleRandomSearchError = this.handleRandomSearchError.bind(this);
    this.ingredientSearch = this.ingredientSearch.bind(this);
    this.ingredientSearchSuccess = this.ingredientSearchSuccess.bind(this);
    this.ingredientSearchError = this.ingredientSearchError.bind(this);
    this.nutrientSearch = this.nutrientSearch.bind(this);
    this.nutrientSearchSuccess = this.nutrientSearchSuccess.bind(this);
    this.nutrientSearchError = this.nutrientSearchError.bind(this);
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
    console.log(data);
  }

  ingredientSearchError(error) {
    console.log(error);
  }

  ingredientSearch(ing) {
    $.ajax({
      method: "GET",
      url: "https://api.spoonacular.com/recipes/findByIngredients?" + spoonacularApiKey + "&ingredients=" + ing + "&random=true&number=5",
      success: this.ingredientSearchSuccess,
      error: this.ingredientSearchError
    })
  }

  nutrientSearchSuccess(data, name) {
    this.randomReciptTable.updateByNutrient(data, name);
    console.log(data);
  }

  nutrientSearchError(error) {
    console.log(error);
  }

  nutrientSearch(name, min, max) {
    $.ajax({
      method: "GET",
      url: "https://api.spoonacular.com/recipes/findByNutrients?" + spoonacularApiKey + "&min" + name + "=" + min + "&max" + name + "=" + max + "&number=5",
      success: (data) => this.nutrientSearchSuccess(data, name),
      error: this.nutrientSearchError
    })
  }

  start() {
    this.randomSearchForm.onSubmit(this.randomSearchReceipt);
    this.searchByIngredientForm.onSubmit(this.ingredientSearch);
    this.searchByNutrientForm.onSubmit(this.nutrientSearch);
  }
}
