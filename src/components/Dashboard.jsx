import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllNotes from "./AllNotes";

const URL = "http://localhost:3004/notes";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  const deleteNote = async (id) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      return data;
    };

    fetchData()
      .then((data) => setNotes(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <div className="banner">
        <p>Do you want to create a new note?</p>
        <button className="btn">
          <Link to={"/create"}>New note</Link>
        </button>
      </div>

      <AllNotes notes={notes} error={error} deleteNote={deleteNote} />
    </>
  );
};

export default Dashboard;
