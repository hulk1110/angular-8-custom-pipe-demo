import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityComponent } from './activity/activity.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './player/player.component';
import { AgePipe } from './age.pipe';
import { ScorePipe } from './score.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    PlayerComponent,
    AgePipe,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
