class SearchByLocation {
  constructor(businessTable, searchForm) {
    this.businessTable = businessTable;
    this.searchForm = searchForm;
    this.searchRestaurant = this.searchRestaurant.bind(this);
    this.handleSearchSuccess = this.handleSearchSuccess.bind(this);
    this.handleSearchError = this.handleSearchError.bind(this);
  }

  handleSearchSuccess(data) {
    this.businessTable.updateTable(data);
  }

  handleSearchError(error) {
    console.log(error);
  }

  searchRestaurant(location) {
    $.ajax({
      method: "GET",
      headers: { "Authorization": yelpApiKey },
      url: yelpSearchLocationUrl + location,
      success: this.handleSearchSuccess,
      error: this.handleSearchError
    })
  }

  start() {
    this.searchForm.onSubmit(this.searchRestaurant);
  }
}
