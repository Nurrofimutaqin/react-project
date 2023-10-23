import React from "react";
import NoteItem from "./NoteItem";
import NoteEmpty from "./NoteEmpty";

function NoteList({notes, onDelete}){
    if (notes.length > 0) {
        return (
            <div className="notes-list">
                {
                    notes.map((note) => (
                    <NoteItem key={note.id} 
                    id ={note.id}
                    onDelete={onDelete}
                    {...note} />
                    ))
                }
            </div>
        );
    }else if(notes.length < 1 ){
        return (
            <NoteEmpty/>
        );
    }

      
}
export default NoteList;