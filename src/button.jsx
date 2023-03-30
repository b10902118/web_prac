import { useState } from 'react'
export default function MyButton(props){
  const [color, setColor] = useState('blue');
  const clickHandler = () => {
    setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue')
  } 
  return (
    <button onClick={clickHandler} style={{backgroundColor: color}}>{props.children}</button>
  );
}