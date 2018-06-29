import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass2';
import Aux from '../../../hoc/Aux';
//import Radium from 'radium';
import PropTypes from 'prop-types';

//this is equivalent of making a function

class  Person extends Component {
  render() {

    console.log('Person.js: Inside render');
  return (
  //  <div className={classes.Person}>
    <Aux classes={classes.Person}>
       <p onClick={this.props.click}>I am {this.props.name}, react developer and I am {this.props.age} years old </p>
       <p>{this.props.children}</p>
       <input
         ref={(inp) => { this.inputElement = inp}}
         type="text"
         onChange={this.props.changed}
         value={this.props.name}/>
    </Aux>
  )
 }
}

Person.propTypes = {
    click: PropTypes.func,  //our click properly has to be a function
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
//Radium based
//export default Radium(person);
export default withClass(Person, classes.Person);

//RADIUM
//  const Radiumstyle = {
//    '@media (min-width: 500px)' : {
  //        width: '450px'
  //  }
//  };
