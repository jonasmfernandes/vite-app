import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Tweet from './Tweet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App  />
    {/* <Tweet text="oi"/>
    <Tweet text="oi3"/>
    <Tweet text="oi2"/>    */}
  </React.StrictMode>
)
