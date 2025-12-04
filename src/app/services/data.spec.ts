import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Data } from './data';
import { Product } from '../shared/components/core/product';

describe('DataService', () => {
  let service: Data;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Data]
    });
    service = TestBed.inject(Data);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should retrieve products from the API via GET', () => {
    const dummyProducts: Product[] = [
      { id: 1, name: 'Item 1', price: 100, category: "men", description: 'desc', isNew: true, image: { url: '', alt: '', width: 0, height: 0 } },
      { id: 2, name: 'Item 2', price: 200, category: "women", description: 'desc', isNew: false, image: { url: '', alt: '', width: 0, height: 0 } }
    ];

    service.getAllProducts().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyProducts);
    });

    const req = httpMock.expectOne('items'); 
    
    expect(req.request.method).toBe('GET');

    req.flush(dummyProducts);
  });
});