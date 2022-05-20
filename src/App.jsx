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
  const [mTitle, setMTitle] = useState(0);
  const [blogName, setBlogName] = useState("");

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <div>React blog</div>
        </div>
        <input
          onChange={(e) => {
            setBlogName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let copy = [...title];
            let likeCopy = [...like];
            copy.unshift(blogName);
            likeCopy.unshift(0);
            setLike(likeCopy);
            setTitle(copy);
          }}
        >
          {` 글발행`}
        </button>
        {title.map(function (a, i) {
          return (
            <div className="list">
              <h4>
                <h4
                  onClick={() => {
                    {
                      setModal(!modal);
                      setMTitle(i);
                    }
                  }}
                >
                  {title[i]}
                  <span
                    onClick={(e) => {
                      let copy = [...like];
                      copy[i] = copy[i] + 1;
                      setLike(copy);
                      e.stopPropagation();
                    }}
                  >
                    {` 👍 `}
                  </span>
                  {like[i]}
                </h4>
                <p>5월 18일 발행</p>
                <button
                  onClick={() => {
                    let copy = [...title];
                    let likeCopy = [...like];
                    copy.splice(i, 1);
                    likeCopy.splice(i, 1);
                    setTitle(copy);
                    setLike(likeCopy);
                  }}
                >
                  삭제
                </button>
              </h4>
              <hr></hr>
            </div>
          );
        })}

        {modal === true ? (
          <Modal title={title} setTitle={setTitle} mTitle={mTitle}></Modal>
        ) : null}
      </div>
    </>
  );
}

const Modal = (props) => {
  return (
    <>
      <div className="modal">
        <h4>{props.title[props.mTitle]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
};

export default App;
