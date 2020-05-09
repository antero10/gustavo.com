import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GOOGLE_ANALYTICS_TRACKING_ID, GOOGLE_ANALYTICS_URL} from '../models/Constants';

@Injectable()
export class GoogleAnalyticsService {

  constructor(private http: HttpClient) { }

  trackEvent(category: string, action: string, label: string) {
    const data = {
      v: '1',
      tid: GOOGLE_ANALYTICS_TRACKING_ID,
      cid: '555',
      t: 'event',
      ec: category,
      ea: action,
      el: label,
      ev: '100',
    };
    return this.http.post(GOOGLE_ANALYTICS_URL, data);
  }
}
