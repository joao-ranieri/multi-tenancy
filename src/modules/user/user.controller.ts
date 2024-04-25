import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}

    @Post()
    async create(@Body() user: { name: string, email: string, password: string }) {
        return await this.userService.create(user);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.userService.delete(id);
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.userService.findById(id);
    }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }
}
