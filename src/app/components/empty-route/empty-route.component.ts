import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'empty-route',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './empty-route.component.html',
  styleUrl: './empty-route.component.scss',
})
export class EmptyRouteComponent {}
