import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
// import Tooltip from "@material-ui/core/Tooltip";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./HomeForLiveSrch";
import Menu from "./MenuLiveSrch";
import Search from "./LiveSrch";
import Error from "./Error";

const Practice = () => {
  // this is live searching picutres practice

  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route component={Error} />
      </Switch>
    </>
  );

  //this is plus and minus practice
  /*
  const [num, setNum] = useState(0);

  const incrFunc = () => {
    setNum(num + 1);
  };

  const decrFunc = () => {
    num > 0 ? setNum(num - 1) : window.alert(`Plese Don't Add Minus Value`);


  };

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <h1>This is Heading</h1>
          <div className="innerDiv">{num}</div>

          <Tooltip title="Delete">
            <Button className="btnRed btn" onClick={decrFunc}>
              <RemoveIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Add">
            <Button className="btnGreen btn" onClick={incrFunc}>
              <AddIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
  */
};

/* 
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const changeFunc = (event) => {
    const { name, value } = event.target;

    setFullName((previousVal) => {
      console.log(previousVal);

      return {
        ...previousVal,
        [name]: value,
      };

      // this 20 lines of code can be written in above 2 lines

      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: previousVal.lName,
      //     email: previousVal.email,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: previousVal.fName,
      //     lName: value,
      //     email: previousVal.email,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fName: previousVal.fName,
      //     lName: previousVal.lName,
      //     email: value,
      //   };
      // }


    });
  };

  const submitFunc = (e) => {
    e.preventDefault();

    let clear = document.getElementsByClassName("clear");
    for (let val of clear) {
      val.value = null;
    }

    let h1 = document.getElementById("h1");
    h1.innerHTML += ` ${fullName.fName} ${fullName.lName} !! <p><small>${fullName.email}</small> </p>`;
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          border: "2px solid  black",
          padding: "11px 0",
        }}
      >
        <h1 id="h1">HI</h1>

        <hr />
        <br />

        <form onSubmit={submitFunc}>
          <input
            className="clear"
            style={{ width: "25%" }}
            type="text"
            placeholder="Enter ur First name"
            onChange={changeFunc}
            value={fullName.fName}
            name="fName"
          />

          <br />
          <br />

          <input
            className="clear"
            style={{ width: "25%" }}
            type="text"
            placeholder="Enter ur Last name"
            onChange={changeFunc}
            value={fullName.lName}
            name="lName"
          />

          <br />
          <br />

          <input
            className="clear"
            style={{ width: "25%" }}
            type="text"
            placeholder="Enter ur Email"
            onChange={changeFunc}
            value={fullName.email}
            name="email"
          />

          <br />
          <br />

          <button id="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );

  */

export default Practice;
