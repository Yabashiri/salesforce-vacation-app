import { LightningElement } from "lwc";

export default class Vacation extends LightningElement {
  title = "Vacation Requests";
    value = ['option1'];

    get options() {
        return [
            { label: 'View only my requests', value: 'option1' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(e) {
        this.value = e.detail.value;
    }
}
