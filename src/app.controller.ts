import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // set string here for base path ['/api']
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // These crud also take in param of string to route the path ['/helloworld']
  getHello(): string {
    return this.appService.getHello();
  }
}
