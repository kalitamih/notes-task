import React, { Component } from 'react';
import Search from './components/search';
import Note from './components/note';
import Modal from './components/modal';
import AddNew from './components/addNew';
import Loader from './components/loader';

class App extends Component {
  state = {
    search: '',
    showModal: false,
    showId: 0,
    watchMode: false,
    nameNote: '',
    textNote: '',
    tag: false,
    notes: [
    ],
    loading: true,
  }

  componentDidMount() {
    fetch('http://localhost:3001/data')
      .then(response => response.json())
      .then((data) => {
        const { notes } = data[0];
        this.setState({
          notes,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
        console.log(`Saved data wasn't fetched. ${err}`);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { notes } = this.state;
    if (prevState.notes !== notes) {
      fetch('http://localhost:3001/data/1', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({
          notes,
        }),
      });
    }
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
      tag: false,
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

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  }

  addNote = () => {
    const {
      notes, showId, nameNote, textNote,
    } = this.state;
    const tagsArr = textNote.match(/#[A-Za-zА-Яа-я-]+/g) || [];
    const prevTags = showId < notes.length ? notes[showId].tags : [];
    const newTags = [...tagsArr.map(item => item.slice(1)), ...prevTags];
    const newSet = new Set(newTags);
    const note = {
      name: nameNote,
      text: textNote,
      tags: Array.from(newSet),
    };
    return note;
  }

  addTag = () => {
    const { notes, showId, nameNote } = this.state;
    const { tags, text, name } = notes[showId];
    const newTags = (tags.indexOf(nameNote) === -1) ? [...tags, nameNote] : [...tags];
    const note = {
      name,
      text,
      tags: newTags,
    };
    return note;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { notes, showId, tag } = this.state;
    const note = tag ? this.addTag() : this.addNote();
    const array = [...notes.slice(0, showId), note, ...notes.slice(showId + 1)];
    this.setState({
      showModal: false,
      notes: array,
      tag: false,
    });
  }

  removeTag = (id, index) => {
    const { notes } = this.state;
    const { tags } = notes[parseInt(id, 10)];
    const newtags = tags.filter((item, num) => !(num === parseInt(index, 10)));
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

  showTagInput = (event) => {
    const { id } = event.target;
    this.setState({
      showModal: true,
      watchMode: false,
      showId: parseInt(id, 10),
      nameNote: '',
      textNote: '',
      tag: true,
    });
  }

  render() {
    const {
      notes, showModal, watchMode, showId,
      textNote, nameNote, tag, search, loading,
    } = this.state;
    const re = new RegExp(search.trim(), 'g');
    const filteredNotes = notes.map(item => re.test(item.tags.join('#')));
    const viewNotes = notes.filter((item, index) => filteredNotes[index]);
    const tags = (showId < notes.length) ? notes[showId].tags : [];
    return (
      <div className="app">
        <Search handleSearch={this.handleSearch} search={search} />
        <AddNew id={notes.length} showNote={this.showNote} />
        {
          loading && <Loader />
        }
        {
          !loading && viewNotes.map((item, index) => {
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
                showTagInput={this.showTagInput}
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
          tag={tag}
          tags={tags}
        />
      </div>
    );
  }
}

export default App;
