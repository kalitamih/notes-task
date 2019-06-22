import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {
  const {
    name, id, tags,
    deleteNote, showNote,
  } = props;
  return (
    <div className="name">
      <div className="item">
        <button
          type="button"
          className="btn btn-primary btn-lg note-name"
          disabled
        >
          {name}
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg note-watch"
          name="watch"
          id={id}
          onClick={event => showNote(event, true)}
        >
          <i className="fa fa-eye" />
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg note-watch"
          name="edit"
          id={id}
          onClick={event => showNote(event, false)}
        >
          <i className="fa fa-edit" />
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg note-watch"
          name="trash"
          id={id}
          onClick={deleteNote}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
      <div className="item">
        {
          tags.map((item, index) => {
            const key = `tag-${id}-${index}`;
            return (
              <span className="badge badge-pill badge-primary" key={key}>
                {item}
              </span>
            );
          })
        }
      </div>
    </div>
  );
}

Note.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteNote: PropTypes.func.isRequired,
  showNote: PropTypes.func.isRequired,
};

export default Note;
