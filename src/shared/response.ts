export default class HttpResponse<T> {
  statusCode: number;

  message: string;

  data?: T;

  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  static send<T>(
    statusCode = 500,
    message = 'Internal Server Error',
    data: T,
  ): HttpResponse<T> {
    return new HttpResponse(statusCode, message, data);
  }
}
