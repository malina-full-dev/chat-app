// dto structura de la inf recivida o enviada
import { ApiProperty } from "@nestjs/swagger";

export class MessageDto {
    @ApiProperty( { description: 'Mensaje de la petición', type:'string' } )
    message: string; 
}