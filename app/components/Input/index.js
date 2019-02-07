/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Input({ input, meta: { touched, error }, ...rest }) {
  return (
    <div className={style.input}>
      <label className={style.label}>
        <input {...input} {...rest} />
      </label>
      {touched && error && <span className={style.error}>{error}</span>}
    </div>
  );
}

Input.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default Input;
