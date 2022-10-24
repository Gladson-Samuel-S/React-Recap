import React, { Component } from "react";
import { Link } from "react-router-dom";
import AllNotes from "./AllNotes";

const URL = "http://localhost:3004/notes";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      error: null,
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      return data;
    };

    fetchData()
      .then((data) => this.setState({ notes: data }))
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    const deleteNote = async (id) => {
      const res = await fetch(`${URL}/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        this.setState({
          notes: this.state.notes.filter((note) => note.id !== id),
        });
      }
    };

    return (
      <>
        <div className="banner">
          <p>Do you want to create a new note?</p>
          <button className="btn">
            <Link to={"/create"}>New note</Link>
          </button>
        </div>

        <AllNotes
          notes={this.state.notes}
          error={this.state.error}
          deleteNote={deleteNote}
        />
      </>
    );
  }
}

export default Dashboard;
