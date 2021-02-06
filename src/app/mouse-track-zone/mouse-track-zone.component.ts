import { Component, Input, OnInit } from '@angular/core';
import { LogLevel } from '../log-level.enum';
import { MySpecialLoggerService } from '../my-special-logger.service';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.scss'],
})
export class MouseTrackZoneComponent implements OnInit {
  logLevel: LogLevel = LogLevel.DEBUG; //애플리케이션에서 사용할 로그 레벨
  logger: MySpecialLoggerService; //로그 출력으로 사용할 로거 service
  //@Input() logger: MySpecialLoggerService;

  /* constructor(private logger: MySpecialLoggerService) {
    this.logger = new MySpecialLoggerService(this.logLevel);
  } */
  constructor() {
    this.logger = new MySpecialLoggerService(this.logLevel);
  }

  captureMousePos($event: MouseEvent) {
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]}  y:${pos[1]}`);
  }

  ngOnInit(): void {}
}
