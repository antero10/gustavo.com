import {Component, Inject, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Command} from '../../models/Command';
import {DynamicComponentService} from '../../services/dynamic-component.service';
import {GoogleAnalyticsService} from '../../services/google-analytics.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.sass']
})
export class CommandComponent implements OnInit {
  @Input('command') command: Command;
  private service: DynamicComponentService;


  constructor(@Inject(DynamicComponentService) service, @Inject(ViewContainerRef) viewContainerRef,
              private googleAnalyticsService: GoogleAnalyticsService) {
    this.service = service;
    service.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit(): void {
    if (this.command.configuration.commandName) {
      if (this.command.configuration.dynamicComponent) {
        this.service.addDynamicComponent(this.command.configuration.dynamicComponent);
      }
      this.googleAnalyticsService.trackEvent('User Command', 'command', this.command.configuration.commandName);
    }
  }

}
