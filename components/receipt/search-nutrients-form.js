class NutrientForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleNutrientSearch = this.handleNutrientSearch.bind(this);
    this.formElement.addEventListener("submit", this.handleNutrientSearch)
  }

  onSubmit(nutrientSearch) {
    this.nutrientSearch = nutrientSearch;
  }

  handleNutrientSearch(event) {
    event.preventDefault();
    var name = document.getElementById("nutrient-name").value;
    var min = document.getElementById("min-nutrient").value;
    var max = document.getElementById("max-nutrient").value;
    this.nutrientSearch(name, min, max);
    event.target.reset();
  }
}
