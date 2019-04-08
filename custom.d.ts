import { DecodedTokenModel } from './src/_models/decoded-token.model';
declare global {
    namespace Express {
      interface Request {
        decoded: DecodedTokenModel
      }
    }
  }