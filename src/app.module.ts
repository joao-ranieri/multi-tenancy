import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import config from './config/config';

import { TenantModule } from './modules/tenant/tenant.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [config]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config) => ({
        uri: config.get('database.connectionString'),
      }),
      inject: [ConfigService],
    }),
    TenantModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
