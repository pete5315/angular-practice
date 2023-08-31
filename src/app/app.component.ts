import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  inputsAndSign: any;
  constructor(private apiService: ApiService) { };
  ngOnInit() {
      this.apiService.getInputsAndSign().subscribe(data => {
          this.inputsAndSign = data;
      });
  }
}