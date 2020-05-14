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
    var name;
    var sel = document.getElementById("nutrient-name");
    var opt;
    for (var i = 0; i < sel.options.length; i++) {
      var opt = sel.options[i];
      if (opt.selected === true) {
        break;
      }
    }
    name = opt.value;
    var min = document.getElementById("min-nutrient").value;
    var max = document.getElementById("max-nutrient").value;
    this.nutrientSearch(name, min, max);
    event.target.reset();
  }
}
