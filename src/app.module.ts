import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/user.entity";
import { ArticleModule } from './article/article.module';
import {ConfigModule} from "@nestjs/config";
import { SubModule } from './sub/sub.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_URL,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
  }),
    ArticleModule,
    SubModule,
    AuthModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
