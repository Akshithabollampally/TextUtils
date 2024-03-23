import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newtext=text.toUpperCase(text);
        setText(newtext)
        props.showAlert("Converted to UpperCase ", "success")
    }
    const handleLowClick=()=>{
         
        let newtext=text.toLowerCase(text);
        setText(newtext);
        props.showAlert("Converted to LowerCase ", "success")
    }
    const copy=()=>{
         
        var t=document.getElementById("myBox");
        t.select();
        navigator.clipboard.writeText(t.value);
        props.showAlert("Copied to Keyboard ", "success")
       
    }
    const removespace=()=>{
         
        let newtext=text.split(/[ ]+/);
       setText(newtext.join(" "));
       props.showAlert("Spaces have been removed", "success")
    }
    const handleOnChange=(event)=>{
        console.log("Handleon was clicked");
        setText(event.target.value)
    }
    const clear=()=>{
       let k=""
       setText(k) 
       props.showAlert("Text has been cleared", "success") 
        
    }
    const coun=(str)=>{
        
            let count = 0; 
            let check = false; 
          
            for (let i = 0; i < str.length; i++) { 
                if (str[i] !== ' ' && !check) { 
                    count++; 
                    check = true; 
                } else if (str[i] === ' ') { 
                    check = false; 
                } 
            } 
          
            return count; 
        
    }
    const [text, setText] = useState('Enter Text Here2');
    return (
        <>
    <div className='container'style={{color:props.mode==="light"?"black":"white"}}>
        <h1 >{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="light"?"White":"black"}} ></textarea>
</div>
<button className='btn btn-outline-primary mx-3' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-outline-primary mx-3' onClick={handleLowClick}>Convert to Lowercase</button>
<button className='btn btn-outline-primary mx-3' onClick={clear}>Clear All</button>
<button className='btn btn-outline-primary mx-3' onClick={copy}>Copy</button>
<button className='btn btn-outline-primary mx-3' onClick={removespace}>Remove ExtraSpace</button>


</div>
<div className="container my-4" style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="light"?"White":"black"}}>
    <h2>Text Summary</h2>
    <p>{coun(text)} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes Read</p> 
    <h2>Preview</h2>
    <p>{text}</p> </div></>
  )
}
