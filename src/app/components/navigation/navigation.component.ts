import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class MyNavigationComponent {}
