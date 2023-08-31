import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    getInputsAndSign() {
        return this.http.get(
            'http://localhost:5001/api/calculator');
    }
}