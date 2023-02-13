import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  onSubmitB() {
    this.router.navigate(['/buscar']);
  }
  onSubmitR() {
    this.router.navigate(['/registro']);
  }
  title = 'project-name';
}
