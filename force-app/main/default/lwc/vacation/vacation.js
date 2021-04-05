import { LightningElement } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class App extends LightningElement {
  title = "Vacation Requests";
  personalRequests = "View only my requests";
  submitButtonText = "New Request";
  requestWindowIsVisible = false;

  toggleRequestForm() {
    this.requestWindowIsVisible = !this.requestWindowIsVisible;
  }

  handleSuccess() {
    const event = new ShowToastEvent({
        variant: 'success',
        title: 'Success!',
        message: 'Record has been created.',
    });
    this.dispatchEvent(event);
}
}
