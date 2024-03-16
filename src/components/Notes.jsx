import React, { Component } from 'react';


import Note from './Note'



class Notes extends Component {
    state = {  } 
    render() { 
        return (
            <table  class="table table-success table-striped" >
                <thead class="table-light">
                    <th>Done</th>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </thead>
                <tbody>
                {this.props.notes.map(note => <Note key={note.id} note={note} deleteNote={() => this.props.onDelete(note.id)}  changed = {(event) => this.props.noteChange(event, note.id)} check={(event) => this.props.Click(event,note.id)} />)}
                </tbody>
                
            </table>
        );
    }
}
 
export default Notes;