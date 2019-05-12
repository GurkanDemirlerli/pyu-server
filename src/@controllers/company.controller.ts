import { injectable, inject } from 'inversify';
import { InjectTypes } from '../ioc';
import {
    Request,
    Response,
    NextFunction
} from 'express';
import 'reflect-metadata';
import { CompanyCreateDto } from '../_models/dtos/company/company-create.dto';
import { ErrorHandler } from '../errors/error-handler';
import { ICompanyService } from '../@services/abstract/i-company.service';
import { CompanyFilter } from '@models/filters';
import { CompanyUpdateDto } from '@models/dtos';
@injectable()
export class CompanyController {

    constructor(
        @inject(InjectTypes.Service.COMPANY) private readonly _companyService: ICompanyService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {

        let filters: CompanyFilter = {};
        if (req.query.hasOwnProperty("owner")) {
            if (req.query.assignedTo === "true") filters.owner = true;
        }

        this._companyService.list(filters, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'list', 'CompanyController');
        });
    }


    insert(req: Request, res: Response, next: NextFunction) {
        let cmpDto: CompanyCreateDto = Object.assign(new CompanyCreateDto(), req.body);
        cmpDto.ownerId = req.decoded.id;
        this._companyService.add(cmpDto).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'CompanyController');
        });
    }

    find(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._companyService.find(id, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'find', 'CompanyController');
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        const id: number = req.params.id;
        const cmpDto: CompanyUpdateDto = Object.assign(new CompanyCreateDto(), req.body);
        this._companyService.update(id, cmpDto, req.decoded.id).then((result) => {
            return res.status(200).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'update', 'CompanyController');
        });
    }

    delete(req: Request, res: Response, next: NextFunction) {
        const id: number = +req.params.id;
        this._companyService.delete(id, req.decoded.id).then(() => {
            return res.status(200).json({
                success: true
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'delete', 'CompanyController');
        });
    }
}
