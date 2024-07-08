/* eslint-disable @typescript-eslint/ban-types */
import { registerDecorator, ValidationOptions, ValidationArguments, ValidateIf } from 'class-validator';
import { constants } from '../constants';
import moment from "moment";

export function IsStrongPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsStrongPassword',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value) {
            return false;
          }
          if (value.length < constants.PASSWORD.MIN_LENGTH || value.length > constants.PASSWORD.MAX_LENGTH) {
            return false;
          }
          const format = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z]).*$/;

          return format.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          const value = args.value;
          if (!value) {
            return 'The $property is required.';
          }
          if (value.length < constants.PASSWORD.MIN_LENGTH || value.length > constants.PASSWORD.MAX_LENGTH) {
            return `The $property must be between ${constants.PASSWORD.MIN_LENGTH} and ${constants.PASSWORD.MAX_LENGTH} characters`;
          }
          return `The $property include uppercase letters, lowercase letters, numbers, and special characters.`;
        },
      },
    });
  };
}

export function IsDateFormat(format: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsDateFormat',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          const moment = require('moment');
          console.log(value)
          return moment(value, format, true).isValid();
        },
        defaultMessage() {
          return `The value of field '$property' must be valid date format ${format}`;
        },
      },
    });
  };
}

export function RequiredIf(requiredCondition: (obj: any, value: any) => boolean, options?: ValidationOptions) {
  // Validate with condition
  return ValidateIf((obj, value) => requiredCondition(obj, value) || value, options);
}
