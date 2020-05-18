import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChargeSystemService } from 'src/app/services/charge-system.service';

@Component({
  selector: 'app-flat-delete',
  templateUrl: './flat-delete.component.html',
  styleUrls: ['./flat-delete.component.css']
})
export class FlatDeleteComponent implements OnInit {

  id='';
  constructor(private service: ChargeSystemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('fId');
  }

  backToFlat(){
    this.router.navigate(['/flat']);
  }
  deleteFlat() {
    this.service.delete('flat',this.id)
      .subscribe(
        response => {
          console.log(response);
          this.backToFlat();
        },
        error => {
          console.log(error);
        });
  }

}
