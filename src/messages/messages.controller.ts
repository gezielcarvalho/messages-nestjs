import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages() {
        return {result: "Getting all messages"}
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log(body);     
        return {result: "Creating message"}
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return {result: "Getting a message "+id}
    }

}
