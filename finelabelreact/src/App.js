import React, { Component } from 'react';
import Things from './Things'
import AddThing from './AddThing'
import Search from './Search'

class App extends Component {
  state = {
    data: [
      { id: 1, url:'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG', label:['video','tutorial','react','redux'] },
      { id: 2, url:'https://www.w3schools.com/react/', label:['text','tutorial','react','redux'] },
      { id: 3, url:'https://www.livescore.com/', label:['text','football','score'] },
      { id: 4, url:'https://medium.com/nectec/deep-reinforcement-learning-b0f4ade20024', label:['text','tutorial','reinforcement learning','ai','article'] },
      { id: 5, url:'https://medium.com/', label:['article'] }
    ],
    keyword:'tutorial'
  }
  componentDidMount(){
    console.log('mounted');
    this.filterData(this.state.keyword);
    //this.setState({diaplayStatus: filteredResult},()=>{console.log(this.state.diaplayStatus);})//setState({key;value},[callback function])
  }
  filterData = (keyword)=>{
    const diaplayStatus='diaplayStatus';
    let n = this.state.data.length;
    let filteredResult = new Array(n).fill(true);
    let newthings = [];
    for(let i=0;i<n;i++){ //add filteredResult to new column(namely 'diaplayStatus')
      var newrow = this.state.data[i];
      if (!newrow.label.includes(keyword) && keyword !== ''){filteredResult[i] = false;}
      newrow[diaplayStatus]=filteredResult[i];
      newthings.push(newrow);
    }
    this.setState({ data:newthings },()=>{ console.log(this.state.data); });
  }
  addThing = (thing) => {
    thing.id = Math.random();
    console.log(thing);
    let things = [...this.state.data, thing];
    this.setState({
      data: things
    });
    this.changeKeyword('');
  }
  deleteThing = (id) =>{
    //console.log(id);
    const newthings = this.state.data.filter(
      record => {
        return record.id!==id
      }
    );
    //console.log(newthings);
    this.setState({  data:newthings  });
  }
  editThingUrl = (id,newUrl) =>{
    //console.log(id, newUrl);
    let newthings = this.state.data.map(
      record => {
        if( record.id===id){ record.url = newUrl; }
        return(record)
      }
    );
    this.setState({  data:newthings  });
  }
  
  editThingLabel = (id, action, val) =>{
    val = val.toLowerCase();
    console.log(id, action, val);
    if(action === 'add'){
      let newLabel = this.state.data.map(
        record => {
          if( record.id===id){ 
            if(!record.label.includes(val)){ record.label.push(val); }
          }
          return(record)
        }
      );
      this.setState({  data:newLabel  });
    }
    else{
      let newLabel = this.state.data.map(
        record => {
          if( record.id===id){ 
            record.label = record.label.filter((temp)=>{return temp !== val});
          }
          return(record)
        }
      );
      this.setState({  data:newLabel  });
    }
  }
  changeKeyword = (keyword) => {
    //console.log(keyword);
    this.setState({keyword:keyword}, ()=>{this.filterData(keyword)} );
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app(Fine Label)</h1>
        <Search keyword={this.state.keyword} changeKeyword={this.changeKeyword} />
        <Things things={this.state.data} deleteThing={this.deleteThing} editThingUrl={this.editThingUrl} editThingLabel={this.editThingLabel} changeKeyword={this.changeKeyword} />
        <AddThing addThing={this.addThing}/>
      </div>
    );
  }
}//how to send updated keyword to Search?

export default App;