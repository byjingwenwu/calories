class Business {
  constructor(tableElement) {
    this.tableElement = tableElement
  }

  loadMoreResult() {
    var display = document.querySelectorAll(".display-table.d-none")
    for (let i = 0; i < 10; i++) {
      display[i].classList.remove("display-table", "d-none")
    }
    var rest = document.querySelectorAll(".display-table.d-none")
    if (rest.length < 10) {
      document.querySelector("#more-button").remove()
    }
  }

  updateTable(data) {
    console.log(data)
    var body = document.getElementById("resultBar")
    body.innerHTML = ""

    if (!data.length) {
      var noResult = document.createElement("h5");
      noResult.textContent = "No result found.";
      noResult.className = "mt-4";
      body.appendChild(noResult);
      return;
    }

    var table = document.createElement("table");
    table.className = "table";
    table.setAttribute("id", "resultBusinessTable")
    body.appendChild(table)

    var tableHeader = document.createElement("thead");
    tableHeader.className = "thead-dark";
    var tableBody = document.createElement("tbody");
    table.append(tableHeader, tableBody);

    var tableHeaderRow = document.createElement("tr");
    tableHeader.appendChild(tableHeaderRow);
    var headerNameCell = document.createElement("th");
    headerNameCell.textContent = "Name";
    headerNameCell.classList.add("pl-5")
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
    tableHeader.append(headerNameCell, headerAddressCell, headerDistanceCell,
      headerPhoneCell, headerRateCell, headerPriceCell, headerSaveCell)

    for (let i = 0; i < data.length; i++) {
      var tableBodyRow = document.createElement("tr");
      tableBody.appendChild(tableBodyRow);
      if (i >= 10) {
        tableBodyRow.classList.add("display-table", "d-none")
      }
      var bodyNameCell = document.createElement("td");
      bodyNameCell.textContent = data[i].name;
      bodyNameCell.classList.add("pl-5")
      var bodyAddressCell = document.createElement("td");
      bodyAddressCell.textContent = data[i].location.display_address;
      var bodyDistanceCell = document.createElement("td");
      bodyDistanceCell.textContent = data[i].distance.toPrecision(2) / 1000 + " mi";
      var bodyPhoneCell = document.createElement("td");
      bodyPhoneCell.textContent = data[i].phone;
      var bodyRateCell = document.createElement("td");
      var rating = document.createElement("img")
      rating.setAttribute("src", `../images/stars/${data[i].rating}.png`)
      rating.classList.add("h60")
      bodyRateCell.appendChild(rating);
      var bodyPriceCell = document.createElement("td");
      bodyPriceCell.textContent = data[i].price;
      var bodySaveCell = document.createElement("td");
      var bodyLikeButton = document.createElement("button");
      bodyLikeButton.className = "btn btn-outline-primary mr-3";
      var likeButton = document.createElement("i");
      likeButton.className = "far fa-heart";
      bodyLikeButton.appendChild(likeButton);
      bodySaveCell.appendChild(bodyLikeButton);
      tableBodyRow.append(bodyNameCell, bodyAddressCell, bodyDistanceCell, bodyPhoneCell, bodyRateCell, bodyPriceCell, bodySaveCell)
    }

    if (data.length > 10) {
      var moreButton = document.createElement("button")
      moreButton.setAttribute("type", "button")
      moreButton.setAttribute("id", "more-button")
      moreButton.setAttribute("class", "btn btn-dark btnAdj")
      moreButton.textContent = "More"
      moreButton.addEventListener("click", this.loadMoreResult)
      body.appendChild(moreButton)
    }
  }
}
