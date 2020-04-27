import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllumrnComponent } from './allumrn.component';
import { CommonModule } from '@angular/common';
import { AllUmrnRoutingModule } from './all-umrn-routing.module';
var AllUmrnModule = /** @class */ (function () {
    function AllUmrnModule() {
    }
    AllUmrnModule = tslib_1.__decorate([
        NgModule({
            declarations: [AllumrnComponent],
            imports: [
                CommonModule,
                AllUmrnRoutingModule, FormsModule, ReactiveFormsModule
            ]
        })
    ], AllUmrnModule);
    return AllUmrnModule;
}());
export { AllUmrnModule };
//# sourceMappingURL=all-umrn.module.js.map