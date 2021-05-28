import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

/*
    Since this file is nested inside the users, it will route based on the default/users
    EX: http://localhost:3000/users
*/

@ApiTags('users') // section off everything in swagger ui
@Controller('users')
export class UsersController {

    // dependency injection [define your class in (UsersService)]
    // inject dependencies into this controller if it's provided in the constructor
    constructor(private usersService: UsersService) {}

    @ApiOkResponse({type: User, isArray: true, description: "Return a list of users"})
    @Get()
    @ApiQuery({name: 'name', required: false }) // gotta tell Swagger ui that the name field is optional param
    // Query param
    getUsers(@Query('name') name: string) : User[] {
        return this.usersService.findAll(name);
    }


    @ApiOkResponse({type: User, isArray: false})
    @ApiNotFoundResponse() // it's possible to get 404 response from this call
    // http://localhost:3000/users/2
    @Get(':id')
    // Nest offer something called pipping. Can be used for either data manipulation or data validation
    getUserById(@Param('id', ParseIntPipe) id: number): User {

        const user = this.usersService.findById(id); // no need to type cast [id] anymore
        console.log('--->', typeof id);
        

        if(!user) {
            throw new NotFoundException();
        }

        // parse the id from the url and provide it in here
        return user // cast it to number
    }


    @ApiCreatedResponse({ type: User })
    @ApiBadRequestResponse()
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body); // pass the entire CreateUserDto class in here
    }
}
