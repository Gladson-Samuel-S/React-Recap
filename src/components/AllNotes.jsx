import uuid from "react-uuid";

const AllNotes = ({ notes, error }) => {
  if (notes === null) return <p>Loading...</p>;
  if (notes.length === 0) return <p>No notes yet...</p>;
  if (error) return <p>Failed to fetch notes...</p>;

  return (
    <div className="notes-container">
      {notes.map((note) => (
        <div key={uuid()} className="note">
          <h3>{note.title}</h3>
          <hr />
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AllNotes;
