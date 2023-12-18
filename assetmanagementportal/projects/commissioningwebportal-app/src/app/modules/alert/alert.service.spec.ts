import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';



describe('AlertService', () => {
  let alertService: jasmine.SpyObj<AlertService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [AlertService]
    }).compileComponents();

    alertService = TestBed.get(AlertService);
    router = TestBed.get(Router);


  });

  it('should create AlertService', () => {
    expect(alertService).toBeTruthy();
  });

  it('AlertService should success', () => {
    spyOn(alertService, 'alert');
    alertService.success('test');
    expect(alertService.alert).toHaveBeenCalled();
  });

  it('AlertService should error', () => {
    spyOn(alertService, 'alert');
    alertService.error('test');
    expect(alertService.alert).toHaveBeenCalled();
  });

  it('AlertService should info', () => {
    spyOn(alertService, 'alert');
    alertService.info('test');
    expect(alertService.alert).toHaveBeenCalled();
  });


  it('AlertService should warn', () => {
    spyOn(alertService, 'alert');
    alertService.warn('test');
    expect(alertService.alert).toHaveBeenCalled();
  });


  it('AlertService should success', () => {
    alertService.success('test');
    expect(alertService).toBeTruthy();
  });

  it('AlertService should getAlert return an Observable', () => {
    const alert = alertService.getAlert();
    expect(alert).toBeTruthy();
  });

  it('AlertService should notify NavigationStart ', () => {
    router.navigate(['/']);
    expect(alert).toBeTruthy();
  });

});
