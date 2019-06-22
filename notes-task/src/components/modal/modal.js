import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  const {
    show, watch, name, text, tag,
    closeNote, handleInput, handleSubmit,
  } = props;
  const modalClass = show ? 'modal show' : 'modal fade';
  return (
    <form className={modalClass} tabIndex="-1" role="dialog" onSubmit={handleSubmit} disabled={watch}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="title"
              value={name}
              onChange={handleInput}
              disabled={watch}
              required
            />
            { !tag && (
              <textarea
                className="form-control rounded-3"
                rows="15"
                name="text"
                value={text}
                onChange={handleInput}
                disabled={watch}
                required
              />
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closeNote}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={watch}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  watch: PropTypes.bool.isRequired,
  tag: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  closeNote: PropTypes.func.isRequired,
};


export default Modal;
