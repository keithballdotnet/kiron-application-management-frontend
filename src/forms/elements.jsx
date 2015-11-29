'use strict';

import React from 'react';

import {hasError} from './utils';

export function ErrorSpan ({field}) {
  return hasError(field) ? <span className="red">({field.error})</span>
                         : <span></span>;
}

export function Input (props) {
  const {field, label, cls, type='text', placeholder=''} = props;
  return (
    <div>
    <label>{label || ''} <ErrorSpan field={field}/></label>
    <input className={'field ' + cls + (hasError(field) ? ' is-error' : '')}
           type={type}
           placeholder={placeholder} {...field}/>
    </div>
  );
}

export function Radio (props) {
  const {field, cls, items, label} = props;
  return (
    <div className={cls}>
    <label>
    {label || ''}
    {Object.keys(items).map((k) => {
      const value = items[k];
      return (
        <span key={k}>
          <input key={k} type="radio" {...field} value={value}/> {value}
        </span>
      );
    })}
    <ErrorSpan field={field}/>
    </label>
    </div>
  );
}

export function Select (props) {
  const {field, cls, label, options, nullable} = props;

  const _options = options.map(([key, display]) => {
    display = display || key;
    return <option key={key} value={key}>{display}</option>;
  });

  if (nullable) {
    _options.unshift(<option key='null_option' value=''></option>);
  }

  return (
    <div>
      <label>{label || ''} <ErrorSpan field={field}/></label>
      <select {...field} className={'field ' + cls}>
      {_options}
      </select>
    </div>
  );
}
