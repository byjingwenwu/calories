class AppList{
  constructor(listElement) {
    this.listElement = listElement
    this.displayList = this.displayList.bind(this)
  }

  displayList() {
    if (!localStorage.length) {
      var div = document.createElement("div")
      div.textContent = "You do not have any saved recipes."
      document.querySelector("#savedRecipe").append(div)
    } else {
      this.listElement.renderSavedItem()
      this.listElement.passDisplayList(this.displayList)
    }
  }
}
