import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { IoIosSearch } from "react-icons/io";
import {useHistory} from 'react-router-dom'
import InstitutionHome from "./Homepage/InstitutionHome";

const Dummy = () => {
  const history = useHistory();

  const [myOptions, setMyOptions] = useState([]);
  //const classes = useStyles();
  if(!myOptions){
    setMyOptions([]);
  }
  else{
  var getDataFromAPI = async (e) => {
    const response= await fetch('http://edxkart.com/api/get-institution?search='+e.target.value);
    setMyOptions(await response.json());
  };
}


  return (
    <>
      <Autocomplete
        autoHighlight
        options={myOptions}
        getOptionLabel={(options) => options.institution}
        renderOption={(options) => (
          <React.Fragment>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
              window.location.href= "InstitutionHome/" + options.id;
              }}
            >
              {<IoIosSearch />} &nbsp;{options.institution}
            </span>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            id="search_text"
            {...params}
            //className={classes.root}
            size="small"
            onKeyUp={getDataFromAPI}
            variant="outlined"
            placeholder="Search"
            fullWidth
          />
          //  <SearchBar
          //  {...params}
          //  className={classes.root}
          //  size="small"
          //  onChange={getDataFromAPI}
          //  variant="outlined"
          //  label="Search"
          //  />
        )}
      />
    </>
  );
};

export default Dummy;
