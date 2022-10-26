import { cast, types } from "mobx-state-tree";

const URL = "http://localhost:3004/notes";

const fetchData = async () => {
  const res = await fetch(URL);
  return await res.json();
};

const deleteNoteInServer = async (id) => {
  const res = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });

  return res;
};

export const NoteModel = types.model("NoteModel", {
  id: types.number,
  title: types.string,
  content: types.string,
  category: types.string,
});

export const NoteStore = types
  .model("NoteStore", {
    notes: types.array(NoteModel),
    error: types.optional(types.string, ""),
  })
  .actions((store) => ({
    setNotes(notes) {
      store.notes = notes;
    },
    setError(err) {
      store.error = err;
    },
    async fetchNotes() {
      const data = await fetchData();
      if (Array.isArray(data)) store.setNotes(cast(data));
      else {
        store.setNotes([]);
        store.setError("Unable to fetch Notes");
      }

      // fetchData()
      //   .then((data) => store.setNotes(cast(data)))
      //   .catch((err) => store.setError(err.message));
    },
    deleteNote(id) {
      deleteNoteInServer(id).then(() =>
        store.setNotes(store.notes.filter((note) => note.id !== id))
      );
    },
  }));

let _noteStore;
export const useNotes = () => {
  if (!_noteStore) {
    _noteStore = NoteStore.create({
      notes: [],
      error: "",
    });
  }

  return _noteStore;
};
