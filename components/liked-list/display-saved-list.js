  if (!localStorage.length) {
    var div = document.createElement("div")
    div.textContent = "You do not have any saved recipes."
    document.querySelector("#savedRecipe").append(div)
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      var data = JSON.parse(localStorage.getItem(localStorage.key(i)))
      var recipe = document.createElement("div")
      recipe.className = "col-3 px-4 my-4"
      var image = document.createElement("img")
      image.setAttribute("src", data.image);
      image.className = "w-100";
      var title = document.createElement("p")
      title.className = "p-title"
      title.textContent = data.title
      var trash = document.createElement("i")
      trash.className = "fas fa-trash-alt"
      trash.addEventListener("click", function () {
        localStorage.removeItem(localStorage.key(i))
      })
      recipe.append(image, title, trash)
      document.querySelector("#savedRecipe").append(recipe)
    }
  }
