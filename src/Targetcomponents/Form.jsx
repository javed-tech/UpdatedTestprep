import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
const Form = () => {
  return (
    <>
        <h5 className="text-center ">CONTACT US</h5>
      <form className="formMain" noValidate autoComplete="off">
        <TextField id="filled-basic" variant="filled" label="First Name" className="formblog ml-0 pl-0"/>
        <TextField required id="filled-required" variant="filled" label="Last Name" className="my-2 formblog"/>
        <TextField required id="filled-required" variant="filled" label="Email" className="my-2 formblog"/>
        <TextField required id="filled-required" variant="filled" label="Mobile" className="my-2 formblog"/>
        <Button variant="contained" className="my-4" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
