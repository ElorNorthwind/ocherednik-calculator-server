export default class ApiError extends Error {
  status;
  errors;

  constructor(status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static InternalError() {
    return new ApiError(500, "Ошибка сервера");
  }

  static UrlNotFoundError() {
    return new ApiError(404, "Несуществующий путь");
  }

  static NotFoundError() {
    return new ApiError(404, "Данные не найдены");
  }

  static ForbiddenError() {
    return new ApiError(403, "Недостаточно прав");
  }

  static UnauthorizedError() {
    return new ApiError(401, "Необходима авторизация");
  }

  static BadRequest(message: string, errors = []) {
    return new ApiError(400, message, errors);
  }
}
