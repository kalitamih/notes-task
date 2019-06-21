import React, { Component } from 'react';
import Search from './components/search';
import Note from './components/note';
import Modal from './components/modal';

class App extends Component {
  state = {
    showModal: false,
    showIdNoteInModel: 0,
    watchMode: false,
    notes: [
      {
        name: 'Сарри',
        text: 'Президент #«Наполи» Аурелио де Лаурентис прокомментировал назначение Маурицио #Сарри главным тренером #«Ювентуса».',
        tags: ['Наполи', 'Сарри', 'Ювентус'],
      },
      {
        name: 'Сарри',
        text: 'Президент #«Наполи» Аурелио де Лаурентис прокомментировал назначение Маурицио #Сарри главным тренером #«Ювентуса».',
        tags: ['Наполи', 'Сарри', 'Ювентус'],
      },
    ],
  }

  deleteNote = (event) => {
    console.log(event.target);
    const { id } = event.target;
    const { notes } = this.state;
    const array = notes.filter((item, index) => !(index === parseInt(id, 10)));
    console.log(array);
    this.setState({
      notes: array,
    });
  }

  render() {
    const {
      notes, showModal, showIdNoteInModel, watchMode,
    } = this.state;
    const note = notes[showIdNoteInModel];
    let text = '';
    let name = '';
    if (note) {
      text = note.text;
      name = note.name;
    }
    return (
      <div className="app">
        <Search />
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
              />
            );
          })
        }
        <Modal
          watch={watchMode}
          show={showModal}
          name={name}
          text={text}
        />
      </div>
    );
  }
}

export default App;
