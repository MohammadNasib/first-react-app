import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  function addNoteFunc(note) {
    setAddItem((oldVal) => {
      return [...oldVal, note];
    });
  }

  function delFunc(id) {
    setAddItem((oldItems) => {
      return oldItems.filter((arrelm, indx) => {
        return indx !== id;
      });
    });
  }

  function msg() {
    return addItem.map((cuVal, index) => {
      return (
        <Note
          key={index}
          id={index}
          title={cuVal.title}
          content={cuVal.content}
          onDel={delFunc}
        />
      );
    });
  }

  return (
    <>
      <Header />
      <CreateNote addNote={addNoteFunc} />

      {addItem.length !== 0 ? (
        msg()
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30.7vh",
          }}
        >
          <h2 style={{ color: "#6f796c", fontSize: "41px" }}>
            You Don't Have Any Notes
          </h2>
        </div>
      )}

      <Footer />
    </>
  );
};

export default App;
