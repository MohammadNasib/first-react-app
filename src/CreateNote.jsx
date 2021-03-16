import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const KeepCreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const onCngFunc = (e) => {
    const { value, name } = e.target;

    setNote((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="mainDiv">
        <form>
          <input
            type="text"
            placeholder="Title"
            autoComplete="off"
            autoCapitalize="on"
            onChange={onCngFunc}
            value={note.title}
            name="title"
          />

          <hr />

          <textarea
            autoComplete="off"
            rows="6"
            name="content"
            placeholder="Write Your Note"
            onChange={onCngFunc}
            value={note.content}
          />

          <Button
            className="btn"
            onClick={() => {
              props.addNote(note);
              setNote({
                title: "",
                content: "",
              });
            }}
          >
            <AddIcon />
          </Button>
        </form>
      </div>

      <hr />

      <h1 style={{ textAlign: "center" }}>
        Your Notes !
      </h1>
    </>
  );
};

export default KeepCreateNote;
