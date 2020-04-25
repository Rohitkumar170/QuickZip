import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-allumrn',
  templateUrl: './allumrn.component.html',
  styleUrls: ['./allumrn.component.css']
})
export class AllumrnComponent implements OnInit {
    Allumrn: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.Allumrn = this.formBuilder.group({
            UMRN: ['', Validators.required],
            CustomerName: ['', Validators.required],
            ReferenceNumber: ['', Validators.required]

        });
    }
   
   
    isFieldValid(field: string) {

        return !this.Allumrn.get(field).valid && this.Allumrn.get(field).touched;
    }
    
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
    }
    SearchFunction() {
        this.submitted = true;
        if (this.Allumrn.valid) {
            alert("valid");

        } else {
            alert("Not valid");
            this.validateAllFormFields(this.Allumrn);
        }
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

}
