import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChargeSystemService } from 'src/app/services/charge-system.service';

@Component({
  selector: 'app-dormitory-add',
  templateUrl: './dormitory-add.component.html',
  styleUrls: ['./dormitory-add.component.css']
})
export class DormitoryAddComponent implements OnInit {

  dormitory = {
    dId: null,
    peopleNum: null,
    accommodationCharge: null,
    telephone: null,
    flatId:null,
  }

  flats:any;

  constructor(private router: Router, private service: ChargeSystemService) { }

  ngOnInit(): void {
    this.retrieveAll();

  }

  retrieveAll() {
    this.service.getAll('flat')
      .subscribe(
        data => {
          this.flats = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  addDormitory() {
    const data = {
      dId: this.dormitory.dId,
      peopleNum: this.dormitory.peopleNum,
      accommodationCharge: this.dormitory.accommodationCharge,
      telephone: this.dormitory.telephone,
      flatId: this.dormitory.flatId
    };
    this.dormitory = {
      dId: '',
      peopleNum: 0,
      accommodationCharge: 0,
      telephone: null,
      flatId:null,
    }
    this.service.create('dormitory', data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/dormitory']);
        },
        error => {
          console.log(error);
        });
  }

}
