import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChargeSystemService } from 'src/app/services/charge-system.service';

@Component({
  selector: 'app-dormitory-delete',
  templateUrl: './dormitory-delete.component.html',
  styleUrls: ['./dormitory-delete.component.css']
})
export class DormitoryDeleteComponent implements OnInit {

  id = '';
  constructor(private service: ChargeSystemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('dId');
  }

  backTodormitory() {
    this.router.navigate(['/dormitory']);
  }
  deletedormitory() {
    this.service.delete('dormitory', this.id)
      .subscribe(
        response => {
          console.log(response);
          this.backTodormitory();
        },
        error => {
          console.log(error);
        });
  }

}
