import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsListComponent } from './items-list';
import { Data } from '../../../services/data';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('ItemsListComponent Integration', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;
  let dataService: Data;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsListComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [Data]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(Data);

    const mockProducts = [
      { id: 1, name: 'P1', price: 100, category: 'men' as const, description: 'd1', isNew: false, image: {url:'', alt:'', width:0, height:0} },
      { id: 2, name: 'P2', price: 200, category: 'women' as const, description: 'd2', isNew: false, image: {url:'', alt:'', width:0, height:0} }
    ];
    spyOn(dataService, 'getAllProducts').and.returnValue(of(mockProducts));

    fixture.detectChanges(); 
  });

  it('should render one app-item-card for each product returned by service', () => {
    const cards = fixture.debugElement.queryAll(By.css('app-item-card'));
    
    expect(cards.length).toBe(2);
  });
});