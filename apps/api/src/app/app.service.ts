import { Injectable } from '@nestjs/common';
import { Message } from '@planout-store/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
