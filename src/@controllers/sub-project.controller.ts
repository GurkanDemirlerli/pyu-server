import { injectable, inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { ISubProjectService } from "@services/abstract";
import { ErrorHandler } from "@errors/error-handler";
import { InjectTypes } from "@ioc/inject-types";

@injectable()
export class SubProjectController {

  constructor(
    @inject(InjectTypes.Service.SUB_PROJECT) private readonly _subProjectService: ISubProjectService
  ) { }

  find(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;
    this._subProjectService.find(id, req.decoded.id).then((result) => {
      return res.status(200).json({
        success: true,
        data: result
      });
    }).catch((error: Error) => {
      return ErrorHandler.handleErrorResponses(error, res, 'find', 'SubProjectController');
    });
  }


}
