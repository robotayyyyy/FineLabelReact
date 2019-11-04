import React,{ useState,useEffect  } from 'react'

const ThingUrl = ({id,urlText,editThingUrl}) => {
    const [editMode,toggleEdit] = useState(false); //react hook
    let textBoxRef = null;//for recieve focused element

    useEffect(() => {
      if(editMode && textBoxRef){
        textBoxRef.focus()}//change focus
    });
    const handleClick = () => {
      toggleEdit(!editMode);
    }
    const handleKeyDown =(e)=>{
      //console.log(e.key);
      if(e.key==='Enter'){handleClick()}
    }
    const hendleBlur =(e)=>{
      handleClick()
    }
    let editModeUI = (
      <div  >
        <span>URL: <input type='text' value={urlText} ref={(e)=>{ textBoxRef = e }} onBlur={hendleBlur} onChange={ (e)=>{ editThingUrl(id, e.target.value) }}  onKeyDown={handleKeyDown}   /></span>
        <button onClick={ handleClick } >Done</button>
      </div>
    );
    let baseUI = (
      <div>
        <span>URL: <a href={urlText}>{ urlText }</a></span>
        <button onClick={ handleClick } >Edit</button>
      </div>
    );

    return(
        <div>
            { editMode ?  editModeUI : baseUI} 
        </div>
    );
}
export default ThingUrl