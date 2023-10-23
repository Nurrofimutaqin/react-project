import React from "react";

class NoteInputTitle extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
          max: 50,
        };
      }
    
      onMaxEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          };
        });
      }

    render(){
        
        return (
            <div className="note-input__title">
                <h2>Buat Catatan</h2>
                <p className="note-input__title__char-limit " >Sisa Karakter: </p>
            </div>
        )
    }
}
export default NoteInputTitle;
