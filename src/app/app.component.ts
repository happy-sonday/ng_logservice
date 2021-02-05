import { Component } from '@angular/core';
import { LogLevel } from './log-level.enum';
import { MySpecialLoggerService } from './my-special-logger.service';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mpl works!';

  logger: MySpecialLoggerService;

  constructor() {
    /*MySpecialLoggerService 를 속성으로 선언하고 생성자에서 기본 로그 레벨을 INFO로 설정  */
    this.logger = new MySpecialLoggerService(LogLevel.INFO);
    /* MySpecialLoggerService의 인스턴스 생성호 testLoggerLevel이라는 메서드를 호출 */
    this.testLoggerLevel();
  }

  testLoggerLevel() {
    console.log('=================default(info) Log level=============');
    this.logger.debug('test logging...in debug');
    this.logger.info('test logging...in info');
    this.logger.warn('test logging...in warn');
    this.logger.error('test logging...in error');

    this.logger.logLevel = LogLevel.DEBUG;
    console.log('==================Debug Log Level=====================');
    this.logger.debug('test logging...in debug');
    this.logger.info('test logging...in info');
    this.logger.warn('test logging...in warn');
    this.logger.error('test logging...in error');

    this.logger.logLevel = LogLevel.WARN;
    console.log('==================WARN Log Level=====================');
    this.logger.debug('test logging...in debug');
    this.logger.info('test logging...in info');
    this.logger.warn('test logging...in warn');
    this.logger.error('test logging...in error');

    this.logger.logLevel = LogLevel.ERROR;
    console.log('==================ERROR Log Level=====================');
    this.logger.debug('test logging...in debug');
    this.logger.info('test logging...in info');
    this.logger.warn('test logging...in warn');
    this.logger.error('test logging...in error');
  }
}
