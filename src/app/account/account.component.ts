import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loginForm;
  message: string;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['']
    });
  }

  ngOnInit() {

  }

  saveAccount(loginForm) {

  }

  saveCategory(form: NgForm) {
    const category = {
      name: form.value.categoryName,
      description: form.value.categoryDescription
    };

    this.message = category.name + ' ' + category.description;
  }
}
