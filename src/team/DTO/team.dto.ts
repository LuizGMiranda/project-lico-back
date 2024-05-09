import { IsOptional, IsString } from "class-validator";

export class TeamDTO {

    @IsString()
    name

    @IsString()
    @IsOptional()
    coach
}