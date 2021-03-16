import React, { useState } from "react";
import ToDoList from "./Prj1-comp";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const ProjectApp1 = () => {
  const [toDo, setToDo] = useState("");
  const [items, setItems] = useState([]);

  const onChngFunc = (e) => {
    setToDo(e.target.value);
  };

  const onClickFunc = (e) => {
    setItems((oldItems) => {
      return [...oldItems, toDo];
    });
    setToDo("");
  };

  // const delFunc = (id) => {
  //   setItems((oldItems) => {
  //     return oldItems.filter((arrElmnt, indx) => {
  //       return indx !== id;
  //     });
  //   });

  // };

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <br />
          <h1>Create Your ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Item"
            onChange={onChngFunc}
            value={toDo}
          />
          <Button variant="contained" onClick={onClickFunc} className="newBtn">
            <AddIcon />
          </Button>

          <ol>
            {items.map((itemVal, indx) => {
              return (
                <>
                  <ToDoList itemVal={itemVal} key={indx} id={indx} />
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ProjectApp1;
