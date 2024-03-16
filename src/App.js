import React, { Component } from 'react';

import Notes from './components/Notes';





class App extends Component {
    state = { 
        notes : [
            
        ],
        showNotes : false,
        newTask : ''
     } 

  
     handleShowNotes = () => {
        this.setState({showNotes: !this.state.showNotes})
     }

     handleDelete = (id) => {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
     }

     handleNoteChange = (event, id) => {
        const noteIndex =  this.state.notes.findIndex(note => note.id === id)
        const notes = [...this.state.notes]
        notes[noteIndex].text = event.target.value
        this.setState({notes})
     }

     handleClick = (event,id) => {
        const noteIndex =  this.state.notes.findIndex(note => note.id === id)
        const notes = [...this.state.notes]
        notes[noteIndex].done = event.target.checked
        this.setState({notes})
     }

     setTask = (event) => {
         this.setState({newTask : event.target.value})

     }

     handleNewTask = () => {
         const notes = [...this.state.notes]
         const note = {
             id: Math.floor(Math.random() * 100000000),
             text: this.state.newTask,
             done: false
         }
         notes.push(note)
         this.setState({notes, newTask : ''})
     }

    render() { 

        let showingNotes = null

        if(this.state.showNotes) {
            showingNotes = <Notes onDelete= {this.handleDelete} notes={this.state.notes} noteChange={this.handleNoteChange} Click={this.handleClick} />
        }


        return (
            <div class="container full-screen pb-5 pr-5 pl-5 pt-5" style={{backgroundColor: '#E0F2F1',}}>
                    <h1 class="display-1 text-center mt-5 mb-5 ">Task App</h1>
                    <div class="container input-group mb-5">
                        <input type="text"  class="form-control" onChange={this.setTask} value={this.state.newTask}/>
                        <button  type="button" class="btn btn-success btn-outline-light "  onClick={this.handleNewTask}>Add Task</button>
                        <button  type="button" class="btn btn-success btn-outline-light "  onClick={this.handleShowNotes}>{this.state.showNotes? 'Hide Notes' : 'Show Notes'}</button>
                    </div>
                {showingNotes}
        
            </div>
        );
    }
}
 
export default App;