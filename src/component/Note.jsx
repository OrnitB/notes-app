import { useState } from "react";
import Modal from "react-modal";
import "../component/Form.module.css";
import "../App.css";

const Note = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { note } = props;
  const { title, text, date } = note;
  return (
    <div>
      <Modal isOpen={modalIsOpen}>
        <h4 className="specificDate">{date.toLocaleString()}</h4>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="closeModal" onClick={() => setModalIsOpen(false)}>
          Close
        </button>
      </Modal>
      <div className="specificNote" onClick={() => setModalIsOpen(true)}>
        <button
          className="deleteButton"
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this note?"))
              props.onDelete(note);
          }}
        >
          X
        </button>
        <p className="specificDate">{date.toLocaleString()}</p>
        <h4>{title}</h4>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Note;
