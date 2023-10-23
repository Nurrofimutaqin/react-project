import React from "react";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteEmpty from "./NoteEmpty";
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
                archived: false,
                createAt: +tanggal+"-"+bulan+"-"+tahun,
              }
            ]
          }
        });
      }
    render() {
        return (
            <>
            <NoteHeader/>
            <div className="note-app__body">
            <NoteInput addNote = {this.onAddNoteHandler}/>
            <h2>Catatan Aktif</h2>
            
            <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
            <h2>Catatan Arsip</h2>
            <NoteEmpty/>
            
            {console.log(this.state.notes)}
            </div>
            </>
        );
    }
}
export default NoteApp;