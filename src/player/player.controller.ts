import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreatePlayerDto } from './DTO/create-player.dto';
import { PlayerService } from './player.service';
import { UpdatePlayerDto } from './DTO/update-player.dto';

@Controller('player')
export class PlayerController {

    constructor(private readonly playerService: PlayerService) {}

    @Get()
    getPlayers(){
        return this.playerService.showAll();
    }

    @Get(':id')
    getPlayer(@Param('id', ParseIntPipe) id: number) {
        return {id}
    }

    @Post()
    async createPlayer(@Body() body: CreatePlayerDto) {
        console.log({body});
        const resp = await this.playerService.create(body);
        return ({ok: true, resp});
    }

    @Patch(':id')
    updatePlayer(@Param('id', ParseIntPipe) id: number, @Body() body: UpdatePlayerDto) {
        console.log({body});
        return this.playerService.update(id, body);
    }
}
