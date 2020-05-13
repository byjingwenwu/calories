class SearchByLocation {
  constructor(businessTable) {
    this.businessTable = businessTable;
    // this.searchForm = searchForm;
    this.searchRestaurant = this.searchRestaurant.bind(this);
    this.handleSearchSuccess = this.handleSearchSuccess.bind(this);
    this.handleSearchError = this.handleSearchError.bind(this);
  }

  handleSearchSuccess(data) {
    this.businessTable.updateTable(data);
    console.log(data.businesses);
  }

  handleSearchError(error) {
    console.log(error);
  }

  searchRestaurant() {
    $.ajax({
      method: "GET",
      headers: { "Authorization": yelpApiKey },
      url: yelpSearchLocationUrl,
      success: this.handleSearchSuccess,
      error: this.handleSearchError
    })
  }

  start() {
    this.searchRestaurant();
  }
}
