import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Command} from '../models/Command';

@Injectable()
export class HistoryService {

  private commandAddedSource = new Subject<Command>();

  public history$ = this.commandAddedSource.asObservable();

  addToHistory(command: Command) {
    this.commandAddedSource.next(command);
  }

  cleanHistory() {
    this.commandAddedSource.next();
  }
}
