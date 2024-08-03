import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { HttpAdapterHost } from '@nestjs/core';
  
  @Catch()
  export class GlobalExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {
      const { httpAdapter } = this.httpAdapterHost;
      if (!httpAdapter) {
        throw 'No HTTP Adapter';
      }
    }
  
    catch(exception: unknown, host: ArgumentsHost): void {
      const { httpAdapter } = this.httpAdapterHost;
  
      const ctx = host.switchToHttp();
  
      let httpStatus: number, httpMsg: string | object;
  
      // console.log(typeof exception);
      // console.log(exception);
      // console.log({ ...(exception as any) });
      // console.log({ ...(exception as any) }.keys);
      // console.log((exception as any).codePrefix);
  
      switch (String((exception as any).name)) {
        case 'CastError':
          httpStatus = HttpStatus.UNPROCESSABLE_ENTITY;
          httpMsg = 'Error with ID';
          break;
        case 'DocumentNotFoundError':
          httpStatus = HttpStatus.NOT_FOUND;
          httpMsg = 'Requested resource not found!';
          break;
        case 'ValidationError':
          httpStatus = HttpStatus.BAD_REQUEST;
          httpMsg = 'Bad Request! ' + (exception as any).message;
          break;
        case 'MongoServerError':
          httpStatus = HttpStatus.NOT_ACCEPTABLE;
          httpMsg = 'Error connecting to Database!';
          break;
        default:
          console.error(exception);
          if ((exception as any).codePrefix) {
            httpStatus = HttpStatus.BAD_REQUEST;
            httpMsg = (exception as any).errorInfo ;
            break;
          }
          httpStatus =
            exception instanceof HttpException
              ? exception.getStatus()
              : HttpStatus.INTERNAL_SERVER_ERROR;
  
          httpMsg =
            exception instanceof HttpException
              ? exception.getResponse()
              : 'Something went wrong!';
      }
  
      const responseBody = {
        statusCode: httpStatus,
        timestamp: new Date().toISOString(),
        path: httpAdapter.getRequestUrl(ctx.getRequest()),
        message: typeof httpMsg === 'string' ? httpMsg : httpMsg['message'],
      };
  
      httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
  }
  