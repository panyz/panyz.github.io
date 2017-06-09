import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Content from './Content'
// import CommentApp from './CommentApp';
// import Excel from './Excel'
// import './Excel.css';

// var headers = ["标题1","标题2","标题3","标题4","标题5"];

// var data = [
//   ["行1-1","行1-2","行1-3","行1-4","行1-5"],
//   ["行2-1","行2-2","行2-3","行2-4","行2-5"],
//   ["行3-1","行3-2","行3-3","行3-4","行3-5"],
//   ["行4-1","行4-2","行4-3","行4-4","行4-5"],
//   ["行5-1","行5-2","行5-3","行5-4","行5-5"],
// ]

function createStore(reducer){
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = ()=>state
  const dispatch = (action) => {
    state = reducer(state,action)
    listeners.forEach((listener) => listener())
  }
  dispatch({})
  return {getState,dispatch,subscribe}
}

const themeReducer = (state,action) => {
  if(!state) return{
    themeColor : 'red'
  }
  switch(action.type){
    case 'CHAGE_COLOR':
      return { ...state,themeColor:action.themeColor}
    default:
      return state
  }
}

const store = createStore(themeReducer)

class Index extends Component{
  static childContextTypes = {
    store : PropTypes.object
  }

  getChildContext(){
    return{
      store
    }
  }

  render(){
    return(
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

ReactDOM.render(
  // <Excel table={{headers,data}} />,
  <Index/>,
  document.getElementById('root')
);
