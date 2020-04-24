import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    showModal: boolean;
    onClick(event) {
        this.showModal = true;


    }

    hide() {
        this.showModal = false;
    }



    constructor(
        //private router: Router
    ) {
    //if (this.router.url === "/Login" || this.router.url === "/ChangePassword/:Id") {
    //    this.isLoggedin = false; this.isChangePassword = false;
    //} else {
    //    this.isLoggedin = true; this.isChangePassword = true;
    //}  
    }

  ngOnInit() {
  }

}
