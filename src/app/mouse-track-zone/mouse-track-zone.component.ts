import { Component, Input, OnInit } from '@angular/core';
import { LOG_LEVEL_TOKEN } from '../app.tokens';
import { LogLevel } from '../log-level.enum';
import { MySpecialLoggerService } from '../my-special-logger.service';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.scss'],
  /* MySpecialLoggerService의 인스턴스를 주입받는 것을 유지하면서 AppComponent로 부터 독립적인 로거 인스턴스를 주입
     AppComponent의 LogLevel은 Info  해당 컴포넌트에서 providers를 통해 DEBUG로 재설정*/
  providers: [
    MySpecialLoggerService,
    { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG },
  ],
})
export class MouseTrackZoneComponent implements OnInit {
  //logLevel: LogLevel = LogLevel.DEBUG; //애플리케이션에서 사용할 로그 레벨
  //logger: MySpecialLoggerService; //로그 출력으로 사용할 로거 service
  //@Input() private logger: MySpecialLoggerService;

  //constructor() {
  //  this.logger = new MySpecialLoggerService(this.logLevel);
  //}

  //constructor() {}

  /* 생성자의 매개변수로 선언
  앵귤러의 의존성 주입기가 컴포넌트를 생성할 때 생성자의 인자로 MySpecialLoggerService를 주입 */
  constructor(private logger: MySpecialLoggerService) {}

  captureMousePos($event: MouseEvent) {
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]}  y:${pos[1]}`);
  }

  ngOnInit(): void {}
}
