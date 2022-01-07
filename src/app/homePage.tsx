import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';


//Components
import ContactForm from './contactForm'
import ContactDetails from './contactDetails'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <ContactForm/>
        <ContactDetails/>
    </div>
  );
}






const useStyles = makeStyles({
    root: {
     width:'100%',
     height:'700px',
     backgroundColor:'yellowgreen',
     display:'flex'
    },
  });





  
  