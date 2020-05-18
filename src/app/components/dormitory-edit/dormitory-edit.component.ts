import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChargeSystemService } from 'src/app/services/charge-system.service';

@Component({
  selector: 'app-dormitory-edit',
  templateUrl: './dormitory-edit.component.html',
  styleUrls: ['./dormitory-edit.component.css']
})
export class DormitoryEditComponent implements OnInit {
  dormitory: any;
  flatIds:any;

  constructor(private router: Router, private route: ActivatedRoute, private service: ChargeSystemService) { }

  ngOnInit() {
    this.getDormitory(this.route.snapshot.paramMap.get('dId'));
    this.retrieveAllFlatIds();
  }

  retrieveAllFlatIds() {
    this.service.getAllIds('flat')
      .subscribe(
        data => {
          this.flatIds = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getDormitory(id) {
    this.service.get('dormitory', id)
      .subscribe(
        data => {
          this.dormitory = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  editDormitory() {
    this.service.update('dormitory', this.dormitory.dId, this.dormitory)
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
