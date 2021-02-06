import { LogLevel } from './log-level.enum';

export abstract class LoggerService {
  logLevel: LogLevel;

  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  debug(msg: string) {
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

  abstract log(logLevel: LogLevel, msg: string);

  /* TODO: protected는 상속받은 클래스에서만 사용할 수 있도록 접근 제어자를 설정 */
  protected isProperLogLevel(logLevel: LogLevel): boolean {
    if (this.logLevel === LogLevel.DEBUG) return true;
    return logLevel >= this.logLevel;
  }
}
