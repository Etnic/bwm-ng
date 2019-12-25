import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { RentalModel } from '../rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }
  rental: RentalModel;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.getRental(params.get('rentalId'));
    })
  }

  getRental(id: string) {
    this.rentalService.getRentalById(id).subscribe(
      rental => {this.rental = rental;}
    )
  } 
}
