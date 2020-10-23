class AppRestaurant {
  constructor(businessTable, searchForm) {
    this.businessTable = businessTable;
    this.searchForm = searchForm;
    this.result = []
    this.searchByLocation = this.searchByLocation.bind(this);
    this.handleSearchSuccess = this.handleSearchSuccess.bind(this);
    this.handleSearchError = this.handleSearchError.bind(this);
  }

  handleSearchSuccess(data) {
    this.result = data.businesses
    this.businessTable.updateTable(this.result);
  }

  handleSearchError(error) {
    console.log(error);
  }

  searchByLocation(location) {
    $.ajax({
      method: "GET",
      headers: { "Authorization": yelpApiKey },
      url: yelpSearchLocationUrl + location,
      success: this.handleSearchSuccess,
      error: this.handleSearchError
    })
  }

  start() {
    this.searchForm.onSubmit(this.searchByLocation);
  }
}
