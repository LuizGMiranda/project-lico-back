import { IsDate, IsDateString, IsDecimal, IsEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePlayerDto {

    @IsString()
    name: string;

    @IsString()
    position: string;

    @IsDateString()
    birthOf: Date;

    @IsString()
    nationality: string;

    @IsNumber()
    height: number;

    @IsNumber()
    weight: number;

    @IsString()
    dominantFoot: string;
}