import React, { useState } from 'react'

export default function About(props) {
 const [myStyle, setmyStyle]=useState({
    color : 'black',
    backgroundColor : 'white' 
})
/*const [btntext, setbtntext]=useState("Enable Darkmode")
const togglestyle=()=>{
    if(myStyle.color ==='white')
    {
        setmyStyle({ color : 'black',
    backgroundColor : 'white'

    })
    setbtntext("Enable Dark mode")

    }else{
        setmyStyle({ color : 'white',
        backgroundColor : 'black',
        border:'1px solid white'
        })
        setbtntext("Enable Light mode")   
    }
}
*/

return (
<div className='container' style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="light"?"White":"black"}}> 
    <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample">
<div className="accordion-item" style={{color:props.mode==="light"?"black":"white",backgroundColor:props.mode==="light"?"White":"black"}}>
   { /*<h2 className="accordion-header" id="headingOne" >
    <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
    </button>
</h2>*/}
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body" >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>

    
</div>

{/*<div className="container"><button type="button"  onClick={togglestyle}className='btn btn-dark my-2'  >{btntext}</button></div>*/}

</div>
)
}
