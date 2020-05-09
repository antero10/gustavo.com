import {Component, Inject, OnDestroy, ViewContainerRef} from '@angular/core';
import {HistoryService} from '../../services/history.service';
import {Command} from '../../models/Command';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnDestroy {
  commands: Command[];
  subscription: Subscription;


  constructor(private historyService: HistoryService) {
    this.commands = [];
    this.subscription = historyService.history$.subscribe(
      command => {
        if (command.configuration.commandName !== 'clear') {
          this.commands.push(command);
        } else {
          this.clean();
        }

      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  clean(): void {
    this.commands = [];
  }
}
