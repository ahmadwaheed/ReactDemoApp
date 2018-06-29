import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

  const Assignedclasses = [];
  let btnClass = classes.Button;
  btnClass = classes.Red;

  if(props.showPersons) {
    btnClass = [classes.Button,classes.Red].join(' ');
  }

  if(props.persons.length <= 2) {
    Assignedclasses.push('classes.red'); // classes = ['red']
  }
  if(props.persons.length <= 1) {
    Assignedclasses.push('classes.bold'); // classes = ['red', 'bold']
  }

  return(

  //<div className={classes.Cockpit}>
  <Aux>
    <h1>{props.appTitle}</h1>
    <p className={Assignedclasses.join(' ')}>This is amazingly working</p>
    <button
      className={btnClass}
      //style={inlineStyle}
      onClick={props.clicked}>Switching Names</button>
  </Aux>
  );
};

export default cockpit;
