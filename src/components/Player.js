import React from 'react'
import PlayerControl from './PlayerControl'
import PlayerDetails from './PlayerDetails'

const Player = (props) => {
  return (
    <div className='c-player'>
      <audio></audio>
      <h4>Playing Now</h4>
      <PlayerDetails song={props.song} />
      <PlayerControl />
      <p><strong>Next up:</strong> {props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}

export default Player