import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import React, { useEffect } from 'react';

const alanKey = '5d0f5e5ea1e845e82b7a192a16896f2c2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  useEffect(() =>{
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newsHeadlines'){
          console.log(articles);
        }
      }
    })
  },[]);

  return (
    <div className="App">
     <h1>Hi AI</h1>
    </div>
  );
}

export default App;
