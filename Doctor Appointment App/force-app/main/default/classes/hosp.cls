public with sharing class hosp {
@AuraEnabled(cacheable=true)
    public static List<Doctor__c> returnDoctors(String adr,String spe,String gen , String ti,Date d ){
        if(gen==NULL || gen==''){
            gen='%%';
        }
        String[] strTimeSplit = ti.split(':');
        Time bookingTime = Time.newInstance(Integer.valueOf(strTimeSplit[0]), Integer.valueOf(strTimeSplit[1]), 0 , 0);
        System.debug(bookingTime);
        List<Doctor__c> doc= [Select Id,Name, image__c,Experince__c,Consultation_fee__c,Specialization__c,Address__c,Email__c 
                                from Doctor__c 
                                where Address__c=:adr AND Specialization__c=:spe AND 	Gender__c like :gen And 
                                Id NOT IN (SELECT Doctor__c FROM Appointment__c WHERE Time__c = :bookingTime AND Date__c = :d)];
        return doc;
        
}
}