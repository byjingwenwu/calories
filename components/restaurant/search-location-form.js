class SearchForm {
  constructor (formElement) {
    this.formElement = formElement;
    this.handleSearch = this.handleSearch.bind(this);
    this.formElement.addEventListener("submit", this.handleSearch);
  }

  onSubmit(searchRestaurant) {
    this.searchRestaurant = searchRestaurant;
  }

  handleSearch(event) {
    event.preventDefault();
    var location = document.getElementById("search-location-input").value;
    this.searchRestaurant(location);
    event.target.reset();
  }
}
