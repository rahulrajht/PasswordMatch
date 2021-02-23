import React, { useState } from "react";
import "./styles.css";
import tick from "./tick.png";
import cross from "./cross.jpg";

export default function App() {
  const [pass, setPassword] = useState("Password");
  const [rePass, setRePassword] = useState("Password");

  const [crosses1, setCross1] = useState(cross);
  const [crosses2, setCross2] = useState(cross);
  const [crosses3, setCross3] = useState(cross);
  const [crosses4, setCross4] = useState(cross);
  const [crosses5, setCross5] = useState(cross);
  const [crosses6, setCross6] = useState(cross);

  const reUpperCase = new RegExp("(?=.*[A-Z])");
  const reLowerCase = new RegExp("(?=.*[a-z])");
  const reDigit = new RegExp("(?=.*[0-9])");
  const reSpec = new RegExp("(?=.*[@#$%&])");

  function Password(event) {
    let pass = event.target.value;
    setPassword(pass);

    if (pass.length >= 8) {
      setCross1(tick);
    } else {
      setCross1(cross);
    }
    if (reDigit.test(pass)) {
      setCross2(tick);
    } else {
      setCross2(cross);
    }

    if (reUpperCase.test(pass)) {
      setCross3(tick);
    } else {
      setCross3(cross);
    }
    if (reLowerCase.test(pass)) {
      setCross4(tick);
    } else {
      setCross4(cross);
    }

    if (reSpec.test(pass)) {
      setCross5(tick);
    } else {
      setCross5(cross);
    }
    if (pass === rePass && pass !== "" && rePass !== "") {
      setCross6(tick);
    } else {
      setCross6(cross);
    }
  }

  function rePassword(event) {
    let rePass = event.target.value;
    setRePassword(rePass);
    if (pass === rePass && pass !== "" && rePass !== "") {
      setCross6(tick);
    } else {
      setCross6(cross);
    }
  }

  return (
    <div className="App">
      <div className="contents">
        <input onChange={Password} className="pass" placeholder="Password" />
        <input
          onChange={rePassword}
          className="repass"
          placeholder="Confirm Password"
        />
      </div>

      <div className="content">
        <p>
          {" "}
          <img src={crosses1} alt="cross" /> Password should be more than 8
          characters
        </p>
        <p>
          {" "}
          <img src={crosses2} alt="cross" /> Password must contains at least 1
          numeric keys
        </p>
        <p>
          {" "}
          <img src={crosses3} alt="cross" /> Password must contains at least 1
          uppercase letter
        </p>
        <p>
          {" "}
          <img src={crosses4} alt="cross" /> Password must contains at least 1
          lowercase letter
        </p>
        <p>
          {" "}
          <img src={crosses5} alt="cross" /> Password must contains at least 1
          special keys
        </p>
        <p>
          {" "}
          <img src={crosses6} alt="cross" /> Password must matches with confirm
          Password
        </p>
      </div>
    </div>
  );
}
