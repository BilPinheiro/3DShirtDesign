import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';


const ColorPickcer = () => {
  const snap = useSnapshot(state);
  
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
      color={snap.color}
      presetColors={[
        '#A7C5C5', '#DEE0D5', '#E2AC48', '#B96028', '#983C2D', '#3A356E',
        '#4F81F7', '#00F4CC ', '#EFB7FF', '#F5F549', '#ff8a64', '#353934'
      ]}
      disableAlpha
      onChange={(color) => state.color = color.hex} />
    </div>
  )
}

export default ColorPickcer