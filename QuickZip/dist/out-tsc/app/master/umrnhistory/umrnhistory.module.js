import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UmrnhistoryComponent } from './umrnhistory.component';
import { CommonModule } from '@angular/common';
import { UmrnhistoryRoutingModule } from './umrnhistory-routing.module';
import { UMRNHISTORYSERVICEService } from '../../services/umrn_history/umrn-history-service.service';
var UmrnhistoryModule = /** @class */ (function () {
    function UmrnhistoryModule() {
    }
    UmrnhistoryModule = tslib_1.__decorate([
        NgModule({
            declarations: [UmrnhistoryComponent],
            imports: [
                CommonModule,
                UmrnhistoryRoutingModule, FormsModule, ReactiveFormsModule
            ],
            providers: [UMRNHISTORYSERVICEService]
        })
    ], UmrnhistoryModule);
    return UmrnhistoryModule;
}());
export { UmrnhistoryModule };
//# sourceMappingURL=umrnhistory.module.js.map