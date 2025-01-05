import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives and pipes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HttpClientModule, CommonModule], // Import HttpClientModule and CommonModule
})
export class AppComponent {
  data: any;

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('http://localhost:8000/test').subscribe((response) => {
      this.data = response;
    });
  }
}
