import React from 'react'
import Counter from './Counter';
import MyFooter from './MyFooter';
//import './App.css';

import MyHeader from './MyHeader';


function App() {
  let name = 'ㅇㅅㅇ'

  const style = {
    App : {
      backgroundColor :'cyan',
    },
    h2: {
      color :'red',
    },
    bold_text : {
      color :'green',
    },
  };

  const func = () => {
    return "func";
  }

  const num = 10;

  return (
    <div className='App' style={style.App}>
      <MyHeader/>
      <h2 style={style.h2}>ㅎㅇㅎㅇㅎㅇ {func()}</h2>
      <b id ="bold_text" style={style.bold_text}>
        {num}은(는) : {num % 2 === 0 ? "짝수":"홀수"}
      </b>
      <Counter/>
      <MyFooter/>
    </div>  
  );
}

export default App;
