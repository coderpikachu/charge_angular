import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ChargeSystemService {

  constructor(private http: HttpClient) { }

  getAll(obj) {
    return this.http.get(`${baseUrl}/${obj}`);
  }

  getAllIds(obj) {
    return this.http.get(`${baseUrl}/${obj}/${'Ids'}`);
  }

  get(obj,fId) {
    return this.http.get(`${baseUrl}/${obj}/${fId}`);
  }

  create(obj,data) {
    return this.http.post(`${baseUrl}/${obj}`, data);
  }

  update(obj,id, data) {
    return this.http.put(`${baseUrl}/${obj}/${id}`, data);
  }

  delete(obj,id) {
    return this.http.delete(`${baseUrl}/${obj}/${id}`);
  }

  deleteAll(obj) {
    return this.http.delete(`${baseUrl}/${obj}`);
  }

  findByfId(obj,fId) {
    return this.http.get(`${baseUrl}/${obj}?fId=${fId}`);
  }

  findBydId(obj, dId) {
    return this.http.get(`${baseUrl}/${obj}?dId=${dId}`);
  }
}
