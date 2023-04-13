import { Module } from '@nestjs/common';
import { EventLogController } from './event-log.controller';
import { EventLogService } from './event-log.service';

@Module({
  controllers: [EventLogController],
  providers: [EventLogService]
})
export class EventLogModule {}
