import { useState } from 'react'
import './App.css'
import styled from "styled-components";
import {Data} from "./Data"
function App() {

 const [data, setData] = useState(Data)

 const [res, setRes] = useState(0)

 const Circle = styled.div`
  border: 1px solid black;
  border-radius: 55px;
  height: 100px;
  width: 100px;
  margin-bottom: 30px;
  `

  const Button = (id) => {
    const handleChange= data.map((e) => {
      return e.id == id ? { ...e, status: !e.status } : e
    })
    setData(handleChange)

  }
return (
    
    <div className='main'>

    <div className='second'>
        {data.map((el) => {
          return el.status ? 
          <Circle key={el.id} style={{backgroundColor:`${el.color}` }} onClick={() =>
             Button(el.id)}></Circle>
          : null
        })}
        
      </div>

      <div >
       {data.map((el) => {
          return el.status ? null :
          <Circle key={el.id} style={{backgroundColor:`${el.color}` }} ></Circle>
        })}
      </div>
      
      <div >
        <input type="number" placeholder='Enter number' onInput={(e) =>
           setRes(e.target.value)} />
        <button onClick={() => Button(res)}>Shoot</button>
      </div>
    </div>
  )
}

export default App
