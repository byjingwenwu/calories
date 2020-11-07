var button = document.getElementById("contact-modal-control")
button.addEventListener("click", openModal)

function openModal() {
  var main = document.getElementById("main")
  var modal = document.createElement("div")
  modal.classList.add("w3-modal", "d-block")
  modal.setAttribute("id", "contact-modal")
  var modalContent = document.createElement("div")
  modalContent.className = "w3-modal-content w3-card-4 w3-animate-top"
  modalContent.setAttribute("style", "max-width:50%")
  var modalHeader = document.createElement("div")
  modalHeader.classList.add("modal-header")
  var title = document.createElement("h4")
  title.className = "modal-title ml-2"
  title.textContent = "Contact Us"
  var closeX = document.createElement("button")
  closeX.setAttribute("type", "button")
  closeX.classList.add("close")
  closeX.addEventListener("click", () => {
    document.getElementById("contact-modal").remove()
  })
  var span = document.createElement("span")
  span.innerHTML = "&times;"
  closeX.appendChild(span)
  modalHeader.append(title, closeX)
  var contactForm = document.createElement("form")
  contactForm.classList.add("mx-4", "my-4")
  var nameGroup = document.createElement("div")
  nameGroup.classList.add("form-group")
  var smallInfo = document.createElement("small")
  smallInfo.className = "form-text text-muted mb-2"
  smallInfo.textContent = "We'll never share your personal information with anyone else."
  var nameLabel = document.createElement("lable")
  nameLabel.setAttribute("for", "formNameInput")
  nameLabel.textContent = "Full name"
  var nameInput = document.createElement("input")
  nameInput.setAttribute("type", "text")
  nameInput.setAttribute("id", "formNameInput")
  nameInput.setAttribute("placeholder", "Name")
  nameInput.classList.add("form-control")
  nameGroup.append(smallInfo, nameLabel, nameInput)
  var emailGroup = document.createElement("div")
  emailGroup.classList.add("form-group")
  var emailLabel = document.createElement("lable")
  emailLabel.setAttribute("for", "formEmailInput")
  emailLabel.textContent = "Email Address"
  var emailInput = document.createElement("input")
  emailInput.setAttribute("type", "email")
  emailInput.setAttribute("id", "formEmailInput")
  emailInput.setAttribute("placeholder", "Enter email")
  emailInput.setAttribute("aria-describedby", "emailHelp")
  emailInput.classList.add("form-control")
  emailGroup.append(emailLabel, emailInput)
  var messageGroup = document.createElement("div")
  messageGroup.classList.add("form-group")
  var messageLable = document.createElement("label")
  messageLable.textContent = "Message"
  messageLable.setAttribute("for", "formMessageInput")
  var messageInput = document.createElement("textarea")
  messageInput.classList.add("form-control")
  messageInput.setAttribute("id", "formMessageInput")
  messageInput.setAttribute("rows", "6")
  messageGroup.append(messageLable, messageInput)
  contactForm.append(nameGroup, emailGroup, messageGroup)

  var modalFooter = document.createElement("div")
  modalFooter.classList.add("modal-footer", "justify-content-between")
  var cancelButton = document.createElement("button")
  cancelButton.textContent = "Cancel"
  cancelButton.setAttribute("id", "control-close-modal")
  cancelButton.setAttribute("type", "button")
  cancelButton.className = "btn btn-dark btnAdj btnModal"
  cancelButton.addEventListener("click", () => {
    document.getElementById("contact-modal").remove()
  })

  var submitButton = document.createElement("button")
  submitButton.textContent = "Submit"
  submitButton.setAttribute("id", "submit-message")
  submitButton.setAttribute("type", "submit")
  submitButton.className = "btn btn-dark btnAdj btnModal"
  submitButton.addEventListener("click", () => {
    event.preventDefault();
    document.getElementById("contact-modal").remove()
  })

  modalFooter.append(cancelButton, submitButton)
  modalContent.append(modalHeader, contactForm, modalFooter)
  modal.appendChild(modalContent)
  main.appendChild(modal)
}
