import React, { Component } from 'react';
import Search from './components/search';
import Note from './components/note';
import Modal from './components/modal';
import AddNew from './components/addNew';

class App extends Component {
  state = {
    showModal: false,
    showId: 0,
    watchMode: false,
    nameNote: '',
    textNote: '',
    notes: [
    ],
  }

  deleteNote = (event) => {
    const { id } = event.target;
    const { notes } = this.state;
    const array = notes.filter((item, index) => !(index === parseInt(id, 10)));
    this.setState({
      notes: array,
    });
  }

  showNote = (event, watchMode) => {
    const { id } = event.target;
    const { notes } = this.state;
    if (notes.length > parseInt(id, 10)) {
      this.setState({
        showModal: true,
        watchMode,
        showId: parseInt(id, 10),
        nameNote: notes[id].name,
        textNote: notes[id].text,
      });
    } else {
      this.setState({
        showModal: true,
        watchMode,
        showId: parseInt(id, 10),
        nameNote: '',
        textNote: '',
      });
    }
  };

  closeNote = () => {
    this.setState({
      showModal: false,
      nameNote: '',
      textNote: '',
    });
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
      this.setState({
        nameNote: value,
      });
    }
    if (name === 'text') {
      this.setState({
        textNote: value,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      notes, showId, nameNote, textNote,
    } = this.state;
    const tagsArr = textNote.match(/#[A-Za-zА-Яа-я-]+/g) || [];
    const tags = tagsArr.map(item => item.slice(1));
    const note = {
      name: nameNote,
      text: textNote,
      tags,
    };
    const array = [...notes.slice(0, showId), note, ...notes.slice(showId + 1)];
    this.setState({
      showModal: false,
      notes: array,
    });
  }

  removeTag = (id, index) => {
    const { notes } = this.state;
    const { tags } = notes[parseInt(id, 10)];
    console.log(index);
    const newtags = tags.filter((item, num) => !(num === parseInt(index, 10)));
    console.log(tags);
    console.log(newtags);
    const note = {
      name: notes[parseInt(id, 10)].name,
      text: notes[parseInt(id, 10)].text,
      tags: newtags,
    };
    const array = [...notes.slice(0, parseInt(id, 10)), note, ...notes.slice(parseInt(id, 10) + 1)];
    this.setState({
      notes: array,
    });
  }

  render() {
    const {
      notes, showModal, watchMode,
      textNote, nameNote,
    } = this.state;
    return (
      <div className="app">
        <Search />
        <AddNew id={notes.length} showNote={this.showNote} />
        {
          notes.map((item, index) => {
            const key = `note-${index}`;
            return (
              <Note
                name={item.name}
                id={index}
                tags={item.tags}
                key={key}
                deleteNote={this.deleteNote}
                showNote={this.showNote}
                removeTag={this.removeTag}
              />
            );
          })
        }
        <Modal
          watch={watchMode}
          show={showModal}
          name={nameNote}
          text={textNote}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          closeNote={this.closeNote}
        />
      </div>
    );
  }
}

export default App;
