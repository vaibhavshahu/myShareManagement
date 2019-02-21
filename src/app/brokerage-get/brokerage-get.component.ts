import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrokerageService } from '../brokerage.service';
import Brokerage from '../Brokerage';

@Component({
  selector: 'app-brokerage-get',
  templateUrl: './brokerage-get.component.html',
  styleUrls: ['./brokerage-get.component.css']
})
export class BrokerageGetComponent implements OnInit {
  brokerages: Brokerage[];
  angForm: FormGroup;
  brokerage: any = {};
  editMode = false;
  public year: any;
public month: any;
public day: any; 

  constructor(private route: ActivatedRoute,private router: Router,private fb: FormBuilder,private br: BrokerageService) {
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
    this.getBrokerages();
  }

  deleteBrokerage(id) {
    this.br.deleteBrokerage(id).subscribe(res => {
      console.log('Deleted');
    });
    this.getBrokerages();
  }

  updateBrokerage(type, rate, start_date,end_date) {
    this.route.params.subscribe(params => {
       this.br.updateBrokerage(type, rate, start_date,end_date, params['id']);
       this.router.navigate(['brokerage']);
 });
}

 getBrokerages(){
  this.br
    .getBrokrages()
    .subscribe((data: Brokerage[]) => {
      this.brokerages = data;
  });
}

editBrokerage(id){
  this.route.params.subscribe(params => {
      this.br.editBrokerage(id).subscribe(res => {
        this.brokerage = res;
        this.brokerage.start_date = this.fn_getDate(this.brokerage.start_date);
        console.log(this.brokerage);
    });
  });
  this.editMode = true;
}

  ngOnInit() {
    this.getBrokerages();
  }

  fn_getDate(inputDate) {
    var date = new Date(inputDate);
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    if (this.day < 10) {
      this.day = "0" + this.day;
    }
    if (this.month < 10) {
      this.month = "0" + this.month;
    }
    return this.year + "-" + this.month + "-" + this.day;
  }
}
