import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const ToDoList = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };

  return (
    <>
      <div className="todoStyle">
        <DeleteIcon
          onClick={cutIt}
          className="fa-times"
          key={props.indx}
          id={props.indx}
        />
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.itemVal}
        </li>
        <hr />
      </div>
    </>
  );
};

export default ToDoList;
