import React from 'react';
import R from 'ramda';
import { Button } from 'react-bootstrap';
const todoCompletedButton = ({ completed }) => {
  if (R.equals('已完成', completed)) {
    return null;
  } else {
    return (
      <Button bsStyle='success'>
        { R.ifElse(
          R.equals('進行中'),
          R.always('完成'),
          R.always('')
        )(completed) }
      </Button>
    );
  }
};
export default todoCompletedButton;
