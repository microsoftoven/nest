import { NextFunction, Request, Response } from 'express';

export const globallyBoundMiddleware = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  console.log('Globally bound middleware');
  next();
};
