import { Component } from '@angular/core';
// FormBuilder => Helper API to build complex forms with less code
// Validators => Provides a set of built-in validators that can be used by form controls
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {

  formValues: any;

  constructor(private formBuilder: FormBuilder) { }

  creationForm = this.formBuilder.group({ // Adding form controls to be bound to template form controls
    // First argument to form control is the initial value
    // Second argument to form control is a validator requires that the control value must match the regex pattern provided (Only numbers allowed!)
    sample1: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')],
    sample2: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')],
    sample3: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')],
    sample4: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')],
    sample5: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')],
    sample6: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')],
    sample7: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')],
    sample8: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')],
    sample9: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')],
    sample10: ['', Validators.pattern('^-?[0-9]\\d*(\.\\d+)?$')]
  });

  onSubmit(): void {  // On form submission, the code block here will execute
    this.formValues = this.creationForm.value;  // An object containing values of our form controls

    // Converting form controls object to an array of strings then to array of numbers to pass it to chart
    const values = Object.values(this.formValues).map(elem => {
      return Number(elem);
    });

    // Navigating and sending data to charts
    localStorage.setItem('values', JSON.stringify(values)); // Saving form data to be sent to chart
    window.open('/charts', '_blank'); // Navigating to chart in a new browser tab
    console.warn('Your data has been submitted', this.creationForm.value);
    console.log('Last successful data submission:', new Date());  // new Date() => Gets current timestamp
    this.resetForm();
  }

  resetForm() {
    this.creationForm.reset();  // Reset form controls to their initial values if set. Otherwise, null
  }
}
