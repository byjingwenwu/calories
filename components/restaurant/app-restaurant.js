class AppRestaurant {
  constructor(businessTable, searchForm) {
    this.businessTable = businessTable;
    this.searchForm = searchForm;
    this.result = []
    this.searchByLocation = this.searchByLocation.bind(this);
    this.handleSearchSuccess = this.handleSearchSuccess.bind(this);
    this.handleSearchError = this.handleSearchError.bind(this);
    this.searchDetail = this.searchDetail.bind(this);
    this.handleDetailSuccess = this.handleDetailSuccess.bind(this);
    this.handleDetailError = this.handleDetailError.bind(this)
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

  handleDetailSuccess(data) {
    window.open(data.url, "modal-window", "height=700, width=1200, top=100, left=100")
  }

  handleDetailError(error) {
    console.log(error);
  }

  searchDetail(id) {
    $.ajax({
      method: "GET",
      headers: {"Authorization": yelpApiKey},
      url: yelpSearchDetail + id,
      success: this.handleDetailSuccess,
      error: this.handleDetailError
    })
  }

  start() {
    this.searchForm.onSubmit(this.searchByLocation);
    this.businessTable.passGetDetail(this.searchDetail)
  }
}
