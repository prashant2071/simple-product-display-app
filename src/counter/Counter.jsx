import { useState } from 'react';
import { Button, Card } from 'react-bootstrap'

function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrement =() =>{
    setCount(prevState=>prevState+1)
  }
  const handledDecrement =() =>{
    setCount(prevState=>prevState-1)
  }
  const handledReset =() =>{
    setCount(0)
  }
  const handleInputChange= (e) =>{
    const {value} = e.target;
    console.log("the value",value);
    setCount(prev=>prev+Number(value))
  }
  return (
    <div className='text-center'>
    
    counterCounter
    <Card className='d-flex justify-content-center'>
      <Card.Title>{count}</Card.Title>
      <input type='text' className='form-control' onChange={handleInputChange}/>
      <Card.Body></Card.Body>
      <Card.Footer>
        <Button className='btn btn-primary' onClick={handleIncrement} >Increment</Button>
        <Button className='btn btn-danger' onClick={handledReset}>reset</Button>
        <Button className='btn btn-warning' onClick={handledDecrement}>Decrement</Button>
      </Card.Footer>
    </Card>
    </div>
  )
}

export default Counter;
