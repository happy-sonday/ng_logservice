import { Component } from '@angular/core';
import { LOG_LEVEL_TOKEN } from './app.tokens';
import { LogLevel } from './log-level.enum';
import { MySpecialLoggerService } from './my-special-logger.service';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    MySpecialLoggerService,
    { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.ERROR },
  ],
})
export class AppComponent {
  title = 'mpl works!';

  //logger: MySpecialLoggerService;

  constructor(private logger: MySpecialLoggerService) {
    /*MySpecialLoggerService 를 속성으로 선언하고 생성자에서 기본 로그 레벨을 INFO로 설정  */
    //this.logger = new MySpecialLoggerService(LogLevel.INFO);
    /* MySpecialLoggerService의 인스턴스 생성호 testLoggerLevel이라는 메서드를 호출 */
    //this.testLoggerLevel();
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

  /* 독립적 의존성 주입 정보 테스트 */
  printDebugLog() {
    /* 책의 예제대로 appmodule의 usevalue 값으로 debug가 출력되지 않는다.
    providers를 정보를 생성하지 않으면 의존성 주입이 컴포넌트마다 생성되지 않기때문이다(생성자 constructor가 아님!!) */
    this.logger.debug('test dependency injector tree!');

    /* 상단의 providers 정보를 제거하면 app.module.ts 의 providers 정보가 주입되어 출력 */
    this.logger.info('appcomponent의 providers의 usevalue에 의해 출력');

    this.logger.error(
      'root에서 의존성 정보를 주입하지만 app.component.ts에서 provider를 error로 재정의하여 출력'
    );
  }
}
