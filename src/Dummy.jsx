import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { IoIosSearch } from "react-icons/io";
import { makeStyles } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Dummy = () => {
  const [myOptions, setMyOptions] = useState([]);
  const classes = useStyles();
  const getDataFromAPI = () => {
    console.log("Options Fetched from API");
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
      res.json().then((resp) => {
        // console.log(resp)
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
                window.location.href = "InstitutionHome/id=" + option.id;
              }}
            >
              {<IoIosSearch />} &nbsp;{option.title}
            </span>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.root}
            size="small"
            onChange={getDataFromAPI}
            variant="outlined"
            placeholder="Search"
            //label="Search"
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
