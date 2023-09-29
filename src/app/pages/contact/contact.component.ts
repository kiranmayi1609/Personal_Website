import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  formDetails:FormGroup;
  status={message:'',success:true};//Initilaize status object 
 
  constructor(private fb:FormBuilder){
    //Create a FormGroup with initial form control values 
    this.formDetails=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required,Validators.email],
      phone:['',Validators.required],
      message:['',Validators.required],
    });
  }
  //Handle form submission 
  handleSubmit()
  {
    if(this.formDetails.valid)
    {
      //if the form is valid ,perform your submission logic here 
      //you can access the form values using this .formdetails.value 
      console.log('Form submitted with values:',this.formDetails.value);
      //Reset the form after successful submission 
      this.formDetails.reset();
      //you can set status message and success flag here 
      this.status.message='Form submitted successfully';
      this.status.success=true;
    }else {
      //if the form invalid ,set status message and success flag accordingly
      this.status.message='Form submission failed.Please check your inputs. ' 
      this.status.success=false;
    }
  }

 
}
