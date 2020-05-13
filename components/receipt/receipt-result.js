class Receipt {
  constructor(tableElement) {
    this.tableElement = tableElement;

  }

  updateTable(data) {
    document.getElementById("modalOverlay").classList.remove("hidden");
    var titleElement = document.querySelector(".modal-title");
    var createTitle = document.createElement("h5");
    createTitle.textContent = data.recipes[0].title;
    titleElement.appendChild(createTitle);
    var bodyElement = document.querySelector(".modal-body");
    var imgElement = document.createElement("div");
    imgElement.setAttribute("style", "background-image: url(" + data.recipes[0].image + ");");
    imgElement.setAttribute("id", "modalImage");
    imgElement.className = "col-sm-6 modalImage";
    var instructionElement = document.createElement("p");
    instructionElement.textContent = data.recipes[0].instructions;
    instructionElement.className = "col-sm-6";
    bodyElement.append(imgElement, instructionElement);
    document.querySelector("#closeButton").addEventListener("click", function(){
      document.getElementById("modalOverlay").className += " hidden";
      document.querySelector(".modal-title").innerHTML = "";
      document.querySelector(".modal-body").innerHTML = "";

    })
  }
}
