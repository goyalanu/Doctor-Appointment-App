import { LightningElement,wire,track} from 'lwc';
import Gender__c  from '@salesforce/schema/Doctor__c.Gender__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from "lightning/uiRecordApi";
import returnDoctors from '@salesforce/apex/hosp.returnDoctors';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Address__c  from '@salesforce/schema/Doctor__c.Address__c';
import   Specialization__c from '@salesforce/schema/Doctor__c.Specialization__c';
/* import Time__c from '@salesforce/schema/Appointment__c.Time__c';
 */export default class Body extends LightningElement {

    selectedAddress;
    selectedSpecialisation;
    clickedButtonLabel;    
    ge='';    
    ad='';
    t;
    dt;
    sp='';
    objectApiName="Appointment__c";
    time;
    @track isModalOpen = false;
    doc;
openModal(event) {
    this.doc=event.currentTarget.dataset.key;
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
    fields.Time__c = this.t;
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
    
    @wire(getPicklistValues,
        {
            recordTypeId: '012000000000000AAA', 
            fieldApiName: Gender__c
        }
    ) values;
    handleGenderChange(event){
        
        this.ge=event.target.value;
    }
    handletimeChange(event){
        
        this.t=event.target.value;
        console.log(this.t);
    }

    @wire(returnDoctors, {adr : '$ad' , spe : '$sp',gen : '$ge' ,ti:'$t',d: '$dt'})
    doctor;

    handleChange(event){
        
        this.ad=event.target.value;
    }
    
    handletime(event){
        this.time=event.target.value;
    }
  
    handlespecializationChange(event){
        this.sp=event.detail.value;
    }
    handledateChange(event){
        
        this.dt=event.target.value;
    }
   

}