import {HELP} from './Constants';

export class Command  {
  public input: string;
  public response: string;
  public highlight = false;

  private options = ['profile', 'works', 'contact'];

  constructor(input: string) {
    this.input = input;
    this.processCommand(input);
  }

  private processCommand(input: string)  {
    const matches = input.match( /([a-z]+\s?){2}/gm);
    if (matches && matches.length === 1) {
      // TODO: For now simple commands
      this.highlight = true;
      switch (matches[0].toLowerCase()) {
        case 'help':
          this.response  = HELP;
          break;
        case 'ls':
          this.response = this.options.join(' ');
          break;
        default:
          this.highlight = false;
          this.response = this.commandNotFound(input);
      }
    } else {
      this.response = this.commandNotFound(input);
    }
  }

  private commandNotFound(input: string): string {
    return this.response = `gas: Command not found: ${input}`;
  }
}

