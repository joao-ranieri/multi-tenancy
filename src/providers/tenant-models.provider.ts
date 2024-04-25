import { Connection } from 'mongoose';

import { Product, ProductSchema } from '../modules/products/product.schema';
import { User, UserSchema } from '../modules/user/user.schema';

export const tenantModels = {
    productModel: {
        provide: 'PRODUCT_MODEL',
        useFactory: async (tenantConnection: Connection) => {
            return tenantConnection.model(Product.name, ProductSchema);
        },
        inject: ['TENANT_CONNECTION'],
    },
    userModel: {
        provide: 'USER_MODEL',
        useFactory: async (tenantConnection: Connection) => {
            return tenantConnection.model(User.name, UserSchema);
        },
        inject: ['TENANT_MASTER'],
    }
}