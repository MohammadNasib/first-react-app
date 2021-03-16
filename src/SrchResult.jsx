import React from "react";

function SrchResult(props) {
  const img = `https://source.unsplash.com/600x400/?${props.keyword}`;
  console.log(props.keyword);

  return (
    <>
      <img src={img} alt="Search Result" />
    </>
  );
}

export default SrchResult;
