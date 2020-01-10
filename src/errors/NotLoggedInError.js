export default class NotLoggedInError extends Error {
  constructor(what) {
    super(what);
    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}
