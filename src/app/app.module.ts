// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { ServiceWorkerModule } from '@angular/service-worker';

// Components
import { AppComponent } from './app.component';

// Utilities
import { environment } from '../environments/environment';

const markdownModule: any =
MarkdownModule.forRoot({
  markedOptions: {
    provide: MarkedOptions,
    useValue: {
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
    },
  },
});

const serviceWorker = ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  registrationStrategy: 'registerImmediately'
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgSelectModule,
    markdownModule,
    serviceWorker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
