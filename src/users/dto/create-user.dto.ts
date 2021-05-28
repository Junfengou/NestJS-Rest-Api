// Data Transfer Object

import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

// Basically interface for TypeScript
// Commonly used for [Post] requests
export class CreateUserDto {

    @ApiProperty()
    @IsAlphanumeric() // need to define it globally on [main.ts] first before you can use it here
    @MaxLength(10)
    name: string

    // show documentation inside swagger ui
    @ApiProperty({required: false})
    age?: number; 
}