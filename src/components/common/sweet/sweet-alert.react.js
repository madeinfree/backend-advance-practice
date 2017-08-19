import React from 'react';
import Alert from 'react-bootstrap-sweetalert';

const SweetAlert = ({
  handleDelete,
  handleCancel,
  options
}) =>
  <Alert
    warning
    showCancel
    title='Delete'
    onConfirm={ handleDelete }
    onCancel={ handleCancel }>
    Do you want to delete ? <b>{ options.text }</b>
  </Alert>;

export default SweetAlert;
