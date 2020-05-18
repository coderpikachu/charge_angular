import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChargeSystemService } from 'src/app/services/charge-system.service';

@Component({
  selector: 'app-flat-add',
  templateUrl: './flat-add.component.html',
  styleUrls: ['./flat-add.component.css']
})
export class FlatAddComponent implements OnInit {

  flat={
    fId:'',
    layers:0,
    roomNum:0,
    openTime:'00:00:00',
  }

  constructor(private router: Router,private service:ChargeSystemService) { }

  ngOnInit(): void {

    
  }

  addFlat(){
    const data = {
      fId: this.flat.fId,
      layers: this.flat.layers,
      roomNum: this.flat.roomNum,
      openTime: this.flat.openTime,
    };
    this.flat = {
      fId: '',
      layers: 0,
      roomNum: 0,
      openTime: '00:00:00',
    }
    this.service.create('flat',data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/flat']);
        },
        error => {
          console.log(error);
        });
  }

}
