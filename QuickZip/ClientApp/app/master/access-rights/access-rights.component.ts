/// <reference path="../../services/accessrights/access-rights.service.ts" />
/// <reference path="../../../models/accessrights/access-rights-entity-details.ts" />
import { Component, OnInit } from '@angular/core';
import { AccessRightsService } from '../../services/accessrights/access-rights.service';
import { AccessRightsEntityDetails } from '../../../models/accessrights/access-rights-entity-details';
import { AccessRightsDetails } from '../../../models/accessrights/access-rights-details';

@Component({
  selector: 'app-access-rights',
  templateUrl: './access-rights.component.html',
  styleUrls: ['./access-rights.component.css']
})
export class AccessRightsComponent implements OnInit {

    public entitydDetails: AccessRightsEntityDetails; 
    public AccessRightDetails: AccessRightsDetails;
    storeLinkID = [0,1,2,3];
    storeIsRead = [true,true,false,false];
    storeIsActive = [true, true, false, false];
    Ischecked: number = 0;
    constructor(private _accessRightsService: AccessRightsService) { }

    ngOnInit() {
        this.getEntityDetails();
        
        
    }

    getEntityDetails() {
      
        let item = JSON.parse(sessionStorage.getItem('User'));
        this._accessRightsService.getEntityDetails(item.UserType, item.ReferenceId).subscribe
            (res => this.entitydDetails = res, error => console.log(error))
            
    }

    getLinksForUser(data) {
        let item = JSON.parse(sessionStorage.getItem('User'));
        //alert(data.userid)
        //alert(data)
        //userid
        this._accessRightsService.getLinksForUser(data, item.UserType).subscribe
            (res => {
            this.AccessRightDetails = res,
               // this.checkAccessRights(res),
                error => console.log(error)
            })
        //this.InsertData(data);

    }
    checkAccessRights(data) {

        //if (event.target.checked) {
        //    this.storeLinkID.push(data.LinkID);
        //    this.storeIsRead.push(data.IsRead);
        //    if (data.IsRead == true) {
        //        this.storeIsActive.push(true);
        //    }
        //    else {
        //        this.storeIsActive.push(false);
        //    }
        //}
        //else {
        //    this.storeIsActive.pop();
        //    this.storeIsRead.pop();
        //    this.storeIsActive.pop();
        //}
        
        var ids = data.LinkID;

        if ((<HTMLInputElement>document.getElementById(ids)).checked == true) {
            this.storeLinkID.push(data.LinkID);
            this.storeIsRead.push(data.IsRead);
            if (data.IsRead == true) {
                this.storeIsActive.push(true);
            }
            else {
                this.storeIsActive.push(false);
            }
        }
        else {
            this.storeIsActive.pop();
            this.storeIsRead.pop();
            this.storeIsActive.pop();

        }
        alert(this.storeLinkID)
        alert(this.storeIsRead)
        alert(this.storeIsActive)
    }

    
    InsertData(userid) {
       // alert('hi');
        this._accessRightsService.getInsertdata(userid, this.storeIsActive, this.storeIsRead, this.storeLinkID).subscribe
            (res => this.AccessRightDetails = res, error => console.log(error))
    }

}
