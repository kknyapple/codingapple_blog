import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            {
              //modal === true ? setModal(false) : setModal(true);
              setModal(!modal);
            }
          }}
        >
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>5월 18일 발행</p>
        <hr></hr>
        <h4>{title[1]}</h4>
        <p>5월 18일 발행</p>
        <hr></hr>
        <h4>{title[2]}</h4>
        <p>5월 18일 발행</p>
        <hr></hr>
      </div>
      {modal == true ? <Modal></Modal> : null}
    </div>
  );
}

const Modal = () => {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
};

export default App;
