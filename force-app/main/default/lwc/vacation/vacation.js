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

  request_fields = [
    "RequestType__c",
    "StartDate__c",
    "EndDate__c"
  ];
}
