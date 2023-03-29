class RestApiError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends RestApiError {
  constructor(message) {
    super(message);
    this.status = 400;
    this.type = "Bad Request";
  }
}

class NotAuthorizideError extends RestApiError {
  constructor(message) {
    super(message);
    this.status = 401;
    this.type = "Unauthorized";
  }
}

class WrongParametersError extends RestApiError {
  constructor(message) {
    super(message);
    this.status = 404;
    this.type = "Failure";
  }
}

class RegistrationConflictError extends RestApiError {
  constructor(message) {
    super(message);
    this.status = 409;
    this.type = "Conflict";
  }
}

module.exports = {
  RestApiError,
  WrongParametersError,
  ValidationError,
  NotAuthorizideError,
  RegistrationConflictError,
};
