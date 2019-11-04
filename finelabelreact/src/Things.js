import React from 'react'
import ThingUrl from './ThingUrl'
import ThingLabel from './ThingLabel'
import ThingDelBtn from './ThingDelBtn.js'
import {connect} from 'react-redux'


const Things = ({things,deleteThing,editThingUrl,editThingLabel,changeKeyword}) => {
  
  const thingList = things.map(thing => { //for each thing in things
    //console.log(thing.label)
    if(thing.diaplayStatus){
      return(
        <div className="thing" key={thing.id} >
          < ThingUrl id={thing.id} urlText={thing.url} editThingUrl={editThingUrl}/>
          < ThingLabel  id={thing.id} labels={[...thing.label]} editThingLabel={editThingLabel} changeKeyword={changeKeyword} />
          < ThingDelBtn id={thing.id} deleteThing={deleteThing} />
        </div>
      )
    }else{
      return(null);
    }
  });
  
  return (
    <div className="thing-list">
      { thingList }
    </div>
  );

}

const mapStateToProps = state => ({
  things:state.data.data
})

export default connect(mapStateToProps,null)(Things)