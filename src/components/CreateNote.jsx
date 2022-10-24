import React, { Component } from "react";

const URL = "http://localhost:3004/notes";

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

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.categoryRef = React.createRef();
    this.contentRef = React.createRef();
  }

  render() {
    const handleSubmit = (e) => {
      e.preventDefault();

      const newNote = {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,
        category: this.categoryRef.current.value,
      };

      postData(newNote).then(
        () => (window.location.href = "http://localhost:3000/")
      );
    };

    return (
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="title">Enter a title</label>
        <input id="title" type="text" ref={this.titleRef} />

        <label htmlFor="category">Select a Category</label>
        <select id="category" ref={this.categoryRef}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>

        <label htmlFor="content">Note</label>
        <textarea
          id="content"
          cols="30"
          rows="10"
          ref={this.contentRef}
        ></textarea>

        <input className="btn saveBtn" type="submit" value="save" />
      </form>
    );
  }
}

export default CreateNote;
