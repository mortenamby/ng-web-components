import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'lib-my-library',
  standalone: true,
  imports: [BrowserAnimationsModule, CommonModule, MatFormFieldModule, MatInputModule],
  template: `
      <mat-form-field>
        <mat-label>Type here...</mat-label>
        <input matInput type="text" />
      </mat-form-field>
  `,
})
export class MyLibraryComponent {

}
