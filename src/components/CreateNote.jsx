import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3004/notes";

const CreateNote = () => {
  const titleRef = useRef();
  const categoryRef = useRef();
  const contentRef = useRef();
  const navigate = useNavigate();

  const postData = async (newNote) => {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(newNote),
    });

    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      category: categoryRef.current.value,
    };

    postData(newNote).then(() => navigate("/"));
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label htmlFor="title">Enter a title</label>
      <input id="title" type="text" ref={titleRef} />

      <label htmlFor="category">Select a Category</label>
      <select id="category" ref={categoryRef}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>

      <label htmlFor="content">Note</label>
      <textarea id="content" cols="30" rows="10" ref={contentRef}></textarea>

      <input className="btn saveBtn" type="submit" value="save" />
    </form>
  );
};

export default CreateNote;
