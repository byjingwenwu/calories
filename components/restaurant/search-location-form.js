class SearchForm {
  constructor (formElement) {
    this.formElement = formElement;
    this.handleSearch = this.handleSearch.bind(this);
    this.formElement.addEventListener("submit", this.handleSearch);
  }

  onSubmit(searchByLocation) {
    this.searchByLocation = searchByLocation;
  }

  handleSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    var location = formData.get("search-restaurant");
    this.searchByLocation(location);
    event.target.reset();
  }
}
