class Information {
  constructor(randomRecipeTable, randomSearchForm, searchByIngredientForm, searchByNutrientForm) {
    this.randomRecipeTable = randomRecipeTable;
    this.randomSearchForm = randomSearchForm;
    this.searchByIngredientForm = searchByIngredientForm;
    this.searchByNutrientForm = searchByNutrientForm;

    this.randomSearchRecipe = this.randomSearchRecipe.bind(this);
    this.randomSearchSuccess = this.randomSearchSuccess.bind(this);
    this.randomSearchError = this.randomSearchError.bind(this);
    this.ingredientSearch = this.ingredientSearch.bind(this);
    this.ingredientSearchSuccess = this.ingredientSearchSuccess.bind(this);
    this.ingredientSearchError = this.ingredientSearchError.bind(this);
    this.nutrientSearch = this.nutrientSearch.bind(this);
    this.nutrientSearchSuccess = this.nutrientSearchSuccess.bind(this);
    this.nutrientSearchError = this.nutrientSearchError.bind(this);
  }

  randomSearchSuccess(data) {
    this.randomRecipeTable.updateRandomModal(data);
  }

  randomSearchError(error) {
    console.log(error)
  }

  randomSearchRecipe() {
    $.ajax({
      method: "GET",
      url: "https://api.spoonacular.com/recipes/random?" + spoonacularApiKey + "&number=1",
      success: this.randomSearchSuccess,
      error: this.randomSearchError
    })
  }

  ingredientSearchSuccess(data) {
    this.randomRecipeTable.updateByIngredient(data);
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
    this.randomRecipeTable.updateByNutrient(data, name);
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
    this.randomSearchForm.onSubmit(this.randomSearchRecipe);
    this.searchByIngredientForm.onSubmit(this.ingredientSearch);
    this.searchByNutrientForm.onSubmit(this.nutrientSearch);
  }
}
