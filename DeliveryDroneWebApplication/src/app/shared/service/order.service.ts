import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/order-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = 'https://localhost something something';
  constructor(private http: HttpClient) { }

  createOrder(orderFormData: OrderModel){
      return this.http.post<OrderModel>(this.apiUrl, orderFormData);
  }
}