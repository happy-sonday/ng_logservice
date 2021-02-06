import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogLevel } from './log-level.enum';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';
import { MySpecialLoggerService } from './my-special-logger.service';

@NgModule({
  declarations: [AppComponent, MouseTrackZoneComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    /*   MySpecialLoggerService,
    { provide: 'logLevel', useValue: LogLevel.INFO }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
