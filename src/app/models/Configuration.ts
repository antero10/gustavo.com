import {ConfigurationInterface} from '../interfaces/Configuration';

export class Configuration {
  public commandName: string;
  public response: string;
  public dynamicComponent: any;

  constructor(object: ConfigurationInterface) {
    this.commandName = object.commandName;
    this.response = object.response;
    this.dynamicComponent = object.dynamicComponent;
  }
}
