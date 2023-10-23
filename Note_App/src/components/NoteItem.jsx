import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({title, createAt, body, id, onDelete}){
        return (
            <div className="note-item">
                <NoteItemContent title={title} createAt={createAt} body={body} />
                <NoteItemAction id={id} onDelete={onDelete}/>
            </div>
        )
    
}
export default NoteItem;
