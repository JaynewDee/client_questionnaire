import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
//< --- COMPONENT IMPORTS --- >//
import { Header, Note } from "../components/index";

const Main: React.FC = () => {
  const [fieldOne, setFieldOne] = useState("User");
  const [fieldTwo, setFieldTwo] = useState("");
  
  const handleChangeFirst = (event) => {
    setFieldOne(event.target.value);
    
    if (!event.target.value) {
      setFieldOne("User")
   }
  };
  const handleChangeSecond = (event) => {
    setFieldTwo(" " + event.target.value);

    if (!event.target.value) {
      setFieldTwo("")
   }
  };

  return (
    <div className="centerFlex">
      <Header inputOne={fieldOne} inputTwo={fieldTwo} />
      <form>
        <TextField
          id="1"
          label="First Name"
          variant="outlined"
          onChange={handleChangeFirst}
        ></TextField>
        <TextField
          id="2"
          label="Last Name"
          variant="outlined"
          onChange={handleChangeSecond}
        ></TextField>
      </form>
      <Note />
    </div>
  );
};

export default Main;
