import {ProfileComponent} from '../components/profile/profile.component';
import {Configuration} from './Configuration';
import {WorksComponent} from '../components/works/works.component';
export const GOOGLE_ANALYTICS_URL = 'https://www.google-analytics.com/collect';
export const GOOGLE_ANALYTICS_TRACKING_ID = 'UA-165989809-1';
export const GITHUB_URL = 'https://api.github.com/users/antero10';
export const COMMAND_NOT_FOUND = 'Command Not Found';
export const HELP = `profile: Gustavo Sanchez profile \n
                    works: Projects that i'm proud of\n`;

export const COMMANDS = [
  new Configuration({
    commandName: 'ls',
  }),
  new Configuration({
    commandName: 'profile',
    dynamicComponent: ProfileComponent
  }),
  new Configuration({
    commandName: 'help',
    response: HELP,
  }),
  new Configuration({
    commandName: 'works',
    dynamicComponent: WorksComponent
  })
];
