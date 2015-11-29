'use strict';

export function hasError (field) {
  return field.touched && field.error;
}
