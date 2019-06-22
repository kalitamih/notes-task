import React from 'react';
import PropTypes from 'prop-types';

function AddNew(props) {
  const { id, showNote } = props;
  return (
    <button
      type="button"
      className="btn btn-primary add-new"
      id={id}
      onClick={event => showNote(event, false)}
    >
      Add new note
    </button>
  );
}

AddNew.propTypes = {
  id: PropTypes.number.isRequired,
  showNote: PropTypes.func.isRequired,
};

export default AddNew;
