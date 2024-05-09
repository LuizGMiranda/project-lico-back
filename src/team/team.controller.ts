import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { TeamService } from "./team.service";
import { TeamDTO } from "./DTO/team.dto";
import { TeamUpdateDTO } from "./DTO/team-update.dto";

@Controller('team')
export class TeamController {

    constructor(private readonly teamService: TeamService) {}

    @Get()
    getTeams() {
        return this.teamService.getTeams();
    }

    @Get(':id')
    getTeam(@Param ('id', ParseIntPipe) id: number) {
        return this.teamService.getTeam(id);
    }

    @HttpCode(501)
    @Get(':id/players')
    getPlayers(@Param('id', ParseIntPipe) id: number){
        return [];
    }

    @Post()
    createTeam(@Body() body: TeamDTO){
        return this.teamService.createTeam(body);
    }

    @Patch(':id')
    updateTeam(@Param('id', ParseIntPipe) id: number, @Body() body: TeamUpdateDTO){
        return this.teamService.updateTeam(id, body);
    }

}