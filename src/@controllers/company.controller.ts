// import { AppError } from '../errors/app-error';
// import { ErrorHandler } from '../errors/error-handler';
import { injectable, inject } from 'inversify';
import { InjectTypes } from '../ioc';
import { validate } from 'class-validator';
import {
    Request,
    Response,
    NextFunction
} from 'express';
import 'reflect-metadata';
import { CompanyCreateDto } from '../_models/dtos/company/company-create.dto';
import { ErrorHandler } from '../errors/error-handler';
import { ICompanyService } from '../@services/abstract/i-company.service';
@injectable()
export class CompanyController {

    constructor(
        @inject(InjectTypes.Service.COMPANY) private readonly _companyService: ICompanyService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {
        // this._companyRepository.list().then((result: any) => {
        //     console.log("Result : " + result);
            res.send("aaa");
        // });
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
}