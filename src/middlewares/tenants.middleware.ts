import { BadRequestException, Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { NextFunction } from 'express';

import { TenantService } from '../modules/tenant/tenant.service';

@Injectable()
export class TenantsMiddleware implements NestMiddleware {
    constructor(private tenantService: TenantService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const tenantId = req.headers['x-tenant-id']?.toString();
        if (!tenantId) {
            throw new BadRequestException('Identificador da conexão não informado.');
        }

        const tenantExist = await this.tenantService.getTenantById(tenantId);
        if (!tenantExist) {
            throw new NotFoundException('Identificador da conexão inválido, conexão não encontrada.');
        }

        req['tenantId'] = tenantId;
        next();
    }
}