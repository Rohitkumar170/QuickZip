import { async, TestBed } from '@angular/core/testing';
import { EntitybanksetupComponent } from './entitybanksetup.component';
describe('EntitybanksetupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EntitybanksetupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EntitybanksetupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=entitybanksetup.component.spec.js.map