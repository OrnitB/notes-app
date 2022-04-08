import React from "react";
import Form from "./component/Form";
import NotesList from "./component/NotesList";
import "./component/Form.module.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  handleAddNote(note) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, note],
      };
    });
  }

  deleteNote(index) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes.slice(0, index),
          ...prevState.notes.slice(index + 1),
        ],
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Form onAddNote={(note) => this.handleAddNote(note)} />
        <NotesList
          notes={this.state.notes}
          onDeleteNote={(index) => this.deleteNote(index)}
        />
      </div>
    );
  }
}
export default App;
