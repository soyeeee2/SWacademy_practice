import logo from './logo.svg';
import './App.css';
import {useState} from "react";
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
  const [totalCount, setTotalCount] = useState(0);

  return (
    <>
    {/* Board */}
      {/* <button style={{padding:"30px"}} onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && (<h1>논리곱 연산자 통해 쉽게 JSX 렌더링 여부 결정 가능</h1>)}
      {visible ? (<Board articles={articles} />) : <h2>게시판 보려면 Toggle 클릭!</h2> } */}

    {/* Counter */}
    TotalCount: {totalCount}
	  <Counter 
      onIncrease={(count)=> {setTotalCount(totalCount + 1)}}
      onDecrease={(count)=> {setTotalCount(totalCount - 1)}}
    />
    </>
  )					
}

export default App;
