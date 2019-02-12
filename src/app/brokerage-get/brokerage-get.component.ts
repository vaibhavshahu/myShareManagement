import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-brokerage-get',
  templateUrl: './brokerage-get.component.html',
  styleUrls: ['./brokerage-get.component.css']
})
export class BrokerageGetComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      type: ['', Validators.required ],
      rate: ['', Validators.required ],
      start_date: ['', Validators.required ],
      end_date: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
