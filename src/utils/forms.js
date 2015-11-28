'use strict';

import React from 'react';

export function required (values, key, errors) {
  if (!values[key]) {
    errors[key] = 'Required';
  }
}

export function hasError (field) {
  return field.touched && field.error;
}

export function errorSpan (field) {
  return hasError(field) ? <span className="red">({field.error})</span> : '';
}
