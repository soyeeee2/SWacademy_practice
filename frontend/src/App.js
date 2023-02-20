import logo from './logo.svg';
import './App.css';
import {useEffect, useState, useRef} from "react";
import Board from './components/board';
import Counter from './components/counter'

function App() {
  //! Board
  // const [visible, setVisible] = useState(false);

  // const articles = [{
  //   id: 11111,
  //   title: '안뇽',
  //   author: '쏘이'
  // },
  // {
  //   id: 2222,
  //   title: '하이',
  //   author: '용용'
  // },
  // {
  //   id: 333333,
  //   title: 'ㅎㅅㅎ',
  //   author: '체크'
  // }]

  //! Counter
  // const [totalCount, setTotalCount] = useState(0);

  // ! UseEffect
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log('count up')
  // }, [count])

  // useEffect(() => {
  //   console.log('Component Mounted')
  //   const handleScroll = () => {
  //     console.log(window.scrollY)
  //   }

  //   document.addEventListener("scroll", handleScroll)
  //   return () => document.removeEventListener("scroll", handleScroll)
  // }, [])

  // ! UseRef
  // const inputRef = useRef()

  return (
    <>
    {/* Board */}
      {/* <button style={{padding:"30px"}} onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && (<h1>논리곱 연산자 통해 쉽게 JSX 렌더링 여부 결정 가능</h1>)}
      {visible ? (<Board articles={articles} />) : <h2>게시판 보려면 Toggle 클릭!</h2> } */}

    {/* Counter */}
    {/* TotalCount: {totalCount}
	  <Counter 
      onIncrease={(count)=> {setTotalCount(totalCount + 1)}}
      onDecrease={(count)=> {setTotalCount(totalCount - 1)}}
    /> */}

    {/* UseEffect */}
    {/* <h3>You clicked {count} times!</h3>
    <button onClick={()=> setCount(count + 1)}>+</button>
    <button onClick={()=> setCount(0)}>Reset</button>

    <div style={{height:"300vh"}}></div> */}

    {/* UseRef */}
    {/* <input ref={inputRef} />
    <button onClick={() => inputRef.current.focus()}>Focus</button> */}
    
    </>
  )					
}

export default App;
