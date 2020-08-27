class App {
  constructor(resultModal, randomSearchForm, searchByIngredientForm, searchByNutrientForm) {
    this.resultModal = resultModal;
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
    this.getRecipeInfo = this.getRecipeInfo.bind(this);
    this.getRecipeInfoSuccess = this.getRecipeInfoSuccess.bind(this);
    this.getRecipeInfoError = this.getRecipeInfoError.bind(this)
  }

  randomSearchSuccess(data) {
    this.resultModal.updateRandomModal(data);
  }

  randomSearchError(error) {
    console.error(error)
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
    this.resultModal.updateByIngredient(data);
  }

  ingredientSearchError(error) {
    console.error(error);
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
    this.resultModal.updateByNutrient(data, name);
  }

  nutrientSearchError(error) {
    console.error(error);
  }

  nutrientSearch(name, min, max) {
    $.ajax({
      method: "GET",
      url: "https://api.spoonacular.com/recipes/findByNutrients?" + spoonacularApiKey + "&min" + name + "=" + min + "&max" + name + "=" + max + "&number=5",
      success: (data) => this.nutrientSearchSuccess(data, name),
      error: this.nutrientSearchError
    })
  }

  getRecipeInfo(id) {
    $.ajax({
      method: "GET",
      url: "https://api.spoonacular.com/recipes/" + id + "/information?" + spoonacularApiKey,
      success: (data) => this.getRecipeInfoSuccess(data),
      error: this.getRecipeInfoError
    })
  }

  getRecipeInfoSuccess(data) {
    this.resultModal.updateDetail(data);
  }

  getRecipeInfoError(error) {
    console.error(error);
  }

  start() {
    this.randomSearchForm.onSubmit(this.randomSearchRecipe);
    this.searchByIngredientForm.onSubmit(this.ingredientSearch);
    this.searchByNutrientForm.onSubmit(this.nutrientSearch);
    this.resultModal.passGetRecipeInfo(this.getRecipeInfo);
    this.resultModal.passGetMoreRecipe(this.randomSearchRecipe)
  }
}
