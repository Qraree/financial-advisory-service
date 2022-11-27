import { SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer
} from '@nestjs/websockets';
import {Chat} from "./chat/chat.model";
import {AppService} from "./app.service";

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})


export class AppGateway {
  constructor(private appService: AppService) {
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
