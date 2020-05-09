import {COMMANDS} from './Constants';
import {ProfileComponent} from '../components/profile/profile.component';
import {Configuration} from './Configuration';

export class Command  {

  constructor(input: string) {
    this.input = input;
    this.processCommand(input);
  }
  public input: string;
  public highlight = false;
  public configuration: Configuration;
  private options = ['profile', 'works', 'contact'];

  public static commandNotFound(input: string): string {
    return `gas: Command not found: ${input}`;
  }

  private processCommand(input: string): void  {
    const matches = input.match( /([a-z]+\s?){2}/gm);
    if (matches && matches.length === 1) {
      const configuration = COMMANDS.find(conf => conf.commandName === matches[0].toLowerCase().replace(' ', '_'));
      if (configuration) {
        this.highlight = true;
        this.configuration = configuration;
      } else {
        this.configuration = new Configuration({
          commandName: input,
          response: Command.commandNotFound(input),
        });
      }
    } else {
      this.configuration = new Configuration({
        commandName: input,
        response: Command.commandNotFound(input),
      });
    }
  }
}
