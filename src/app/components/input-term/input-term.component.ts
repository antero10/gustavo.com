import {Component} from '@angular/core';
import {HistoryService} from '../../services/history.service';
import {Command} from '../../models/Command';

@Component({
  selector: 'app-input-term',
  templateUrl: './input-term.component.html',
  styleUrls: ['./input-term.component.sass'],
})
export class InputTermComponent {

  input: string;

  constructor(private historyService: HistoryService) {}

  parseCommand(): void {
    const command = new Command(this.input);
    this.historyService.addToHistory(command);
    this.clear();
  }

  clear(): void {
    this.input = '';
  }

}
