import React from "react";
import NoteInput from "./NoteInput";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import {getData} from "../utils/Data"

class NoteApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: getData(),
    }
  
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }
  onAddNoteHandler({title, body, archived,date , tanggal, bulan, tahun}){
    date = new Date();
    tanggal = date.getDate();
    bulan = date.getMonth();
    tahun = date.getFullYear();
    this.setState((prevState) => {
      return{
        notes:[
          ...prevState.notes,{
            id: +date,
            title,
            body,
            archived,
            createAt: +tanggal+"-"+bulan+"-"+tahun,
          }
        ]
      }
    });
  }

    render() {
        return (
          <div className="note-app__body">
            <NoteHeader/>
            <NoteInput addNote = {this.onAddNoteHandler}/>
            <NoteBody notes={this.state.notes} onDelete={this.onDeleteHandler}/>
          </div>
        );
    }
}
export default NoteApp;