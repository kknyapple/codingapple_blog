import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4>
              <h4
                onClick={() => {
                  {
                    //modal === true ? setModal(false) : setModal(true);
                    setModal(!modal);
                  }
                }}
              >
                {title[i]}
              </h4>
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                👍
              </span>
              {like[i]}
              <p>5월 18일 발행</p>
            </h4>
            <hr></hr>
          </div>
        );
      })}
      {modal === true ? (
        <Modal title={title} setTitle={setTitle}></Modal>
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <>
      <div className="modal">
        <h4>{props.title[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            let copy = [...props.title];
            copy[0] = "여자코트 추천";
            props.setTitle(copy);
          }}
        >
          수정
        </button>
      </div>
    </>
  );
};

export default App;
