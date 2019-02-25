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
  id : Number;

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
    //debugger;
    this.route.params.subscribe(params => {
       this.br.updateBrokerage(type, rate, start_date,end_date, this.id);
       //this.router.navigate(['brokerage']);
       this.getBrokerages();
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
        this.brokerage.start_date =(this.brokerage.start_date == null) ? null : new Date(this.brokerage.start_date);
        this.brokerage.end_date =(this.brokerage.end_date == null) ? null : new Date(this.brokerage.end_date);
        this.id = this.brokerage._id;        
        console.log(this.brokerage);
    });
  });
  this.editMode = true;
}

  ngOnInit() {
    this.getBrokerages();
  }  
}
