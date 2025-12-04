import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCardComponent } from './item-card';
import { RouterTestingModule } from '@angular/router/testing';
import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { By } from '@angular/platform-browser';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        ItemCardComponent, 
        RouterTestingModule, 
        TruncatePipe 
      ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    

    component.product = {
      id: 1,
      name: 'Test Product',
      price: 500,
      description: 'Test Description',
      category: "men",
      isNew: true,
      image: { url: 'img.jpg', alt: 'alt', width: 100, height: 100 }
    };
    
    fixture.detectChanges(); 
  });

  it('should display the product name correctly', () => {
    const titleElement = fixture.debugElement.query(By.css('.product-name')).nativeElement;
    expect(titleElement.textContent).toContain('Test Product');
  });

  it('should display the price correctly', () => {
    const priceElement = fixture.debugElement.query(By.css('.price')).nativeElement;
    expect(priceElement.textContent).toContain('500');
  });

  it('should show "New" badge if product isNew is true', () => {
    const badge = fixture.debugElement.query(By.css('.new-badge'));
    expect(badge).toBeTruthy(); 
  });
});