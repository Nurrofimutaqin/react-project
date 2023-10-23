import React from "react";
import DeleteButton from "./DeleteButton";
import ArsipButton from "./ArsipButton";

function NoteItemAction({id, onDelete}){
        return (
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArsipButton/>
            </div>
        )
    
}
export default NoteItemAction;
