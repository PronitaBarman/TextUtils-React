import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const clearText =()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success");

    }
    const handleCopy =() =>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    }
    
    const handleonChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] =useState('');
    //text ="new text";//Wrong to change state
    // setText("new text");//Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#09233e'}}>
        <div>

            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleonChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#09233e'}}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button type="button" className="btn btn-primary mx-1"onClick={clearText}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-1"onClick={handleExtraSpaces}>Romove Extra Spaces</button>


        </div>
        <div className="container my-3">
            <h1>Your text summary </h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

        </div>
        </div>
        </>
    )
}
