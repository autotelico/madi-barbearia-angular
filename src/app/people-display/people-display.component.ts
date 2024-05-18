import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'people-display',
  standalone: true,
  imports: [],
  templateUrl: './people-display.component.html',
  styleUrl: './people-display.component.css'
})
export class PeopleDisplayComponent {
  @Input() favFood = 0;
  people = ['Carl', 'Seiya']
}
