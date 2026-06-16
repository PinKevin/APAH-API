import { HttpResponse } from '@adonisjs/core/http'

export default class ResponseService {
  successResponse(
    response: HttpResponse,
    message: string,
    payload?: Record<string, any>,
    statusCode: number = 200
  ) {
    return response.status(statusCode).json({
      status: 'success',
      message,
      payload,
    })
  }

  failResponse(response: HttpResponse, message: string, statusCode: number = 400) {
    return response.status(statusCode).json({
      status: 'fail',
      message,
    })
  }

  errorResponse(
    response: HttpResponse,
    message: string = 'Terjadi kesalahan dalam sistem',
    statusCode: number = 500
  ) {
    return response.status(statusCode).json({
      status: 'error',
      message,
    })
  }
}
