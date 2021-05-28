import { Module } from '@nestjs/common';
import { UsersController } from "./users.controller"
import { UsersService } from './users.service';

@Module({
    // [nest generate controller users]
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {
    
}
