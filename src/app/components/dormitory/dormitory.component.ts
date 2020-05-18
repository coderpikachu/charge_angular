import { Component, OnInit } from '@angular/core';
import { ChargeSystemService } from '../../services/charge-system.service';

@Component({
  selector: 'app-dormitory',
  templateUrl: './dormitory.component.html',
  styleUrls: ['./dormitory.component.css']
})
export class DormitoryComponent implements OnInit {

  dormitories: any;
  dId = '';

  constructor(private chargeSystemService: ChargeSystemService) { }

  ngOnInit() {
    this.retrieveAlldormitories();
  }

  retrieveAlldormitories() {
    this.chargeSystemService.getAll('dormitory')
      .subscribe(
        data => {
          this.dormitories = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  removeAlldormitories() {
    this.chargeSystemService.deleteAll('dormitory')
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAlldormitories();
        },
        error => {
          console.log(error);
        });
  }

  dIdSearch() {
    this.chargeSystemService.findBydId('dormitory', this.dId)
      .subscribe(
        data => {
          this.dormitories = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
