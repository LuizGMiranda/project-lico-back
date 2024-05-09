import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TeamService } from './team.service';

@Module({
    imports: [PrismaModule],
    controllers: [TeamController],
    providers: [TeamService]
})
export class TeamModule {}
