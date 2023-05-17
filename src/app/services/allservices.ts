import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class TodoDataService {

  
    constructor(private http:HttpClient) { }
  
  
    // deleteTheTodo(id:any){
    //     return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // }
  
    // deleting all products
    // deleteAllProducts(){
    //   this.http.delete('https://for-all-http-angular-default-rtdb.firebaseio.com/products.json')
    // .subscribe()
    // }
  
    // updateTheProduct(id:string,value:Products){
    //   this.http.put('https://for-all-http-angular-default-rtdb.firebaseio.com/products/'+id+'.json',value)
    //   .subscribe()
    // }
  
  }
  