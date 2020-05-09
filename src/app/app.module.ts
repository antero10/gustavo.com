import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTermComponent } from './components/input-term/input-term.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import {FormsModule} from '@angular/forms';
import { HistoryComponent } from './components/history/history.component';
import {HistoryService} from './services/history.service';
import { ProfileComponent } from './components/profile/profile.component';
import {DynamicComponentService} from './services/dynamic-component.service';
import { CommandComponent } from './components/command/command.component';
import {HttpClientModule} from '@angular/common/http';
import { WorksComponent } from './components/works/works.component';
import {GithubService} from './services/github.service';
import {LinkedInService} from './services/linked-in.service';
import {GoogleAnalyticsService} from './services/google-analytics.service';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTermComponent,
    AutofocusDirective,
    HistoryComponent,
    ProfileComponent,
    CommandComponent,
    WorksComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [HistoryService, DynamicComponentService, GithubService, LinkedInService, GoogleAnalyticsService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent]
})
export class AppModule { }
