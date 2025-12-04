import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../services/data'; 
@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css'
})
export class ItemForm {
  itemForm: FormGroup;
  constructor(
    private dataService: Data,
    private router: Router
  ) {
    this.itemForm = new FormGroup({
      name: new FormControl('', [
        Validators.required, 
        Validators.minLength(3)
      ]),
      description: new FormControl('', [
        Validators.required, 
        Validators.maxLength(200)
      ]),
      price: new FormControl(null, [
        Validators.required, 
        Validators.min(0.01)
      ]),
      category: new FormControl('electronics', Validators.required),
      imageUrl: new FormControl('', [
        Validators.required,
        Validators.pattern('https?://.+') 
      ])
    });
  }

  get f() { return this.itemForm.controls; }

  onSubmit() {
    if (this.itemForm.valid) {
      const newItem = this.itemForm.value;
      
      console.log('Дані форми:', newItem);

      this.dataService.addItem(newItem).subscribe({
        next: () => {
          alert('Товар успішно додано!');
          this.router.navigate(['/items']); 
        },
        error: (err: any) => console.error('Помилка:', err)
      });
    } else {
     
      this.itemForm.markAllAsTouched();
    }
  }
}
