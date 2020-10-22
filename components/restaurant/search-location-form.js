class SearchForm {
  constructor(formElement) {
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
    if (!location) {
      var modal = document.getElementById("restaurantModal")
      modal.classList.add("d-block")
      var errorTitle = document.getElementById("modalTitle")
      errorTitle.textContent = "Error"
      var errorBody = document.getElementById("modal-body")
      var error = document.createElement("h6")
      error.className = "theme-color col-12 mt-4"
      error.innerHTML = "Please enter an valid zipcode or city name."
      errorBody.append(error)
      document.querySelectorAll("#controlCloseModal").forEach(function () {
        addEventListener("click", function () {
          modal.classList.remove("d-block")
          errorBody.innerHTML = "";
          errorTitle.textContent = ""
        })
      })
      event.stopPropagation();
    } else {
      this.searchByLocation(location);
      event.target.reset();
    }
  }
}
