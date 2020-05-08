import {Component, Inject, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Command} from '../../models/Command';
import {DynamicComponentService} from '../../services/dynamic-component.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.sass']
})
export class CommandComponent implements OnInit {
  @Input('command') command: Command;
  private service: DynamicComponentService;


  constructor(@Inject(DynamicComponentService) service, @Inject(ViewContainerRef) viewContainerRef) {
    this.service = service;
    service.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit(): void {
    if (this.command.configuration.dynamicComponent) {
      this.service.addDynamicComponent(this.command.configuration.dynamicComponent);
    }
  }

}
