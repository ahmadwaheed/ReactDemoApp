import React, { Component } from 'react';
import Person from './Person/Person';

//TURNING into stateful components
class Persons extends Component {

  constructor(props) {
    super(props);
    console.log('Persons.js: Inside Constructor',props);
  } //Constructor

  componentWillMount() {
    console.log('Persons.js: Inside componentWillMount');
  }

  componentDidlMount() {
    console.log('Persons.js: Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('UPDATE Persons.js: Inside componentWillReceiveProps',nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATE Persons.js: Inside shouldComponentUpdate', nextProps, nextState);
    //return true;
    return nextProps.persons !== this.props.persons ||
    nextProps.changed !== this.props.changed ||
    nextProps.clicked !== this.props.clicked;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE Persons.js: Inside componentWillUpdate', nextProps, nextState);
  }

  //No nextProps or nextState because it is after the update
  componentDidUpdate() {
    console.log('UPDATE Persons.js: Inside componentDidUpdate');
  }



  render() {
    console.log('Persons.js: Inside the render');

    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

export default Persons;

/* STATELESS COMPONENT
const persons = (props) => props.persons.map((person, index) => {
    return  <Person
      click={() => props.clicked(index)}
      name={person.name}
      age={person.age}
      changed={(event) => props.changed(event,person.id)}/>
  });

*/
