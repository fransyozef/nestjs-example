import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { HttpStrategy } from './http.strategy';
import { PassportModule } from '@nestjs/passport';
import { ItemsController } from './items/items.controller';
import { ItemController } from './item/item.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  controllers: [
    AppController,
    AuthController,
    ItemsController,
    ItemController,
  ],
  providers: [
    AppService,
    HttpStrategy,
  ],
})
export class AppModule {}
