class RandomForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleRandomSearch = this.handleRandomSearch.bind(this);
    this.formElement.addEventListener("submit", this.handleRandomSearch)
  }

  onSubmit(randomSearchReceipt) {
    this.randomSearchReceipt = randomSearchReceipt;
  }

  handleRandomSearch(event) {
    event.preventDefault();
    this.randomSearchReceipt();
    event.target.reset();
  }
}
