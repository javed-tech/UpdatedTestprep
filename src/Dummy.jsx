import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SearchBar from "material-ui-search-bar";
import { useParams } from 'react-router-dom'
import axios from "axios";    
const Dummy = () => {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");
    fetch("https://testprepkart.com/search/api/get-institution").then((res) => {
      res.json().then((resp) => {
        console.log(resp);
        // resp.map(function (items) {
        //   console.log(items.name);
        // });
        setMyOptions(resp);
      });
    });
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
                  "InstitutionHome/institution=" + option.id;
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
            style={{ width: "80%" }}
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
