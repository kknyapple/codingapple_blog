import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <div className="list">
        <h4>
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
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자코트 추천";
          setTitle(copy);
        }}
      >
        수정
      </button>
    </div>
  );
}

export default App;
