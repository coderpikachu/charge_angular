import { Component, OnInit } from '@angular/core';
import { ChargeSystemService } from '../../services/charge-system.service';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {

  flats: any;
  fId = '';

  constructor(private chargeSystemService: ChargeSystemService) { }

  ngOnInit() {
    this.retrieveAllFlats();
  }

  retrieveAllFlats() {
    this.chargeSystemService.getAll('flat')
      .subscribe(
        data => {
          this.flats = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  removeAllFlats() {
    this.chargeSystemService.deleteAll('flat')
      .subscribe(
        response => {
          console.log(response);
          this.retrieveAllFlats();
        },
        error => {
          console.log(error);
        });
  }

  fIdSearch() {
    this.chargeSystemService.findByfId('flat',this.fId)
      .subscribe(
        data => {
          this.flats = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
