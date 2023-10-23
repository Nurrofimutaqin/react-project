import React from "react";
import NoteInputTitle from "./NoteInputTitle";

class NoteInput extends React.Component{
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          title: '',
          body: '',
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
        
      }
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }
    render() {
        return (
            
            <form className='note-input' onSubmit={this.onSubmitEventHandler} >
            <NoteInputTitle/>
            <input type="text" placeholder="Berikan Judul Catatanmu.." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
            <textarea type="text" placeholder="Tuliskan Keterangan Catatanmu Disini." className="note-input__body"  value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
            <button type="submit">Tambah</button>
            </form>
        )
      }
}
export default NoteInput;
