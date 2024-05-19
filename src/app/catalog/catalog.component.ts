import { Component } from '@angular/core';
import { haircutOptionList } from './haircuts';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  haircutOptions = haircutOptionList
}
