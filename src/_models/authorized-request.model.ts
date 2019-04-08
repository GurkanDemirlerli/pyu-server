import { DecodedTokenModel } from './decoded-token.model';
import { Request } from 'express';

interface AuthorizedRequest extends Request {
    decoded: DecodedTokenModel;
}

export default AuthorizedRequest;