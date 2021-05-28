import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        { id: 0, name: "OG" },
        { id: 1, name: "John Cena" },
        { id: 2, name: "OG" },
        { id: 3, name: "James Bucky" },
    ]

    findAll(name?: string): User[] {
        if(name) {
            return this.users.filter((user) => user.name === name)
        }
        return this.users;
    }

    // return Type User
    findById(userId: number): User {
        // define method
        return this.users.find((user) => user.id === userId);
    }

    // Return type here is a safeguard to make sure the new user created contains all the necessary information
    createUser(CreateUserDto: CreateUserDto): User {
        const newUser = {id: Date.now(), ...CreateUserDto} // spread it out for future proof if the CreateUserDto ever increase fields
        this.users.push(newUser);
        return newUser;
    }
}
