import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Contact } from 'src/app/shared/model/contact.model';
// import { DaysHours } from 'src/app/shared/model/dayHours.model';
import { DayOfTheWeek } from 'src/app/shared/model/dayOfTheWeek.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // @Input() contact: Contact;
  providerForm: FormGroup;
  days:any= DayOfTheWeek;
  

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.providerForm = this.formBuilder.group({
      provider_id: ['',Validators.required,Validators.maxLength(100)],
      contacts: this.formBuilder.group({
        type : [, [Validators.required, Validators.minLength(4)]],
       address : this.formBuilder.group({
        street_address:['',Validators.required],
        subdivision:['',Validators.required,Validators.maxLength(50)],
        postal_code:['',Validators.required,Validators.maxLength(20)],
        locality:['',Validators.required,Validators.maxLength(50)],
        country:['',Validators.required,Validators.maxLength(2),Validators.minLength(2)]
       }),
       email:['', [Validators.required, Validators.minLength(4)]],
      mobile_phone_number:['', [Validators.required, Validators.minLength(4)]]
    }),
      opening_days_hours: this.formBuilder.group({
        day_of_week:[DayOfTheWeek],
        hour_periods:[[1],Validators.maxLength(13)]
      }),
      services: [''],
      is_auto_assignable:[''],
      rating: ['']

    })
  }


  create(provider: any) {
    console.log(provider)
  }
}
