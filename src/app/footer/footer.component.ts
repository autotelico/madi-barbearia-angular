import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  author = 'Henrique Heron';
  openGitHub() {
    window.open('https://github.com/autotelico')
  }
  openLinkedIn() {
    window.open('https://www.linkedin.com/in/henrique-mag/')
  }
}
