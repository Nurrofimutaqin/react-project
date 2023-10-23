import React from "react";

class NoteInput extends React.Component{
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          title: '',
          body: '',
          max: 50,
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
            <>
            <form className='note-input'onSubmit={this.onSubmitEventHandler} >
            <div className="note-input__title">
                <h2>Buat Catatan</h2>
                <p className="note-input__title__char-limit " >Sisa Karakter: {this.state.max - this.state.title.length}</p>
            </div>
            <input type="text" placeholder="Berikan Judul Catatanmu.." maxLength={this.state.max} value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
            <textarea type="text" placeholder="Tuliskan Keterangan Catatanmu Disini." className="note-input__body" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
            <button type="submit">Tambah</button>
            </form>
            </>
        )
      }
}
export default NoteInput;
