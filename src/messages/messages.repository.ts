import { Injectable } from '@nestjs/common';
import { write } from 'fs';
import  { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository {

    async findOne(id: string){
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll(){
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }

    async create(content: string){
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999)+1;
        messages[id] = { id, content }
        return await writeFile('messages.json',JSON.stringify(messages));
    }
}