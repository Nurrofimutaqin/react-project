import React from "react";
import NoteItem from "./NoteItem"


function NoteList({title, body, createAt, id, onDelete}){

        return (
            <NoteItem title={title} createAt={createAt} body={body} id={id} onDelete={onDelete} />   
        );
      
}
export default NoteList;
