import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BaseHttpClientService } from './base-http-client.service';


describe('BaseHttpClientService', () => {

  let baseHttpClientService: jasmine.SpyObj<BaseHttpClientService >;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [BaseHttpClientService]
    }).compileComponents();

    baseHttpClientService = TestBed.get(BaseHttpClientService);
  });

  it(' BaseHttpClientService should get created', () => {
    expect(baseHttpClientService).toBeTruthy();
  });

  it(' BaseHttpClientService : get method should work', () => {
    expect(baseHttpClientService).toBeTruthy();
    const httpReq = baseHttpClientService.get('testURL');
    expect(httpReq).toBeTruthy();
  });

  it(' BaseHttpClientService : post method should work', () => {
    expect(baseHttpClientService).toBeTruthy();
    const httpReq = baseHttpClientService.post('testURL','data',Option,true);
    expect(httpReq).toBeTruthy();
  });

  it(' BaseHttpClientService : put method should work', () => {
    expect(baseHttpClientService).toBeTruthy();
    const httpReq = baseHttpClientService.put('testURL','data',Option,true);
    expect(httpReq).toBeTruthy();
  });

  it(' BaseHttpClientService : delete method should work', () => {
    expect(baseHttpClientService).toBeTruthy();
    const httpReq = baseHttpClientService.delete('testURL');
    expect(httpReq).toBeTruthy();
  });

  it(' BaseHttpClientService : get method should work without authentication', () => {
    expect(baseHttpClientService).toBeTruthy();
    const httpReq = baseHttpClientService.get('testURL', {headers: new HttpHeaders({ 'Un-Authentication': 'True' })}, false);
    expect(httpReq).toBeTruthy();
  });

  it(' BaseHttpClientService : get method should work without authentication and headers', () => {
    expect(baseHttpClientService).toBeTruthy();
    const httpReq = baseHttpClientService.get('testURL', null, false);
    expect(httpReq).toBeTruthy();
  });

});
