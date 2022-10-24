import React, { Component } from "react";
import { Delete } from "react-feather";

class AllNotes extends Component {
  render() {
    if (this.props.notes === null) return <p>Loading...</p>;
    if (this.props.notes.length === 0) return <p>No notes yet...</p>;
    if (this.props.error) return <p>Failed to fetch notes...</p>;

    return (
      <section className="notes-container">
        {this.props.notes.map((note) => (
          <article key={note.id} className="note">
            <div className="note-header">
              <h3>{note.title}</h3>
              <Delete
                className="delete-icon"
                onClick={() => this.props.deleteNote(note.id)}
              />
            </div>
            <hr />
            <p>{note.content}</p>
          </article>
        ))}
      </section>
    );
  }
}

export default AllNotes;
