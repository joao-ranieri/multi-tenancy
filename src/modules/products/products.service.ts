import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Product } from './product.schema';

@Injectable()
export class ProductsService {
    constructor( @Inject('PRODUCT_MODEL') private productModel: Model<Product> ) {}

    async getProducts() {
        return this.productModel.find();
    }
}
