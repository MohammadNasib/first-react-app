import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const KeepNote = (props) => {
  return (
    <>
      <div className="noteDiv">
        <h3 className="noteH1 ">{props.title}</h3>
        <hr />
        <p className="notePara">{props.content}</p>
        <Button
          className="btn"
          onClick={() => {
            props.onDel(props.id);
          }}
        >
          <DeleteIcon className="delIcon" />
        </Button>
      </div>
    </>
  );
};

export default KeepNote;
