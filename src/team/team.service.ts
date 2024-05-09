import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { TeamDTO } from "./DTO/team.dto";
import { TeamUpdateDTO } from "./DTO/team-update.dto";

@Injectable()
export class TeamService {

    constructor(private readonly prisma: PrismaService) {}

    async getTeams() {
        try {
            const teams = await this.prisma.team.findMany();
            return teams;            
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async getTeam(id: number) {
        return await this.prisma.team.findUnique({
            where: {
                id
            }
        });
    }

    getPlayers() {
        return 'All players from one team';
    }

    async createTeam({ coach, name }: TeamDTO) {
        return await this.prisma.team.create({
            data: {
                coach,
                name,
            }
        });
    }

    async updateTeam(id: number, data: TeamUpdateDTO) {
        console.log('updateTeam', {id, data});
        return await this.prisma.team.update({
            where: {
                id
            },
            data,
        });
    }
}