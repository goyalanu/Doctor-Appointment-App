import { LightningElement } from 'lwc';

export default class Create_Login_Form extends LightningElement {

        userLogin : function(component, event, helper) {
            
            var uname = component.get("v.Username");
            var upass = component.get("v.Password");
            var action = component.get("c.getDetails");
            
            
            action.setParams({
                username : uname,
                password :upass
            });
            
            action.setCallback(this, function(a){
                alert(a.getReturnValue());
                console.log('The field list is :'+JSON.stringify(a.getReturnValue()));
            });
            
            $A.enqueueAction(action);
            component.set("v.uname",'');
            component.set("v.pass",'');
        }
    
}