import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyNavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyCalculatorComponent,
    FormsModule,
    ReactiveFormsModule,
    MyNavigationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
