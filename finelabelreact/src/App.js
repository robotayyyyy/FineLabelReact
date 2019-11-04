import React, { Component } from 'react';
import Things from './Things'
import AddThing from './AddThing'
import Search from './Search'
import {connect} from 'react-redux'
import {setKeyword,setData} from './actions/data.action'

class App extends Component {
  
  componentDidMount(){
    console.log('mounted');
    this.filterData(this.props.data.keyword);
    //this.setState({diaplayStatus: filteredResult},()=>{console.log(this.state.diaplayStatus);})//setState({key;value},[callback function])
  }
  filterData = (keyword)=>{
    const diaplayStatus='diaplayStatus';
    let n = this.props.data.data.length;
    let filteredResult = new Array(n).fill(true);
    let newthings = [];
    for(let i=0;i<n;i++){ //add filteredResult to new column(namely 'diaplayStatus')
      var newrow = this.props.data.data[i];
      if (!newrow.label.includes(keyword) && keyword !== ''){filteredResult[i] = false;}
      newrow[diaplayStatus]=filteredResult[i];
      newthings.push(newrow);
    }
    this.props.setData(newthings);
  }
  addThing = (thing) => {
    thing.id = Math.random();
    console.log(thing);
    let things = [...this.props.data.data, thing];
    this.props.setData(things);
    this.changeKeyword('');
  }
  deleteThing = (id) =>{
    //console.log(id);
    const newthings = this.props.data.data.filter(
      record => {
        return record.id!==id
      }
    );
    //console.log(newthings);
    this.props.setData(newthings);
  }
  editThingUrl = (id,newUrl) =>{
    //console.log(id, newUrl);
    let newthings = this.props.data.data.map(
      record => {
        if( record.id===id){ record.url = newUrl; }
        return(record)
      }
    );
    this.props.setData(newthings);
  }
  
  editThingLabel = (id, action, val) =>{
    val = val.toLowerCase();
    console.log(id, action, val);
    if(action === 'add'){
      let newLabel = this.props.data.data.map(
        record => {
          if( record.id===id){ 
            if(!record.label.includes(val)){ record.label.push(val); }
          }
          return(record)
        }
      );
      this.props.setData(newLabel);
    }
    else{
      let newLabel = this.props.data.data.map(
        record => {
          if( record.id===id){ 
            record.label = record.label.filter((temp)=>{return temp !== val});
          }
          return(record)
        }
      );
      this.props.setData(newLabel);
    }
  }
  changeKeyword = async keyword => {
    //console.log(keyword);
    await this.props.setKeyword(keyword)
    this.filterData(keyword);
  }
  render() {
    if(!this.props.data) return null
    return (
      <div className="App">
        <h1>My first React app(Fine Label)</h1>
        <Search keyword={this.props.data.keyword} changeKeyword={this.changeKeyword} />
        <Things deleteThing={this.deleteThing} editThingUrl={this.editThingUrl} editThingLabel={this.editThingLabel} changeKeyword={this.changeKeyword} />
        <AddThing addThing={this.addThing}/>
      </div>
    );
  }
}//how to send updated keyword to Search?
const mapDispatchToProps = dispatch => ({
  setKeyword:keyword=>{
    dispatch(setKeyword(keyword))
    return Promise.resolve()
  },
  setData:data=>dispatch(setData(data))
})
const mapStateToProps = state => ({
  data:state.data
})
export default connect(mapStateToProps,mapDispatchToProps)(App);