import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { useAppSelector, useAppDispatch } from "./hooks";
import { addnewdetail } from "../features/counter/personeldetailSlices";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ContactForm() {
  const classes = useStyles();
  const [firstname, setfirstname] = React.useState<String>("");
  const [lastname, setlastname] = React.useState<String>("");
  const [adress, setadress] = React.useState<String>("");
  const [town, settown] = React.useState<String>("");
  const [contry, setcontry] = React.useState<String>("");
  const [datebirth, setdatebirth] = React.useState<String>("");
  const personaldetails = useSelector(
    (state: RootState) => state.personaldetails.PersonalDetails
  );
  const dispatch = useAppDispatch();

  const save = () => {
    let details = {
      id:personaldetails.length,
      firstname: firstname,
      lastname: lastname,
      adress: adress,
      town: town,
      contry: contry,
      datebirth: datebirth,
    };
    dispatch(addnewdetail(details));
  };
  return (
    <div className={classes.root}>
      <p>Personal Details</p>
      <div className={classes.rootnames}>
        <div style={{ display: "block", textAlign: "start" }}>
          <p> First Name</p>
          <TextField
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
            style={{ border: "1px solid yellowgreen", borderRadius: "4px" }}
            required
            id="outlined-required"
            label="First name"
            size="small"
          />
        </div>
        <div style={{ display: "block", textAlign: "start" }}>
          <p> Last Name</p>
          <TextField
            onChange={(e) => {
              setlastname(e.target.value);
            }}
            style={{ border: "1px solid yellowgreen", borderRadius: "4px" }}
            required
            id="outlined-required"
            label="Last name"
            size="small"
          />
        </div>
      </div>

      <div style={{ display: "block", width: "100%", textAlign: "start" }}>
        <p> Adress</p>
        <TextField
          onChange={(e) => {
            setadress(e.target.value);
          }}
          style={{
            width: "100%",
            border: "1px solid yellowgreen",
            borderRadius: "4px",
          }}
          required
          id="outlined-required"
          label="Adress"
          size="small"
        />
      </div>
      <div style={{ display: "block", width: "100%", textAlign: "start" }}>
        <p> Town</p>
        <TextField
          onChange={(e) => {
            settown(e.target.value);
          }}
          style={{
            width: "100%",
            border: "1px solid yellowgreen",
            borderRadius: "4px",
          }}
          required
          id="outlined-required"
          label="Town"
          size="small"
        />
      </div>
      <div style={{ display: "block", width: "100%", textAlign: "start" }}>
        <p> Contry</p>
        <TextField
          onChange={(e) => {
            setcontry(e.target.value);
          }}
          style={{
            width: "100%",
            border: "1px solid yellowgreen",
            borderRadius: "4px",
          }}
          required
          id="outlined-required"
          label="Town"
          size="small"
        />
      </div>
      <div style={{ display: "block", width: "100%", textAlign: "start" }}>
        <p> Date of Birth</p>
        <TextField
          onChange={(e) => {
            setdatebirth(e.target.value);
          }}
          style={{
            width: "100%",
            border: "1px solid yellowgreen",
            borderRadius: "4px",
          }}
          required
          id="outlined-required"
          label="Date of Birth"
          size="small"
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Button onClick={save} variant="contained">
          Save
        </Button>
        <Button variant="outlined">Clear</Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: "60%",
    height: "100%",
    backgroundColor: "white",
    display: "block",
    padding: "0px 60px 0px 60px",
  },
  rootnames: {
    display: "flex",
    justifyContent: "space-between",
  },
});
