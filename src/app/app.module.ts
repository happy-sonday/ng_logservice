import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LOG_LEVEL_TOKEN } from './app.tokens';
import { LogLevel } from './log-level.enum';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';
import { MySpecialLoggerService } from './my-special-logger.service';

@NgModule({
  declarations: [AppComponent, MouseTrackZoneComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    MySpecialLoggerService,
    //{ provide: 'logLevel', useValue: LogLevel.INFO },
    /* 외부 라이브러리에서 사용 중인 키와 중복될 수 있어 InjetionToken 사용 */
    /* TODO:해당 생성자에 동일하게 @Inject 선언하지 않으면 자동 완성이 안되 확인 */
    { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
