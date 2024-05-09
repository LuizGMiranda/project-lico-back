import { IsOptional, IsString } from "class-validator";
import { TeamDTO } from "./team.dto";

export class TeamUpdateDTO extends TeamDTO {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    coach: string;
}