import React from "react";
import "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      date: new Date(),
    };
  }

  handlerOnSubmit(event) {
    event.preventDefault();
    this.props.onAddNote(this.state);
    this.setState({ title: "", text: "", date: new Date() });
  }

  handlerOnChange(value) {
    this.setState({ text: value });
  }

  handleTitleChange(value) {
    this.setState({ title: value });
  }

  render() {
    return (
      <div className="mainForm">
        <input
          type="text"
          className="title"
          placeholder="Title"
          value={this.state.title}
          onChange={(event) => this.handleTitleChange(event.target.value)}
        />
        <br></br>
        <form onSubmit={(event) => this.handlerOnSubmit(event)}>
          <textarea
            id="box"
            type="wideInput"
            placeholder="Write a note here"
            value={this.state.text}
            onChange={(event) => this.handlerOnChange(event.target.value)}
          ></textarea>
          <br></br>
          <button type="submit" className="submitButton">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
