import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  const {
    show, watch, name, text,
  } = props;
  const modalClass = show ? 'modal show' : 'modal fade';
  return (
    <div className={modalClass} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={name}
              disabled={watch}
            />
            <textarea
              className="form-control rounded-3"
              rows="15"
              value={text}
              disabled={watch}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={watch}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  watch: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default Modal;
