'use strict';

const _EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const _SQL_DATE_REGEX = /[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/i;
const _PHONE_REGEX = /[0-9]{5,20}$/i;

const _regexFormatValidator = (re, type) => {
  return (values, errors, key, msg) => {
    if (values[key] && !re.test(values[key])) {
      errors[key] = `Invalid ${type}`;
    }
  }
}

const _validators = {
  required: function (values, errors, key) {
    if (!values[key]) {
      errors[key] = 'Required';
    }
  },

  email: _regexFormatValidator(_EMAIL_REGEX, 'email address'),
  phone: _regexFormatValidator(_PHONE_REGEX, 'phone number'),
  date: _regexFormatValidator(_SQL_DATE_REGEX, 'date'),

  sameAs: function (values, errors, key, target) {
    if (values[key] !== values[target]) {
      errors[key] = `Should be the same as ${target}`;
    }
  }
}

function _checkConstraint (constraint) {
  if (typeof(constraint) !== 'string') {
    throw new ValueError(`Constraints must be strings`);
  }

  constraint = constraint.split(':')[0];
  if (!_validators.hasOwnProperty(constraint)) {
    throw new ReferenceError(`${constraint} is not defined,`);
  }
}

export default (constraints) => {

  Object.keys(constraints).forEach((name) => {
    if (!Array.isArray(constraints[name])) {
      constraints[name] = [constraints[name]];
    }
    constraints[name].map(_checkConstraint);
  });

  return function (values) {
    const errors = {};

    Object.keys(constraints).forEach((field) => {
      const fieldConstraints = constraints[field];
      fieldConstraints.forEach((constraint) => {
        const [constraintName, ...params] = constraint.split(':');
        _validators[constraintName](values, errors, field, ...params);
      });
    });

    return errors;
  }
}
