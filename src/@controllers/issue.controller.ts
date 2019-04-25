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
import { IssueCreateDto } from '../_models/dtos/issue/issue-create.dto';
import { ErrorHandler } from '../errors/error-handler';
import { IIssueService } from '../@services/abstract/i-issue.service';
@injectable()
export class IssueController {

    constructor(
        @inject(InjectTypes.Service.ISSUE) private readonly _issueService: IIssueService
    ) { }

    list(req: Request, res: Response, next: NextFunction) {
        // this._issueRepository.list().then((result: any) => {
        //     console.log("Result : " + result);
            res.send("aaa");
        // });
    }


    insert(req: Request, res: Response, next: NextFunction) {
        let issDto: IssueCreateDto = Object.assign(new IssueCreateDto(), req.body);
        issDto.creatorId = req.decoded.id;
        this._issueService.add(issDto).then((result) => {
            return res.status(201).json({
                success: true,
                data: result
            });
        }).catch((error: Error) => {
            return ErrorHandler.handleErrorResponses(error, res, 'insert', 'IssueController');
        });
    }
}