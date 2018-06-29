import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
//import Radium, {StyleRoot} from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass2';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js: Inside Constructor',props);
  } //Constructor

  componentWillMount() {
    console.log('App.js: Inside componentWillMount');
  }

  componentDidlMount() {
    console.log('App.js: Inside componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATE App.js: Inside shouldComponentUpdate', nextProps, nextState);
    //return true;
    return nextState.persons !== this.state.persons ||
    nextState.showPersons !== this.state.showPersons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE App.js: Inside componentWillUpdate', nextProps, nextState);
  }

  //No nextProps or nextState because it is after the update
  componentDidUpdate() {
    console.log('UPDATE App.js: Inside componentDidUpdate');
  }

  //this will save the data
  state = {
    persons: [{id: '001', name: 'Ahmed', age: 21},
              {id: '002', name: 'Waheid', age: 17},
              {id: '003', name: 'Salimy', age: 24}],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0
  }//state

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

  //  const personIndex = this.state.persons.findIndex(p => p.id === id)
//  }


    const person = {
      ...this.state.persons[personIndex]  //will repeat all the
      //properties of the old object into the new object
    };

//This is alternative approach
//const person = Object.assign({},this.state.persons[personIndex]);

//person.name = event.input.value; //updates the person name (Error prone)
person.name = event.target.value; //updates the person name
const persons = [...this.state.persons]; //updates the array
persons[personIndex] = person;  // updated person
this.setState({persons: persons}); //sets the state

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //fetching all persons
    persons.splice(personIndex,1); //removes one element from the array
    this.setState({persons: persons}) //updated persons
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
      showPersons: !doesShow,
      toggleClicked: this.state.toggleClicked + 1}
    });
  }

  render() {

    console.log('App.js: Inside render');

    let persons = null;
    //let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        //we are passing three props into Persons
            <Persons persons={this.state.persons}
             clicked={this.deletePersonHandler}
             changed={this.nameChangeHandler}/>
      );
        //btnClass = classes.Red;
    //  inlineStyle.backgroundColor = 'red'; //this will change color after clicking
    //  inlineStyle.border = '3px solid blue';

      //Radium Based styling
    //  inlineStyle[':hover'] = {
    //    backgroundColor: 'salmon',
    //    color: 'black'
    //  }
    }

    // red and bold are classes we made in App.css
    //let classes = ['red','bold'].join(' ');

    //adding dynamic property PUSH() implements the class
    return (
//  <StyleRoot>
  //  <div className= "classes.App">
//  <WithClass classes={classes.App}>
<Aux>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit
      appTitle={this.props.title}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked = {this.togglePersonsHandler}/>
      {persons}
    </Aux>
//  </StyleRoot>
  );
  }
}

//export default Radium(App);
export default withClass(App,classes.App);
