import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
import { CreatePlayerDto } from "./create-player.dto";

export class UpdatePlayerDto extends CreatePlayerDto {

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    position: string;

    @IsOptional()
    @IsDateString()
    birthOf: Date;

    @IsOptional()
    @IsString()
    nationality: string;

    @IsOptional()
    @IsNumber()
    height: number;

    @IsOptional()
    @IsNumber()
    weight: number;

    @IsOptional()
    @IsString()
    dominantFoot: string;

}