import { useState } from 'react'
import Product from './product'


function Home() {

  // Program 1
  const [count, setCount] = useState(0)

  function setCounter () {
    setCount(count + 1);
  }

  // Program 2
  const [color, setColor] = useState('green');

  function toggleText () {
    if(color === 'green'){
      setColor('yellow')
    } else if (color === 'yellow') {
      setColor('green')
    }
  }

  return (
    <div>
      <div className='testing-box'>
        <h2>Set counter</h2>
        <p>{count}</p>
        <button onClick={setCounter}>Counter</button>
      </div>

      <div className='testing-box'>
        <h2>Change text color</h2>
        <p style={{backgroundColor: color}} className='para-prob-2'>This text should change it's background color</p>
        <button onClick={toggleText}>Toggle</button>
      </div>

      <div className='testing-box'>
        <h2>Go to next route</h2>
      </div>

      {/* product card here */}
      <Product/>
        
    </div>
  )
}


export default Home
