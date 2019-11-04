import React from 'react'

const ThingDelBtn = ({id,deleteThing}) => {

    return(
        <div>
            <button style={{float: 'right',color:'red'}} onClick={ (e)=>{ deleteThing(id) }} >X</button>
        </div>
    );
}
export default ThingDelBtn