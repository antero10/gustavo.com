import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Angulartics2 } from 'angulartics2';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class GoogleAnalyticsService {
  private uuid: string;
  constructor(private http: HttpClient, private angulartics2: Angulartics2) {
    this.uuid = uuidv4();
  }

  trackEvent(category: string, action: string, label: string) {
    return this.angulartics2.eventTrack.next({
      action: 'console',
      properties: { category, action, label },
    });
  }
}
