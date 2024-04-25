import { getConnectionToken } from "@nestjs/mongoose";
import { Connection } from 'mongoose';

export const tenantMasterProvider = {
    provide: 'TENANT_MASTER',
    useFactory: async (connection: Connection) => {
        return connection.useDb('master');
    },
    inject: [getConnectionToken()],
};