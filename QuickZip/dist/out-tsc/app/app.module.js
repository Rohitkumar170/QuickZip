import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayOutModuleModule } from './master/lay-out-module.module';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                FormsModule, ReactiveFormsModule,
                HttpClientModule,
                LayOutModuleModule,
                RouterModule.forRoot([])
            ],
            //providers: [{ provide: ErrorHandler, useClass:GlobalErrorHandler }
            providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=app.module.js.map