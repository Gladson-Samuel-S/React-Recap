import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNotes } from "../store/store";
import AllNotes from "./AllNotes";
import { observer } from "mobx-react-lite";

const Dashboard = observer(() => {
  //const [notes, setNotes] = useState([]);
  const noteStore = useNotes();
  // const [error, setError] = useState(null);

  useEffect(() => {
    noteStore.fetchNotes();
  }, [noteStore]);

  return (
    <>
      <div className="banner">
        <p>Do you want to create a new note?</p>
        <button className="btn">
          <Link to={"/create"}>New note</Link>
        </button>
      </div>

      {noteStore.error ? (
        <p>Failed to fetch notes...</p>
      ) : (
        <AllNotes notes={noteStore.notes} deleteNote={noteStore.deleteNote} />
      )}
    </>
  );
});

export default Dashboard;
