class RandomMenu {
  constructor(randomReciptTable, randomSearchForm) {
    this.randomReciptTable = randomReciptTable;
    this.randomSearchForm = randomSearchForm;
    this.randomSearchReceipt = this.randomSearchReceipt.bind(this);
    this.handleRandomSearchSuccess = this.handleRandomSearchSuccess.bind(this);
    this.handleRandomSearchError = this.handleRandomSearchError.bind(this);
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

  start() {
    this.randomSearchForm.onSubmit(this.randomSearchReceipt);
  }
}
