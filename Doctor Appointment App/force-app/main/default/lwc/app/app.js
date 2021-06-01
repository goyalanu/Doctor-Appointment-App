import { LightningElement,api, track, wire} from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Address__c  from '@salesforce/schema/Doctor__c.Address__c';
import   Specialization__c from '@salesforce/schema/Doctor__c.Specialization__c';
export default class App extends LightningElement {
clickedButtonLabels;
selectedAddress;
selectedSpecialisation;
clickedButtonLabel;
objectApiName="Appointment__c";
time;
handleClicks(event) {
    this.clickedButtonLabel = event.target.label;
}
@wire(getPicklistValues,
        {
            recordTypeId: '012000000000000AAA', 
            fieldApiName: Address__c
        }
    ) Addressvalues;

@wire(getPicklistValues,
        {
            recordTypeId: '012000000000000AAA', 
            fieldApiName: Specialization__c
        }
    ) Specializationvalues;
   
handleChange( event){
        this.selectedAddress=event.target.value;

    }
    handlespecializationChange( event){
        this.selectedSpecialisation=event.target.value;

    }
    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
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

    handletime(event){
        this.time=event.target.value;
    }
  

    handleSubmit(event){
        event.preventDefault();

        const fields = event.detail.fields;
        fields.Time__c = this.time;

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
