/*애플리케이션에 사용한 provider의 키가 외부 라이브러이와 중복으로 인한 충돌을 방지  */
import { InjectionToken } from '@angular/core';
import { LogLevel } from './log-level.enum';
export const LOG_LEVEL_TOKEN = new InjectionToken<LogLevel>('logLevel');
