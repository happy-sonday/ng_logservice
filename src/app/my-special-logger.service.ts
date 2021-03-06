import { Inject, Injectable } from '@angular/core';
import { LogLevel } from './log-level.enum';
import { format } from 'date-fns';
import { LOG_LEVEL_TOKEN } from './app.tokens';
import { LoggerService } from './logger-service';

@Injectable({
  providedIn: 'root',
})
//@Injectable()
export class MySpecialLoggerService extends LoggerService {
  /* LoggerService 상속받은것에 abstract log 재정의 */
  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  }
  /* 현재 서비스에 설정한 로그레벨 */
  //logLevel: LogLevel;
  /* 속성은 과거 로그를 보관 */
  logs: string[] = [];
  /* 보관할 수 있는 로그의 최대수 */
  private readonly _MAX_HISTORY_CNT: number = 100;
  private readonly _TIME_FORMATTER: string = 'yyyy-MM-dd HH:mm:ss.SSS';

  // constructor(@Inject('logLevel') logLevel: LogLevel) {
  /* 외부 라이브러리에서 사용 중인 키와 중복될 수 있어 InjetionToken 사용 */
  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    //this.logLevel = logLevel;
    super(logLevel);
  }

  /*   debug(msg: string) {
    this.log(LogLevel.DEBUG, msg);
  }
  info(msg: string) {
    this.log(LogLevel.INFO, msg);
  }
  warn(msg: string) {
    this.log(LogLevel.WARN, msg);
  }
  error(msg: string) {
    this.log(LogLevel.ERROR, msg);
  }

  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);

    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  } */

  private keepLogHistory(log: string) {
    if (this.log.length === this._MAX_HISTORY_CNT) {
      this.logs.shift(); //shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다
    }
    this.logs.push(log);
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
    const curTimestamp = format(new Date(), this._TIME_FORMATTER);
    return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
  }

  /*  private isProperLogLevel(logLevle: LogLevel): boolean {
    if (this.logLevel === LogLevel.DEBUG) return true;
    return logLevle >= this.logLevel;
  } */
}
