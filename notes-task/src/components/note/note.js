import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {
  const {
    name, id, tags, showTagInput,
    deleteNote, showNote, removeTag,
  } = props;
  return (
    <div className="name">
      <div className="item">
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg note-name"
          disabled
        >
          {name}
        </button>
        <button
          type="button"
          className="btn btn-outline-success btn-sm note-btn"
          name="watch"
          id={id}
          onClick={event => showNote(event, true)}
        >
          <i className="fa fa-eye" id={id} />
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm note-btn"
          name="edit"
          id={id}
          onClick={event => showNote(event, false)}
        >
          <i className="fa fa-edit" id={id} />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm note-btn"
          name="trash"
          id={id}
          onClick={deleteNote}
        >
          <i className="fa fa-trash-o" id={id} />
        </button>
      </div>
      <div className="tags">
        {
          tags.map((item, index) => {
            const key = `tag-${id}-${index}`;
            return (
              <div key={key}>
                {item}
                &nbsp;
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm note-btn"
                  name={index}
                  onClick={() => removeTag(id, index)}
                >
                  <i
                    className="fa fa-times-circle"
                    name={index}
                  />
                </button>
              </div>
            );
          })
        }
        <button
          className="btn btn-outline-info badge"
          type="button"
          id={id}
          onClick={showTagInput}
        >
          <i className="fa fa-plus" id={id} />
        </button>
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
  removeTag: PropTypes.func.isRequired,
  showTagInput: PropTypes.func.isRequired,
};

export default Note;
