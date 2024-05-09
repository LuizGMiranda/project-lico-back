import { Injectable, ParseIntPipe } from "@nestjs/common";
import { CreatePlayerDto } from "./DTO/create-player.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PlayerService {

    constructor(private readonly prisma: PrismaService) {}

    async create({
        name,
        birthOf,
        dominantFoot,
        height,
        weight,
        nationality,
        position
    }: CreatePlayerDto) {
        await this.prisma.player.create({
            data: {
                name,
                birthOf: new Date(birthOf),
                dominantFoot,
                height,
                weight,
                nationality,
                position
            }
        })
    }

    async showAll() {
        return this.prisma.player.findMany()
    }

    async showOne(id: number) {
        return this.prisma.player.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: number, data: CreatePlayerDto) {
        await this.prisma.player.update({
            where: {
                id
            },
            data
        })
    }

}