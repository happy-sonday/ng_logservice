import { Inject, Injectable } from '@angular/core';
import { LOG_LEVEL_TOKEN } from './app.tokens';
import { LogLevel } from './log-level.enum';
import { LoggerService } from './logger-service';

@Injectable({
  providedIn: 'root',
})
export class AnotherLoggerService extends LoggerService {
  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    super(logLevel);
  }

  /* LoggerService에 대한 재정의 */
  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    /* 상속받아 재정의한 abstract log의 scope에는 LoggerService의 method를 this로 접근가능 */
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
    }
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
    return `[${LogLevel[logLevel]} - ${msg}]`;
  }
}
