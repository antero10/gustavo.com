import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LinkedInService {
  constructor(private http: HttpClient) {
  }

  getProfile() {
    return this.http.get('asd');
  }
}
