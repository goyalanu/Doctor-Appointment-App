import { LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Signup_login extends LightningElement {
    objectApiName="Lead";
@track isModalOpen = false;
openModal() {
    this.isModalOpen = true;
}
closeModal() {
    this.isModalOpen = false;
}
submitDetails() {
    this.isModalOpen = false;
}
handleSubmit(event){
        event.preventDefault();

        const fields = event.detail.fields;
       

        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(event){
        const evt = new ShowToastEvent({
            title: "Success",
            message: "Your Appointment Created Successfully" + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}