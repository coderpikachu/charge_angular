import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChargeSystemService } from 'src/app/services/charge-system.service';

@Component({
  selector: 'app-flat-edit',
  templateUrl: './flat-edit.component.html',
  styleUrls: ['./flat-edit.component.css']
})
export class FlatEditComponent implements OnInit {
  flat:any;

  constructor(private router: Router, private route: ActivatedRoute, private service: ChargeSystemService) { }

  ngOnInit() {
    this.getFlat(this.route.snapshot.paramMap.get('fId'));
  }

  getFlat(id) {
    this.service.get('flat',id)
      .subscribe(
        data => {
          this.flat = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  editFlat() {
    this.service.update('flat',this.flat.fId, this.flat)
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
