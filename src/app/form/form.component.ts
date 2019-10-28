import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, Form } from '@angular/forms';

interface Country {
  name: string;
  value: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  pageFormGroup: FormGroup;
  countries: Country[] = [
    {name: 'Poland', value: 'pl'},
    {name: 'England', value: 'en'},
    {name: 'Frace', value: 'fr'},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.pageFormGroup = this.fb.group({
      firstname: this.fb.control('fsa', [Validators.required, Validators.pattern(/^[a-z]+$/)]),
      lastname: this.fb.control( {value: 'fasd', disabled: true}, [Validators.required, Validators.pattern(/^[a-z]+$/)], ),
      age: this.fb.control('', Validators.pattern(/^[0-9]+$/)),
      country: this.fb.control('', [Validators.required, Validators.pattern(/^[a-z]+$/)]),
      pets: this.fb.array([])
    })
    
    this.firstNameControl.valueChanges.subscribe(() => {
      if (this.firstNameControl.valid) {
        this.lastNameControl.enable();
      } else {
        this.lastNameControl.disable();
      }
    })

  }
      get firstNameControl() {
        return this.pageFormGroup.get('firstname');
      }
      
      get lastNameControl() {
        return this.pageFormGroup.get('lastname');
      }

      get petsArray() {
        return this.pageFormGroup.get('pets') as FormArray;
      }

      onAddPets() {
        this.petsArray.push(this.AddPet())
      }

      AddPet() {
        return this.fb.control('');
      }
      
}
