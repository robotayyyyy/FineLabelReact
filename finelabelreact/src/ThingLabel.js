import React,{ useState,useEffect  } from 'react'

const ThingLabel = ({id,labels,editThingLabel,changeKeyword}) => {
    const [editMode,toggleEdit] = useState(false); //react hook
    let textBoxRef = null;//for recieve focused element
    useEffect(() => {
        if(editMode && textBoxRef){
          textBoxRef.focus()}//change focus
      });
    const handleClick = () => {
        console.log(editMode);
        toggleEdit(!editMode);
    }
    const hendleBlur =(e)=>{
        editThingLabel(id,'add',e.target.value);
        handleClick();
    }
    const handleKeyDown =(e)=>{
        //console.log(e.key);
        if(e.key==='Enter'){hendleBlur(e)}
      }

    let subId = 0;

    const labelList = labels.map( label=>{
        return(
            <span key={subId++}>
                <button onClick={()=>changeKeyword(label)}>{label}</button>
                <button  onClick={(e)=>{editThingLabel(id,'remove',label);}} >x</button>
            </span>
        )
    });
    const addLabel = <input type='text' ref={(e)=>{ textBoxRef = e }} onBlur={(e)=>{hendleBlur(e)}} onKeyDown={(e)=>handleKeyDown(e)}/>;;
    return(
        <div>
            {labelList}
            { editMode ?  addLabel:null }
            <button onClick={ handleClick } >+</button>
        </div>
    );
}
export default ThingLabel