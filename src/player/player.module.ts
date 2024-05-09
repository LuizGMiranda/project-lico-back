import { Module } from "@nestjs/common";
import { PlayerController } from "./player.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { PlayerService } from "./player.service";

@Module({
    imports: [PrismaModule],
    controllers: [PlayerController],
    providers: [PlayerService],
    exports: [],
})
export class PlayerModule {}