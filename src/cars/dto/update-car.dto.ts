import { IsString, IsUUID } from "class-validator";


export class UpdateCarDto {

    @IsUUID()
    readonly id: string;

    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;

}