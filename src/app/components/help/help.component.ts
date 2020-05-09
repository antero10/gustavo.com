import {Component, Input, OnInit} from '@angular/core';
import {HELP} from '../../models/Constants';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.sass']
})
export class HelpComponent implements OnInit {
  public help = HELP;
  constructor() { }

  ngOnInit(): void {
  }

}
