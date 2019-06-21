import React from 'react';

function Note() {
  return (
    <div className="name">
      <div className="item">
        <button
          type="button"
          className="btn btn-primary btn-lg note-name"
          disabled
        >
          Primary button
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg note-watch"
        >
          <i className="fa fa-eye" />
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg note-watch"
        >
          <i className="fa fa-edit" />
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg note-watch"
        >
          <i className="fa fa-trash" />
        </button>
      </div>
      <div className="item">
        <span className="badge badge-pill badge-primary">Primary</span>
        <span className="badge badge-pill badge-primary">Primary</span>
        <span className="badge badge-pill badge-primary">Primary</span>
      </div>
    </div>
  );
}

export default Note;
