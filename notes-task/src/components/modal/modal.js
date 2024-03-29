import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

class Modal extends Component {
  state ={
    scrollTop: 0,
  }

  divRef = React.createRef();

  componentDidUpdate() {
    const { scrollTop } = this.state;
    const { tag, tags } = this.props;
    if (!tag && tags.length) this.divRef.current.scrollTop = scrollTop;
  }

  handleScroll = (event) => {
    const { scrollTop } = event.target;
    this.setState({
      scrollTop,
    });
  };

  render() {
    const {
      show, watch, name, text, tag, tags,
      closeNote, handleInput, handleSubmit,
    } = this.props;
    const modalClass = show ? 'modal show' : 'modal fade';
    const string = tags.join('|');
    const re = new RegExp(string, 'g');
    const divText = text.replace(re, '<mark>$&</mark>');
    const placeholder = tag ? 'Add new tag' : 'Add title of new note';
    return (
      <form className={modalClass} tabIndex="-1" role="dialog" onSubmit={handleSubmit} disabled={watch}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="form-group">
              <input
                type="text"
                maxLength="20"
                className="form-control"
                name="title"
                placeholder={placeholder}
                value={name}
                onChange={handleInput}
                disabled={watch}
                required
              />
              { !tag && (
                <div className="container">
                  { !!tags.length && (
                    <div className="backdrop" ref={this.divRef}>
                      <div className="highlights">
                        { ReactHtmlParser(divText) }
                      </div>
                    </div>
                  )}
                  <textarea
                    name="text"
                    value={text}
                    placeholder="Add text of your note"
                    onChange={handleInput}
                    onScroll={this.handleScroll}
                    disabled={watch}
                    required
                  />
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                data-dismiss="modal"
                onClick={closeNote}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                disabled={watch}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
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
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Modal;
