/**
 * @abstract List out all different properties that must be defined by any class that extends CustomError class.
 */

export abstract class CustomError extends Error {
  abstract statusCode: number

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype)
  }

  abstract serializeErrors(): { message: string, field?: string }[]
}