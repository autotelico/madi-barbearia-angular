import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PeopleDisplayComponent } from './people-display/people-display.component';
import { UpperCasePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // NgModules
    RouterOutlet,
    FormsModule,
    PeopleDisplayComponent,
    UpperCasePipe,
    // components
    HeaderComponent,
    CatalogComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = 0;
  name = '';
  handleClick() {
    this.count++;
  }
}
