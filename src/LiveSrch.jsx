import React, { useState } from "react";
import SrchResult from "./SrchResult";

const Search = () => {
  const [img, setImg] = useState("");

  function cngFunc(e) {
    let val = e.target.value;
    setImg(val);
  }

  return (
    <>
      <div
        className="container"
        style={{
          textAlign: "center",
          margin: "31px auto",
        }}
      >
        <input
          style={{ width: "45%", margin: "inherit", textAlign: "center" }}
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={img}
          onChange={cngFunc}
        />
        <hr />
        {img === "" ? null : <SrchResult keyword={img} />}
      </div>
      ;
    </>
  );
};

export default Search;
