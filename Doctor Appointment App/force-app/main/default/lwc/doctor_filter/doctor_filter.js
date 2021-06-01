import { LightningElement, track } from 'lwc';
import docCall from '@salesforce/apex/doctor.imperativeCall'; 
import { get } from 'lightning/uiObjectInfoApi';
import Gender__c  from '@salesforce/schema/Doctor__c.Gender__c';
import Consultation_fee__c  from '@salesforce/schema/Doctor__c.Consultation_fee__c';
import Name__c  from '@salesforce/schema/Doctor__c.Name__c';
import Specialization__c  from '@salesforce/schema/Doctor__c.Specialization__c';
import Experince__c  from '@salesforce/schema/Doctor__c.Experince__c';
import Email__c  from '@salesforce/schema/Doctor__c.Email__c';
import Contact__c  from '@salesforce/schema/Doctor__c.Contact__c';



export default class Doctor_filter extends LightningElement {
@track availability = 'Available Today';
@track AllFilter = 'Free';
@track SortedBy = 'Earliest Available';
@track Gender = 'Male Doctor';

get availabilityOptions() {
return [
            { label: 'Available Today', value: 'Available Today' },
            { label: 'Available Tomorrow', value: 'Available Tomorrow' },
            { label: 'Available in next 7 days', value: 'Available in next 7 days' },
        ];
}
get allFilterOptions() {
return [
            { label: 'Free', value: 'Free' },
            { label: '1-200', value: '1-200' },
            { label: '201-500', value: '201-500' },
            { label: '501+', value: '501+' },
        ];
}
get sortedOptions() {
return [
            { label: 'Relevance', value: 'Relevance' },
            { label: 'Earliest Available', value: 'Earliest Available' },
            { label: 'Price - Low to High', value: 'Price - Low to High' },
            { label: 'Price - High to Low', value: 'Price - High to Low' },
            { label: 'Years of Experience', value: 'Years of Experience' },
            { label: 'Recommendation', value: 'Recommendation' },
        ];
}
get genderOptions() {
return [
            { label: 'Male Doctor', value: 'Male Doctor' },
            { label: 'Female Doctor', value: 'Female Doctor' },
        ];
}

changeAvailability(event) {
    console.log('Availability');
    this.value = event.detail.value;
    }

changeAllFilters(event){
    this.AllFilter = event.detail.value;
}

changeSortedBy(event){
    this.SortedBy = event.details.value;
}

changeGender(event){
    this.Gender = event.details.value;
}
//how to implement availability and sorted
     
/*      result = sforce.connection.query(“SELECT Name__c,Specialization__c, Experince__c,Gender__c,Email__c,Contact__c,Consultation_fee__c FROM Doctor__c WHERE Consultation_fee__c=this.charges LIMIT 5”); .


 records = result.getArray(“records”); // This step is important, as we get records as an assosiative array.


if( records.length > 0 &&  ){


   var accId = records[0].Id; // Assign to variables


   var accName = records[0].Name; // Assign to variables

    

   alert(‘Account Name: ‘+accName+’ Account Id: ‘+accId); 



}else{
    alert("No records found.");
} */

}