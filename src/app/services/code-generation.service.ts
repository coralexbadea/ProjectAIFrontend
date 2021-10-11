import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type':'application/json',
  
  })
}

@Injectable({
  providedIn: 'root'
})
export class CodeGenerationService {
  private url = "https://fierce-castle-90111.herokuapp.com/nlp/generate_code"
  constructor(private http:HttpClient) { }

  getCode(prompt:any):Observable<any>{
    const promptJson = {"string":prompt}
    return this.http.post<any>(this.url, promptJson, httpOptions)
  }
}

