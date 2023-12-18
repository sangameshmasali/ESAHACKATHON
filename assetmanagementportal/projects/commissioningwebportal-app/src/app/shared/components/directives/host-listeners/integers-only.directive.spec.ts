import { TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { IntergersDirective } from './integers-only.directive';

@Component({
  selector: 'app-my-test-component',
  template: ''
})
class TestComponent {}

describe('IntergersDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        IntergersDirective
      ]
    });
  });

  it('should be able to test directive', waitForAsync(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <input type="number" min="0" app-numeric [disabenegative]="true" [disabefloat]="true" value="20"
          max="23" >`
      }
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(By.directive(IntergersDirective));
      expect(directiveEl).not.toBeNull();
    });

  }));

  it('should be able to test directive with disabenegative', waitForAsync(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template:  `
        <input type="number" min="0" app-numeric [disabenegative]="true" [disabefloat]="true" value="20"
        max="23" >`
      }
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(By.directive(IntergersDirective));
      expect(directiveEl).not.toBeNull();
      const directiveInstance = directiveEl.injector.get(IntergersDirective);
      fixture.autoDetectChanges();
      directiveInstance.onKeyDown(new KeyboardEvent('keydown'));
      expect(directiveInstance.disabenegative).toBeTruthy();

    });

  }));

  it('should be able to test directive with allowplus', waitForAsync(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template:  `
        <input type="number" min="0" app-numeric [allowplus]="true"  value="20"
        max="23" >`
      }
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(By.directive(IntergersDirective));
      expect(directiveEl).not.toBeNull();
      const directiveInstance = directiveEl.injector.get(IntergersDirective);
      fixture.autoDetectChanges();
      directiveInstance.onKeyDown(new KeyboardEvent('keydown'));
      expect(directiveInstance.allowplus).toBeTruthy();

    });

  }));

  it('should be able to test directive with allowSignedDecimal', waitForAsync(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template:  `
        <input type="number" min="0" app-numeric [allowSignedDecimal]="true" [disabefloat]="true" value="20"
        max="23" >`
      }
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(By.directive(IntergersDirective));
      expect(directiveEl).not.toBeNull();
      const directiveInstance = directiveEl.injector.get(IntergersDirective);
      fixture.autoDetectChanges();
      directiveInstance.onKeyDown(new KeyboardEvent('keydown'));
      expect(directiveInstance.allowSignedDecimal).toBeTruthy();

    });

  }));

  it('should be able to test directive with allowDecimal', waitForAsync(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template:  `
        <input type="number" min="0" app-numeric [allowDecimal]="true"  value="20"
        max="23" >`
      }
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(By.directive(IntergersDirective));
      expect(directiveEl).not.toBeNull();
      const directiveInstance = directiveEl.injector.get(IntergersDirective);
      fixture.autoDetectChanges();
      directiveInstance.onKeyDown(new KeyboardEvent('keydown'));
      expect(directiveInstance.allowDecimal).toBeTruthy();

    });

  }));

  it('should be able to test directive wit invalid key', waitForAsync(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template:  `
        <input type="number" min="0" app-numeric [allowDecimal]="true"  value="20"
        max="23" >`
      }
    });

    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const directiveEl = fixture.debugElement.query(By.directive(IntergersDirective));
      expect(directiveEl).not.toBeNull();
      const directiveInstance = directiveEl.injector.get(IntergersDirective);
      fixture.autoDetectChanges();
      directiveInstance.onKeyDown(new KeyboardEvent('backspace'));
      expect(directiveInstance.allowDecimal).toBeTruthy();

    });

  }));



});
