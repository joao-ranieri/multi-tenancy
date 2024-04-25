import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
    ) {}

    async create(user: { name: string, email: string, password: string }) {
        const data = new this.userModel(user);
        return await data.save().then(async (response) => {
            return { id: response.id, name: response.name, email: response.email };
        });
    }
    
    async delete(id: string) {
        return await this.userModel.findByIdAndDelete(id)
        .then(() => {
            return "Usuário deletado com sucesso!";
        });
    }

    async findById(id: string) {
        return await this.userModel.findById(id);
    }

    async findAll() {
        return await this.userModel.find();
    }
}
