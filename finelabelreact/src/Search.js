import React from 'react'

const Search = ({keyword,changeKeyword})=> {

  //const [displayedKW,changeKW] = useState(keyword); //react hook
 /* const handleChange = (e) => {
    //console.log(e.target.value);
    //changeKW(e.target.value);
    changeKeyword(e.target.value);
  }*/

  return(
    <div>
      <input value={keyword} type='text' onChange={changeKeyword}/>
      <input type='button' value='clear' onClick={()=>{ changeKeyword('')} }/>
    </div>
  )

}

export default Search