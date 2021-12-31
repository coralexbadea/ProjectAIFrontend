import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// const API = "http://127.0.0.1:5000"
const API = "https://project-ai-swint.herokuapp.com"

const httpOptions = {
  headers: new HttpHeaders({
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    // 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials' : 'true',
  })
}

@Injectable({
  providedIn: 'root'
})
export class FireForestService {
 
  private url = `${API}/cv/fire_forest`
  constructor(private http:HttpClient) { }

  makePrediction(imageSrc:any):Observable<any>{
    const data = { "imageData":imageSrc};
    console.log(data)
    return this.http.post<any>(this.url, data, httpOptions)
  }
}
