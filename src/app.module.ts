import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/user.entity";
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1237com1!',
    database: 'reddit',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
  }),
    ArticleModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
