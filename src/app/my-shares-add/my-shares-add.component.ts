import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-shares-add',
  templateUrl: './my-shares-add.component.html',
  styleUrls: ['./my-shares-add.component.css']
})
export class MySharesAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        buy_price: ['', Validators.required],
        qty_purchased: ['', Validators.required],
        purchased_date: ['', Validators.required]       
    });
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

    }

}
