import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Tenant, TenantSchema } from './tenant.schema';
import { tenantConnectionProvider } from '../../providers/tenant-connection.provider';
import { TenantService } from './tenant.service';

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Tenant.name,
                schema: TenantSchema,
            }
        ]),
    ],
    controllers: [],
    providers: [ TenantService, tenantConnectionProvider ],
    exports: [ TenantService, tenantConnectionProvider ],
})
export class TenantModule { }
