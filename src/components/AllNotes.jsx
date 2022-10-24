import { Delete } from "react-feather";

const AllNotes = ({ notes, error, deleteNote }) => {
  if (notes === null) return <p>Loading...</p>;
  if (notes.length === 0) return <p>No notes yet...</p>;
  if (error) return <p>Failed to fetch notes...</p>;

  return (
    <section className="notes-container">
      {notes.map((note) => (
        <article key={note.id} className="note">
          <div className="note-header">
            <h3>{note.title}</h3>
            <Delete
              className="delete-icon"
              onClick={() => deleteNote(note.id)}
            />
          </div>
          <hr />
          <p>{note.content}</p>
        </article>
      ))}
    </section>
  );
};

export default AllNotes;
