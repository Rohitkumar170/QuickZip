import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoricalMandateClass } from '../../../models/historical-mandate/historical-mandate-class';
import { HistoricalMandateServiceService } from '../../services/historical-mandate/historical-mandate-service.service';

@Component({
  selector: 'app-historical-mandate',
  templateUrl: './historical-mandate.component.html',
  styleUrls: ['./historical-mandate.component.css']
})
export class HistoricalMandateComponent implements OnInit {

    constructor(private HMService: HistoricalMandateServiceService) { }

  ngOnInit() {
  }
    SearchFunction(FromDate, ToDate) {
        alert("Comp" + FromDate + " " + ToDate);
        this.HMService.BindGridData(FromDate, ToDate).subscribe(
            (data) => {
               
            });
    }
}
