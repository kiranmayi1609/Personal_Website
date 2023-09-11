import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  formDetails:FormGroup;

  constructor(private fb:FormBuilder){
    //Create a FormGroup with initial form control values 
    this.formDetails=this.fb.group({
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      message:'',
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
    }
  }

 
}
