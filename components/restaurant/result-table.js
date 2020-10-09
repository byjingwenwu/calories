class Business {
  constructor(tableElement) {
    this.tableElement = tableElement
  }

  updateTable(data) {
    var tableElement = document.getElementById("resultBusinessTable");
    tableElement.innerHTML = "";
    var tableHeader = document.createElement("thead");
    tableHeader.className = "thead-dark";
    var tableBody = document.createElement("tbody");
    tableElement.append(tableHeader, tableBody);
    var tableHeaderRow = document.createElement("tr");
    tableHeader.appendChild(tableHeaderRow);
    var headerNameCell = document.createElement("th");
    headerNameCell.textContent = "Name";
    var headerAddressCell = document.createElement("th");
    headerAddressCell.textContent = "Address";
    var headerDistanceCell = document.createElement("th");
    headerDistanceCell.textContent = "Distance";
    var headerPhoneCell = document.createElement("th");
    headerPhoneCell.textContent = "Phone";
    var headerRateCell = document.createElement("th");
    headerRateCell.textContent = "Rate";
    var headerPriceCell = document.createElement("th");
    headerPriceCell.textContent = "Price";
    var headerSaveCell = document.createElement("th");
    tableHeaderRow.append(headerNameCell, headerAddressCell, headerDistanceCell, headerPhoneCell, headerRateCell, headerPriceCell, headerSaveCell)

    for (let i = 0; i < data.businesses.length; i++) {
      var tableBodyRow = document.createElement("tr");
      tableBody.appendChild(tableBodyRow);
      var bodyNameCell = document.createElement("td");
      bodyNameCell.textContent = data.businesses[i].name;
      var bodyAddressCell = document.createElement("td");
      bodyAddressCell.textContent = data.businesses[i].location.display_address;
      var bodyDistanceCell = document.createElement("td");
      bodyDistanceCell.textContent = data.businesses[i].distance.toPrecision(2) / 1000 + " mi";
      var bodyPhoneCell = document.createElement("td");
      bodyPhoneCell.textContent = data.businesses[i].phone;
      var bodyRateCell = document.createElement("td");
      bodyRateCell.textContent = data.businesses[i].rating;
      var bodyPriceCell = document.createElement("td");
      bodyPriceCell.textContent = data.businesses[i].price;
      var bodySaveCell = document.createElement("td");
      var bodyLikeButton = document.createElement("button");
      bodyLikeButton.className = "btn btn-outline-primary mr-3";
      var likeButton = document.createElement("i");
      likeButton.className = "far fa-heart";
      bodyLikeButton.appendChild(likeButton);
      bodySaveCell.appendChild(bodyLikeButton);
      tableBodyRow.append(bodyNameCell, bodyAddressCell, bodyDistanceCell, bodyPhoneCell, bodyRateCell, bodyPriceCell, bodySaveCell)
    }
  }
}
