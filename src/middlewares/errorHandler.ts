import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  let errorStatusCode = err.statusCode || 500;
  let errorName = err.name || "InternalServerError";
  let errorMessage = err.message || "Internal Server Error";

  let error = {
    name: errorName,
    message: errorMessage,
  };

  res.status(errorStatusCode).json({
    statusCode: errorStatusCode,
    error,
  });
};

export default errorHandler;
