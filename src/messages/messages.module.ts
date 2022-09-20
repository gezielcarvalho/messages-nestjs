import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageRepository } from './messages.repository';
import { MessageService } from './messages.service';

@Module({
  imports: [],
  controllers: [MessagesController],
  providers: [MessageService,MessageRepository]
})
export class MessagesModule {}
