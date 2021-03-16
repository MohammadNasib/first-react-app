import React from "react";

const KeepFooter = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <footer>
        <h3
          style={{
            textAlign: "center",
            height: "39px",
            background: "rgb(155 228 134)",
          }}
        >
          copyright © {year}
        </h3>
      </footer>
    </>
  );
};

export default KeepFooter;
