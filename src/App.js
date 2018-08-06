import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id:'a', name: 'Max', age: 28 },
            { id:'b', name: 'Manu' , age: 29},
            { id:'c', name: 'Maxi' , age: 30}
        ],
        showPersons: false
    }

    nameChangeHandle = (e, id) => {
        const personId = this.state.persons.findIndex((p) => {
            return p.id === id;
        });
        // const person = {
        //     ...this.state.persons[personId]
        // };
        // person.name = e.target.value;
        const persons = [...this.state.persons];
        // persons[personId] = person;
        persons[personId].name = e.target.value;
        this.setState({
            persons: persons
        });
    }
    togglePersonsHandler = () => {
        const currentShow = this.state.showPersons;
        this.setState({ showPersons: !currentShow})
    }
    render() {
        let person = null;
        const style = {
            color: 'red',
            ':hover': {
                color: 'green'
            }
        };
        if(this.state.showPersons) {
            person = (
                <div>
                    {
                        this.state.persons.map((person) =>{
                            return(
                                <Person
                                 name={person.name}
                                 age={person.age}
                                 key={person.id}
                                 change={(e) => this.nameChangeHandle(e, person.id)}
                                >
                                </Person>
                            );

                        })
                    }
                </div>
            );
            style[':hover'] = {
                color: 'green'
            };
        }
        
        return(
            <StyleRoot>
                <div>hellow
                    <p style={style}></p>
                    <button onClick={this.togglePersonsHandler}>switch name</button>
                    {person}
                </div>
            </StyleRoot>
        );
    }
}
export default Radium(App);
ReactDOM.render(<App />, document.getElementById('root'));