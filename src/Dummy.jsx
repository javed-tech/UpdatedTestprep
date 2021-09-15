import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
const Dummy = () => {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");
    fetch("https://testprepkart.com/search/api/get-institution").then((res)=>{
      res.json().then((resp)=>{
          // console.log(resp)
          setMyOptions(resp);
      })
  })
console.log("State", myOptions);
  };
  return (
    <>
       <Autocomplete
        autoHighlight
        options={myOptions}
        getOptionLabel={(option) => option.title}
        renderOption={(option) => (
          <React.Fragment>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href =
                  "InstitutionHome/id=" + option.id;
              }}
            >
              {option.title}
            </span>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            style={{ width: 500 }}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search"
          />
        )}
      /> 
    </>
  );
};

export default Dummy;
