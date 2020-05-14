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
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    var name = formData.get("nutrient-name");
    var min = formData.get("min-nutrient");
    var max = formData.get("max-nutrient");
    this.nutrientSearch(name, min, max);
    event.target.reset();
  }
}
