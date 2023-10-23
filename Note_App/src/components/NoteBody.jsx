import React from "react";
import NoteList from "./NoteList";


function NoteBody ({notes, onDelete}){

        return (
            <div className="note-app__body">
                <h2>Catatan Aktif</h2>
            
                <div className="notes-list">
                {
                    notes.map((note) => (
                    <NoteList key={note.id} 
                    id={note.id}
                    onDelete={onDelete}
                    {...note} />
                    ))
                }
                </div>
                <h2>Arsip Catatan</h2>
                
            </div>
        )
      
}
export default NoteBody;
