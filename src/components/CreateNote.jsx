const CreateNote = () => {
  return (
    <form method="post">
      <label htmlFor="title">Enter a title</label>
      <input id="title" type="text" />

      <label htmlFor="content">Note</label>
      <textarea id="content" cols="30" rows="10"></textarea>

      <input className="btn saveBtn" type="submit" value="save" />
    </form>
  );
};

export default CreateNote;
