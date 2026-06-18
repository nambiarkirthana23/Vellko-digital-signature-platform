import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DocumentController } from "../controller/document.controller";
import { DocumentService } from "../service/document.service";
import {Document} from "../entity/document.entity";
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forFeature([Document]),
JwtModule.register({
      secret: 'secret', 
      signOptions: { expiresIn: '1h' },
    }),

],
  
  controllers: [DocumentController],
  providers: [DocumentService],
})
export class DocumentModule {}