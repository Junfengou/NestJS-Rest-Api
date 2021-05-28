// Entities usually map one-to-one to your DB table

import { ApiProperty } from "@nestjs/swagger";

// commonly used for [Get] requests

export class User {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}