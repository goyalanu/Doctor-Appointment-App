import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import Appointment_c_OBJECT from "@salesforce/schema/Appointment_c";
import Name_c from "@salesforce/schema/Appointmentc.Name_c";
import Phone_c from "@salesforce/schema/Appointmentc.Phone_c";
import Email_c from "@salesforce/schema/Appointmentc.Email_c";
export default class signup extends LightningElement {
    Name;
    Phone;
    Email;
    handleName(event){
        this.Name=event.target.value;
    }
    handlePhone(event){
        this.Phone=event.target.value;
    }
    handleEmail(event){
        this.Email=event.target.value;
    }
    bookyourAppointment(){
        var fields ={'Name_c' : this.Name, 'Phonec' :this.Phone, 'Email_c':this.Email};
        const accRecord ={apiName :Appointment__c_OBJECT.objectApiName, fields : fields};
        createRecord(accRecord)

        .then( response => {

            alert('Details saved succesfully');

        })
        .catch( error =>   {

            alert('Some error occured'+JSON.stringify(error));
    
            });
        
        
    
    }

}