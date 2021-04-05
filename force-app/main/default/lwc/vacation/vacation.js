import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Vacation Requests";
  personalRequests = "View only my requests";
  submitButtonText = "New Request";
  requestWindowIsVisible = false;

  toggleRequestForm() {
    this.requestWindowIsVisible = !this.requestWindowIsVisible;
  }
}
