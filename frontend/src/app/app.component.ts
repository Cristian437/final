import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTestMessage().subscribe(
      (response: any) => { 
        this.message = response.message; 
      },
      (error) => {
        console.error('Error al conectar con el backend', error);
      }
    );
  }
}
