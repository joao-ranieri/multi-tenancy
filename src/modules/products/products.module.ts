import { ProductsController } from './products.controller';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { TenantsMiddleware } from '../../middlewares/tenants.middleware';
import { tenantModels } from '../../providers/tenant-models.provider';

import { ProductsService } from './products.service';

@Module({
    controllers: [ ProductsController ],
    providers: [
        ProductsService,
        tenantModels.productModel,
    ],
})
export class ProductsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(TenantsMiddleware).forRoutes(ProductsController);
    }
}