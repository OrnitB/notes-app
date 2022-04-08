import Note from "./Note";
import { v4 as uuidv4 } from "uuid";

function NotesList(props) {
  props.notes.map((note) => {
    return note;
  });
  return (
    <div className="allNotes">
      {props.notes.map((note, index) => {
        return (
          <Note
            key={uuidv4()}
            note={note}
            onDelete={() => props.onDeleteNote(index)}
          />
        );
      })}
    </div>
  );
}

export default NotesList;
