import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { useAppSelector, useAppDispatch } from "./hooks";
import { editdetail } from "../features/counter/personeldetailSlices";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ContactDetails() {
  const personaldetails = useSelector(
    (state: RootState) => state.personaldetails.PersonalDetails
  );

  console.log(personaldetails);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {personaldetails.map((item, key) => {
        return (
        
        
        <div className={classes.detailItem} key={key}>
          
          {item.id}
          <button>edit</button>
          <button>delete</button>
          </div>
        
        
        
        )
      })}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: "40%",
    height: "100%",
    backgroundColor: "white",
    padding:'60px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  detailItem:{
    height:'48px',
    width:'150px',
    // border:'1px solid yellowgreen',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:'20px'
  }
});
