import React, { useState } from 'react'
import Tweet from './Tweet'
import './Body.css'

export default function App() {


  const [tweets, setTweets] = useState<string[]>(
    [
      'Tweet 1',
      'Tweet 2',
      'Tweet 3',
      'Tweet 4'
    ])

    function createTweet(){
      for(let i = 0; i < 20; i++){
        setTweets(
          [
            ...tweets, 'Tweet 5'
          ])
      }
      
    }
  return (

    
      <div>
        {tweets.map(tweet => {
          return <Tweet text={tweet}/>
        })}

        <button onClick={createTweet}
        >Adicionar tweet</button>
      </div>
  )
}
