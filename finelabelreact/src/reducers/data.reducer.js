const initialState = {
    data: [
      { id: 1, url:'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG', label:['video','tutorial','react','redux'] },
      { id: 2, url:'https://www.w3schools.com/react/', label:['text','tutorial','react','redux'] },
      { id: 3, url:'https://www.livescore.com/', label:['text','football','score'] },
      { id: 4, url:'https://medium.com/nectec/deep-reinforcement-learning-b0f4ade20024', label:['text','tutorial','reinforcement learning','ai','article'] },
      { id: 5, url:'https://medium.com/', label:['article'] }
    ],
    keyword:'tutorial'
  }
  export default (state = initialState, {type,payload}) => {  
      switch(type){
          case 'SET_KEYWORD':
              return {
                  ...state,
                  keyword:payload
              }
              case 'SET_DATA':
                  return{...state,data:payload}
            default: return state
      }
  }