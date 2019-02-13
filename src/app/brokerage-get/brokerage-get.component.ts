import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BrokerageService } from '../brokerage.service';

@Component({
  selector: 'app-brokerage-get',
  templateUrl: './brokerage-get.component.html',
  styleUrls: ['./brokerage-get.component.css']
})
export class BrokerageGetComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private br: BrokerageService) {
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

  addBrokrage(type, rate, start_date,end_date) {
    this.br.addBrokrage(type, rate, start_date,end_date);
  }

  ngOnInit() {
  }

}
