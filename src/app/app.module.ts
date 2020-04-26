import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTermComponent } from './components/input-term/input-term.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import {FormsModule} from '@angular/forms';
import { HistoryComponent } from './components/history/history.component';
import {HistoryService} from './services/history.service';

@NgModule({
  declarations: [
    AppComponent,
    InputTermComponent,
    AutofocusDirective,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
